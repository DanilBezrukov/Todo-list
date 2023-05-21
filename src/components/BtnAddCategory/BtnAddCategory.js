import { useCallback, useEffect, useRef, useState } from 'react'
import './BtnAddCategory.css'

function BtnAddCategory( {setCategory} ){
    const [categoryAddFlag, setCategoryAddFlag] = useState(false)
    const myInput = useRef()

    function flagChange (){
        setCategoryAddFlag(state => !state)
    }

    const getInputValue = useCallback(function (){
        const value = myInput.current.value.trim()
        if(value.length < 3) return
        const nameCategory = value[0].toUpperCase() + value.slice(1)

        setCategory( state => {
            if(state.includes(nameCategory)) return state
            return(
                [...state, nameCategory]
            )
        } )

        setCategoryAddFlag(state => !state)
        
    }, [setCategory])

    const sendByEnter = useCallback((event)=>{
        if (event.code === 'Enter'){
            getInputValue()
        }
    },[getInputValue]) 
    
    const BtnAddCategory = (
        <button className='BtnAddCategory' onClick={flagChange} ><span>+</span> <br/>Добавить категорию</button>
    )

    const inputAddCategory = (
        <div className='inputAddCategory'>
            <input type="text" placeholder='Категория...' className='inputAddCategory__input' autoFocus ref={myInput} />
            <div className='inputAddCategory__btn'>
                <button onClick={flagChange}>&#9747;</button>
                <button onClick={getInputValue}>&#10003;</button>
            </div>
        </div>
    )

        

    useEffect( ()=> {
        if(myInput.current){
            document.addEventListener('keyup', sendByEnter);
        }else{
            document.removeEventListener('keyup', sendByEnter)
        }
    })

    return(
        <div>
            {categoryAddFlag? inputAddCategory : BtnAddCategory}
        </div>
    )
}
export { BtnAddCategory }