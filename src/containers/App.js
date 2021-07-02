import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//import { render } from '@testing-library/react';



function App(){
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield:''
    //     }
    // }
    const  [robots, setRobots] = useState([]);
    const  [searchfield, setSearchfield] = useState('');
    const  [count, setCount] = useState(0);


    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(Response => Response.json())
    //     .then(users => this.setState({robots:users}));
    // }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => setRobots(users));
        console.log(count);
    },[count])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    
    }

        // const {robots, searchfield} = this.state;

        const filteredRobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log(filteredRobots);
        return !robots.length? 
        <h1>Loading</h1>:
        (
            <div className = 'tc'>
            <h1 className = 'f2'>Robofriends</h1>
            <button onClick ={()=>setCount(count+1)}>click me</button>
           <SearchBox searchChange ={onSearchChange}/>
           <Scroll>
               <ErrorBoundry>
                   <CardList robots = {filteredRobots}/>
               </ErrorBoundry>

           </Scroll>
       </div>
        );
}

export default App;