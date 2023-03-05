import ProfileSection from "./ProfileSection"
import RecentTransactions from "./RecentTrasactions"
import HighestTransactions from "./HighestTransactions"
import DateComponent from "./DateComponent"
import "./right-section.css"
const RightSection: React.FC = () => {
  return (
    <>
      <div className="right_section">
        <ProfileSection />
        <RecentTransactions />
        <HighestTransactions />
        <DateComponent />
      </div>
    </>
  )
}

export default RightSection
