import React, { Component } from "react";

class Albarating extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
   this.setState({
      selectedOption: event.target.value
    });
  }

   formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
        <form onSubmit={this.formSubmit}>
          <div>
            <h1>아르바이트 평가</h1>





            <br></br>
          </div>
    <div className="radio">
      <label>
        <input type="radio" value="Zero" name="score" checked={this.state.selectedOption === "Zero"} onChange={this.onValueChange}/>
        O점
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="One" name="score" checked={this.state.selectedOption === "One"} onChange={this.onValueChange} />
        1점
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Two" name="score" checked={this.state.selectedOption === "Two"} onChange={this.onValueChange}/>
        2점
      </label>
    </div>
          <div className="radio">
      <label>
        <input type="radio" value="Three" name="score" checked={this.state.selectedOption === "Three"} onChange={this.onValueChange}/>
        3점
      </label>
    </div>
          <div className="radio">
      <label>
        <input type="radio" value="Four" name="score" checked={this.state.selectedOption === "Four"} onChange={this.onValueChange}/>
        4점
      </label>
    </div>
          <div className="radio">
      <label>
        <input type="radio" value="Five" name="score" checked={this.state.selectedOption === "Five"} onChange={this.onValueChange}/>
        5점
      </label>
    </div>
          <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          평가하기
        </button>
  </form>
    );
  }
}

export default Albarating;