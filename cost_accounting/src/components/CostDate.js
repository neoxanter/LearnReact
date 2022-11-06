function CostDate(props) {
  const month = props.date.toLocaleString('en-GB', { month: 'long' })
  const year = props.date.getFullYear()
  const day = props.date.toLocaleString('en-GB', { day: '2-digit' })

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  )
}

export default CostDate
