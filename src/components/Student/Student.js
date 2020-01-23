import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Student extends Component {
  constructor() {
    super()
    this.state={
      studentInfo: {}
    }
  }
  componentDidMount(){
    return axios
    .get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(results => {
      this.setState({studentInfo: results.data})
    })
  }
  

  render() {
    const {studentInfo} = this.state
    return (
      <div className="box">
        <Link to={`/students`}>
          <h1>Student</h1>
          <h1>{studentInfo.first_name} {studentInfo.last_name}</h1>
          <h3>Grade: {studentInfo.grade}</h3>
          <h3>Email: {studentInfo.email}</h3>
        </Link>
      </div>
    )
  }
}