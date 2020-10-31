import React from 'react';
import { useHistory } from 'react-router-dom';
import RecentProjects from '../RecentProjects/RecentProjects';

const Home = () => {
    const history = useHistory();
    const handleMessage = () => {
        history.push("/form")
    }
    return (
        <div>
        <div style={{justifyContent:"center", textAlign:"center"}}> <br/> <br/> <br/> <br/>
            <h1 style={{ color: "white",fontSize:"60px"  }} className="d-flex justify-content-center d-flex align-items-center"> <b> Nusrat <span class="text-info">Jahan </span>  Nisha</b></h1>
            <p style={{ color: "white",fontSize:"20px" }}className="d-flex justify-content-center d-flex align-items-center" > Engineer | Web Developer | Programmer</p>    
         <h5 style={{color:"white"}}>A hard working, experienced website developer studying in   Materials <br/> Science and Engineering.  Passionate  to   programming,  culture,<br/> sports and music. A dreamer who works day and night <br/> to achieve the peak she cherishes.</h5> <br/>
           <button onClick={handleMessage} type="button" class="btn btn-outline-info ml-2"> <b> Send Message</b> </button>
           <a href="https://docs.google.com/uc?export=download&id=1pq8_e7VCJ3FbWHHI87z-pkT6-nJiBVwD">
           <button type="button" class="btn btn-info ml-2"> <b> Download Resume</b></button>
           </a>
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <RecentProjects></RecentProjects>
        </div>
    );
};

export default Home;