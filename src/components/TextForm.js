import React,{useState} from 'react'

function TextForm(props) {
    const handleUpClick =  ()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }

    const handleLowerClick =  ()=>{
      //  console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        
        setText(newText);
        props.showAlert("Converted to lowerCase","success");
    }
    const handleOnChange =  (event)=>{
     //   console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick =  ()=>{
       let newText = '';
       setText(newText);
       props.showAlert("Cleared text","success");
       //text analyzer
       //word counter           for more creativity (exersize 1)
       
    }
    const handleCopy =  ()=>{
       
      //  console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
       // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copt text to clip board","success");
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space","success");
    }
    const [text,setText] = useState('Enter text here');
    //text = "new text"    //wrong way to change the state

    //setText("new text");     //correct way to change the state
    return (
        
       
      <>
      <div className='container' style={{color: props.mode === 'dark'?'white':'black'}} >
      <h1 >{props.heading}</h1>  
           <div className="mb-3">
       
           <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'blue':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" value = {text} onChange={handleOnChange} rows="8"></textarea>
           </div>

       <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
       
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>

       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>

       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra space</button>
       

        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} word,{text.length} characters</p>
            <p>{.008*text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
export default TextForm
