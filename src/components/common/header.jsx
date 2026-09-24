import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../data/image/logo.svg";
import { navlink } from "../data/dummydata";
import { Menu } from "@mui/icons-material";

export const Header=()=>{
    const [responsive,setResponsive]=useState(false)
    return (
        <>
        <header>
            <div className="first">
                <img src={logo} alt="logo" className="logo"></img>
                <div className={responsive ? "hideMenu" : "tag"}>{navlink.map((link,i)=>(
                    <Link to={link.url} key={i} className="elements">{link.text}</Link> 
                ))}
                </div>
                <button onClick={()=>setResponsive(!responsive)} className="toggle"> <Menu></Menu></button>
            </div>
        </header>
        </>
    )
}
export default Header