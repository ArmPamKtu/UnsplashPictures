import React from 'react';
import QueryAddition from '../queryAddition/queryAddition';

import './querySearch.scss';

interface IQuerySearchProps {
    query: string;
    setQuery: (query: string) => void;
    setMappedImages: (images: any) => void;
    setLoading: (loading: boolean) => void;
    search: any;
}

const QuerySearch = (props: IQuerySearchProps) => {

    const onChangeHandle = (e : any) => {
        props.setQuery(e.target.value);
    };

    return (
        <div className="search-container">
            <input type="text" value={props.query} placeholder="Key words" onChange={(e) => onChangeHandle(e)} className="search-container__search-field"/>
            <button onClick={() => {
              props.setLoading(true);
              props.search(props.query)
            }} className="search-container__button search-container__button--first">Search</button>

            <QueryAddition query={props.query}/>
        </div>
    );
}

export default (QuerySearch);
