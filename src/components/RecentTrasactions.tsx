const RecentTransactions: React.FC = () => {
  return (
    <>
      <div className="transaction">
        <h5>Recent Transaction</h5>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">
                <div className="user_name">
                  <img src="./image 12.png" alt="" />
                  <span>mark</span>
                </div>
              </th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">
                <div className="user_name">
                  <img src="./image 12.png" alt="" />
                  <span>mark</span>
                </div>
              </th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
            <tr>
              <th scope="row">
                <div className="user_name">
                  <img src="./image 12.png" alt="" />
                  <span>mark</span>
                </div>
              </th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </table>
        <button className="btn">View all users</button>
      </div>
    </>
  )
}

export default RecentTransactions
