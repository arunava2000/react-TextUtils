import React, {useState} from 'react'

export const TextForm = (props) => {

  const [text, setText] = useState('');

  const handleOnChange = (event)=>{
    //console.log('Changed');
    setText(event.target.value);
  } 

  const handleUpClick = ()=>{
    //console.log('Clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    //console.log('Clicked');
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = ()=>{
    //console.log('Clicked');
    let newText = '';
    setText(newText);
  }

  const handleCopyClick = ()=>{
    //console.log('Clicked');
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleRspClick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
        <div className='container'>
            <h1>{props.title}</h1>
            <div className="mb-3">
            <label className="form-label">Enter Text Here</label>
            <textarea className="form-control" id="mybox" style={{backgroundColor: props.md ==='dark'?'#173a6e':'white', color: props.md === 'dark'?'yellow':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
            <button type="button" className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={handleLoClick}>CONVERT TO LOWERCASE</button>
            <button type="button" className="btn btn-dark mx-1 my-1" onClick={handleRspClick}>REMOVE EXTRA SPACES</button>
            <button type="button" className="btn btn-warning mx-1 my-1" onClick={handleCopyClick}>COPY TEXT</button>
            <button type="button" className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>CLEAR TEXT</button>
            </div>
        </div>
        <div className='container'>
            <h2>Your Text Summery</h2>
            <p>Words : {text.split(" ").length-1}, Charrectors : {text.length}</p>
            <p>Reading time : {0.08 * text.split(" ").length}minute</p>
        </div>
    </>
  )
}
