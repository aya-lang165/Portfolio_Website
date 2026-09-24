import React from "react";
import {project} from "../data/dummydata";
import CountUpModule from "react-countup";



const CountUp = CountUpModule.default ?? CountUpModule;

const Counter=()=>{
    return(
        <section className="counter">
            <div className="statics">
                {project.map((val,k)=>(
                    <div className="static"  key={k} data-aos="flip-left">
                        <i>{val.icon}</i>
                        <h2><CountUp duration={60} end={val.num}></CountUp></h2>
                        <p>{val.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Counter