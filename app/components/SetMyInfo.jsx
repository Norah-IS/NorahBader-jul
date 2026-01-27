import { useState } from 'react';
import counter from './counter';
function SetMyInfo() {
    const [infotype, setInfo] = useState({
        firstname: " ",
        lastname: "",
        age: ""
    })
    function setFirstName(e) {
        setInfo({ ...infotype, firstname: e.target.value })
    }
    function setLastName(e) {
        setInfo({ ...infotype, lastname: e.target.value })
    }
    function setAge(e) {
        setInfo({ ...infotype, age: e.target.value })
    }
    return (
        <div>
            <label>
                First Name: <input value={infotype.firstname} onChange={(e) => setFirstName(e)} />
            </label>
            <label>
                Last Name: <input value={infotype.lastname} onChange={(e) => setLastName(e)} />
            </label><label>
                The Age: <input value={infotype.age} onChange={(e) => setAge(e)} />
            </label>
            <p>
                your name is: {infotype.firstname}{' '}
                {infotype.lastname}{' '}
                and your age is : {infotype.age}
            </p>
        </div>
    )
}
export default SetMyInfo;