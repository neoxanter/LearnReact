import DiagramBar from "./DiagramBar";

const Diagram = (props) => {

  const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

  const maxMonthCosts = Math.max(...dataSetsValues)

  return (
      <div>
        {props.dataSets.map((dataSet) => (
            <DiagramBar
                key={dataSet.label}
                label={dataSet.label}
                maxValue={maxMonthCosts}
                value={dataSet.value}/>
        ))}
      </div>
  )
}

export default Diagram