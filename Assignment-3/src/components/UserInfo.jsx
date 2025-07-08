import Button from "./Button"

function UserInfo(){
    return(
        <div className="container">
            <div className="img">
                <img src="https://funylifee.in/wp-content/uploads/2023/12/28_Attitude-girl-DP-www.Funylife.in_-1024x1024.jpg" alt="" />
            </div>
            <div className="content">
                <h4>Manasi Patel</h4>
                <h6>Gujarat, India</h6>
                <div className="followers">
                    Followers <br />&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"#757373",fontSize:"25px"}}>4500</span>
                </div>
                <div className="following">
                    Following <br />&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"#757373",fontSize:"25px"}}>4800</span>
                </div>
                <div className="post">
                    Post <br /><span style={{color:"#757373",fontSize:"25px"}}>&nbsp;120</span>
                </div>
                <div className="likes">
                    Likes <br /><span style={{color:"#757373",fontSize:"25px"}}>&nbsp;1800</span>
                </div>
            </div>
            <Button />
        </div>
    )
}

export default UserInfo
