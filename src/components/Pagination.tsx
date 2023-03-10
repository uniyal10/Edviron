const Pagination: React.FC = () => {
  return (
    <>
      <div className="users_pagination">
        <ul>
          <button className="previous">Previous</button>
          <li className="page">1</li>
          <li className="page">2</li>
          <li className="page">3</li>
          <li className="page">4</li>
          <li className="page">5</li>
          <button className="next">Next</button>
        </ul>
      </div>
    </>
  )
}

export default Pagination
