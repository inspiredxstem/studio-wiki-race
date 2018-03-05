import React, { Component } from 'react';
import WikiApi from './WikiApi.js'

export default class GameView extends Component {
    constructor(props){
        super(props);
        this.state = {
            summary: "Loading..."
        }
    }
    
    componentDidMount(){
        WikiApi.getSummary(this.props.title).then(
            function(text){
               this.set.state({
                   summary: text
               })
            });
    }
    
    render() {
        var currentTitle = this.props.title
        
        return (
            <div>
                {this.state.summary}
            </div>
        );
    }
}