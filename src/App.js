import React, {Component}  from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = 
  {
    text :""
  };
  handleAdd = async e =>
  {
    await this.setState({
        text : e.target.value
    })

  }
  handleSubmit = e =>
  {
      e.preventDefault();
      console.log(this.state.text);
      let formData = new FormData();
      formData.append("text",this.state.text);
      const url = "http://localhost:80/reactCorsIndex/";
      axios.post(url,formData)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
  }

  render()
  {
    return(
      <div className="App">
       <input 
       onChange={this.handleAdd}
       type="text"  
       className="form-control" 
       value = {this.state.text}
       id="text"
       placeholder="enter some text" />
       <br/>

       <button 
       onClick = {this.handleSubmit} 
       className ="btn btn-success" 
       id="submit"> Submit </button>
       </div>
      )
  }
}



export default App;
