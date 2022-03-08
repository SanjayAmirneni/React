import React, {useState,useEffect} from "react";
import axios from "./Request/axios";
import "./Banner.css"




function Banner(props){

    const img_url="https://image.tmdb.org/t/p/original/"
    const[poster,setPoster] = useState([]);

    useEffect(()=>{
        async function getPoster(){
            const response = axios.get(props.request)
            // console.log(response)
            let n = Math.floor(Math.random()*((await response).data.results.length)-1)
            // console.log(n)
            setPoster((await response).data.results[n])
            // console.log((await response).data.results[n])
        }
        getPoster();
    },[])

    function truncate(data){
        return data?data.substr(0,100)+"...":"No data"
    }

    return(
   
        <header className="banner_container"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(${img_url}${poster.backdrop_path||poster.poster_path})`,
            backgroundPosition:"center center",
            objectFit:"contain",
          
        }}>
            <div className="poster_data">
                <div className="poster_info">
            <h1 className="poster_name">{poster.name}</h1>
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
            <p className="poster_overview">{truncate(poster.overview)}</p>
            </div>
            <div className="banner_fadeBottom"></div>
            </div>


            
        </header>
        

    )
}

export default Banner;