import React from "react";
import {Helmet} from "react-helmet"

import jennieAlone from '../lib/jennieALONE.png'
import ticket from '../lib/ticket.png'
import sweater from '../lib/sweater.png'
import pinkLP from '../lib/pinkLP.png'
import blackLP from '../lib/blackLP.png'
import duKommerAldrig from "../lib/dukommeraldrig.png"
import noShow from "../lib/noshow.png"



class Home extends React.Component {

    render() {
        return (
            <body>
                <figure class="promoPicture">
                    <a href="shows.html"><img src={jennieAlone} alt="Jennie Abrahamson Promotion" /></a>
                </figure>

                <h1>
                    SHOW TICKETS <br />
                    AVAILABLE
                    NOW!
                </h1>

                <h2 id="getYours">
                    <a href="shows.html">GET YOURS! <img src={ticket} id="ticket" alt="Ticket" /></a>
                </h2>

                <h1 id="storeNews">STORE NEWS</h1>

                <ul id="indexMerch">
                    <li><a href="store.html"><img src={sweater} alt="Red sweatshirt" />
                        <p>Red sweatshirt $40</p>
                    </a></li>
                    <li style={{ position: 'relative', left: '40px' }}><a href="store.html"><img src={pinkLP} alt="Reverseries pink vinyl" />
                        <p>Reverseries pink vinyl $20</p>
                    </a></li>
                    <li><a href="store.html"><img src={blackLP} alt="Reverseries black vinyl" />
                        <p>Reverseries black vinyl $20</p>
                    </a></li>
                </ul>

                <h1 id="otherNews">OTHER NEWS</h1>

                <div class="slideshow-container">

                    <div class="slides">
                        <img src={noShow} style={{ width: '100%' }} alt="No Show" />
                        <div class="slideText">2 SHOWS CANCELLED <br />
                            We are sad to announce that the shows in Örebro next weekend is cancelled because of a sickness in the band.
                            We
                            look forward seeing our fans in Örebro another time. Much love from Jennie and the band.</div>
                    </div>


                    <div class="slides">
                        <img src={duKommerAldrig} style={{ width: '100%' }} alt="New single!" />
                        <div class="slideText">NEW SINGLE <br />
                            “Du kommer aldrig” is out!
                            The first single from the new album “Kärlek & Makt”.
                        </div>
                    </div>


                    <div class="slides">
                        <img src={sweater} style={{ width: '100%' }} alt="Merch" />
                        <div class="slideText">LOREM IPSUM <br />
                            Dolor sit amet, consectetur adipiscing elit. Suspendisse leo mauris, rhoncus quis consectetur quis, commodo
                            eget
                            justo. Proin porta turpis</div>
                    </div>

                    <button class="prev" onclick="plusSlides(-1)">&#10094;</button>
                    <button class="next" onclick="plusSlides(1)">&#10095;</button>
                </div>

                
                <Helmet>
                    <script src="index.js" type="text/jsx"></script>
                </Helmet>

            </body>
        )

    }
}

export default Home;