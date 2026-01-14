import React from 'react'
import { Bookmark } from 'lucide-react'

const Cards = (props) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.brandLogo} alt="Amazon logo" />
                    <button className="save-btn">Save <Bookmark size={16} /></button>
                </div>

                <div className="center">
                    <h3 className="company-name">{props.companyName} <span className="post-time">{props.datePosted} </span></h3>
                    <h1 className="job-title">{props.post}</h1>
                    <div className="tags">
                        <span className="tag">{props.tag1}</span>
                        <span className="tag">{props.tag2}</span>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="salary-location">
                    <h3 className="salary">${props.pay}</h3>
                    <p className="location">{props.location}</p>
                </div>
                <button className="apply-btn">Apply now</button>
            </div>
        </div>
    )
}

export default Cards
