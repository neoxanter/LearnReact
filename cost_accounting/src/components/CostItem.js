import './CostItem.css'

function CostItem() {
  return (
    <div className="cost-item">
      <div>октябрь 2022 09</div>
      <div className="cost-item__description">
        <h2>Микроволновка</h2>
        <div className="cost-item__price">$240.55</div>
      </div>
    </div>
  )
}

export default CostItem
