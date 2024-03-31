import React, {Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search-component.jsx'


class App extends Component{
  constructor(){
    super();
    this.state = { 
    monster: [],
    searchfield:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster : users}));
  }
  render() {
    const {monster, searchfield} = this.state;
    const result = monster.filter(individual => 
      individual.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (
      <div className='App'>
       <h1>Monsters Rolodex</h1>
       
       <Search 
       placeholder="searchBar" 
       handleChange={e => this.setState({searchfield: e.target.value})}/>
      
       <div>
          <CardList monsters={result}/>
       </div>
      </div>
    )
  }
} 


export default App;
