import NewCost from "./components/NewCost/NewCost";
import CostView from './components/Costs/CostView'
import React, {useState} from "react";

const INIT_COSTS = [
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
const App = () => {
  const [costs, setCosts] = useState(INIT_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
      <div>
        <NewCost onAddCost={addCostHandler}/>
        <CostView costs={costs}/>
      </div>
  )
}

export default App
