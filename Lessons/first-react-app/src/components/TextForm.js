import React ,{useState} from 'react'


export default function TextForm(props) {

    const [Text,setText]=useState("Enter text here")

    const handleOnChange= (e)=>{
        console.log("handleOnChange")
        setText(e.target.value)
    }

    const handleOnClick= ()=>{
        console.log("UpperCase Btn Clicked..." + Text)
        let newText=Text.toUpperCase()
        setText(newText)
    }

    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
        </div>
    )
}