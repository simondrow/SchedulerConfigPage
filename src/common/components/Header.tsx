import React, { Fragment } from 'react';
import img from '../img/PIALogo.png';

export const Header = () => {
  return (
    <Fragment>
      <div className="logo">
        <img src={img} alt="" />
        <span>跬步行配置系统</span>
      </div>
      <h1 className="header">
        不积 <b>跬步</b> 无以至 <b>千里</b>
      </h1>
    </Fragment>
  );
};
