import './index.css';
import landing from '../../Assets/Server-bro.png'

const Home = () => {
    return(
        <div>
            <div className='home-page-container'>
        {/* <div className='landing-img'>
           <img src={landing} alt="" />
        </div> */}
                <h1 className='banner-first-line'>STAY IN THE GAME</h1>
                <h2 className='banner-second-line'>EVEN WHEN THE ROBOTS TAKE OVER</h2>
                <h3 className='banner-third-line'>Skill.Reskill.Upskill.Repeate.</h3>
                <h4 className='banner-last-line'>Learn what you need to get where you want</h4>
                <button className='banner-button'>GET COUNSELLED</button>
            </div>
            <div className="banner-btm-container">
                <div className="names-container">
                    <hr className="home-hr-line" />
                    <h2 className="home-heading">PLACEMENT GUARANTEED</h2>
                    <hr className="home-hr-line"/>
                </div>
                <div className="home-list-of-trainings">
                    <div className="each-training-container">
                        <img 
                        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1708159462/homeImg2_lt7t7n.jpg" 
                        alt="training" 
                        className="home-training-img"
                        />
                        <h6 className="training-name">30 DAYS OF EXTENSIVE TRAINING</h6>
                        <div className="text-center">
                            <button className="enquire-btn">ENQUIRE NOW</button>
                        </div>
                    </div>
                    <div className="each-training-container">
                        <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1708159745/homeImg3_xjk5gu.jpg" 
                        alt="training"
                        className="home-training-img"
                         />
                        <h6 className="training-name">30 DAYS OF TRANSFORMATION</h6>
                        <div className="text-center">
                            <button className="enquire-btn">ENQUIRE NOW</button>
                        </div>
                    </div>
                    <div className="each-training-container">
                        <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1708159840/homeImg4_rgedwd.jpg"
                         alt="training"
                         className="home-training-img" />
                        <h6 className="training-name">30 DAYS OF NETWORK FRAMEWORK</h6>
                        <div className="text-center">
                            <button className="enquire-btn">ENQUIRE NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-achives-container">
                <div className="achives-container">
                    <hr className="home-hr-line" />
                    <h2 className="home-heading">YOUTH DIVIDEND FUELS INDIA & WE IGNITE THEIR MINDS.</h2>
                    <hr className="home-hr-line"/>
                </div>
                <div  className="home-list-of-trainings">
                    <div className="each-achive-container">
                        <h2 className="achive-count">63+</h2>
                        <p className="achiver-names">Courses</p>
                    </div>
                    <div className="each-achive-container">
                        <h2 className="achive-count">48000+</h2>
                        <p className="achiver-names">Learners</p>
                    </div>
                    <div className="each-achive-container">
                        <h2 className="achive-count">20+</h2>
                        <p className="achiver-names">Mentors</p>
                    </div>
                    <div className="each-achive-container">
                        <h2 className="achive-count">4000+</h2>
                        <p className="achiver-names">Students got internships</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
