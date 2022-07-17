import React ,{useState} from 'react'


export default function TextForm(props) {

    const [Text,setText]=useState("")

    const handleOnChange= (e)=>{
        setText(e.target.value)
    }

    const OnClickUppercase= ()=>{
        let newText=Text.toUpperCase()
        setText(newText)
        props.showAlert("Text is Converted into UpperCase","success")
    }

    const OnClickLowercase= ()=>{
        let newText=Text.toLowerCase()
        setText(newText)
        props.showAlert("Text is Converted into LowerCase","success")
    }

    const OnClickClear= ()=>{
        let Text=''
        setText(Text)
        props.showAlert("Text is Clear","success")
    }

    const OnClickUndo= ()=>{
        let newText=Text.toString().substring(0,Text.length-1)
        setText(newText)
    }

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea style={{backgroundColor:props.mode === 'dark'?'white':'dark',color:props.mode==='dark'?'black':'grey'}} className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <div className="btns">
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-3`} onClick={OnClickUppercase}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-3`} onClick={OnClickLowercase}>Convert to Lowercase</button>
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-3`} onClick={OnClickClear}>Clear All</button>
            <button className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-3`} onClick={OnClickUndo}>Undo</button>
            </div>
            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p> {Text.split(" ").length} Words And {Text.length} Characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes to Read.</p>
            <h2>Preview</h2>
            <p>{Text}</p>
            
        </div>
        </>
    )
}