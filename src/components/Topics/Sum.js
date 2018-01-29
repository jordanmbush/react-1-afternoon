import React, {Component} from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
        this.updateNum1 = this.updateNum1.bind(this);
        this.updateNum2 = this.updateNum2.bind(this);
        this.updateSum = this.updateSum.bind(this);
    }

    updateNum1(num){
        this.setState({num1: parseInt(num, 10)});
    }

    updateNum2(num){
        this.setState({num2: parseInt(num, 10)});
    }

    updateSum(){
        let sum = this.state.num1 + this.state.num2;
        this.setState({sum: sum});
    }


    render () {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number" onChange={ (e) => this.updateNum1(e.target.value)}></input>
                <input className="inputLine" type="number" onChange={ (e) => this.updateNum2(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.updateSum()}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        );
    }


}