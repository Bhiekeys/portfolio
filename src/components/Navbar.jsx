import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { links, socialLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useGlobalContext } from '../context/projectContext';
const Nav = () => {
  const { openSidebar, scrolled } = useGlobalContext();

  return (
    <NavContainer $scrolled={scrolled.toString()}>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="social-links">
          {socialLinks.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <Link to={url}>{icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
 background: ${(props) =>
   props.scrolled ? 'rgba(40, 52, 48, 0.9)' : 'rgba(40, 52, 48, 0.24)'};
  backdrop-filter: ${(props) => (props.scrolled ? 'blur(2px)' : 'none')};

  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
 position:fixed;
  width:100%;
  z-index: 1;
  .nav-center {    
    width: 90vw;
    margin: 0 auto;
    /* max-width: var(--max-width); */
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #fff;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links , .social-links{
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links, .social-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: #fff;
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        transition:0.3s ease-in-out;
        &:hover {
         
           color:#2BB32A;

        }
      }       
    }

    .social-links{
      a{
          color:#2BB32A;
          &:hover{
            color:#fff;
          }
      }

    }
    .nav-links{
        a:hover {
        border-bottom: 2px solid #2BB32A;
       }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;

// import logo from '../assets/logo.png';
// import Sidebar from './Sidebar';

// const Navbar = () => {
//   return (
//     <div className="grid place-items-center py-4">
//       <div className="hidden text-[#fff] w-[90vw] md:flex justify-between items-center">
//         <img src={logo} alt="logo" />
//         <ul className="hidden md:flex text-base gap-8 cursor-pointer">
//           <li className="hover:text-primary transition duration-200 ease">
//             Why Us
//           </li>
//           <li className="hover:text-primary transition duration-200 ease">
//             Services
//           </li>
//           <li className="hover:text-primary transition duration-200 ease">
//             Our Process
//           </li>
//           <li className="hover:text-primary transition duration-200 ease">
//             Payments
//           </li>
//           <li className="hover:text-primary transition duration-200 ease">
//             FAQs
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="hidden md:block border-2 border-primary  px-[32px] py-[12px] rounded-[64px]">
//           Contact
//         </button>
//       </div>
//       <Sidebar />
//     </div>
//   );
// };
// export default Navbar;
