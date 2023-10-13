import React, {useState} from 'react'
/**In this example, the liked state variable holds a boolean.
 * When you click the input, setLiked updates the liked state variable with whether the browser checkbox input is checked.
*/

const CheckBox = () => {
    const [checked, setChecked] = useState(true);
    const handleChange = (e)=>{
        setChecked(e.target.checked);
    }
  return (
    <div>
        <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        I've checked this
        </label>
        <p>You've {checked? "checked this" : "not checked this"}</p>
    </div>
  )
}

export default CheckBox