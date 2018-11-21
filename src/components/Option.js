import React from 'react';

const Option = (props) => (

  <div className="option">
  <p className= "option__text">{props.count}. Product: {props.optionText}</p>

    <button  className="button button--link" onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);


export default Option;