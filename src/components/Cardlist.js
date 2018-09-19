import React from 'react';
import Card from './Card';


// pure function and pure components.
// it recieves an input and returns the same out put.
const CardlistComponent = ({ robots }) => {
	return (
		<div> 
		{
		robots.map((user, i) => {
	      return (
	        <Card 
	          key={i} 
	          id={robots[i].id} 
	          name={robots[i].name} 
	          email={robots[i].email} 
	          />
	      		);
	    })
   		}
   </div>
   );	
}

export default CardlistComponent;