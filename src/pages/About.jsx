import { styled } from "styled-components";
import portfolio from "../assets/portfolio.jpeg"
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animation from '../assets/loading.json';
const About = () => {
   const [imageLoaded, setImageLoaded] = useState(false);
   useEffect(() => {
     const img = new Image();
     img.src = portfolio;
     img.onload = () => {
       setImageLoaded(true);
     };
   }, []);
   if (!imageLoaded) {
     return (
       <p className=" h-screen flex justify-center items-center">
         <Lottie
           animationData={animation}
           loop={true}
           style={{ height: '200px' }}
           className="lottie"
         />
       </p>
     );
   }
  return (
    <Wrapper>
      <div className="container">
        <img src={portfolio} alt="image" />
        <div className="content">
          <h1 className="">About Me</h1>
          <p className="">
            Hey there, I'm <span className="">Olabode Sodimu</span>, a
            passionate frontend developer on a mission to craft captivating
            digital experiences.
          </p>
          <p className="">
            With a strong foundation in HTML, CSS, and JavaScript, and
            proficiency in modern tools like React.js and Tailwind CSS, I thrive
            on turning design concepts into seamless, user-friendly interfaces.
          </p>
          <p className="">
            Take a scroll, click around, and immerse yourself in the blend of
            aesthetics and functionality. If you're ready to collaborate,
            brainstorm, or bring your own web project to life, I'm just a
            message away.
          </p>
          <p className="">
            Thanks for dropping by – let's build something amazing together!
          </p>
          <div className="btn gap-2">
            <a
              href="mailto:olabodesodimu9@gmail.com"
              className="w-[120px] lg:w-[150px]">
              Get in Touch
            </a>
            <a
              href="https://github.com/bhiekeys"
              className="w-[120px] lg:w-[150px]"
              target="_blank"
              rel="noopener noreferrer">
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
display:grid;
place-items:center;
  padding-top:140px;
  padding-bottom:45px;
 .container{
  display: flex;
   justify-content:space-between;
  align-items:center;
   width:90vw;
 }
  img{
    width:500px;
    border-radius:300px;
    opacity:0.8;
    transition:1s ease;

  }
   img:hover{
    opacity:1;
    cursor:pointer;
   }
  .content{
    width:600px;
    color:#fff;
    h1{
      font-size: 38px;
      font-weight:500;
    }
    span{
      color:#2BB32A;
    }
    p{
      font-size: 20px;
      margin-top:8px;
    }

    .btn{
      display:flex;
      /* gap:20px; */
      margin-top:20px;
    }
    .btn a{
      border:2px solid#2BB32A;
      /* width:150px; */
      text-align: center;
      padding:10px 0px;
      border-radius:2px;
    }
  }
   @media screen and (max-width: 1075px){
    .container{
      flex-direction:column;
      gap:20px;
    }
    .content{
      width: 100%;
      display:grid;
      place-items:center;
      text-align:center;
    }
     img{
    width:300px;
  }
   /* .btn{
      gap:10px;
    }
     .btn a{
    
      width:120px;
     
      padding:10px 0px;
     
    } */
   }
`;