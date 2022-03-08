import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React,{useEffect,useState} from "react";
import axios from "./Request/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"


const img_url="https://image.tmdb.org/t/p/original/"


function Row(props){


    const[movies,setMovies] = useState([]);
    const[trailerUrl,setTrailerUrl] = useState('');

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };

    useEffect(()=>{
       async function fetchData(){
           const request = axios.get(props.request)
           setMovies((await request).data.results);
           return request;
       }
       fetchData();
        },[props.request]);

    const handleClick=(ele)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
        //null,{tmdbId:ele.id}   ele?.name ||""
            movieTrailer( ele?.name ||"").then((url)=>{
                console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams)
                setTrailerUrl(urlParams.get("v"));
                console.log(urlParams.get("v"));
            }
            ).catch((error)=>{
                console.log(error);
            });
        }
    };
    return(
    <div className="row_container">
        <h2 className="title">{props.title}</h2>
        <div  className="row">
            {movies.map((ele,index)=>{
                return <img key={ele.id} onClick={()=>handleClick(ele)}  className={`img_row ${props.large?"poster":""}`} src={`${img_url}${props.large?ele.poster_path:ele.backdrop_path}`} alt={ele.name} />
            })}
        </div>
      {trailerUrl &&  <YouTube className="youtube" videoId={trailerUrl} opts={opts}/>}
    </div>
    );
}
export default Row;

