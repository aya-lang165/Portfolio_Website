import React from "react";
import { contact } from "../data/dummydata";



const Contact = () => {
    return (
        <section className="Section-Contact">
            <div className="contact">
                <h1>Keep In Touch</h1>
                <div className="blocs">
                    <div className="inputs">
                        <div className="input">
                            <input type="text" className="username" placeholder="Name"></input>
                            <input type="email" required className="email" placeholder="email"></input>
                        </div>
                        <input type="text" className="subject" placeholder="Subject"></input>
                        <textarea className="erea"  rows={5} ></textarea>
                        <button>Submit</button>
                    </div>
                    <div>
                        {contact.map((Val, k) => (
                            <div className="informations" key={k}>
                                <i>{Val.icon}</i>
                                <p>{Val.text1}</p>
                                <p>{Val.text2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;