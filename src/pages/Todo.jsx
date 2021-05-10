import React, { Component, setState } from "react";
import TodoUser from "./TodoUser";
import "../global.css";
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      notlar: [
        {
          not:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          id: 6230,
          date: "5.04.2021",
          isCompleted: false,
        },
        {
          not:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
          id: 1516,
          date: "7.04.2021",
          isCompleted: true,
        },
        {
          not:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
          id: 156,
          date: "19.04.2021",
          isCompleted: false,
        },
      ],
    };
  }
  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = () => {
    if (!this.state.text) return;
    let prevState = this.state.notlar;
    prevState.push({
      not: this.state.text,
      id: Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString(),
      isCompleted: false,
    });
    this.setState({ notlar: prevState, text: "" });
  };
  handleReset = () => {
    this.setState({ notlar: [] });
  };
  handleDelete = (xx) => {
    let delstate = this.state.notlar;
    delstate = delstate.filter((item) => item.id !== xx);
    this.setState({ notlar: delstate });
  };
  handleMaked = (id) => {
    let prevNotes = this.state.notlar;
    prevNotes.map((not) => {
      if (not.id === id) {
        not.isCompleted = not.isCompleted ? false : true;
      }
    });
    this.setState({ notlar: prevNotes });
  };

  findIsCompleted = (id) =>
    this.state.notlar.find((item) => item.id === id).isCompleted;
  render() {
    return (
      <div className="notes">
        <div className="notes-top">
          <input placeholder="Search Nots" className="nots-top" type="text" />
          <input
            className="inputpadding"
            type="text"
            placeholder="Add something to do..."
            value={this.state.text}
            onChange={this.handleInputChange}
          />
          <div className="notes-top-button">
            <button className="button btn2 first" onClick={this.handleSubmit}>
              ADD
            </button>
          </div>
        </div>

        <div className="notes-bottom">
          {this.state.notlar.map((item) => {
            return (
              <TodoUser
                id={item.id}
                not={item.not}
                date={item.date}
                onDelete={this.handleDelete}
                onMaked={this.handleMaked}
                isDone={this.findIsCompleted(item.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default ToDo;
