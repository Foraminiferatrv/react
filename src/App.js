import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Yes, it does. '));

class App extends Component {
  state = {
    people: [
      { id: 'asd4', name: 'Frodo', age: 28 },
      { id: 'asd1', name: 'Legolas', age: 252 },
      { id: 'asd7', name: 'Gimley', age: 70 },
      { id: 'asd9', name: 'Goldberry', age: 600 }
    ],
    showPeople: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.people.findIndex( p => {
      return p.id === id;
    } );

    const person = { ...this.state.people[personIndex] };


    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState( { people: people } );
  }

  deletePersonHandler = ( personIndex ) => {
    const people = [...this.state.people];
    people.splice( personIndex, 1 );
    this.setState( { people: people } );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState( { showPeople: !doesShow } );
  }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let people = null;

    if ( this.state.showPeople ) {
      people = (
        <div>
          { this.state.people.map( ( person, index ) => {
            return <Person
              click={ () => this.deletePersonHandler( index ) }
              name={ person.name }
              age={ person.age }
              key={ person.id }
              changed={ ( event ) => this.nameChangedHandler( event, person.id ) }
            />
          } ) }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];

    if(this.state.people.length <= 2){
      classes.push('red');
    }
    if(this.state.people.length <= 1){
      classes.push('bold');
    }
    console.log(classes);
    return (
      
      <div className="App">
        <h1>Hi, It's react App</h1>
        <p className={classes.join(' ')}>This is working!</p>
        <button style={ style } onClick={ this.togglePersonHandler }>Switch name</button>
        { people }
      </div>
    
    );
  }
}

export default App;
