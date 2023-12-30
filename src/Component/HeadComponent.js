import React from 'react'
import "../App.css"

const HeadComponent = ({title,subtitle,text ,image}) => {
  return (
    <div>
      <div className="sliderImageDiv">
                <div className="sliderImageDiv1">
                    <h1 className="cauroselHeader">
                        {title}
                    </h1>
                    <h6 className="cauroselText">
                      {subtitle}
                    </h6>
                    <h6 className="cauroselText">
                       {text}
                    </h6>
                </div>
                <div className="sliderImageDiv2">
                    <img src={image} />
                </div>
            </div>
    </div>
  )
}

export default HeadComponent
