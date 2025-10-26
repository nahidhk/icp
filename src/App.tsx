import React from 'react';
import databasesImg from './assets/json.png'


function App() {
  return (
   <div className="flex center medel fill dark">
    <div className="flex center medel row">
      <img className='logo' src={databasesImg}  />
      <h1>
        ICX JSON API SERVER
      </h1>
      <code>
        {window.location.href}api/data/[yourJsonFile].json
      </code>
    </div>
   </div>
  );
}

export default App;
