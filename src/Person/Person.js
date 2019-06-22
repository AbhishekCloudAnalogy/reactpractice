import React from 'react';
import './Person.css'
  const person =(props)=>{
  const style ={
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
   return (

       <div className="Person">
         <p onClick={props.click}>I'm a {props.name}! and I am{props.age} ye ar old</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>
         {/*Two way binding*/}
       </div>


   )
  };
  export default person;
