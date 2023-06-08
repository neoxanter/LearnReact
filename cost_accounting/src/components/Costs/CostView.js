import './CostView.css'
import CostItem from './CostItem'
import Card from '../UI/Card'
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";

const CostView = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020')

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const costs = [
        {
            id: 'c1',
            date: new Date(2022, 3, 11),
            description: 'Microwave',
            amount: 240.55,
        },
        {
            id: 'c2',
            date: new Date(2022, 4, 23),
            description: 'Television',
            amount: 325.15,
        },
        {
            id: 'c3',
            date: new Date(2022, 6, 18),
            description: 'Steamer',
            amount: 158.61,
        },
    ]

    return (
        <div>
            <Card className="costs">
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                <CostItem
                    date={costs[0].date}
                    description={costs[0].description}
                    amount={costs[0].amount}
                />
                <CostItem
                    date={costs[1].date}
                    description={costs[1].description}
                    amount={costs[1].amount}
                />
                <CostItem
                    date={costs[2].date}
                    description={costs[2].description}
                    amount={costs[2].amount}
                />
            </Card>
        </div>
    )
}

export default CostView
