import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <h2>LIST OF UNOREDRED TASKS</h2>
      <ul>
        <li>This is TODO item One</li>
        <li>This is TODO item Two</li>
        <li>This is TODO item Three</li>
      </ul>
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById("root"))

export default App;
