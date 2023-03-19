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



class Info extends React.Component {
    render() {
        return (
            <body>

                <video class="promoPicture" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>

                <h1 id="about">
                    ABOUT JENNIE <br />
                    ABRAHAMSON
                </h1>


                <h1 id="qoute">
                    ”I want the listener to feel like every song creates a movie inside their heads…”
                </h1>

                <p id="infoText">
                    From her solo debut in 2007, Jennie Abrahamson has developed a sound that has evolved record by record;
                    music
                    with the ability to evoke clear images in warm colours, that mediates exact feelings; songs from different
                    perspectives, that tie together personal experiences and unvarnished reflections with sharp observations of
                    the
                    surrounding world.

                    She started out young in the northern Swedish trip hop band Heed, who released two albums on EMI. When
                    kicking
                    off her solo career with the firstling ”Lights” in 2007, she founded her own label and has worked
                    independently
                    ever since. While ”Lights” dealt with changes and goodbyes, her critically acclaimed sophomore ”While the
                    sun’s
                    still up and the sky is bright” (2009) was a New York love story that was released in all of Europe and put
                    her
                    on the map outside of Sweden.
                    <br /> <br />
                    ”The sound of your beating heart”, with the hit ”Hard to come by”, was released in 2011, and she toured
                    extensively. Upon homecoming, she started wondering if there was anything besides or beyond music she wanted
                    to
                    do. She took a break to start studies in psychology, but in the summer of 2012 she was recruited to be part
                    of
                    her childhood idol Peter Gabriel’s touring band for the anniversary of his album ”SO” (Jennie’s favorite)
                    and
                    felt like that surreal event was like the universe pulling her back into music. She did 5 arena tours
                    throughout
                    the world as part of Gabriel’s band and as supporting act, the last one a co-headline with Sting.
                    <br /> <br />
                    During her time with Gabriel she released ”Gemini gemini” (2014), an explorative album that rendered her an
                    ”Indie of the Year” award at Manifest (Swedish independent grammy’s) and was nominated by IMPALA for the
                    European Indie Album of the Year Award – as the only swede. It made the critic’s collected top 10 for that
                    year,
                    and she once again toured extensively throughout Europe with her band, and also brought them along for the
                    journey of recording the next album.
                    <br /> <br />
                    In 2017 she was back with Reverseries, a stunning ten track collection of unique, ethereal pop songs that
                    deal
                    with intimacy, relationships, humanity and love; an emotive, interpersonal compendium of issues close to the
                    heart. The album was met with raving reviews and a nomination, among other accolades, for Pop of the Year at
                    P3
                    Guld, a Swedish national public radio award.
                    <br /> <br />
                    Since then, she has – among other things – toured both solo and with her band, been part of a few different
                    symphonic orchestra projects, sung at the Polar Prize Ceremony, had a composition residence that ended up in
                    a
                    directed concert – ”Kärlek & Makt” with one hour of music in Swedish, and more. Over the years, she has
                    continued to tour as a musician with other artists and bands. Over the years she has worked with artists
                    such as
                    Ane Brun, Peter Bjorn & John, Loney dear, Deportees and Mattias Risberg MINING.
                    <br /> <br />
                    2022 sees Jennie release the music from her concert play ”Kärlek & Makt”, and begin recording the follow-up
                    to
                    ”Reverseries”.

                    Written by Bradley Kulisic
                </p>






                <form id="contact">
                    <h2>Get in touch with us!</h2>
                    <label for="name">Your name:</label><br />
                    <input type="text" id="name" name="fname" value="" /><br /><br />
                    <label for="email" id="mejl">Your Email:</label><br />
                    <input type="text" id="email" name="email" value="" /><br /><br />
                    <label for="msg" id="msg">Your Message:</label><br />
                    <textarea name="message" rows="10" cols="30"></textarea> <br /> <br />
                    <input type="submit" onclick="mejlPlease()" value="Submit" />
                </form>


            </body>



        )
    }
}


export default Info;