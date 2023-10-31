// Footer.js

import React from 'react';

function Footer(props) {
  const footerStyle = {
    backgroundColor: props.theme.backgroundColor,
    color: props.theme.textColor,
  };

  const current = new Date();

  return (
    <footer style={footerStyle}>
      <center className='footer'>&copy;{current.getFullYear()}</center>
    </footer>
  );
}

export default Footer;
