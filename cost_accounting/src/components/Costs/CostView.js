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

  const filteredCosts = props.costs.filter(
      cost => {
        return cost.date.getFullYear().toFixed() === selectedYear
      }
  )

  return (
      <div>
        <Card className="costs">
          <CostsFilter
              year={selectedYear}
              onChangeYear={yearChangeHandler}/>
          {filteredCosts.map((cost) => (
              <CostItem
                  key={cost.id}
                  date={cost.date}
                  description={cost.description}
                  amount={cost.amount}
              />
          ))}
        </Card>
      </div>
  )
}

export default CostView
