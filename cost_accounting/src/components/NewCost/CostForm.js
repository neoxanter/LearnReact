import React, {useState} from "react"
import './CostForms.css'

const CostForm = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const nameChangeHandler = (event) => {
        setName(event.target.value) //используем здесь state для сохранения значения
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
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