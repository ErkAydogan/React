import React from 'react';

const Option = props => {
	// console.log(props);
	return (
		<div>
			<p className="add-option-color">
				{props.count}. Product: {props.optionText} , Color: {props.colorText} ,
				Price: CHF {props.priceText}
			</p>

		
			<hr />
		</div>
	);
};
export default Option;
