import Users from "./Users"
import GlobalSearch from "./GlobalSearch"
import RecentData from "./RecentData"
import "./main.css"
const Main: React.FC = () => {
  return (
    <>
      <main>
        {/* <div className="users_header">
          <div className="users_left_header">
            <h3 className="heading">All users</h3>
            <small>Monitor sales, transactions, etc.</small>
          </div>
          <div className="users_right_header">
            <div className="users_input">
              <span className="material-symbols-sharp"> search </span>
              <input type="text" />
            </div>

            <div className="users_filter">
              <span className="material-symbols-sharp"> filter_alt </span>
              <small>Filter</small>
            </div>
          </div>
        </div> */}
        <GlobalSearch />
        <RecentData />
        <Users />
      </main>
    </>
  )
}

export default Main
