import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: '',
        }

        this.updateUserInput = this.updateUserInput.bind(this);
        this.updatePalindrome = this.updatePalindrome.bind(this);
    }

    updateUserInput(v){
        this.setState({userInput: v});
    }

    updatePalindrome(){
        let original = this.state.userInput;
        let reversed = original.split('').reverse().join('');
        
        this.setState({palindrome: original === reversed });
    }

    render () {

        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value)} value={this.state.userInput}></input>
                <button className="confirmationButton" onClick={ () => this.updatePalindrome()}>Check</button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome.toString()}</span>
            </div>
        );
    }


}