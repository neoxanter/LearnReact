import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
  return (
      <div>
        {props.dataSets.map((dataSet) => (
            <DiagramBar
                label={dataSet.label}
                maxValue={null}
                value={dataSet.value}/>
        ))}
      </div>
  )
}

export default Diagram