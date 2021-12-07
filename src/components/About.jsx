import React from "react";

let About = () => {
  return (
    <>
      <div
        className="aboutcontainer"
        style={{
          backgroundImage: `url(${"./images/aboutbg.jpg"})`,
          // backgroundSize: "contain, cover",
          backgroundSize: "1600px ",
          height: "634px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="education">
          <h1>Education</h1>
          <h2>Matric</h2>
          <p>Science/Bio</p>
          <h2>Intermediate</h2>
          <p>Diploma of Associate Engineerng (Electronics)</p>
          <h2>Graduation</h2>
          <p>BS-Software Engineering</p>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <h2>Backend</h2>
          <p>
            Laravel + mysql + Postman <br />
            MERN Stack
          </p>
          <h2>Web Development</h2>
          <p>
            html + css + javascript + React <br />
            mongoDB, Express, Nodejs
          </p>
          <h2>Graphic Designing</h2>
          <p>illustrator + Photoshop</p>
          <h2>Version Controll</h2>
          <p>Git and Github</p>
          <h2>Freelancing</h2>
          <p>As Graphic Designer from 2 Years</p>
        </div>
        <div className="languages">
          <h1>Languages</h1>
          <h2>
            JavaScript <br />
          </h2>
          <h2>
            Java <br />
          </h2>
          <h2>
            C++ <br />
          </h2>
          <h2>
            PhP <br />
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
