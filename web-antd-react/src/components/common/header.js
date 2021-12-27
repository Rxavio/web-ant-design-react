import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;

function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-desktop"></i>
          <a href="http://google.com">Ant-D-Web</a>
        </div>
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        
      </div>
    </div>
  );
}

export default AppHeader;