import React, {Component} from 'react';


class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    });
  }
  render() {
    return(
      <div className="row">
        <div className="input-field col s12">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="todo">Add new todo:</label>
            <input type="text" id="todo" value={this.state.content} onChange={this.handleChange} />
          </form>
        </div>
      </div>
    )
  }
}

export default AddTodo;