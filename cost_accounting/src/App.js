import NewCost from "./components/NewCost/NewCost";
import CostView from './components/Costs/CostView'

const App = () => {

    const addCostHandler = (cost) => {

    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <CostView/>
        </div>
    )
}

export default App
