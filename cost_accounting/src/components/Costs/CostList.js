import CostItem from "./CostItem";

const CostList = (props) => {

  let costsContent = <p>No expenses this year</p>

  return <ul>
    props.costs.map((cost) => (
    <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
    />
    ))
  </ul>
}

export default CostList