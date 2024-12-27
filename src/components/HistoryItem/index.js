import './index.css'

const HistoryItem = props => {
  const {historyItem, deletehistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const deleteItem = () => {
    deletehistory(id)
  }

  return (
    <li className="history-list">
      <div className="history">
        <p>{timeAccessed}</p>
        <img src={logoUrl} />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button className="img" onClick={deleteItem}>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}
export default HistoryItem
