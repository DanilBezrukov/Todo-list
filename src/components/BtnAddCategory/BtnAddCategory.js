import { useState } from 'react'
import './BtnAddCategory.css'

function BtnAddCategory( {setCategory} ){

    const [categoryAddFlag, setCategoryAddFlag] = useState(false)

    function flagChange (){
        setCategoryAddFlag(state => !state)
    }

    const getInputValue = function (event){
        event.preventDefault();
        const value = new FormData(event.target).get("nameCategory").trim()
        if(value.length < 3) return
        const nameCategory = value[0].toUpperCase() + value.slice(1)

        setCategory( state => {
            if(state.includes(nameCategory)) return state
            return(
                [...state, nameCategory]
            )
        } )
        setCategoryAddFlag(state => !state)
    }
    
    const BtnAddCategory = (
        <button className='BtnAddCategory' onClick={flagChange} ><span>+</span> <br/>Добавить категорию</button>
    )

    const inputAddCategory = (
        <form className='inputAddCategory' onSubmit={getInputValue}>
            <input type="text" name='nameCategory' placeholder='Категория...' className='inputAddCategory__input' autoFocus />
            <div className='inputAddCategory__btn'>
                <button type='button' onClick={flagChange}>&#9747;</button>
                <button type="submit">&#10003;</button>
            </div>
        </form>
    )

    return(
        <div>
            {categoryAddFlag? inputAddCategory : BtnAddCategory}
        </div>
    )
}
export { BtnAddCategory }