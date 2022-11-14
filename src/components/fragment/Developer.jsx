import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
// import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    {/* <img src={AvatarImage} alt="Profile"/> */}
                    <div className={"Card-details"}>
                        <h3>Jashan Preet Singh</h3>
                        <h3>Sagar Kattel</h3>
                        <h3>Prakyat Pandit</h3>
                        <h3>Roshan Karki</h3>
                        <p>We together are Full Stack developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>We are  Computer Science and Engineering Student at Chandigarh University University, Punjab.</p>
                    <p>We are Graduating in 2024 and looking for a responsible position to gain practical knowledge</p>
                    <p>We are full-stack web developer and a Competitive coder.</p>
                    <p>We love designing fully responsive websites.</p>
                    <p>We have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/sagar.kattel.58"} title={"sagar.kattel.58"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/"}  title={""}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/"}  title={""}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://google.com"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;