import React, { Component } from "react";

import GithubCatRibbon from "github-cat-ribbon";

export default class App extends Component {
  render() {
    return (
      <div>
        <GithubCatRibbon username="shivampip" reponame="github-cat-ribbon" />
      </div>
    );
  }
}
