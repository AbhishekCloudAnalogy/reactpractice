import React, {Component} from 'react';
import classes from './Person.css'
  class Person extends Component {
   render() {
     console.log('[Person.js] rendaring...');
     return (

       <div className={classes.Person}>
         <p onClick={this.props.click}>I'm a {this.props.name}! and I am{this.props.age} ye ar old</p>
         <p>{this.props.children}</p>
         <input type="text" onChange={this.props.changed} value={this.props.name}/>
         {/*Two way binding*/}
       </div>


     )
   }
  }

/*  const rnd = Math.random();
  if(rnd > 0.7) {
    throw new Error('Some thing went wrong');
  }*/


  export default Person;
