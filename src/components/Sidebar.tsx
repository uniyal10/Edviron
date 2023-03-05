import "./sidebar.css"

const Sidebar: React.FC = () => {
  return (
    <>
      <aside>
        <div className="top">
          <div className="logo">
            <img src="/Screenshot 2023-03-03 at 5.58 1.png" alt="" />
          </div>
        </div>
        <div className="sidebar">
          <a href="">
            <span className="material-symbols-sharp">grid_view</span>
            <span>Dashboard</span>
          </a>
          <a href="">
            <span className="material-symbols-sharp"> person </span>
            <span>Users</span>
          </a>
          <a href="">
            <span className="material-symbols-sharp"> broken_image </span>
            <span>Projects</span>
          </a>
          <a href="">
            <span className="material-symbols-sharp"> description </span>
            <span>Sales</span>
          </a>
          <a id="settings" href="">
            <span className="material-symbols-sharp"> settings </span>
            <span>Settings</span>
          </a>
          <a href="">
            <span className="material-symbols-sharp"> logout </span>
            <span>Logout</span>
          </a>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
