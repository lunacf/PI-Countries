import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { postActivity, getCountryActivity } from '../actions';
import HomeStyle from './styles/Activities.module.css';


function validate(input) {
    if (!input.name) {
        alert("Name is required")
    } else if (!input.difficulty) {
        alert("Difficult is required")
    } else if (!input.duration) {
        alert("Days or time)")
    } else if (!input.season) {
        alert("Season is required")
    } else if (input.id < 1) {
        alert("Check countries where you have been created your activity")
    }
}

export default function CreateActivity() {

    const dispatch = useDispatch()
    const countriesSelected = useSelector((state) => state.allCountries)
    const [, setError] = useState({})
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        id:[]
    })

    useEffect(() => {
        dispatch(getCountryActivity())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleDifficulty(e) {
        setInput({
            ...input,
            dificult: e.target.value
        })
    }
    function handleSeason(e) {
        setInput({
            ...input,
            season: e.target.value
        })
    }
    function handleSelect(e) {
        setInput({
            ...input,
            //traigo todo lo q tenga el country
            id: [...input.id, e.target.value]
        })
    }

   /**
    * The function is called when the user clicks the submit button. It prevents the default action of
    * the submit button, which is to refresh the page. It then validates the input and dispatches the
    * postActivity action. Finally, it resets the input to an empty object.
    */
    function handleSubmit(e) {
        e.preventDefault()
        setError(validate(
            {
                ...input,
                [e.target.value]: e.target.value
            }
        ))
        dispatch(postActivity(input))
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            id:[]
        })
    }

    function handleDelete(event) {
        setInput({
            ...input,
            id: input.id.filter(e => e !== event)
        })
    }
    return (
        <div>
            <h1>Create Activity</h1>
            <Link to='/home'><button className={HomeStyle.btn}>Back</button></Link>
            <div className={HomeStyle.body}>
                <form className='test'>
                    <div>
                        <label>Activity:</label>
                        <input className={HomeStyle.Country} type='text' value={input.name} name='name'
                            onChange={(e) => handleChange(e)}></input>
                    </div>
                    <div>
                        <label>Difficulty:</label>
                        <select className={HomeStyle.ActivityLetters} onChange={(e) => handleDifficulty(e)}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    <div>
                        <label>Duration:</label>
                        <input className={HomeStyle.btn} type='string' value={input.duration} name='duration'
                            onChange={(e) => handleChange(e)}></input>
                    </div>
                    <div>
                        <label>Season:</label>
                        <select className={HomeStyle.btn} onChange={(e) => handleSeason(e)}>
                            <option value='summer'>Summer</option>
                            <option value='winter'>Winter</option>
                            <option value='autumn'>Autumn</option>
                            <option value='spring'>Spring</option>
                            <option value='all'>All year</option>
                        </select>
                    </div>
                    <label>Countries: <select className={HomeStyle.btn} onChange={(e) => handleSelect(e)}>
                        {countriesSelected.map((e) => (
                            <option value={e.id}>{e.name} </option>
                        ))}
                    </select></label>
                    <button className={HomeStyle.btn} type='submit' onClick={(e) => handleSubmit(e)}>Add +</button>
                </form>
                {input?.id?.map(e =>
                    <div className={HomeStyle.Country}>
                        <h6>{e}</h6>
                        <button className={HomeStyle.btn} onClick={() => handleDelete(e)}>X</button>
                    </div>)}
            </div>
        </div>

    )
}
