import React from 'react'

const About = () => {
  return (
    <div>
       <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage1} />
                    <div className="centeredText">
                        <div >
                            <h1 className="cauroselHeader">Our Mission</h1>
                            <h6  className="cauroselText">
                                "Our Mission: To consistently deliver
                                exceptional welding services, exceeding industry
                                standards, while fostering a culture of
                                innovation, safety, and environmental
                                responsibility"
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="sliderImageDiv">
                    <img alt="slider1" src={HomeImage2} />
                    <div className="centeredText">
                        <div >
                            <h1 className="cauroselHeader">Our Vission</h1>
                            <h6  className="cauroselText">
                                "Our Vision: To be the premier provider of
                                welding solutions, setting the gold standard for
                                excellence in craftsmanship and innovation. We
                                envision a future where our company is
                                synonymous with cutting-edge welding
                                technologies, superior quality, and unwavering
                                dedication to client satisfaction."
                            </h6>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default About
