import React from "react";
import vg from "../assets/sample2-removebg.png";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillAmazonCircle,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>DevService</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Elevate your game with tech solutions supreme, inspiring innovation
            and fulfilling every dream, unleashing your potential with our
            cutting-edge stream.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At our tech website, we are a dynamic team of innovators and problem
            solvers, driven by a shared passion for technology and its
            transformative potential. With a deep understanding of the
            ever-evolving digital landscape, we specialize in providing
            cutting-edge solutions that empower businesses and individuals to
            thrive in the digital age. Our expertise spans across a wide range
            of domains, including software development, artificial intelligence,
            cloud computing, cybersecurity, and more. We pride ourselves on
            delivering tailor-made solutions that address unique challenges and
            drive sustainable growth. By harnessing the power of emerging
            technologies, we enable our clients to unlock new opportunities,
            streamline operations, enhance user experiences, and stay ahead in
            an increasingly competitive market. With a customer-centric
            approach, we prioritize collaboration and ensure seamless
            integration of our solutions into existing workflows. With an
            unwavering commitment to quality and innovation, we strive to exceed
            expectations and deliver impactful results that propel our clients
            towards success. As a trusted technology partner, we are dedicated
            to guiding our clients through the complexities of the digital
            realm, empowering them to embrace the future with confidence and
            achieve their goals.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
