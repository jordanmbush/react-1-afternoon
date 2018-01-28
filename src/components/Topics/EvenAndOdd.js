import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }

        this.updateUserInput = this.updateUserInput.bind(this);
        this.splitEvensAndOdds = this.splitEvensAndOdds.bind(this); 
    }

    updateUserInput(value){
        this.setState({userInput: value,});
    }

    splitEvensAndOdds(){
        // Check if userInput is empty - exit if it is
        // Null value is passed to oddArray if mixedArray is empty
        if(this.state.userInput === '') return;
        let mixedArray = this.state.userInput.split(",").map( e => parseInt(e));
        let evenArray = mixedArray.filter( e => e % 2 === 0);
        let oddArray = mixedArray.filter( e => e % 2 !== 0);

        this.setState({
            evenArray: evenArray,
            oddArray: oddArray,
            userInput: '',
        });
        
    }


    render () {
        console.log(this.state);

        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value)} value={this.state.userInput}></input>
                <button className="confirmationButton" onClick={() => this.splitEvensAndOdds()}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }
}
