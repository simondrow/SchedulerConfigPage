import React, { Fragment } from 'react';
import img from '../img/PIALogo.png';

export const Header = () => {
  return (
    <Fragment>
      <div className="logo">
        <img src={img} alt="" />
        <span>PIA</span>
      </div>
      <h1 className="header">
        Build <b>instant</b> web applications that <b>breaks</b> through{' '}
        <b>webview</b>
      </h1>
    </Fragment>
  );
};
