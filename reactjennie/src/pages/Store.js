import React from 'react';
import sweater from '../lib/sweater.png'
import pinkLP from '../lib/pinkLP.png'
import blackLP from '../lib/blackLP.png'
import sweater2 from '../lib/redsweat2.jpg'
import kundkorg from "../lib/kundkorg.png"
import zoom from "../lib/zoom.png"


class Store extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timeout: 0,
            value: 0,
            product: document.getElementsByClassName("sweater")
        };
        this.changeImage = this.changeImage.bind(this);
    }

    componentDidMount() {
        document.getElementById('basketCounter').innerHTML = '0'
    }


    changeImage(product, i) {

        var v = this.state.value;
        v ^= 1;
        this.setState({value: v})
        if (v) {
            product[i].src = sweater2;
        }
        else {
            product[i].src = sweater;
        }
    }




    stopSlide(i) {
        var timeout = this.state.timeout;
        var product = this.state.product;
        clearTimeout(timeout);
        product[i].src = sweater;
    }


    slideImages(i) {
        var timeout = this.state.timeout;
        timeout = setInterval(this.changeImage, 1500, this.state.product, i);
        this.setState({timeout: timeout})
    }

    componentDidUpdate() {
        var number = this.state.count
        document.getElementById('basketCounter').innerHTML = number
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
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(0)} onMouseOut={() => this.stopSlide(0)} alt="Red sweatshirt"  />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
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
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Reverseries pink vinyl $20
                                </p>
                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(1)} onMouseOut={() => this.stopSlide(1)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt M $40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(2)} onMouseOut={() => this.stopSlide(2)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
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
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(3)} onMouseOut={() => this.stopSlide(3)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
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
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Reverseries black vinyl $20
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(4)} onMouseOut={() => this.stopSlide(4)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt XL $40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(5)} onMouseOut={() => this.stopSlide(5)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
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
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(6)} onMouseOut={() => this.stopSlide(6)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
                                        + Add to basket!
                                    </button>
                                </div>
                                <p>
                                    Red sweatshirt M $40
                                </p>

                            </td>
                            <td>
                                <div class="product">
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(7)} onMouseOut={() => this.stopSlide(7)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
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
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(8)} onMouseOut={() => this.stopSlide(8)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
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
                                    <img src={sweater} class="sweater" onMouseOver={() => this.slideImages(9)} onMouseOut={() => this.stopSlide(9)} alt="Red sweatshirt" />
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })} class="productButton">
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
