import './CostsFilter.css'
const CostsFilter = () => {
    return (
        <div className='costs-filter'>
            <div className='costs-filter__control'>
                <label>Filter by year</label>
                <select>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    )
}