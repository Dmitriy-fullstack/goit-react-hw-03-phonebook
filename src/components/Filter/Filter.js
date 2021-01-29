import  { Component } from 'react'
import PropTypes from 'prop-types'

import shortid from 'shortid';

export default class Filter extends Component {
state ={
    filter: ''
}

filterInputId = shortid.generate();
  
    render() {
        
        return (
            <div>
                <label htmlFor={this.filterInputId}>Find contacts by name:</label>
                <input type="text" id={this.filterInputId} name="filter" value={this.props.value} onChange={(e) => this.props.onChangeFilter(e.target.value)}/>
                
            </div>
        )
    }
}

Filter.propTypes ={
    filter: PropTypes.string,
}