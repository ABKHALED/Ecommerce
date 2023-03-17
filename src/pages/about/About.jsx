import './about.css'
import imone from '../../assets/6505894.jpg'
import imtwo from '../../assets/gros-plan-jeune-bel-homme-tenant-sac-papier.jpg'
import imthree from '../../assets/jeune-femme-sacs-prenant-selfie.jpg'

function About() {
  return (
    <div className='about pb-5'>
        <div className="container pb-5 ">
            <div className="row mb-5">
                <div className="col-12 col-md-6 im-holder">
                    <img src={imone} alt="one" />
                </div>
                <div className="col-12 col-md-6 text-right">
                    <h3>Who Are we ??</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quasi. Perspiciatis similique a exercitationem est doloremque, quas cumque mollitia numquam, blanditiis nihil facilis non molestiae voluptatem iusto tenetur praesentium. Odio.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus natus atque, explicabo eligendi expedita in aperiam! Aliquid asperiores sapiente quaerat harum odit dicta autem dolore deserunt vel, voluptatum necessitatibus! Voluptates?</p>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-12 col-md-6 text-right">
                    <h3>Our Story</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eligendi cumque voluptates expedita animi qui, deleniti beatae quasi aspernatur consequuntur atque numquam vero voluptatibus quas necessitatibus laudantium officiis tempora quidem?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla soluta atque id tenetur error veritatis, doloremque necessitatibus aperiam veniam suscipit, modi nihil mollitia corrupti eaque sequi porro ea enim.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius incidunt enim, possimus distinctio blanditiis, eos numquam recusandae sequi repudiandae, reprehenderit deleniti optio quo voluptatum ex ipsa. Omnis, ratione in?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo molestiae debitis, delectus ad sapiente dignissimos sit officia tempora. In ipsam voluptates repellat omnis itaque nemo ullam fuga laborum aspernatur?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, non iste laboriosam deleniti voluptate provident dolorem quis, sequi, quae eos neque inventore? Qui quidem facilis, est suscipit ullam delectus aspernatur.</p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-12 im-holder mb-5">
                            <img src={imtwo} alt="imtwo" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-12 im-holder">
                            <img src={imthree} alt='imthree' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
