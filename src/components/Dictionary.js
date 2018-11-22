import React from 'react';

const Dictionary = (props) => (

  <div>
  <p>{props.count}. Domain: {props.domainText} , Range: {props.rangeText}}</p>

{alert(props.domainText)}
{alert("SOZLUK")}
<button  className="button button--link" onClick={(e) => {
  props.handleDeleteOption(props.domainText);
}}
>
remove
</button>
  </div>
);


export default Dictionary;