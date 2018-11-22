import React from 'react';

   class AddOption extends React.Component {
     state = {
error: undefined
     };

     handleAddOption = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const color = e.target.elements.color.value.trim();
      const price = e.target.elements.price.value.trim();
alert(color);

      const error = this.props.handleAddOption(option,color,price);

      this.setState(() => ({ error }));
      alert(error);
      if (!error) {
        e.target.elements.option.value = '';
       
      }
    };
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type="text" name="option" placeholder="product"/>
            <input  type="text" name="color" placeholder="color"/>
            <input  type="text" name="price" placeholder="price" />
            <button className="button">Add Option</button>
          </form>

          
        </div>
      );
    }
  }
  

  export default AddOption;