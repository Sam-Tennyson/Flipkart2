import React from 'react'
import "./MoreInfo.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SellIcon from '@mui/icons-material/Sell';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TimelineIcon from '@mui/icons-material/Timeline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
function MoreInfo() {
  return (
    <>
        <div className="makeWhite">
            <div className="block">
                <NotificationsNoneIcon />
                <span>Notification Preferences</span>
            </div>  
            <hr />  
            <div className="block">
                <SellIcon />
                <span>Sell on Flipkart</span>
            </div>    
            <hr />  
            <div className="block">
                <SupportAgentIcon />
                <span>24*7 Customer Care</span>
            </div>    
            <hr />  
            <div className="block">
                <TimelineIcon />
                <span>Advertise</span>
            </div>    
            <hr />  
            <div className="block">
                <FileDownloadIcon />
                <span>Download app</span>
            </div>    
            {/* <hr />   */}
        </div>
    </>
  )
}

export default MoreInfo
