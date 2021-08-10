import React, { Component } from "react";
import TaskDataService from "../services/task.service";
import '../App.css';
export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.newTask = this.newTask.bind(this);

    this.state = {
      id: null,
      title: "",
      position: "",
      description: "", 
      date: Date,
      time: "",
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangePosition(e) {
      this.setState({
          position: e.target.value
      });
  }
  
   onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDate(e){
    this.setState({
      date: e.target.value
    });
  }
  onChangeTime(e){
    this.setState({
      time: e.target.value
    });
  }
 saveTask() {
    var data = {
      title: this.state.title,
      position: this.state.position,
      description: this.state.description,
      date: this.state.date,
      time: this.state.time
    };

    TaskDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          position: response.data.position,
          description: response.data.description,
          date: response.data.date,
          time: response.data.time,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTask() {
    this.setState({
      id: null,
      title: "",
      position: "",
      description: "",
      date: Date,
      time: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTask}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
jj                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="position" >Position</label>
              <input
                type="text"
                className="form-control"
                id="position"
                required
                value={this.state.position}
                onChange={this.onChangePosition}
                name="position"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
                placeholder ="describe your task..." 
              >

              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="date" >Date For a Task</label>
              <input
                type="Date"
                className="form-control"
                id="date"
                required
                value={this.state.date}
                onChange={this.onChangeDate}
                name="date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="time" >Time For a Task</label>
              <input
                type="text"
                className="form-control"
                id="time"
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                name="time"
              />
            </div>
            <button onClick={this.saveTask} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
