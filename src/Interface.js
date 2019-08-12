import React, { Component } from 'react'

class Interface extends Component{

    constructor(props){
        super(props)
        this.state = {
            currentAnswer: 0,
            input: "",
            randomIndex: ""
            //Math.floor(Math.random() * 20)
        }

        this.handleChange = this.handleChange.bind(this);
        this.ask = this.ask.bind(this);
    }

    handleChange(event){
        this.setState({input: event.target.value});
    }

    ask(){
        if(this.state.input){
            this.setState({randomIndex: Math.floor(Math.random() * 20)})
            this.setState({input: ""})
        }
    }
   
    render(){

        let possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt', 
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Do not count on it', 
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
          ];

          const answer = possibleAnswers[this.state.randomIndex]

        return(
            <div>
               <h2>Enter your question below: </h2>
                    <input value={this.state.input} onChange={this.handleChange}></input>
                    <p>
                        <button onClick={this.ask}>Ask the magic eight ball!</button>
                    </p>
                    <p>
                        <h1>{answer}</h1>
                    </p>
                    
            </div>
        )
    }
}

export default Interface