import CostItem from './components/CostItem'

function App() {

const costs = [
  {
    date: new Date(2022, 3, 09),
    description: "Microwave",
    amount: 240.55
  }
  {
    date: new Date(2022, 3, 09),
    description: "Television",
    amount: 325.15
  }
  {
    date: new Date(2022, 3, 09),
    description: "Steamer",
    amount: 158.60
  }
]

  return (
    <div>
      <h1>React!</h1>
      <CostItem></CostItem>
      <CostItem></CostItem>
      <CostItem></CostItem>
    </div>
  )
}

export default App
