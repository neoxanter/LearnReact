import CostItem from "./CostItem";

const CostList = (props) => {

  if (props.costs.length === 0) {
    return <h2>No expenses this year</h2>
  }

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