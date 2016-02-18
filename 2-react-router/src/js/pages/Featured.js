import React from "react";

import Article from "../components/Articles";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "An other Article",
      "This is Article",
      "Hello Article",
    ].map((title,i)=><Article key={i} title={title}/>);
    const adText = [
      "ad Sport #1",
      "ad Sport #2",
      "ad Sport #3",
      "ad Sport #4",
      "ad Sport #5"
    ];
    const randomAd = adText[Math.round(Math.random()*(adText.length-1))];
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
