import React, { useState } from "react";
import { portfolio } from "../data/dummydata";



const allcategories=["all",...new Set(portfolio.map((iterm)=>iterm.category))]



const Portfolio=()=>{
    const [category,setCategory]=useState(allcategories);
    const [List,setList]=useState(portfolio);

    const filterIterm=(category)=>{
        const newIterm=portfolio.filter((iterm)=>category===iterm.category);
        setList(newIterm)
        if(category==="all"){
            setList(portfolio)
        }
    }
    return(
        <article>
            <div className="package">
                <h1>Portfolio</h1>
                <div className="btns">
                    {category.map((category,k)=>(
                        <button onClick={()=>filterIterm(category)} key={k} className="primarybtn">{category}</button>

                    ))}
                </div>
                <div className="cadres">
                    {List.map((val,id)=>
                    <div className="cadre" key={id}>
                        <div className="pop">
                            <img src={val.cover} alt="azer" className="shoes"></img>
                        </div>
                        <div className="desc">
                            <h3>{val.title}</h3>
                            <h4>{val.name}</h4>
                            <h5>{val.category}</h5>
                        </div> 
                    </div>
                    )}
                </div>
            </div>
        </article>
    )
}
export default Portfolio