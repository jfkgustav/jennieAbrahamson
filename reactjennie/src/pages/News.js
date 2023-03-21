import React from "react";
import ticket from '../lib/ticket.png'
import sweater from '../lib/sweater.png'
import duKommerAldrig from "../lib/dukommeraldrig.png"
import noShow from "../lib/noshow.png"
import zoom from "../lib/zoom.png"


class News extends React.Component {

    render() {
        return (
            <body>
                <div class="grid-container">
                    <div class="newsNav">
                        <ul>
                            <li><a href="news.html" id="search">Search news <img src={zoom} id="newsZoom" alt="magnifying glass" />&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                            <li><br /><br /></li>
                            <li><a href="news.html"> <u>2023</u></a></li>
                            <li><a href="news.html"> FEB</a></li>
                            <li><a href="news.html"> JAN</a></li>
                            <li><br /><br /></li>
                            <li><a href="news.html"> <u>2022</u></a></li>
                            <li><a href="news.html">DEC</a></li>
                            <li><a href="news.html">NOV</a></li>
                            <li><a href="news.html">OCT</a></li>
                            <li><a href="news.html">SEP</a></li>
                            <li><a href="news.html">AUG</a></li>
                            <li><a href="news.html">JUL</a></li>
                            <li><a href="news.html">JUN</a></li>
                            <li><a href="news.html">MAY</a></li>
                            <li><a href="news.html">APRIL</a></li>
                            <li><a href="news.html">MAR</a></li>
                            <li><a href="news.html">FEB</a></li>
                            <li><a href="news.html">JAN</a></li>
                        </ul>
                    </div>

                    <ul class="newsScroller">
                        <li>
                            <img src={duKommerAldrig} alt="Du kommer aldrig single Cover" />
                            <h2>NEW SINGLE</h2>
                            <p>“Du kommer aldrig” is out! <br />
                                &nbsp;The first single from the new album “Kärlek & Makt”.
                            </p>
                            <a href="https://open.spotify.com/artist/6Q6y2vf2DZm7yLWHKQr7Bx">
                                Stream it now on Spotify or Apple Music!
                            </a>
                        </li>
                        <li>
                            <img src={noShow} alt="Cancelled show" />
                            <h2>2 SHOWS CANCELLED</h2>
                            <p>
                                We are sad to announce that the shows in Örebro next weekend
                                is cancelled because of a sickness in the band.
                                We look forward seeing our fans in Örebro another time.
                                Much love from Jennie and the band.
                            </p>
                        </li>
                        <li>
                            <img src={sweater} alt="Red sweatshirt" />
                            <h2>NEW MERCH</h2>
                            <p>
                                Lorem impsum
                            </p>
                        </li>
                        <li>
                            <img src={ticket} alt="Ticket" />
                            <h2>NEW NEWS</h2>
                            <p>
                                Lorem impsum
                            </p>
                        </li>
                        <li>
                            <img src={noShow} alt="Cancelled show" />
                            <h2>2 SHOWS CANCELLED</h2>
                            <p>
                                We are sad to announce that the shows in Örebro next weekend
                                is cancelled because of a sickness in the band.
                                We look forward seeing our fans in Örebro another time.
                                Much love from Jennie and the band.
                            </p>
                        </li>





                    </ul>


                </div>

            </body>
        )
    }
}

export default News;