import React from 'react';

const AllProjects = () => {
    var Carousel = require('3d-react-carousal').Carousel;
    let slides = [
        <img src="https://i.ibb.co/7SdzFFn/Screenshot-2020-10-31-151157.png" alt="1" />,
        <img src="https://i.ibb.co/jhbhSrS/Screenshot-2020-10-31-151402.png" alt="2" />,
        <img src="https://i.ibb.co/ggQ6bL1/Screenshot-2020-10-31-151550.png" alt="3" />,
    ];
    let slides1 = [
        <img src="https://i.ibb.co/CKFKMVX/Screenshot-2020-10-31-151743.png" alt="1" />,
        <img src="https://i.ibb.co/hd7NYFT/Screenshot-2020-10-31-151844.png" alt="2" />,
        <img src="https://i.ibb.co/Tv9scZp/Screenshot-2020-10-31-151925.png" alt="3" />,
    ];
    let slides2 = [
        <img src="https://i.ibb.co/7Rg8yvC/Screenshot-2020-10-31-152030.png" alt="1" />,
        <img src="https://i.ibb.co/3vYNzrj/Screenshot-2020-10-31-152120.png" alt="2" />,
        <img src="https://i.ibb.co/KXyBVrg/Screenshot-2020-10-31-152244.png" alt="3" />,
    ];
    let slides3 = [
        <img src="https://i.ibb.co/BLD1Kbv/Screenshot-2020-10-31-152355.png" alt="1" />,
        <img src="https://i.ibb.co/HrChDS4/Screenshot-2020-10-31-152427.png" alt="2" />,
        <img src=" https://i.ibb.co/8M5DgPm/Screenshot-2020-10-31-152451.png" alt="3" />,
    ];

    return (
        <div > <br />

            {/* first slide */}
            <div className="row box" style={{ color: "white", border: "3px solid #17A2B8", borderRadius: "2px", padding: "20px", margin: "20px" }}>
                <div className="col-md-5">
                    <h1>Creative <span class="text-info">  Agency</span></h1>
                    <ul>
                        <li>This is a Service Seller Web Application</li>
                        <li>Developed this full-stack website in this way where it can detect the entrance of user or admin.And also can show the result according to the user or admin.</li>
                        <li>Users can buy any services and give feedback.Admin can make both services and admin. And also can see the detailed information of users.</li>
                        <li>All the interaction information is saved in the database and is loaded from the database.</li>
                    </ul>
                    <p>
                        <b>Technology:</b> React,React Router,Node.js,MongoDB,Firebase Authentication,Heroku,Bootstrap,CSS3,HTML5
                    </p>
                    <br />
                    <a target="_blank" href="https://github.com/NusratJahanNisha/creative-agency-client"><button style={{ width: "150px" }} type="button" class="btn btn-outline-info ml-2">
                        <b>   Github</b>
                    </button></a>
                    <a target="_blank" href="https://creative-agency-522c7.web.app/"> <button type="button" style={{ width: "150px" }} class="btn btn-info ml-2">
                        <b>Website</b>
                    </button></a>
                </div>
                <div className="col-md-7" style={{ padding: "50px" }}>
                    <Carousel slides={slides} autoplay={false} interval={1000} />
                </div>
            </div> <br />
            {/* slide 2 */}

            <div className="row box" style={{ color: "white", border: "3px solid #17A2B8", borderRadius: "2px", padding: "20px", margin: "20px" }}>
                <div className="col-md-5">
                    <h1>Volunteer <span class="text-info">   Network</span></h1>
                    <ul>
                        <li> This is a Social Event Management Application.</li>
                        <li>Engineered the full-stack website so that users can choose any volunteer work.Using the firebase authentication system, user can see all his/her registered volunteer work.</li>
                        <li>Besides admin can see all the user details and can create an event for everyone which is shown on the home page.</li>
                        <li>All the interaction information is saved in the database and is loaded from the database.MongoDB is used in this purpose.</li>
                    </ul>
                    <p>
                        <b>Technology:</b> React,React Router,Node.js,MongoDB,Firebase Authentication,Heroku,Bootstrap,CSS3,HTML5
                    </p>
                    <a href="https://github.com/NusratJahanNisha/volunteer-network-client">
                        <button style={{ width: "150px" }} type="button" class="btn btn-outline-info ml-2"> <b>Github</b> </button>
                    </a>
                    <a target="_blank" href="https://volunteer-network-client-a51f7.web.app"> <button style={{ width: "150px" }} type="button" class="btn btn-info ml-2"><b>Website</b></button>
                    </a>

                </div>
                <div className="col-md-7" style={{ padding: "50px" }}>
                    <Carousel slides={slides1} autoplay={false} interval={1000} />
                </div>
            </div> <br />

            {/* slide 3 */}

            <div className="row box" style={{ color: "white", border: "3px solid #17A2B8", borderRadius: "2px", padding: "20px", margin: "20px" }}>
                <div className="col-md-5">
                    <h1>Travel <span class="text-info">  Guru</span></h1>
                    <ul>
                        <li>    This is a Hotel Booking Application.</li>
                        <li>Created a travel website where users can book his/her suitable place.React router is used in this purpose.</li>
                        <li>After the authentication system, the user can see the rooms available in that place.Firebase authentication system is used to take user's information.Besides the google map increased the user experience.</li>
                        <li>This site is capable of securing both user's and hotel's information.</li>
                    </ul>
                    <p>
                        <b>Technology:</b>
                        React,React RouterFirebase Authentication,Netlify,Material UI,Bootstrap,CSS3,HTML5
                    </p>
                    <a target="_blank" href="https://github.com/NusratJahanNisha/travel-guru "><button style={{ width: "150px" }} type="button" class="btn btn-outline-info ml-2">
                        <b>   Github</b>
                    </button></a>
                    <a target="_blank" href="https://travel-guru-8664d.web.app"> <button style={{ width: "150px" }} type="button" class="btn btn-info ml-2">
                        <b>Website</b>
                    </button></a>
                </div>
                <div className="col-md-7" style={{ padding: "50px" }}>
                    <Carousel slides={slides2} autoplay={false} interval={1000} />
                </div>
            </div> <br />
            {/* slide 4 */}
            <div className="row box" style={{ color: "white", border: "3px solid #17A2B8", borderRadius: "2px", padding: "20px", margin: "20px" }}>
                <div className="col-md-5">
                    <h1>Panda <span class="text-info">   Commerce</span></h1>
                    <ul>
                        <li>                    This is a SPA e-commerce Application. </li>
                        <li>   Where the user can see the website on any device.</li>
                        <li>Bootstrap is used to make this website responsive. </li>
                        <li>Vanilla js is used to up grate the user experience.</li>
                        <li>CSS3 increased the visual look of the website</li>
                    </ul>
                    <p>
                        <b>Technology:</b> Vanilla JavaScript,Bootstrap-4,CSS3,HTML5,Github
                    </p>
                    <a target="_blank" href="https://github.com/NusratJahanNisha/panda-commerce "><button style={{ width: "150px" }} type="button" class="btn btn-outline-info ml-2">
                        <b>   Github</b>
                    </button></a>
                    <a target="_blank" href="https://nusratjahannisha.github.io/panda-commerce/"> <button style={{ width: "150px" }} type="button" class="btn btn-info ml-2">
                        <b>Website</b>
                    </button></a>
                </div>
                <div className="col-md-7" style={{ padding: "50px" }}>
                    <Carousel slides={slides3} autoplay={false} interval={1000} />
                </div>
            </div> <br /> <br />

        </div >
    );
};

export default AllProjects;