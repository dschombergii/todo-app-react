import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      id: 0,
      isClicked: false,
      inputValue: "",
      listOfTodos: [],
    }
  }

  handleClick = () => {
    this.state.isClicked ?
      this.setState({ isClicked: false }) :
      this.setState({ isClicked: true })
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ listOfTodos: [...this.state.listOfTodos,{input: this.state.inputValue, id: this.state.id}] })
    this.setState({ inputValue: "" })
    this.setState({ id: this.state.id + 1 })
  }

  handleDelete = (id) => {
    console.log(id)
    this.setState({ listOfTodos: this.state.listOfTodos.filter((todo) => todo.id !== id)})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
            <button onSubmit={this.handleSubmit} type="submit">Submit</button>
          </form>
          <ol>
            {this.state.listOfTodos.map((todo) => {
              return <li key={todo.id}>{todo.input + " "}
              <button onClick={() => this.handleDelete(todo.id)}>Done</button></li>
            })}</ol>
        </header>
      </div>
    );
  }
}

export default App;
