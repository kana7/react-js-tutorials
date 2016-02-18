import React from "react";
import { Link } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, "/");
  }

  render() {
    const {location}= this.props;
    const containerStyle={
      marginTop: "60px"
    };
    return (
      <div>
        <Header location={location}/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
