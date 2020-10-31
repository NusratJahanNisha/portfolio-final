import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutMe = () => {
    const history = useHistory();
    const handleMessage = () => {
        history.push("/form")
    }
    return (
        <div className="container" style={{ display: "cover", backgroundColor: "black" }} >
            <div style={{ textAlign: "center" }}>
                <img style={{ borderRadius: "50%", height: "210px" }} src="https://i.ibb.co/qrpzcMS/oie-Tj16nil-V6d0h.jpg" alt="" />
                <br />
                <br />
                <a target="_blank" href="https://www.linkedin.com/in/nusrat-jahan-nisha-3788b61ba/"> <button type="button" class="btn btn-outline-info ml-2"> <b> LinkedIn</b> </button></a>
                <a target="_blank" href="https://github.com/NusratJahanNisha">  <button type="button" class="btn btn-info ml-2"> <b> Github</b></button></a>
                <br /> <br />
                <h5 style={{ color: "white" }}>A hard working, experienced website developer studying in   Materials <br /> Science and Engineering.  Passionate  to   programming,  culture,<br /> sports and music. A dreamer who works day and night <br /> to achieve the peak she cherishes.</h5> <br />
                <button type="button" onClick={handleMessage} class="btn btn-outline-info ml-2"> <b> Send Message</b> </button>
                <a href="https://docs.google.com/uc?export=download&id=1pq8_e7VCJ3FbWHHI87z-pkT6-nJiBVwD">
                    <button type="button" class="btn btn-info ml-2"> <b> Download Resume</b></button>
                </a>
            </div>
            <br />  <br /> <br /> <br />
            <div class="card-deck" style={{ color: "white" }}>
                <div class="card" >
                    <div class="card-body box" >
                        <h4 class="card-title">Skills:</h4>
                        <p class="card-text">
                            <ul>
                                <li><b>Expertise:</b> JavaScript, ES6, React, Bootstrap, HTML5, CSS3, SCSS </li>
                                <li><b>Comfortable:</b> Express, MongoDB, Material UI, Node.js </li>
                                <li><b>Familiar:</b> Stripe, Redux, OOP </li>
                                <li><b>Tools:</b> Git, Github, Chrome Dev Tool, VS Code, Heroku, Netlify, Firebase </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body box" >
                        <h4 class="card-title">Education:</h4>
                        <p class="card-text">
                            <b>B.Sc. Engineering(February 2020 - Now) </b> <br />
                            <ul>
                                <li><b>Institute:</b> Khulna University of Engineering & Technology (KUET)
                                 </li>
                                <li><b>Department:</b> Materials Science & Engineering (MSE)
                                     </li></ul>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body box">
                        <h4 class="card-title">Personal Info:</h4>
                        <p class="card-text">
                            <ul>
                                <li><b>Name:</b> Nusrat Jahan Nisha</li>
                                <li><b>Phone:</b> 01304957103</li>
                                <li><b>Email:</b>  nusrat.jahan.nisha007@gmail.com</li>
                                <li><b>Death Of Birth:</b> 26 June, 2002</li>

                                <li><b>Blood Group:</b> B+</li>
                                <li><b>Nationality:</b> Bangladeshi</li>
                                <li><b>Religion:</b> Islam</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <br /> <br /> <br />
        </div>
    );
};

export default AboutMe;