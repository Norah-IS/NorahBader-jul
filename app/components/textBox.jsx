import {useState} from "react";
function Text(){
    const[text,setText]=useState("");

    function handleChang(e){
        setText(e.target.value);
    }
    return(
        <div>
            <input  onChange ={(e)=>handleChang(e)}/>
            <p>you typed: {text}</p>
        </div>
    )
}
export default Text;
