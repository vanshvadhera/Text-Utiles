import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

//Main function which is taking the props and returning the JSX
export default function Textarea(props) {
    //state for textarea value
    const [text, setText] = useState('');

    //state to handle the change in textarea
    const [mystyle, setmystyle] = useState({
        backgroundColor: 'white',
        Color: 'black'
    });

    //state to handle the change in buttontext
    const [buttontext, setbuttontext] = useState('Dark Mode');

    //changing text to upper case
    const changetouppercase = () => {
        console.log("button clicked")
        setText(text.toUpperCase());
        props.setAlert("Text changed to UPPER CASE");
    }
    
    //inserting new value to text 
    const textonchange = (event) => {
        console.log("text changed");
        setText(event.target.value);
    }

    //not working in text area
    const changetobold = () => {
        setText(text.bold());
    }

    //changing the mode of app
    const changemode = () => {
        if (mystyle.backgroundColor === 'white') {
            setmystyle({
                backgroundColor: 'black',
                color: 'white'
            })
            setbuttontext('Light Mode')
        }
        else {
            setmystyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setbuttontext('Dark Mode')
        }
    }

    //copy the text to clipboard
    const copytext = () => {
        navigator.clipboard.writeText(text);
    }
    return (
        <div>
            <h1 style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control"  value={text} onChange={textonchange} placeholder="Leave a comment here" id="Textarea" style={{ height: "100px" , backgroundColor: props.mode ==='dark'?'black':'white' , color: props.mode === 'dark'?'white':'black'}}></textarea>
                <label htmlFor="Textarea" style={{color: props.mode ==='dark'?'white':'black'}}>Comments</label>
                <br />
                <Button variant="outline-primary mx-2" onClick={changetouppercase}>To-UpperCase</Button>
                <Button variant='outline-danger mx-2' onClick={changetobold}>To-BoldCase</Button>
                <Button variant='outline-warning mx-2' onClick={changemode}>{buttontext}</Button>
                <Button variant='outline-secondary mx-2' onClick={copytext}>Copy Text</Button>
            </div>  
            <hr />
            <div style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <h5>{text.split(" ").length} words and {text.length} character</h5>
            </div>

        </div>
    )
}
