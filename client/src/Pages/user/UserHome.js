
import Feed from '../../Components/UserHome/Feed'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/UserHome/Sidebar'
import Widget from '../../Components/UserHome/Widget'

function UserHome() {
  return (
    <div className='userHome'>
      <Header/>
      <div className='app_body'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  )
}

export default UserHome