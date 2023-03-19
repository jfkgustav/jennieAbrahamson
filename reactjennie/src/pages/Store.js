import React from "react";

import jennieFront from '../lib/jennieFRONT.png'
import ticket from '../lib/ticket.png'
import sweater from '../lib/sweater.png'
import pinkLP from '../lib/pinkLP.png'
import blackLP from '../lib/blackLP.png'
import duKommerAldrig from "../lib/dukommeraldrig.png"
import noShow from "../lib/noshow.png"
import kundkorg from "../lib/kundkorg.png"
import zoom from "../lib/zoom.png"
import { Helmet } from "react-helmet";
import $ from 'jquery';


class Store extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.productButton').click(function () {
                $('#korg-container').effect("bounce", { distance: 10, times: 2 }, "fast")
            });

            $(".menuButton").click(function () {
                var ID = $(this).attr("id");
                var menuID = "#" + $(this).attr("id").concat("Menu");
                var dotID = "#" + this.id.concat("Dot");
                $(menuID).toggleClass("active");
                $(dotID).toggleClass("inactive");
            });

        });


        function increaseBasketNumber() {
            var basketCounter = document.getElementById('basketCounter');
            var numberOfItems = basketCounter.innerHTML;

            ++numberOfItems;
            document.getElementById('basketCounter').innerHTML = numberOfItems;


        }


        var timeout
        var v = 0;
        var product = document.getElementsByClassName("sweater")


        function slideImages(i) {
            timeout = setInterval(changeImage, 1500, product, i);
        }


        function changeImage(product, i) {
            v ^= 1;

            if (v) {
                product[i].src = "redsweat2.jpg";
            }
            else {
                product[i].src = "sweater.png";
            }
        }




        function stopSlide(i) {
            clearTimeout(timeout);
            product[i].src = "sweater.png";
            v = 0;
        }



    }
    render() {
        return (

            <body>
                <div class="grid-container">
                    <div class="storeNav">
                        <ul>
                            <div id="korg-container">
                                <li><img src={kundkorg} id="korg" alt="Basket" /></li>
                                <li id="basketCounter">0</li>
                            </div>

                            <li id="searchItem">
                                <input type="text" id="searchBar" name="search" value="Search Products" />
                                <a href="store.html"><img src={zoom} id="zoom" alt="magnifying glass" /></a>
                            </li>


                            <li><a href="store.html"> <u>EVERYTHING</u></a></li>

                            <li>.</li>

                            <li><button class="menuButton" id="clothes"> CLOTHES</button></li>
                            <li><a href="store.html" class="subMenu" id="clothesMenu"> Sweaters <br /> T-Shirts <br /> Shoes </a></li>
                            <li id="clothesDot">.</li>

                            <li> <button class="menuButton" id="record">RECORDS</button></li>
                            <li> <a href="store.html" class="subMenu" id="recordMenu"> Vinyl <br /> CD <br /> Cassette</a></li>
                            <li id="recordDot">.</li>

                            <li><button class="menuButton" id="misc">MISC</button></li>
                            <li class="subMenu" id="miscMenu">Towels <br /> Candles <br /> Soap</li>

                        </ul>

                    </div>


                    <table class="product-viewer">

                        <tr>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(0)" onmouseout="stopSlide(0)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt XXS $40
                                </p>
                            </td>
                            <td>
                                <div class="product">
                                    <img src={pinkLP} alt="Pink Vinyl Reverseries" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Reverseries pink vinyl $20
                                </p>
                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(1)" onmouseout="stopSlide(1)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt M $40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(2)" onmouseout="stopSlide(2)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt L $40
                                </p>

                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(3)" onmouseout="stopSlide(3)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt S $40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={blackLP} alt="Black Vinyl Reverseries" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Reverseries black vinyl $20
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(4)" onmouseout="stopSlide(4)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt XL $40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(5)" onmouseout="stopSlide(5)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt XXL $40
                                </p>

                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(6)" onmouseout="stopSlide(6)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt M $40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(7)" onmouseout="stopSlide(7)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt <br />
                                    XXS S M L XL XXL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(8)" onmouseout="stopSlide(8)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt <br />
                                    XXS S M L XL XXL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onmouseover="slideImages(9)" onmouseout="stopSlide(9)" alt="Red sweatshirt" />
                                    <button onclick="increaseBasketNumber()" class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt <br />
                                    XXS S M L XL XXL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$40
                                </p>

                            </td>
                        </tr>

                    </table>

                </div>

            </body>
        )
    }
}

export default Store;
