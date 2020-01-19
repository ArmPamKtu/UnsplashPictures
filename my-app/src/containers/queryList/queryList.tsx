import React, { Component } from 'react';
import { connect } from 'react-redux';

import './queryList.scss';

class QueryList extends Component <{queries : [], setQuery : any, search : (query: string) => void}>  {

    render() {
        return (
            <div className="query-container">
                <div className="query-container__item query-container__item--first"> List of saved queries </div>
                { 
                    this.props.queries.map( (item : any) => {
                        return (
                            <button 
                            key={item} 
                            onClick={() => {
                                this.props.setQuery(item)
                                this.props.search(item)
                            }}
                            className="query-container__item"
                            >
                                {item}
                            </button>
                        );
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state : any) {                        
    return {
        queries: state.queries.list
    };
}

export default connect(mapStateToProps)(QueryList);

