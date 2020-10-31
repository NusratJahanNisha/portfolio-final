import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const handleHome = () => {
        history.push(`/home`);
    }

    const handleProjects = () => {
        history.push(`/allProjects`);
    }

    const handleBlogs = () => {
        history.push("/blogs");
    }

    const handleAboutMe = () => {
        history.push(`/aboutMe`);
    }
    const handleContactMe = () => {
        history.push(`/form`);
    }
    return (
        <div>
            <nav style={{ backgroundColor: "black" }} class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#" style={{ color: "white" }} >Nusrat Jahan Nisha</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a style={{ color: "white", marginLeft: "7px", fontSize: "20px" }} onClick={handleHome} class="nav-link" href="" >Home</a>
                        </li>
                        <li class="nav-item active">
                            <a style={{ color: "white", marginLeft: "7px", fontSize: "20px" }} onClick={handleProjects} class="nav-link" href="" >Projects </a>
                        </li>
                        <li class="nav-item active">
                            <a style={{ color: "white", marginLeft: "7px", fontSize: "20px" }} onClick={handleBlogs} class="nav-link" href="" >Blogs </a>
                        </li>
                        <li class="nav-item active">
                            <a style={{ color: "white", marginLeft: "7px", fontSize: "20px" }} onClick={handleAboutMe} class="nav-link" href="" >About me </a>
                        </li>
                        <li class="nav-item active">
                            <a style={{ color: "white", marginLeft: "7px", fontSize: "20px" }} onClick={handleContactMe} class="nav-link" href="" >Contact me </a>
                        </li>
                        <li class="nav-item active">
                            <a target="_blank" href="https://drive.google.com/file/d/1pq8_e7VCJ3FbWHHI87z-pkT6-nJiBVwD/view">
                                <button style={{ marginLeft: "7px", fontSize: "18px" }} type="button" class="btn btn-outline-info">Resume</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;