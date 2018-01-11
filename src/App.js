import React, { Component } from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {

  state = {
    friends: friends,
    count: 0,
    correct: 0,
    incorrect: 0
  };

  

  handleIncrement = (id) => {
    console.log(friends[id], friends[id].value)
    if (friends[id].value===true){
      this.setState({ count: this.state.count + 1 });
      this.setState({ correct: this.state.correct + 1 });
     friends[id].value=false
    }
    else if (friends[id].value===false){
      console.log(friends[id].value)
      this.setState({ count: this.state.count + 1 });
      this.setState({ incorrect: this.state.incorrect + 1 });
    }
    else if(this.state.count===12) {
    this.setState({
      friends: friends,
      count: 0,
      correct: 0,
      incorrect: 0
    })
    }
  };

  shuffleCards = () => {
    
    const friends = this.state.friends.map(a =>
      [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
 
  this.setState({ friends });
  };



  render() {
    return (
      <Wrapper>
      <Counter 
      count={this.state.count}
      correct={this.state.correct}
      incorrect={this.state.incorrect}
      />
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <ClickyCard
            shuffleCards={this.shuffleCards}
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
