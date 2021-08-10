import axios from "axios";

export default axios.create({
  baseURL: "https://back-end-task-app.herokuapp.com/api",
  headers: {
    "Content-type": "task-management-system"
  }
});