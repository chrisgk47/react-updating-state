import React, {Component} from 'react';

class ClickityClick extends Component {
    constructor(){
        super()
        //initial state
        this.state = {
            hasBeenClicked: false
        }
    }
    //when handleClick is called, setState will update the state
    handleClick = () => {
        if(this.state.hasBeenClicked === false){
            this.setState({
                hasBeenClicked: true
            })
        } else {
            this.setState({
                hasBeenClicked: false
            })
        }
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            </div>
        )
    }
}

export default ClickityClick