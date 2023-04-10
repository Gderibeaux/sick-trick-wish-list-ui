import { Component } from 'react';
import './App.css';
import {fetchTricks} from '../../apiCalls'
import TrickContainer from '../trickContainer/TrickContainer';
import TrickForm from '../TrickForm/TrickForm'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tricks: [],
      error: ""
    }
  }

  componentDidMount(){
    fetchTricks()
    .catch((error) => {
      console.error(error.message)
      this.setState({error: error.message})
    })
    .then((data) => {
      console.log('data', data)
      this.setState({tricks: data})
     
    })
  }
  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] });
  }

  render() {
    console.log(this.state.tricks)
    return (
      <div className="App">
        <h1>{console.log('PROPS', this.state.tricks)}</h1>
        <h1>Sick Trick Wish List</h1>
       <TrickForm addTrick={this.addTrick}/>
       <TrickContainer tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;