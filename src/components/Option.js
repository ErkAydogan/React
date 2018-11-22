import React from 'react';

const Option = (props) => (

  <div>
  <p>{props.count}. Product: {props.optionText} , Color: {props.colorText} , Price: {props.priceText}</p>


    <button  className="button button--link" onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
    <hr></hr>
  </div>
);


export default Option;