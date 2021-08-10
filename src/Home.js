

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class Home extends React.Component {
   render() {
     return (
       <div className ="home">
       <h1 className = "title">Keep your tasks everday here</h1>
       <div className="links">
            <li className="nav-item">
            <a href= "/tasks" className="nav-link">
              Click here to view your saved tasks 
           </a>
            </li>
            <li className="nav-item">
              <a href = "/add" className="nav-link">
                Click here to add new tasks 
              </a>
            </li>
          </div>
   
       </div>
     );
   }
 }
 
 ReactDOM.render(<Home />, document.getElementById('root'));
 export default Home;