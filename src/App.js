import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";


function App() {
  return (
    <div>
      <Header />
      <MainBody />
      <Footer />
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById("root"))

export default App;
