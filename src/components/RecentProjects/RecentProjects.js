import React from 'react';
import { useHistory } from 'react-router-dom';
import './RecentProjects.css';

const RecentProjects = () => {
    const history = useHistory();
    const handleAllProjects = () => {
        history.push("/allProjects");
    }
    return (
        <div className="container ">
            <h1 style={{ color: "white", textAlign: "center", marginBottom: "80px", fontSize: "60px" }}>Recent <span class="text-info">Projects
                    </span> </h1>
            <div class="card-deck ">
                <div class="card box" >
                    <img src="https://i.ibb.co/7SdzFFn/Screenshot-2020-10-31-151157.png" class="card-img-top img-fluid" alt="..." />
                    <div class="card-body " style={{ color: "white" }}>
                        <h5 style={{ textAlign: "center" }} class="card-title">Creative <span class="text-info">Agency</span> </h5>
                        <p class="card-text" >A service seller online full-stack agency web application where you can buy any services and can give feedback after firebase authentication.
                       </p>
                    </div>
                    <div class="card-footer">
                        <a target="_blank" href="https://github.com/NusratJahanNisha/creative-agency-client"><button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-info ml-2">
                            <b>   Github</b>
                        </button></a> <br />
                        <a target="_blank" href="https://creative-agency-522c7.web.app/"> <button type="button" style={{ width: "305px", marginBottom: "7px" }} class="btn btn-info ml-2">
                            <b>Website</b>
                        </button></a>
                        <a href="">
                            <button onClick={handleAllProjects} style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-info ml-2"> <b>Visit All Projects</b> </button>
                        </a>
                    </div>
                </div>
                <div class="card box">
                    <img src="
https://i.ibb.co/CKFKMVX/Screenshot-2020-10-31-151743.png" class="card-img-top" alt="..." />
                    <div class="card-body" style={{ color: "white" }}>
                        <h5 style={{ textAlign: "center" }} class="card-title">Volunteer <span class="text-info">Network</span> </h5>
                        <p class="card-text">A social event management online full-stack application where you can register any event and can see all your registered events after firebase authentication.</p>
                    </div>
                    <div class="card-footer">
                        <a href="https://github.com/NusratJahanNisha/volunteer-network-client">
                            <button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-info ml-2"> <b>Github</b> </button>
                        </a> <br />
                        <a target="_blank" href="https://volunteer-network-client-a51f7.web.app"> <button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-info ml-2"><b>Website</b></button>
                        </a>
                        <a href="">
                            <button onClick={handleAllProjects} style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-info ml-2"> <b>Visit All Projects</b> </button>
                        </a>
                    </div>
                </div>
                <div class="card box" >
                    <img src="https://i.ibb.co/7Rg8yvC/Screenshot-2020-10-31-152030.png" class="card-img-top" alt="..." />
                    <div class="card-body" style={{ color: "white" }}>
                        <h5 style={{ textAlign: "center" }} class="card-title">Travel <span class="text-info"> Guru</span></h5>
                        <p class="card-text">A hotel booking online application where you can book your desired destination with your suitable time and date.You can also explore the destination with the help of google map.</p>
                    </div>
                    <div class="card-footer">
                        <a target="_blank" href="https://github.com/NusratJahanNisha/travel-guru "><button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-info ml-2">
                            <b>   Github</b>
                        </button></a> <br />
                        <a target="_blank" href="https://travel-guru-8664d.web.app"> <button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-info ml-2">
                            <b>Website</b>
                        </button></a>
                        <button onClick={handleAllProjects} style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-info ml-2"> <b>Visit All Projects</b> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;