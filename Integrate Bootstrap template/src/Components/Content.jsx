import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

const Content = () => {
  return (
    <div className='text-container'>
      <h1 style={{ color: 'black',fontFamily:"-moz-initial",wordSpacing:"8px" }}>Hi, Hi, I'm John Deo.</h1>
      <br />
      <h6 style={{color:"gray",fontFamily:"cursive"}}>A freelance Web developer from London. I convert custom <br /> web designs to bootstrap templates.</h6>
      <br />
      <h6 style={{color:"gray",fontFamily:"cursive"}}>I make YouTube videos and write Blog.</h6>
      <div className="d-flex align-items-center mt-5 fs-5 gap-4 icons">
        <a href="" style={{marginTop:"65px",marginLeft:"10px"}}><FaFacebookF /></a>
        <a href="" style={{marginTop:"65px"}}><FaTwitter /></a>
        <a href="" style={{marginTop:"65px"}}><FaInstagram /></a>
        <a href="" style={{marginTop:"65px"}}><FaGithub /></a>

      </div>
    </div>
  )
}

export default Content
