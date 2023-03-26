import React from 'react';
import logo from "../../assets/logo.png";

export const Header = () => {
   return (
      <header className="bg-gray-50 pt-2.5 pl-1" style={{ gridArea: "h" }}>
         <img className='w-30 h-10' src={logo} alt="logo"/>
      </header>
   );
};

