import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import styled from 'styled-components';
import { useGlobalContext } from '../context/projectContext';
import Logo from './Logo';
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <Logo />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  
  
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
 
  }
  .close-btn {
   background: transparent;
    border: transparent;
    color: #fff;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
 
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: #fff;
    transition: 0.2s ease-in-out;
    letter-spacing: 0.2rem;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: #84ee842f;
    color: #fff;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(61, 84, 77, 0.24);
backdrop-filter: blur(28px);
    transition: 1s ease-in-out;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;

// import { MdOutlineClose } from 'react-icons/md';
// import { useState } from 'react';
// import logo from '../assets/logo.png';
// import { CiMenuFries } from 'react-icons/ci';
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div>
//       <div className="md:hidden flex justify-between items-center w-[90vw]">
//         <img src={logo} />
//         <button
//           type="button"
//           onClick={() => setIsOpen(true)}
//           className="md:hidden">
//           <CiMenuFries className="text-[#fff] text-[29px]" />
//         </button>
//       </div>
//       {isOpen && (
//         <div className="">
//           <div className="grid place-items-center fixed top-0 right-0 bg-[#000] md:hidden">
//             <div className="flex justify-between items-center py-4 w-[90vw]">
//               <img src={logo} />
//               <button
//                 type="button"
//                 onClick={() => setIsOpen(false)}
//                 className="md:hidden">
//                 <MdOutlineClose className="text-[#fff] text-[29px]" />
//               </button>
//             </div>
//             <div className="w-screen bg-slate-200">
//               <ul className="text-[#fff] text-base gap-8 cursor-pointer">
//                 <li className="hover:text-primary transition duration-200 ease">
//                   Why Us
//                 </li>
//                 <li className="hover:text-primary transition duration-200 ease">
//                   Services
//                 </li>
//                 <li className="hover:text-primary transition duration-200 ease">
//                   Our Process
//                 </li>
//                 <li className="hover:text-primary transition duration-200 ease">
//                   Payments
//                 </li>
//                 <li className="hover:text-primary transition duration-200 ease">
//                   FAQs
//                 </li>
//               </ul>
//               <button
//                 type="button"
//                 className=" border-2 border-primary  px-[32px] py-[12px] rounded-[64px]">
//                 Contact
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Sidebar;
