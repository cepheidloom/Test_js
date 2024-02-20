import React from 'react';
import ReactDom from 'react-dom';

function Header() {
    return <h1>Develop. Preview. Ship.</h1>;
  }
   
  function HomePage() {
    return (
      <div>
        <Header />
      </div>
    );
  }
   
const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
root.render(<HomePage />);