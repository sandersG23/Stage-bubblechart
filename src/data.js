import React, { Component } from "react";
import Data2000 from "./2000.json";

/*class Databubble extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/2000.json")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.data.map((obj) => {
          return (
            <div>
              <h2>obj.ID</h2>
              <h3>obj.Publications</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Databubble;*/

class Databubble extends Component {
  render() {
    return (
      <div>
        {Data2000.map((Technologies, index) => {
          return (
            <div>
              [{Technologies.ID},{Technologies.Publications},
              {Technologies.Links},{Technologies.number},
              {Technologies["Number of mentions"]}]
            </div>
          );
        })}
      </div>
    );
  }
}

export default Databubble;
