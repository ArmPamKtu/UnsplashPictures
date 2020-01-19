import React, { Component, useState, useEffect } from 'react';

import './App.scss';
import QuerySearch from './containers/search/querySearch';
import QueryList from './containers/queryList/queryList';
import Images from './components/images/images';


const App = () => {

    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [mappedImages, setMappedImages] = useState([]);

    return (
      <div className="content-wrapper">
        < QuerySearch 
          query={query}
          setQuery= {setQuery}
          setMappedImages={setMappedImages}
          setLoading={setLoading}
        />

        { loading ? 
          <div>Loading </div>
        :
          <div className="content">

            < Images mappedImages={mappedImages}/>
            < QueryList setQuery={setQuery}/>
          </div>
        }
      </div>
    );
}

export default (App);