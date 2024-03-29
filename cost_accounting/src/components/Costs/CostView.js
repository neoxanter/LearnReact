import './CostView.css'
import Card from '../UI/Card'
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

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
          <CostsDiagram costs={filteredCosts}/>
          <CostList costs={filteredCosts}/>
        </Card>
      </div>
  )
}

export default CostView
