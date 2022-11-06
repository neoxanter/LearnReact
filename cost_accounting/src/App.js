import CostItem from './components/CostItem'

function App() {
  const costs = [
    {
      date: new Date(2022, 3, 11),
      description: 'Microwave',
      amount: 240.55,
    },
    {
      date: new Date(2022, 4, 23),
      description: 'Television',
      amount: 325.15,
    },
    {
      date: new Date(2022, 6, 18),
      description: 'Steamer',
      amount: 158.61,
    },
  ]

  return (
    <div>
      <h1>React!</h1>
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
    </div>
  )
}

export default App
