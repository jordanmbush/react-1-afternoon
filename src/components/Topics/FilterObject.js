import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {name: "jordan", age: 26, gender: "male", favoriteActivity:"coding"},
                {name: "magaly", age: 27, gender: "female", isPregnant: true},
                {name: "dylan", age: 3, gender: "male"},
                {name: "adam", age: 1, gender: "male", isToddler: false},
                {name: "kayla", age: 27, gender: "female"},
                {name: "joe", age: 100,}
            ],
            userInput: '',
            filteredArray: []
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.filterArrayByProperty = this.filterArrayByProperty.bind(this);
    }

    updateUserInput(value) {
        this.setState({userInput: value});
    }

    filterArrayByProperty(){
        let filteredArray = this.state.unFilteredArray.slice();
        console.log(filteredArray);
        filteredArray = filteredArray.filter( e => {
            return e.hasOwnProperty(this.state.userInput);
        });
        this.setState({filteredArray: filteredArray, userInput: ''});
    }

    render () {
        console.log(this.state.filteredArray);
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterArrayByProperty(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectPB"> Filtered: { JSON.stringify(this.state.filteredArray) } </span>
            </div>
        );
    }


}