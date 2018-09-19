import React from 'react';

// every props object has children. 
const Scroll = (props) => {
	//console.log(props);
	return (
		<div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
		{props.children}
		</div>
	);
};

export default Scroll;