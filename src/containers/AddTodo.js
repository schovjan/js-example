import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input } from 'reactstrap';
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.state.value))
    this.setState({ value: '' });
  }

  render() {
    return (
      <Form inline>
        <Input onChange={this.handleChange} value={this.state.value} />
        <Button onClick={this.handleSubmit} color="primary">add todo</Button>
      </Form >
    );
  }
}
AddTodo = connect()(AddTodo)

export default AddTodo
