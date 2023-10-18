import React, {useState, useEffect} from 'react'
import {fetchBio} from './api.js';
const Fetch = () => {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);
//you can also rewrite using async await
    useEffect(()=>{
        let ignore = false;
        setBio(null);
        fetchBio(person).then((result)=>{
            if(!ignore){
                setBio(result);
            }
        });
        return ()=>{
            ignore= true;
        }
    })
  return (
    <>
    <select value={person} onChange={e=> setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
    </select>
    <hr />
    <p><i>{bio ?? 'Loading....'}</i></p>
    </>
  )
}

export default Fetch;

/*Nullish Coalescing Operator (??)  leftExpr ?? rightExpr*/
/**Javascript double question mark is a logical operator that takes two values
 * and returns the right-hand value if the left-hand value is undefined or null,
 * Else returns the left-hand operand.
 * In the above example, ?? returns 'Loading...' if bio is null else returns bio.
 */

