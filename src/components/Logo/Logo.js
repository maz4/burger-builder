import React from 'react';

import clsasses from './Logo.css'
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
  <div className={clsasses.Logo}>
    <img src={burgerLogo } alt="MyBurger"/>
  </div>
);

export default logo;