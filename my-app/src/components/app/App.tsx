import React, { useState } from 'react';
import QuerySearch from '../../containers/search/querySearch';
import QueryList from '../../containers/queryList/queryList';
import Images from '../images/images';

import './App.scss';

const App = () => {

    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [mappedImages, setMappedImages] = useState([]);


    const searchPhotos = (query : string ) => {
      const fullQuery = query.replace(/ /g, "-");
      let clientId = '595bc6100e61af007c0c3d15c2fb2a87774de20d04fecfe4c7cb05c5776cb869';
      let url = 
      "https://api.unsplash.com/search/photos/?client_id=" + 
      clientId + '&query=' + fullQuery;

      fetch(url)
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          const mappedImages = data.results.map( (item : any) => {
              return {
                id: item.id,
                src: item.urls.regular,
                alt: item.alt_description,
                desctiption: item.description,
                downloadLink: item.links.download,
                downloadTrigger: item.download_location + "?client_id=595bc6100e61af007c0c3d15c2fb2a87774de20d04fecfe4c7cb05c5776cb869",
                owner: item.user.name,
                referralLink: item.user.links.html + "?utm_source=Image_Fetcher&utm_medium=referral",
              } 
          });
          setMappedImages(mappedImages);
        })

      setLoading(false);
    }

    return (
      <div className="content-wrapper">
        < QuerySearch 
          query={query}
          setQuery= {setQuery}
          setMappedImages={setMappedImages}
          setLoading={setLoading}
          search={searchPhotos}
        />

        { loading ? 
          <div className="content-wrapper__message">Loading </div>
        :
          <div className="content-wrapper__query-search">
            < Images mappedImages={mappedImages}/>
            < QueryList setQuery={setQuery} search={searchPhotos}/>
          </div>
        }
      </div>
    );
}

export default (App);