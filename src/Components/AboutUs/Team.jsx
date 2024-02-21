import React from 'react'
import './team.css'
const Team = () => {
    const handleMouseOver = (event) => {
        event.target.setAttribute('data-style', event.target.style.cssText);
        if (event.target.getAttribute('data-hover-bordercolor')) {
          event.target.style.borderColor = event.target.getAttribute('data-hover-bordercolor');
        }
        if (event.target.getAttribute('data-hover-bgcolor')) {
          event.target.style.backgroundColor = event.target.getAttribute('data-hover-bgcolor');
        }
        if (event.target.getAttribute('data-hover-color')) {
          event.target.style.color = event.target.getAttribute('data-hover-color');
        }
      };
    
      const handleMouseOut = (event) => {
        event.target.setAttribute('style', event.target.getAttribute('data-style'));
        event.target.removeAttribute('data-style');
      };
  return (
    <div className='team1'>
        <h2>Meet The Team</h2>
        <h5> Here are our awesome team.</h5>
<br/>
<div className="team2">
    <div className="team3">
  <div className="teamimg">
  <img src= "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708522323/CEO_evmptu.png" alt="" />
             
  </div>
            
    </div>
    <div className="team4">
<h3>CHILKA VEERA KISHORE</h3>
<h5>Founder and CEO, Cloud Code Developer</h5>
<ul>
    <li> Bootstrapped a start-up started on 15th day of College to a Million dollar valuation.</li>
    <li> Bagged the highest placement of Delhi University in 2019 (36 LPA) at age of 21 and left it after 4 months of working to continue with entrepreneurship by purpose.</li>
    <li> Started Younity.in with Nil investment and bootstrapped the company to 48,000 community members & 50 LiveLearn courses in less than 2 years.</li>
    <li> Author of the book: The Painkiller, With No Side Effects which became Amazon Top #3 Seller on First Day of the Launch.</li>
    <li> Dignified with REX-Karmaveer GYLC Award 2019 by UN at IIT- Delhi (for being the student entrepreneur for change)</li>
</ul>
    </div>
</div>
<div className="team5">
<div className="center column third">
    <img
      alt=""
      className="team-member-image"
      src="https://d502jbuhuh9wk.cloudfront.net/orgData/6284cc470cf2f73fd7f5f91e/pages/assets/images/8mscEuntitled1vvcopy2.jpg"
    />
    <h3 className="size-24">Anuj Jain
</h3>
    <p className="designation">Sr. Manager Accounts</p>
  </div>
  <div className="center column third">
    <img
      alt=""
      className="team-member-image"
      src="https://d502jbuhuh9wk.cloudfront.net/orgData/6284cc470cf2f73fd7f5f91e/pages/assets/images/phwO2untitled1vv.jpg"
    />
    <h3 className="size-24">Yash Rastogi
</h3>
    <p className="designation">Videographer & photographer</p>
  </div>
  <div className="center column third">
    <img
      alt=""
      className="team-member-image"
      src="https://d502jbuhuh9wk.cloudfront.net/orgData/6284cc470cf2f73fd7f5f91e/pages/assets/images/s8Njeuntitled1vvcopy6.jpg"
    />
    <h3 className="size-24">Vishti Singh
</h3>
    <p className="designation">Manager-Partnerships</p>
  </div>
</div>
<div className="team5">
<div className="center column third">
    <img
      alt=""
      className="team-member-image"
      src="https://d502jbuhuh9wk.cloudfront.net/orgData/6284cc470cf2f73fd7f5f91e/pages/assets/images/enoItuntitled1vvcopy3.jpg"
    />
    <h3 className="size-24">Swapnil Pote
</h3>
    <p className="designation">Business Operation Associate</p>
  </div>
  <div className="center column third">
    <img
      alt=""
      className="team-member-image"
      src="https://d502jbuhuh9wk.cloudfront.net/orgData/6284cc470cf2f73fd7f5f91e/pages/assets/images/lbf4zuntitled1vvcopy4.jpg"
    />
    <h3 className="size-24">Jaanavi Bakshi
</h3>
    <p className="designation">Sr.Manager Business operation</p>
  </div>
  <div className="center column third">
    <img
      alt=""
      className="team-member-image"
      src="https://d502jbuhuh9wk.cloudfront.net/orgData/6284cc470cf2f73fd7f5f91e/pages/assets/images/2XSGeuntitled1vvcopy.jpg"
    />
    <h3 className="size-24">Shubham Roy
</h3>
    <p className="designation">Copywriter-Manager</p>
  </div>
</div>
<div className="btn">
<div className="column full" id="1663327156715">
      <a
        href="https://www.linkedin.com/company/younity-in/"
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          transition: 'all 0.16s ease 0s',
          border: '2px solid rgb(220, 220, 220)',
          cursor: 'pointer',
          backgroundColor: 'rgb(35, 70, 101)',
          color: 'rgb(247, 247, 247)',
          borderRadius: '0px',
          padding: '16px 35px',
          lineHeight: '1.5',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: '16px',
          letterSpacing: '3px',
        }}
        data-hover-bgcolor="#8ea1ff"
        data-hover-color="#f8f8f8"
        data-hover-bordercolor="#8ea1ff"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        title=""
      >
        CONNECT WITH US
      </a>
    </div>
</div>


    </div>
  )
}

export default Team