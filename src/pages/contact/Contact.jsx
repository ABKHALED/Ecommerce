import './contact.css'
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const AnyReactComponent = ({ text }) => <div className='hh'>{text}</div>;
function Contact() {
    const defaultProps = {
        center: {
          lat: 36.7235187,
          lng: 3.1574409
        },
        zoom: 14
      };
  return (
    <div className='contact'>
      <div className="header">
       <div className="container">
       <p>"To earn the respect (and eventually love) of your customers, you first have to respect those customers. That is why Golden Rule behavior is embraced by most of the winning companies."</p>
       </div>
      </div>
      <div className="container">
      <div className='map' style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={ <RoomIcon />}
        />
      </GoogleMapReact>
    </div>
    <div className="row">
        <div className="col-12 col-md-8 mb-3 mb-md-0">
        <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea2" style={{height: '100px'}}/>
            <label htmlFor="floatingTextarea2">Message</label>
        </div>
        <input type="text" className="form-control mb-3" placeholder="Name" />
        <input type="email" className="form-control mb-3" placeholder="Email" />
        <input type="text" className="form-control mb-3" placeholder="Subject" />
        <button>SEND MESSAGE</button>
        </div>
        <div className='col-12 col-md-4 right'>
            <div>
                <div>
                    <HomeIcon />
                </div>
                <div>
                    <p>Buttonwood, California.</p>
                    <span>Rosemead, CA 91770</span>
                </div>
            </div>
            <div>
                <div>
                    <PhoneIphoneIcon />
                </div>
                <div>
                    <p>00 (440) 9865 562</p>
                    <span>Mon to Fri 9am to 6pm</span>
                </div>
            </div>
            <div>
                <div>
                    <EmailIcon />
                </div>
                <div>
                    <p>support@colorlib.com</p>
                    <span>Send us your query anytime!</span>
                </div>
            </div>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Contact
