import React from "react";
import { blog } from "../data/dummydata";

const Blog=()=>{
    return(
        <section className="Blog">
            <div className="carre">
                <h1>Blog</h1>
                <div className="carre1">
                        {blog.map((val) => (
                            <div key={val.id} className="k2">
                                <div className="manga">
                                    <img src={val.cover} className="imgTest1"></img>
                                </div>
                                <div className="paragraphe1">
                                    <h3>{val.title}</h3>
                                </div>
                                <h4>{val.author}</h4>
                                <p>{val.desc}</p>
                            </div>
                        ))}                
                </div>

            </div>
        </section>
    )
}
export default Blog;