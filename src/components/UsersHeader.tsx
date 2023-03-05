const UsersHeader: React.FC = () => {
  return (
    <>
      <div className="users_header">
        <div className="users_left_header">
          <h5 className="heading">All users</h5>
          <h6>Monitor sales, transactions, etc.</h6>
        </div>
        <div className="users_right_header">
          <div className="users_input">
            <span className="material-symbols-sharp"> search </span>
            <input type="text" placeholder="search transactions" />
          </div>

          <div className="users_filter">
            <span className="material-symbols-sharp"> filter_alt </span>
            <small>Filter</small>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersHeader
