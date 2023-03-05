import Users from "./Users"
import GlobalSearch from "./GlobalSearch"
import RecentData from "./RecentData"
import UsersHeader from "./UsersHeader"
import "./main.css"

const Main: React.FC = () => {
  return (
    <>
      <main>
        <GlobalSearch />
        <RecentData />
        <UsersHeader />
        <Users />
      </main>
    </>
  )
}

export default Main
