import React,{Fragment,useState} from 'react';
import "../CSS/About.css"


const About = () => {
  const [toggleTab,setToggleTab]=useState(1);
  const toggleState=(index)=>{
    setToggleTab(index)
  }
  return (
    <Fragment>
      <section className='about'>
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
          <div className="column">
            <div className="tabs">
              <div className={toggleTab===1 ? "single-tab active-tab":"single-tab"}
              onClick={()=>toggleState(1)}
              >
                <h2>About</h2>
              </div>
              <div className={toggleTab===2 ? "single-tab active-tab":"single-tab"}
              onClick={()=>toggleState(2)}
              >
                <h2>Skills</h2>
              </div>
              <div className={toggleTab===3 ? "single-tab active-tab":"single-tab"}
              onClick={()=>toggleState(3)}
              >
                <h2>Experience</h2>
              </div>
            </div>
            <div className="tab-content">
              {/* about content */}
              <div className={toggleTab===1? "content active-content":"content"}>
                <h2>My Story</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sed iure maiores repellat quae tempora hic consequuntur odit eaque, labore, cum sequi itaque accusantium quis nam, explicabo rerum necessitatibus quam?</p>
                <h3>I am Web Designer and Developer Having 10 years of Experience </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque natus, ullam architecto cupiditate aspernatur quam non earum quasi ex.</p>
              </div>
              {/* skill content */}
              <div className={toggleTab===2? "content active-content":"content"}>
                <h2>Skills</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sed iure maiores repellat quae tempora hic consequuntur odit eaque, labore, cum sequi itaque accusantium quis nam, explicabo rerum necessitatibus quam?</p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Developer</h3>
                      <div className="progress">
                        <div className="progress-bar">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Designer</h3>
                      <div className="progress">
                        <div className="progress-bar Designer">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Javascript</h3>
                      <div className="progress">
                        <div className="progress-bar Javascript">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Photoshop</h3>
                      <div className="progress">
                        <div className="progress-bar PhotoShop">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Content */}
              <div className={toggleTab===3? "content active-content":"content"}>
                <div className="exp-column">
                  <h3>Web Developer</h3>
                  <span>2014-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, illum nihil? Facere perferendis pariatur unde impedit, atque eligendi amet odit!</p>
                </div>
                <div className="exp-column">
                  <h3>Graphic Designer</h3>
                  <span>2015-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, illum nihil? Facere perferendis pariatur unde impedit, atque eligendi amet odit!</p>
                </div>
                <div className="exp-column">
                  <h3>Photoshop</h3>
                  <span>2014-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, illum nihil? Facere perferendis pariatur unde impedit, atque eligendi amet odit!</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </Fragment>
  )
}

export default About;