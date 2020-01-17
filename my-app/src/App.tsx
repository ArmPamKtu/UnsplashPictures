import React, { Component, useState, useEffect } from 'react';

import './App.scss';
import InfoList from './containers/InfoList';

import { simpleAction } from './action-initiators/simpleAction';





const App = () => {


    return (
      <div className="App">
        <header className="App-header">
          
          <h1>UserName List:</h1>
          < InfoList />
          <hr/>
          <h2>user Details:</h2>
          <div>
          {/*<pre>
            {
              JSON.stringify()
            }
          </pre>*/}

            <input type="text" />
            <button>Search</button>
            <button>Save Query</button>
          </div>

        </header>
      </div>
    );
}


export default (App);
