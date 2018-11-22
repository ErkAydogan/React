import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
import AddDictionary from './AddDictionary';
import Dictionary from './Dictionary';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    colors: [],
    prices: [],
    domain: ['Stonegrey','Midnight Black', 'Mystic Silver'],
    range: ['Dark Grey', 'Black', 'Silver'],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleGetData = () => {
    this.setState(() => ({ options: ['Apple iPhone 6s','Samsung Galaxy S8', 'Huawei P9'] }));
    this.setState(() => ({ colors: ['Dark Grey', 'Black', 'Silver'] }));
    this.setState(() => ({ prices: ['CHF 769','CHF 569', 'CHF 272'] }));
  };

  handleShowDictionary = () => {
    this.setState(() => ({ domains: ['Apple iPhone 6s','Samsung Galaxy S8', 'Huawei P9'] }));
    this.setState(() => ({ ranges: ['Apple iPhone 6s','Samsung Galaxy S8', 'Huawei P9'] }));
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };


  handleAddOption = (option,color,price) => {
    alert(option);
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    if (!color) {
      return 'Enter valid value to add item';
    } else if (this.state.colors.indexOf(color) > -1) {
      return 'This option already exists';
    }

    if (!price) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
      colors: prevState.colors.concat(color),
      prices: prevState.prices.concat(price)
    }));
  };

  
  handleAddDictionary = (domain,range) => {
alert(domain);
alert(range);

    if(!domain){
      return 'Enter valid domain to add a dictionary';
    } else if (this.state.domains.indexOf(domain) > -1) {
      return 'This domain already exists';
    }

    if (!range) {
      return 'Enter valid range to add a dictionary';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      domains: prevState.domains.concat(domain),
      ranges: prevState.ranges.concat(range),
     
    }));

  }


  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

     

      if (options) {
        this.setState(() => ({ options }));
      }
     
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
    

  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'Welcome';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              colors = {this.state.colors}
              prices = {this.state.prices}
              handleDeleteOptions={this.handleDeleteOptions}
              handleGetData={this.handleGetData}
              handleDeleteOption={this.handleDeleteOption}
            />
         
            <AddOption
              handleAddOption={this.handleAddOption}
            />
            <AddDictionary
              handleAddDictionary= {this.handleDictionaryOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
        <footer className="footer">@2018 All Rights Reserved</footer>
      </div>
    );
  }
}
