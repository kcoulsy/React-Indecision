import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  // constructor(props) {
  //   super(props);
  //   this.handeDeleteOptions = this.handeDeleteOptions.bind(this);
  //   this.handlePickOption = this.handlePickOption.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteSingle = this.handleDeleteSingle.bind(this);
  //   this.state = {
  //     options: []
  //   };
  // }

  //changed to new syntax
  handeDeleteOptions = () =>  {
    this.setState(() => ({
      options:[]
    }));
  }
  handleDeleteSingle = (optionToRemove) => {
    this.setState((prevState)=> ({
      options: prevState.options.filter((option)=>{
        return optionToRemove !== option;
      })
    }));
  }
  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState((prevState) => ({selectedOption: option}));
  }
  handleAddOption = (option) => {
    if(!option){
      return 'Enter Valid Value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This is already there!';
    }
    this.setState((prevState) => ({options: prevState.options.concat([option]) }) );
  }
  handleClearSelectedOption = () => {
      this.setState(() => ({selectedOption: undefined}));
  }

  componentDidMount() {
    try {
      //Using try catch, if its not valid json then do nothing
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({options}));
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('componentDidUpdate');
    }
  }
  componentWillUnmount(){
    console.log('umounted');
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Let us make your decision';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption}
            />

          <div className="widget">

            {
              <Options
                options={this.state.options}
                handeDeleteOptions={this.handeDeleteOptions}
                handleDeleteSingle={this.handleDeleteSingle}
              />
            }
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>


        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
          />
      </div>
    );
  }
};
