import React ,{useState} from 'react'


export default function TextForm(props) {

    const [Text,setText]=useState("")

    const handleOnChange= (e)=>{
        setText(e.target.value)
    }

    const OnClickUppercase= ()=>{
        let newText=Text.toUpperCase()
        setText(newText)
    }

    const OnClickLowercase= ()=>{
        let newText=Text.toLowerCase()
        setText(newText)
    }

    const OnClickClear= ()=>{
        let Text=''
        setText(Text)
    }

    const OnClickUndo= ()=>{
        let newText=Text.toString().substring(0,Text.length-1)
        setText(newText)
    }

    const OnClickRedo= ()=>{
        let newText=Text.toString().substring(0,Text.length)
        setText(newText)
    }

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={OnClickUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={OnClickLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={OnClickClear}>Clear All</button>
            <button className="btn btn-primary mx-3" onClick={OnClickUndo}>Undo</button>
            <button className="btn btn-primary mx-3" onClick={OnClickRedo}>Redo</button>
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