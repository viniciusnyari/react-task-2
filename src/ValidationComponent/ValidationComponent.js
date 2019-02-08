import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {

    let validationMessage = "Text long enough";

    if (props.myLength <= 5) {
        validationMessage = "Text too short";        
    }

    return (
        <div className="ValidationComponent">
            <p>Text: {props.myText}</p>
            <p>Length: {props.myLength}</p>
            <p>Message: {validationMessage}</p>
        </div>
    )
};

export default validationComponent;