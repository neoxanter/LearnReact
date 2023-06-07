import React, {useState} from "react"
import './CostForms.css'

const CostForm = (props) => {
    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        props.onSaveCostData(costData)
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Amount</label>
                    <input type="number" value={inputAmount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input type="date" value={inputDate} onChange={dateChangeHandler} min='2020-01-01'
                           step='2022-12-31'/>
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