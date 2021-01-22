import React from "react";
import { Col, Row, Container } from "../components/Grid";
import me from "../Images/Me.jpg";

const Home = () => {
  return (
    <section class="container">
      <article class="row">
        <article class="col-8">
          <article class="jumbotron">
            <h1 class="display-4">About Me</h1>
            <hr class="my-4"/>
              <img src={me} class="mainImage" alt="Joseph Gill" />
              <p>
                Hello, my name is Joseph Gill, but most people call me Joey. I am from Richmond, Va. I have a
                Westie. I like to play video games in my free time.
          </p>
              <ul>
                <li>Github:
              <a href="https://github.com/jaguar6105" target="_blank">https://github.com/jaguar6105</a>
                </li>
                <li>LinkedIn:
              <a href="https://www.linkedin.com/in/joseph-gill-8b99a117a/" target="_blank">http://www.linkedin.com</a>
                </li>
              </ul>
          </article>
        </article>
      </article>
    </section>


  );
};

export default Home;
