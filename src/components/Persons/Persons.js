import  React,{PureComponent} from 'react';
import Person from "./Person/Person";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class Persons extends PureComponent{
/*  static getDerivedStateFromProps(props, state) {
    console.log('[Person.js] getDerivedStateFromProps');
  }*/
/*componentWillReceiveProps(nextProps, nextContext) {
  console.log('[Person.js] componentWillReceiveProps');
}*/

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Person.js] shouldComponentUpdate');
    if( nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked){
      return true;
    }else {
      return false;
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot'};
  }
  /*componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('[Person.js] componentWillUpdate');
  }*/

  componentDidUpdate(prevProps, prevState, snapshot ) {
    console.log('[Person.js] componentDidUpdate');
    console.log('Snapshot! ',snapshot);
  }
 componentWillUnmount() {
   console.log('[Person.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map( (person, index) => {
      return (
        <Person
          click={()=> this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event)=> this.props.changed(event, person.id)}
          key={person.id}    />
      );
    });
  }
}


export default  Persons;
