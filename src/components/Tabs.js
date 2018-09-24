import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



export default class TabsTab extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
};


 //easier faster way to use arrow functions 
 handleDeleteOptions = () => {
    this.setState(() => ({options: [] }));
};

handleDeleteOptionSingle = (optionRemove) => {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionRemove !== option)
    }));
};


handleAddOption = (option) => {
    if (!option) {
        return 'Enter valid value to add an item.'
    } else if (this.state.options.indexOf(option) > -1) {
        return 'This item already exists'
    }
    this.setState((prevState) =>({
        options: prevState.options.concat([option]) 
    }));
};

handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() =>({
        selectedOption : option
    }));
};

handleModalClose = () => {
    this.setState(()=> ({
        selectedOption: undefined
    }));
};

// componentDidMount() {
//     try{
//         const json = localStorage.getItem('options');
//         const options = JSON.parse(json);
//     if(options){
//         this.setState(() => ({options}));
//     }
//     }catch (e){
//     //Do nothing at all 
//     }
    
// }
    componentDidUpdate(prevProps, prevState) {
     if(prevState.options.length !== this.state.options.length) {
         const json = JSON.stringify(this.state.options);
    //    localStorage.setItem('options', json);
     }  
}



render() {
    return(
        <Tabs>
        <TabList>
          <Tab>Depression</Tab>
          <Tab>Anxiety</Tab>
          <Tab>Nonsense</Tab>
        </TabList>

        <TabPanel>
        {/* <div className="container"> 
            <h2 className="prompt-text">When I feel all alone and like giving up...</h2>
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
            <OptionModal 
                selectedOption={this.state.selectedOption}
                handleModalClose={this.handleModalClose}
            />*/}
            <div className="container">
                <h2 className="prompt-text">When I feel all alone and like giving up...</h2>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <div className="widget">
                    <AddOption handleAddOption={this.handleAddOption} />
                    <Options 
                    options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionSingle={this.handleDeleteOptionSingle}/>
                </div>
            </div>
        
        </TabPanel>

        <TabPanel>
          <div className="container">
                <h2 className="prompt-text">Feeling jittery and a panic coming on so I'll...</h2>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <div className="widget">
                    <AddOption handleAddOption={this.handleAddOption} />
                    <Options 
                    options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionSingle={this.handleDeleteOptionSingle}/>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
        <div className="container"> 
            <h2 className="prompt-text">In response to nonsense yah suck teeth and...</h2>
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
            <OptionModal 
                selectedOption={this.state.selectedOption}
                handleModalClose={this.handleModalClose}
            />
            <div className="widget">
                <AddOption handleAddOption={this.handleAddOption} />
                <Options 
                options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOptionSingle={this.handleDeleteOptionSingle}/>
            </div>
        </div>
        </TabPanel>
      </Tabs>
    );
}
   
}