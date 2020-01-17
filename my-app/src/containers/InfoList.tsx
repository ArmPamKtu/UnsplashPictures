import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class InfoList extends Component {
    render() {
        return (
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}

function mapStateToProps(state : any) {
    return {
        information: state.info
    };
}

export default connect(mapStateToProps)(InfoList);