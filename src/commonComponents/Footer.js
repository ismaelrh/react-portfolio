//Ismael Rodriguez, ismaro.394 at gmail dot com
//Footer component
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
       <div>
        <hr/>
        <span style={{color: 'gray'}}>© 2016-{(new Date()).getFullYear()} Ismael Rodríguez. All rights reserved. Made with React.</span>
      </div>
    );
  }
}

export default Footer;
