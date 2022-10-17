import React from 'react'
import InfoIcon from '@material-ui/icons/Info'


function Widget() {
  return (
    <div className='widget'>
      <div className='widget_top'>
        <div className='widget__header'>
          <h4>LinkedIn News</h4>
          <InfoIcon />
        </div>
        <div className='widget__body'>
          <ul className='widget__options'>
            <li>
              <h4>Here are 2022's Top Startups in India</h4>
              <p>6h ago * 40,505 readers</p>
            </li>

            <li>
              <h4>US visa delays make IT firms sweat</h4>
              <p>6h ago * 10,115 readers</p>
            </li>

            <li>
              <h4>Wipro's career plan for freshers</h4>
              <p>6h ago * 2,505 readers</p>
            </li>

            <li>
              <h4>How IT majors performed in Q2</h4>
              <p>6h ago * 40,300 readers</p>
            </li>

            <li>
              <h4>Future of work:Gig or full-time?</h4>
              <p>6h ago * 12,001 readers</p>
            </li>

          </ul>
        </div>
      </div>

      <div className='widget_bottom'>
        <div className='widget__header'>
          <h4></h4>
          {/* <InfoIcon /> */}
        </div>
        <div className='widget__body'>
          <ul className='widget__options'>
            {/* <li>
              <h4></h4>
            </li> */}
          </ul>
        </div>
      </div>
        
    </div>
  )
}

export default Widget