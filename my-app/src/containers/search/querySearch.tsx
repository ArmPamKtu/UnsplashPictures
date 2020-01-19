import React, {useState, Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addQuery } from '../../action-initiators/queryAction';

import QueryAddition from '../queryAddition/queryAddition';


import './querySearch.scss';

interface IQuerySearchProps {
    query: string;
    setQuery: (query: string) => void;
    setMappedImages: (images: any) => void;
    setLoading: (loading: boolean) => void;
}

const QuerySearch = (props: IQuerySearchProps) => {

    const searchPhotos = () => {
        //await props.setLoading(true);

        const fullQuery = props.query.replace(/ /g, "-");
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
            props.setMappedImages(mappedImages);
          })

        props.setLoading(false);
    }
  
    const onChangeHandle = (e : any) => {
        props.setQuery(e.target.value);
    };

    return (
        <div className="search-container">
            <input type="text" value={props.query} onChange={(e) => onChangeHandle(e)} className="search-container__search-field"/>
            <button onClick={() => {
              props.setLoading(true);
              searchPhotos()
            }} className="search-container__button">Search</button>

            <QueryAddition query={props.query}/>
        </div>
    );
}



export default (QuerySearch);
