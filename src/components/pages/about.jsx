import React from "react";
import {about} from "../data/dummydata";
import photo from "../data/image/aymen.jpeg";
import Heading from "./heading";

const About=()=>{
    return(
        <>
        <section className="about" >
            {about.map((val,il)=>
            <div key={il} className="port">
                <img src={photo}></img>
                <div>
                    <Heading title='About Me'  className="heading"/>
                    <p>{val.desc}</p>
                    <br></br>
                    <p>{val.desc1}</p>
                    <br></br>
                    <div className="buttons">
                        <button className="button1">Download CV</button>
                        <button className="button2">Download CV</button>
                    </div>
                    
                </div>

            </div>
           
            )}

        </section>
        </>
    )
}
export default About