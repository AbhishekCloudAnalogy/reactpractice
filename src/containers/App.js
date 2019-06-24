import React, {Component, useState} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
class App extends Component {
 constructor(props){
   super(props);
   console.log('[App.js] contructor');

 }
  state = {
    persons: [
      {id:'1',name: 'Max1', age: 28},
      {id:'2',name: 'Max2', age: 38},
      {id:'3', name: 'Max3', age: 48}

    ],
    otherState: 'Some other value',
    showPersons: false
  };
 static getDerivedStateFromProps(props,state){
   console.log('[App.js] getDerivedStateFromProps',props);
   return state;
 }
/* componentWillMount() {
   console.log('[App.js] componentWillMount');
 }*/

  componentDidMount() {
   console.log('[App.js] componentDidMount');
 }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    this.setState(
      {
        persons: [
          {id:'1',name: newName, age: 28},
          {id:'2',name: 'Max2', age: 38},
          {id:'3', name: 'Max3', age: 48}

        ]
      }
    )
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id=== id;
    });
    const person ={
      ...this.state.persons[personIndex]
    } ;
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
   // const person = Object.assign({}, this.state.persons[personIndex]);
    this.setState(
      {
        persons: persons
      }
    )
  };
  deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  };
  toggelePersonHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons:!doesShow});
    console.log('State', this.state.showPersons);
  };

  render() {
    console.log('[App.js] render');
     let persons =null;
    if( this.state.showPersons ){
      /*Best way of rendering content*/
       persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
             changed={this.nameChangeHandler}/>);
         {/* {this.state.persons.map( (person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                           click={()=> this.deletePersonHandler(index)}
                           name={person.name}
                           age={person.age}
                           changed={(event)=> this.nameChangeHandler(event, person.id)}
                           key={person.id}    />
              </ErrorBoundary>
          })}*/}
     {/*     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'Ram')}
                  changed={this.nameChangeHandler}>My Hobbies racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>*/}
      // style.backgroundColor ='red';

        }


    return (

      <div className={classes.App}>
      <Cockpit
               title={this.props.appTitle}
               showPersons={this.state.showPersons}
               persons={this.state.persons}
               clicked={this.toggelePersonHandler}
               />

        {persons/*{this.state.showPersons ?
          persons : null}*/}
      </div>
    );
    // return React.createElement('div',{className: 'App'} ,React.createElement('h1',null, 'Does this work now?'))
  }
}

export default App;

































/*
Functional component
***
const app = props => {
 const  [personsState , setPersonsState] = useState ( {
    persons: [
      {name:'Max', age:28},
      {name:'Max2', age:38},
      {name:'Max3', age:48}

    ],
  });
 const  [otherState, setOtherState] = useState('Some other values');
 console.log(personsState, otherState);
  const switchNameHandler =(newName) => {
    console.log('Was clicked');
    setPersonsState(
      {
        persons: [
          {name:'Abhishek ', age:28},
          {name:newName, age:38},
          {name:'Max3', age:48}

        ]
      }
    )
  };

 const nameChangeHandler =(event) =>{
   setPersonsState(
     {
       persons: [
         {name:'Abhishek ', age:28},
         {name:event.target.value , age:38},
         {name:'Max3', age:48}

       ]
     }
   )
  };
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: 'dpx',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm aReact App</h1>
      <p>This is really working</p>
      <button style={style} onClick={()=> switchNameHandler('Ram Rajan')}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}
      click={switchNameHandler.bind(this,'Ram')}
      changed={nameChangeHandler}>My  Hobies racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );

};

export default app;
*/





























