import Users from "./Users"
import GlobalSearch from "./GlobalSearch"
import RecentData from "./RecentData"
import UsersHeader from "./UsersHeader"
import Pagination from "./Pagination"
import "./main.css"

const Main: React.FC = () => {
  return (
    <>
      <main>
        <GlobalSearch />
        <RecentData />
        <UsersHeader />
        <Users />
        <Pagination />
      </main>
    </>
  )
}

export default Main
