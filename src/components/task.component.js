import React, { Component } from "react";
import TaskDataService from "../services/task.service";
import '../App.css';



export default class Task extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);

    this.getTask = this.getTask.bind(this);
     this.updateTask = this.updateTask.bind(this);
  
    this.deleteTask = this.deleteTask.bind(this);

    this.state = {
      currentTask: {
        id: null,
        title: "",
        position: "",
        description: "",
        date: Date,
        time: ""

      },
      message: ""
    };
  }

  componentDidMount() {
    this.getTask(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentTask: {
          ...prevState.currentTask,
          title: title
        }
      };
    });
  }
onChangePosition(e) {
    const position = e.target.value;

    this.setState(prevState => ({
        currentTask: {
            ...prevState.currentTask,
            position:position
        }
    }));
}


  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentTask: {
        ...prevState.currentTask,
        description: description
      }
    }));
  }
 
  onChangeDate(e){
    const date = e.target.value;
    this.setState(prevState => ({
      currentTask: {
        ...prevState.currentTask,
        date: date
      }
    }));
  }
  onChangeTime(e){
    const time = e.target.value;
    this.setState(prevState => ({
      currentTask: {
        ...prevState.currentTask,
        time: time
      }
    }));
  }


  getTask(id) {
    TaskDataService.get(id)
      .then(response => {
        this.setState({
          currentTask: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

   updateTask() {
    TaskDataService.update(
      this.state.currentTask.id,
      this.state.currentTask
    )
      .then(response => {
        this.setState({
          message: "The task was updated successfully!"
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  deleteTask() {    
    TaskDataService.delete(this.state.currentTask.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/tasks')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTask } = this.state;

    return (
      <div>
        {currentTask ? (
          <div className="edit-form">
            <h4>Task</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTask.title}
                  onChange={this.onChangeTitle}
                />
              </div>
             
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  value={currentTask.position}
                  onChange={this.onChangePosition}
                />
              </div>
               
         
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  value={currentTask.description}
                 
                  onChange={this.onChangeDescription}
                  >
                
                  </textarea>
              </div>

              <div className="form-group">
                <label htmlFor="date">Date For a Task</label>
                <input
                  type="Date"
                  className="form-control"
                  id="date"
                  value={currentTask.date}
                  onChange={this.onChangeDate}
                />
              </div>
              <div className="form-group">
              <label htmlFor="taskTime" >Time For a Task</label>
              <input
                type="text"
                className="form-control"
                id="time"
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                name="Time"
              />
            </div>
            </form>

            <button
             className ="btn"
              onClick={this.deleteTask}
            >
              Delete
            </button>
              
             <button
              type="submit"
              className="btn"
              onClick={this.updateTask}
            >
              Update
            </button>
           
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Task...</p>
          </div>
        )}
      </div>
    );
  }
}
