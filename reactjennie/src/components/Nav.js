import React from "react";
import { Link } from 'react-router-dom';

import spotifyIcon from '../lib/spotifyIcon.png'
import instagram from '../lib/instagram.png'
import twitter from '../lib/twitter.png'
import facebook from '../lib/facebook.png'
import mail from '../lib/mail.png'
import jennieLogo from '../lib/jennieLOGO.png'
import UK from '../lib/uk-flag.png'


class Nav extends React.Component {
    render() {
        return (

            <header>

                <div class="logo">
                    <a href="index.html"><img src={jennieLogo} alt="Jennie Abrahamson Logo"/></a>
                </div>

                <div class="navContainer">
                    <ul class="navBar">
                        <li><Link to="/index.html">HOME</Link></li>
                        <li><Link to="/shows.html">SHOWS</Link></li>
                        <li><Link to="/store.html">STORE</Link></li>
                        <li><Link to="/news.html">NEWS</Link></li>
                        <li><Link to="/info.html">INFO</Link></li>
                    </ul>
                </div>


                <div class="language">
                    <h2> ENGLISH <img src={UK} alt="English flag"/></h2>
                </div>

                <div class="apps">

                    <a href="https://open.spotify.com/artist/6Q6y2vf2DZm7yLWHKQr7Bx"><img src={spotifyIcon}alt="spotifyIcon"/></a>
                    <a href="https://www.instagram.com/jennieabrahamson/"><img src={instagram} alt="instagram"/></a>
                    <a href="https://twitter.com/JennieAbrahams"><img src={twitter} alt="twitter"/></a>
                    <a href="https://www.facebook.com/jennieabrahamsonmusic"><img src={facebook} alt="facebook"/></a>
                    <a href="https://gmail.com"><img src={mail} alt="mail"/></a>

                </div>
            </header>

        )
    }
}


export default Nav;