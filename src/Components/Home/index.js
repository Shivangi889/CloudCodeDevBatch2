import './index.css';

const Home = () => {
    return(
        <div>
            <div className='home-page-container'>
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
            <div className="faqs">
            <h1>FAQs</h1>
            <div className="faq-item">
                <h3>Q1: What are cloud code developers?</h3>
                <p className='faq-para'>
                Cloud Code Developers is an Ecosystem, which focuses on the PPPC Model for students: Professional Development, Personality Development, Personal Development, and Career Counseling. We are working with the aim of disrupting the market of the education technology industry by providing space for curiosity and doubt-solving for the students, along with providing essential skills that can be monetized with our Skil2Monetize motto.
                </p>
            </div>
            <div className="faq-item">
                <h3>Q2: Are cloud code developer courses certified?</h3>
                <ul>
                <li className='faq-para'>Government Recognition: Our all certificates have a stamp of Starup India, which is a government initiative, as we're registered with them.</li>
                <li className='faq-para'>Verified: Receive a mentor-signed certificate with the Younis official logo to verify your certificates and add value to your career.</li>
                <li className='faq-para'>Licenses and Certification Approved: Post your certificate on your LinkedIn profile under the category of licenses and certifications.</li>
                <li className='faq-para'>Increase your job prospects.</li>
                <li className='faq-para'>Lifetime Validity: Get lifetime valid certificates to enhance your professional credibility forever.</li>
                </ul>
            </div>
            <div className="faq-item">
                <h3>Q3: Is there any internship and placement assistance after taking the course?</h3>
                <p className='faq-para'>
                Yes, we not only provide internships to students internal but also connect students with relevant SLS to companies that we are affiliated with.
                </p>
            </div>
            <div className="faq-item">
                <h3>Q4: Do we get any practical exposure?</h3>
                <p className='faq-para'>
                Yes, our curriculum is designed and curated, which matches the JDs of 75% MINCs with 70% practical exposure and 30% theory assistance. Moreover, our mentors teach with a practical learning approach and give insights about the domain to make an individual Job ready.
                </p>
            </div>
            <div className="faq-item">
                <h3>Q5: Are all the courses going to be live, and where can I access them?</h3>
                <p className='faq-para'>
                We have both pre-recorded and live-session courses that can be accessed with the comfort of any of the devices of your choice: Laptop, Android, and iOS.
                </p>
            </div>
            </div>
        </div>
    )
}

export default Home
