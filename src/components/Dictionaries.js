import React from 'react';
import Dictionary from './Dictionary';

const Dictionaries = (props) => (
  
  <div className="widget-header">
  <h3 className="widget-header__title">Your Dataset</h3>
  <button onClick={this.props.handleShowDictionary}>Initial Data</button>
    {props.domains.length === 0 && <p className="widget__message">Please add a Dictionary to get started!</p>}
    {
      props.domains.map((domains,index) => (
<div key ={domains}>
<Dictionary
      domainText={domain}      
      rangeText = {props.range[index]}
      count= {index + 1}
      handleDeleteOption={props.handleDeleteOption}
    />
   
    </div> 
      ))
      
    }
  
  
  </div>
);

  export default Dictionaries;


    /* <Option
          key={option}
          optionText={option}      
          count= {index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
*/