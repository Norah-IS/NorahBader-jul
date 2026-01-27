import { useState } from "react";
function Checked() {
    const [liked,setLiked]=useState(true);
    function handeleLiked(event){
        setLiked(event.target.checked);
    }
    return(
        <div>
            <label>
                <input type="checkbox"
                checked={liked}
                onChange={(e) => handeleLiked(e)} />
                Learn React.
            </label>
            <p>{liked?"is so hard":"is so easy"}</p>
        </div>
    )
}
export default Checked;
