import React,{useEffect,useState} from "react";
import netflix from "../images/netflix.png";
import avatar from "../images/avatar.png"
import "./Nav.css";


function Nav(){
  const[show,setShow]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        setShow(true);
      }else{
        setShow(false)
      }
    });
    return () =>{
      window.removeEventListener("scroll");
    };
  },[])
  return(  <div className={`nav_container ${show && "nav_black"}`}>
        <img className="logo" src={netflix} alt="netflix"></img>
        <img className="avatar" src={avatar} alt="avatar"></img>
    </div>
    )
}

export default Nav;