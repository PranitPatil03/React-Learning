import React ,{useState} from 'react'


export default function TextForm(props) {

    const [Text,setText]=useState("Enter text here")

    const handleOnChange= (e)=>{
        console.log("handleOnChange")
        setText(e.target.value)
    }

    const OnClickUppercase= ()=>{
        console.log("UpperCase Btn Clicked..." + Text)
        let newText=Text.toUpperCase()
        setText(newText)
    }

    const OnClickLowercase= ()=>{
        console.log("UpperCase Btn Clicked..." + Text)
        let newText=Text.toLowerCase()
        setText(newText)
    }

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={OnClickUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={OnClickLowercase}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Text Summary</h2>
            <p> {Text.split(" ").length} Words And {Text.length} Characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes to Read.</p>
            <h2>Preview</h2>
            <p>{Text}</p>
            
        </div>
        </>
    )
}