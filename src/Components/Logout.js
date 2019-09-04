import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Lgout extends Component {
    render(){
        return (
            <div>
                <h1> Sampai Jumpa Kembali </h1>
                <Link to="/"> Login Kembali </Link>
            </div>
        )
    }
}