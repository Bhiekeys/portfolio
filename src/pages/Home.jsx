import styled from 'styled-components';
import Lottie from 'lottie-react';
import animation from '../assets/animate.json';
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (
    <Wrapper style={{ paddingTop: '200px', color: '#fff' }}>
      <div className="container">
        <div className="content">
          <h2> Hey there, I'm Olabode.</h2>
          <p>Welcome to my world of pixels, code, and creativity! </p>
          <p>
            I'm a <span>Front-End Developer</span> on a mission to craft
            <br />
            captivating digital experiences.
          </p>
          <button type="button">
            <Link to="/projects">View Projects</Link>
          </button>
        </div>
        <Lottie
          animationData={animation}
          loop={true}
          style={{ height: '500px' }}
          className="lottie"
        />
      </div>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
height:100vh;
 display: flex;
  justify-content:space-around;
  .container{
      display: flex;
       justify-content:space-between;
       align-items: center;
     width:90vw;  
    transform: translateY(-60px);
  }
  .content{
    h2{
      font-size:53px;
      margin-bottom:5px;
    }
    p{
      font-size:27px;
    }
    span{
      color:#2BB32A;
    }
    button{
      border: 2px solid #2BB32A;
      padding:10px 30px;
      border-bottom-left-radius:18px;
        border-top-right-radius:18px;
        margin-top:30px;
        font-size:20px;
    }
  }
    @media screen and (max-width: 962px) {
    .container {
      padding-top:10px;
      flex-direction:column;
    }
    .lottie{
      display:none;
    }
     .content{
      text-align:center;
    h2{
      font-size:28px;
      font-weight:600;
    }
    p{
      font-size:24px;
    }
   
    button{  
      padding:5px 10px; 
        font-size:18px;
    }
  }
  }
`;
