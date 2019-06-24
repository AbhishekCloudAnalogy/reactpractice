import React from 'react';
import classes from './Person.css'
  const persons =(props)=>{

/*  const rnd = Math.random();
  if(rnd > 0.7) {
    throw new Error('Some thing went wrong');
  }*/
console.log('[Person.js] rendaring...');
   return (

       <div className={classes.Person}>
         <p onClick={props.click}>I'm a {props.name}! and I am{props.age} ye ar old</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>
         {/*Two way binding*/}
       </div>


   )
  };
  export default persons;
