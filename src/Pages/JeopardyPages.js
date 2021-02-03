function JeopardyDisplay(props) {
  return (
    <div>
      <div>Question: {props.question}</div>
      <div>Category: {props.category}</div>
      <div>Point Value: {props.pv}</div>
      <div>Users score: {props.score}</div>
      <div>
        <input name="answer" type="text" value={props.answer} onChange={props.handleChange} />
        <button onClick={props.handleAnswer}>Click and Check</button>
      </div>
    </div>
  );
}
export default JeopardyDisplay;
