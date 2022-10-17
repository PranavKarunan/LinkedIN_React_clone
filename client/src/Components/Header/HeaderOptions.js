import { Avatar } from "@material-ui/core"


function HeaderOptions({ Icon , title ,avatar }) {
  return (
    <div className='header__options'>
        {
            Icon  ?  <Icon></Icon> : <Avatar name= {avatar} />
        }
        
        <span>{title}</span>
    </div>
  )
}

export default HeaderOptions