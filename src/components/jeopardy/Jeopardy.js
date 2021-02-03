import React, { Component } from "react";
//import our service
import JeopardyService from "../../service/jeopardyService";
import JeopardyDisplay from "../../Pages/JeopardyPages";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }

  handleAnswer = () => {
    let score = this.state.score;
    if (this.state.answer.toLowerCase() === this.state.data.answer.toLowerCase()) {
      score += this.state.data.value;
    } else {
      score -= this.state.data.value;
    }

    this.setState({
      score,
      answer: "",
    });
    this.getNewQuestion();
  };

  handleChange = (event) => {
    let data = { ...this.state };
    data[event.target.name] = event.target.value;
    this.setState(data);
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  render() {
    console.log(this.state.data);

    return (
      <JeopardyDisplay
        category={this.state.data.category && this.state.data.category.title}
        question={this.state.data.question}
        pv={this.state.data.value}
        score={this.state.score}
        answer={this.state.answer}
        handleChange={this.handleChange}
        handleAnswer={this.handleAnswer}
      />
    );
  }
}
export default Jeopardy;

//   updateScore = (event) => {
//     event.preventDefault();
//     let userAnswer = this.state.answer.toLowerCase();
//     let dataAnswer = this.state.data.answer.toLowerCase();

//     if (dataAnswer === userAnswer) {
//       this.setState((state, props) => ({
//         score: state.score + state.data.value,
//       }));
//     } else {
//       this.setState((state, props) => ({
//         score: state.score - state.data.value,
//         answer: "",
//       }));
//     }
//     this.getNewQuestion();
//   };

//   //display the results on the screen
//   render() {
//     let category = "";
//     if (this.state.data.category) {
//       category = this.state.data.category.title;
//     }
//     return (
//       <div>
//         <h2>{this.state.score}</h2>
//         <h5>{this.state.data.question}</h5>
//         <h5>{this.state.data.value}</h5>
//         <h5>{category}</h5>
//         <form onSubmit={this.updateScore}>
//           <input type="text" value={this.state.answer} onChange={this.handleChange} />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
