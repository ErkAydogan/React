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


      const error = this.props.handleAddOption(option,color,price);

      this.setState(() => ({ error }));
      alert(error);
      if (!error) {
        e.target.elements.option.value = '';
        e.target.elements.color.value = '';
        e.target.elements.price.value = '';
      }
     };

    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type="text" name="option" placeholder="Product"/>
            <input  className="add-color__input" type="text" name="color" placeholder="Color"/>
            <input  className= "add-price__input" type="text" name="price" placeholder="Price" />
            <button className="button">Add Dataset</button>
          </form>
        </div>
      );
    }
  }
  

  export default AddOption;