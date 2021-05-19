import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//import { render } from '@testing-library/react';



class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log(filteredRobots);
        return !robots.length? 
        <h1>Loading</h1>:
        (
            <div className = 'tc'>
            <h1 className = 'f2'>Robofriends</h1>
           <SearchBox searchChange ={this.onSearchChange}/>
           <Scroll>
               <ErrorBoundry>
                   <CardList robots = {filteredRobots}/>
               </ErrorBoundry>

           </Scroll>
       </div>
        );
}
}

export default App;