import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ["Jordan","Magaly","Jackson","Joe","Manuel","Kyle"],
            userInput: '',
            filteredArray: [],
        }

        this.updateUserInput = this.updateUserInput.bind(this);
        this.filterArray = this.filterArray.bind(this);
    }

    updateUserInput(value){
        this.setState({userInput: value});
    }

    filterArray(){
        let filteredArray = this.state.unFilteredArray.slice();
        console.log('test ',filteredArray);
        filteredArray = filteredArray.filter( e => e.includes(this.state.userInput));

        this.setState({ filteredArray: filteredArray , userInput: ''});
    }

    render () {
        console.log(this.state.userInput);

        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={ e => this.updateUserInput(e.target.value)} value={this.state.userInput}></input>
                <button className="confirmationButton" onClick={ () => this.filterArray()}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
            
        );
    }


}