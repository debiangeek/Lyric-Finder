import React, { Component } from 'react';
import '../../App.css';

class Footer extends Component {
    render() {
        return (
            <div className="container" >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="footer">
                    Copyright 2019 
                    <a className="footerLink" href="https://mike-mcgowan.herokuapps.com"> Mike McGowan
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;