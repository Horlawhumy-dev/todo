import React, { Component } from 'react';
import Todo from './Main/main'

class Container extends Component {
    render(){
        return (
            <div>
                <Todo val={this.props.inputVal}/>
            </div>
        )
    }
}

export default Container;