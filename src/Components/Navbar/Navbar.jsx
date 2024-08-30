// import React, { useState } from "react";
// import {
//   Header,
//   Nav,
//   NavData,
//   NavItem,
//   NavLogo,
//   NavMenu,
//   NavToggle,
// } from "./Navbar-Style.js";
// import { RiCloseLine, RiMenuLine } from "react-icons/ri";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Header>
//       <Nav>
//         <NavData>
//           <NavLogo to="/">
//             <img src="https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/2k2uZJnfpNf8bqSij2bGGno1zCA.svg?alt=media&token=1623d17e-0375-47e7-bdc3-19d5f6ef99e6" alt="" />
//             SULTAN HOSPITAL
//           </NavLogo>
//         </NavData>
//         <NavToggle onClick={toggleMenu}>
//           {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
//         </NavToggle>
//         <NavMenu isOpen={isOpen}>
//           <NavItem to="/">Home</NavItem>
//           <NavItem to="/about">About</NavItem>
//           <NavItem to="/services">Services</NavItem>
//           <NavItem to="/contact">Contact</NavItem>
//           <NavItem to="/login">Admin</NavItem>
//         </NavMenu>
//       </Nav>
//     </Header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import {
  Header,
  Nav,
  NavData,
  NavItem,
  NavLogo,
  NavToggle,
  NavMenu,
  LogoText,
  SultanText,
  HospitalText,
} from "./Navbar-Style.js";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Nav>
        <NavData>
          <NavLogo to="/">
            <img src="https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/2k2uZJnfpNf8bqSij2bGGno1zCA.svg?alt=media&token=1623d17e-0375-47e7-bdc3-19d5f6ef99e6" alt="" />
            <LogoText>
              <SultanText>SULTAN</SultanText>
              <HospitalText>HOSPITAL</HospitalText>
            </LogoText>
          </NavLogo>
        </NavData>
        <NavToggle onClick={toggleMenu}>
          {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </NavToggle>
        <NavMenu isOpen={isOpen}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/login">Admin</NavItem>
        </NavMenu>
      </Nav>
    </Header>
  );
};

export default Navbar;
