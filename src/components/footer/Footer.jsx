import './footer.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-8" >
                <p>Copyright ©2023 All rights reserved | This template is made with <FavoriteIcon/> by <span>Khaled</span></p>
            </div>
            <div className="col-12 col-md-4" >
                <ul>
                    <li>
                        <a href="https://www.facebook.com/"><FacebookIcon/></a>
                    </li>
                    <li>
                        <a href="https://github.com/"><GitHubIcon /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"><InstagramIcon /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/"><LinkedInIcon /></a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
