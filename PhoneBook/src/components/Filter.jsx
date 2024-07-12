const Filter = (props) => {
  return(
    <div> 
    <p>filter shown with <input 
      value={props.filterName}
      onChange={props.handleFilter}
    /></p>
  </div>
  )
}

export default Filter