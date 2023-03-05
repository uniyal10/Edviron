const ProfileSection: React.FC = () => {
  return (
    <>
      <div className="profile_section">
        <img src="./Ellipse 1.png" alt="" />
        <div className="name_role">
          <span id="name">ABC</span>
          <span id="role">role</span>
        </div>
        <span id="notification_icon" className="material-symbols-sharp">
          notifications
        </span>
      </div>
    </>
  )
}
export default ProfileSection
