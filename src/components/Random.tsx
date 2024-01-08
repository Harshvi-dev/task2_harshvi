import React, { useEffect, useRef, useState } from 'react'

const Random : React.FC = () =>{
    const [randomValue,setRandomValue] = useState<number|undefined>();
    const [userValue,setUserValue] = useState<number|undefined>();
    let paragraphRef  = useRef<HTMLParagraphElement | null>(null);

    useEffect(()=>{
        var min = Math.ceil(1);
        var max = Math.floor(20);
        var result =Math.floor(Math.random() * (max - min) + min);
        setRandomValue(result);
        console.log("random number :"+randomValue)
    },[randomValue])
    const getVal =(e:React.ChangeEvent<HTMLInputElement>)=>{
        var input = e.target.value;
        var Numberinput:number =+input;
        setUserValue(Numberinput);
    }
    const campareValue =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        if (randomValue === userValue) {
            if (paragraphRef.current) {
                paragraphRef.current.textContent = 'matched';
                paragraphRef.current.style.color = 'green'
                // window.location.reload();
              }
        }else if (randomValue!<userValue!) {
            if (paragraphRef.current) {
                paragraphRef.current.textContent = 'the gussed value is grater than actual value';
                paragraphRef.current.style.color = 'red'
              }
            
        }else{
            if (paragraphRef.current) {
                paragraphRef.current.textContent = 'the gussed value is less than actual value';
                paragraphRef.current.style.color = 'red'
              }
        }

    }
    return (
        <>
            <label>Enter the value : </label>
            <input type='text' onChange={getVal}></input>
            <button onClick={campareValue}>GO</button>
            <p ref={paragraphRef }></p>
        </>
    )
}
export default Random;