import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { projects } from '../utils/constants';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animation from '../assets/loading.json';

const ProjectCards = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = projects.map((project) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = project.image;
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  if (!imagesLoaded) {
    return (
      <p className="h-screen flex justify-center items-center">
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
    <>
      <Wrapper>
        <h2 className="section-title">Collaborative Projects</h2>
        <div className="cover">
          {projects.slice(0, 3).map((project) => {
            const { id, name, url, image } = project;
            return (
              <div className="container" key={id}>
                <img src={image} alt={name} />
                <Link to={url} className="link">
                  View Project
                </Link>
              </div>
            );
          })}
        </div>
        <h2 className="section-title">Personal Projects</h2>
        <div className="cover">
          {projects.slice(3, 6).map((project) => {
            const { id, name, url, image } = project;
            return (
              <div className="container" key={id}>
                <img src={image} alt={name} />
                <Link to={url} className="link">
                  View Project
                </Link>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default ProjectCards;

const Wrapper = styled.article`
  padding-top: 100px;
  padding-bottom: 59px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  .section-title {
    font-size: 20px;
    font-weight: bold;
    color: #f1f1f1;
    margin-left:10%;
    width: 100%;
    text-align:left;
  }
  
  .cover {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    width: 90vw;
  }

  .container {
    position: relative;
    width: 395px;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.7s ease;
    opacity: 0.8;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #fff;
    background-color: #103310d3;
    border-radius: 3px;
    padding: 6px;
    transition: 0.5s ease;
    opacity: 0;
    cursor: pointer;
  }

  .container:hover img {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }
   @media screen and (max-width: 1075px){
     .section-title {
  margin-left:0%;
    width: 100%;
    text-align:center;
     }
   
   }
`;
