import React, {useState} from "react"
import './CostForms.css'

const CostForm = () => {

    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    })
    const nameChangeHandler = (event) => {
        setUserInput({
            ...userInput, //сохраняем значения amount и date
            name: event.target.value
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput, //сохраняем значения amount и date
            amount: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput, //сохраняем значения amount и date
            date: event.target.value
        })
    }

    return (
        <form>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min='2020-01-01' step='2022-12-31'/>
                </div>
                <div>
                    <div className="new-cost__actions">
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CostForm