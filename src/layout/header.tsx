import * as React from 'react';
import Logo from '../assets/img/rick-morty.png';
export const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" style={{
        width: '40%',
      }}/>
    </div>
  )
}