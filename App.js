import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  textWrite = (evt) => {
    this.setState({ text: evt.target.value });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Write your text</h1>
        <textarea 
        rows={4} 
        cols={40}
        value={this.state.text}
        onChange={this.textWrite}
        maxLength={"20"}
        ></textarea>
        <p> count: {this.state.text.length} /20</p>
      </div>
    );
  }
}
