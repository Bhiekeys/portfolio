import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { projects } from '../utils/constants';
const ProjectCards = () => {
  return (
    <Wrapper>
      <div className="cover">
        {projects.map((project) => {
          const { id, name, url, image } = project;
          return (
            <div className="container" key={id}>
              <img src={image} alt={name} />
              <Link to={url} className="link">
                view project
              </Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default ProjectCards;

const Wrapper = styled.article`
padding-top:180px;
padding-bottom:59px;
display: flex;
  justify-content:space-around;
.cover{
  display:flex;
gap:20px;
justify-content:center;
flex-wrap:wrap;

width:90vw;
}
 .container {
    position: relative;
   
    width:395px;
   
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.7s ease;
    opacity:0.8;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:500;
    color: #fff;
    background-color: #103310d3;
    border-radius:3px;
    padding:6px;
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
 
 
 
`;
