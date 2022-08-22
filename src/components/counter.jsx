import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  styles = {
    fontWeight: "bold",
    fontSize: 20,
  };

  doHandleIncremet = () => {
    this.handleIncrement({ id: 1 });
  };

  renderTags() {}

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.doHandleIncremet({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBatchClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
