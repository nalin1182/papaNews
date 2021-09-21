import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


import Navbar from './Components/Navbar';
import News from './Components/News';

const App = ()=>{
  const pageSize = 9;

  const [progress,setProgress] =  useState(0);
  

    return (
      <Router>

        <LoadingBar
          color='#f11946'
          progress={progress}
        />

        <Navbar />

        <Switch>
          <Route exact path="/"><News  setprogress={setProgress}   key="general" pageSize={pageSize} category={'general'} /></Route>
          <Route exact path="/business"><News  setprogress={setProgress}   key="business" pageSize={pageSize} category={'business'} /></Route>
          <Route exact path="/entertainment"><News  setprogress={setProgress}   key="entertainment" pageSize={pageSize} category={'entertainment'} /></Route>
          <Route exact path="/health"><News  setprogress={setProgress}   key="health" pageSize={pageSize} category={'health'} /></Route>
          <Route exact path="/science"><News  setprogress={setProgress}   key="science" pageSize={pageSize} category={'science'} /></Route>
          <Route exact path="/sports"><News  setprogress={setProgress}   key="sports" pageSize={pageSize} category={'sports'} /></Route>
          <Route exact path="/technology"><News  setprogress={setProgress}   key="technology" pageSize={pageSize} category={'technology'} /></Route>
        </Switch>

      </Router>

    );

}

export default App;
