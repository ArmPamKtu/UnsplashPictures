import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addQuery } from '../../action-initiators/queryAction';

class QueryAddition extends Component <{addQuery: any, query: string}> {
    render() {
        return (
            <button onClick={() => this.props.addQuery(this.props.query)} className="search-container__button">Save Query</button> 
        );
    }
}

function mapStateToProps(state : any) {
    return {
        queries: state.queryReducer
    };
}

function matchDispatchToProps(dispatch : any) {
    return bindActionCreators({addQuery: addQuery}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(QueryAddition);