import React, { Component } from 'react';
import { connect } from 'react-redux';

import './queryList.scss';

class QueryList extends Component <{queries : [], setQuery : any}>  {

    render() {
        return (
            <div className="query-container">
                { 
                    (this.props.queries as any).map( (item : any) => {
                        return (
                            <button 
                            key={item} 
                            onClick={() => this.props.setQuery(item)}
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

