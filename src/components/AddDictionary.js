import React from 'react';

   class AddDictionary extends React.Component {
     state = {
error: undefined
     };

     handleAddDictionary = (e) => {
      e.preventDefault();
      const domain = e.target.elements.domain.value.trim();
      const range = e.target.elements.range.value.trim();

      
      alert(domain);
      alert(range);

      const error = this.props.handleAddDictionary(domain,range);
     
      this.setState(() => ({ error }));
      alert(error);
      if (!error) {
        e.target.elements.domain.value = '';
        e.target.elements.range.value = '';
      }
      alert("dcs");
    };
    render() {
      return (
        <view>       
         <div>  
          {this.state.error && <p className="add-dictionary-error">{this.state.error}</p>}
          <form className="add-dictionary" onSubmit={this.handleAddDictionary}>
            <input className="add-dictionary__domain" type="text" name="domain" placeholder="Domain"/>
            <input  className="add-dictionary__range" type="text" name="range" placeholder="Range"/>
            <button className="button">Add Dictionary</button>
          </form>

          
        </div>
        </view>
      );
    }
  }
  

  export default AddDictionary;