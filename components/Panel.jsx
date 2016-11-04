/**
 * Created by Pavlovens on 04.11.2016.
 */
"use strict"
import React, { Component } from 'react';

export default class Panel extends Component{

    constructor(){
        super();
        this.state = {childState: "childstate"}
    }



    render(){

        const tick = this.props.children;

        return(
            <div onClick={tick}>
                <h1>Child state {this.state.childState}</h1>
                <h2>Parent state in child {tick} </h2>
            </div>
        )
    }


}