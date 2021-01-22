import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import { Link } from "react-router-dom";
import img1 from "../Images/Project1.gif";
import img2 from "../Images/burgerEaten.JPG";
import img3 from "../Images/shotify.png";
import img4 from "../Images/mFinance.JPG";
import img5 from "../Images/note.JPG";
import img6 from "../Images/Me.jpg";
import css from "../Css/style.css"


const Portfolio = () => {

  return (
    <main class="container">
      <section class="row">
        <article class="col-8">
          <section class="jumbotron">
            <h1 class="display-4">Portfolio</h1>
            <hr class="my-4"/>
              <section class="container-fluid">
                <article class="row">
                  <article class="col-5">
                    <a href="https://tremaynet.github.io/group-project-1/" target="_blank">
                      <img src={img1} class="imageLink" alt="px application" href="https://tremaynet.github.io/group-project-1/" />
                    </a>
                    <p>PX</p>
                    <a href="https://github.com/tremaynet/group-project-1" target="_blank"> Github Repository
                </a>
                  </article>
                  <div class="col-1"></div>
                  <div class="col-5">
                    <a href="https://burger-eaten-app.herokuapp.com/" target="_blank">
                      <img src={img2} class="imageLink" alt="burger app" href="https://burger-eaten-app.herokuapp.com/" />
                    </a>
                    <p>Burger application</p>
                    <a href="https://github.com/jaguar6105/burger" target="_blank"> Github Repository</a>
                  </div>
                </article>
                <article class="row">
                  <article class="col-5">
                    <a href="https://shotify-music-player.herokuapp.com/" target="_blank">
                      <img src={img3} class="imageLink" alt="Shotify application link" href="https://shotify-music-player.herokuapp.com/" />
                    </a>
                    <p>Shotify music player</p>
                    <a href="https://github.com/giocordova20/project2" target="_blank"> Github Repository</a>
                  </article>
                  <div class="col-1"></div>
                  <div class="col-5">
                  <a href="https://github.com/robertito121/mFinance" target="_blank">

                    <img src={img4} class="imageLink" alt="mFinance" />
                    </a>
                    <p>mFinance</p>
                    <a href="https://github.com/robertito121/mFinance" target="_blank"> Github Repository</a>

                  </div>
                </article>
                <article class="row">
                  <article class="col-5">
                  <a href="https://note-taker-application6105.herokuapp.com/" target="_blank">
                    <img src={img5} class="imageLink" alt="note taker" />
                    </a>
                    <p>Note Taker</p>
                    <a href="https://github.com/jaguar6105/note_taker" target="_blank"> Github Repository</a>
                  </article>
                  <div class="col-1"></div>
                  <div class="col-5">
                  </div>
                </article>
              </section>
    </section>
    </article>
    </section>

    </main>
  );
};

export default Portfolio;
