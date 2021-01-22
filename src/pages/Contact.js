import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const Contact = props => {

  return (
    <section class="container">
    <article class="row">
      <article class="col-8">
        <main class="jumbotron">
          <h1 class="display-4">Contact</h1>

          <hr class="my-4"/>
          <form action="mailto:gilljoseph603@gmail.com" method="post" enctype="text/plain">
            <article class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </article>

            <article class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="text" name="mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </article>

            <article class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea type="text" name="comment" class="form-control" id="exampleFormControlTextarea1"
                rows="3"></textarea>
            </article>
            <button type="submit" class="btn btn-primary" value="Send">Submit</button>
          </form>
        </main>
      </article>
    </article>
  </section>
    );
};

export default Contact;
