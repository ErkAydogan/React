import React from 'react';

const Option = (props) => (

  <div>
  <p>{props.count}. ProducSt: {props.optionText} - Color: {props.colorText} - Price: {props.priceText}</p>


    <button  className="button button--link" onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);


export default Option;