import React from "react";
import { social } from "../data/dummydata";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="#"><i><Facebook /></i></a>
                <a href="#"><i><Twitter /></i></a>
                <a href="#"><i><Instagram /></i></a>
                <a href="#"><i><YouTube /></i></a>
            </div>
        </footer>
    )
}
export default Footer;