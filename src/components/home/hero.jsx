import React from "react";
import {home} from "../data/dummydata";
import Typewriter from "typewriter-effect";
const Hero=()=>{
    return(
        <section className="hero">
            {home.map((val,k)=>(
                <div className="parag" key={k}>
                    <h3>{val.text}</h3>
                    <h1>
                        <Typewriter  className="identif"
                        options={{strings : ['ATTABI AYMEN','WEB DESIGNER','UI / UX DESIGNER'],
                        autoStart:true, loop:true}} />
                    </h1>
                    <p>{val.desc}</p>
                </div>
            ))}
        </section>
    )
}

export default Hero