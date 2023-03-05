import "./users.css"
const Users: React.FC = () => {
  return (
    <>
      <div className="users_list">
        <table className="table">
          <thead>
            <tr className="table_row">
              <th scope="col">User</th>
              <th scope="col">Status</th>
              <th scope="col">Rating</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table_row">
              <th scope="row">
                <div className="user_name">
                  <img src="./image 12.png" alt="" />
                  <span>mark</span>
                </div>
              </th>
              <td>
                <span className="badge badge-success">Success</span>
              </td>
              <td>
                <div className="rating">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "15%" }} role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={40}></div>{" "}
                  </div>
                  <span>40%</span>
                  <div className="growth">
                    <span className="material-symbols-sharp">arrow_upward</span>
                    <span>4%</span>
                  </div>
                </div>
              </td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr className="table_row">
              <th scope="row">
                <div className="user_name">
                  <img src="./image 12.png" alt="" />
                  <span>mark</span>
                </div>
              </th>
              <td>
                <span className="badge badge-success">Success</span>
              </td>
              <td>
                {" "}
                <div className="rating">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "15%" }} role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={40}></div>{" "}
                  </div>
                  <span>40%</span>
                  <div className="growth">
                    <span className="material-symbols-sharp">arrow_upward</span>
                    <span>4%</span>
                  </div>
                </div>
              </td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr className="table_row">
              <th scope="row">
                <div className="user_name">
                  <img src="./image 12.png" alt="" />
                  <span>mark</span>
                </div>
              </th>
              <td>
                <span className="badge badge-success">Success</span>
              </td>
              <td>
                {" "}
                <div className="rating">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "15%" }} role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={40}></div>
                  </div>
                  <span>40%</span>
                  <div className="growth">
                    <span className="material-symbols-sharp">arrow_upward</span>
                    <span>4%</span>
                  </div>
                </div>
              </td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
            <tr className="table_row">
              <th scope="row">
                <div className="user_name">
                  <img src="./image 12.png" alt="" />
                  <span>mark</span>
                </div>
              </th>
              <td>
                <span className="badge badge-warning">Success</span>
              </td>
              <td>
                {" "}
                <div className="rating">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "15%" }} role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={40}></div>
                  </div>
                  <span>40%</span>
                  <div className="growth">
                    <span className="material-symbols-sharp">arrow_upward</span>
                    <span>4%</span>
                  </div>
                </div>
              </td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Users
