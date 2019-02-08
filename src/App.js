import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    myLength: 0,
    myText:''   
   }

  showOutputLength = (event) => {
    this.setState({
      myLength: event.target.value.length,
      myText: event.target.value
    })
  }
  
  deleteCharComponentHandler = (index) => {    
    const charComponents = this.state.myText.split('');
    charComponents.splice(index,1);
    const final = charComponents.join('');
    this.setState({myText: final, myLength:final.length});    
  }

  
  render() {

    let charComponents = null;

    charComponents = ( 
      <div>
        {this.state.myText.split('').map((c,index) => {          
          return <CharComponent 
                    key={index} 
                    myText={c}   
                    click={()=> this.deleteCharComponentHandler(index)}/>      
        })
      }
      </div>  
    );

    return (

      <div className="App">
        <h1>Task 2</h1>

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <hr/>
        
        <input 
          type="text"
          onChange={(event) => this.showOutputLength(event)}/>

         <ValidationComponent myText = {this.state.myText} myLength = {this.state.myLength}/> 
         
         {charComponents}

      </div>

    );
  }
}

export default App;
