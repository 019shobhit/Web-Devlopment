import React from 'react'
import { Bookmark } from 'lucide-react'

const Cards = () => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="Amazon logo" />
                    <button className="save-btn">Save <Bookmark size={16} /></button>
                </div>

                <div className="center">
                    <h3 className="company-name">Amazon <span className="post-time">5 days ago</span></h3>
                    <h1 className="job-title">Senior UI/UX Designer</h1>
                    <div className="tags">
                        <span className="tag">Part-time</span>
                        <span className="tag">Senior level</span>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="salary-location">
                    <h3 className="salary">$120/hr</h3>
                    <p className="location">Delhi, India</p>
                </div>
                <button className="apply-btn">Apply now</button>
            </div>
        </div>
    )
}

export default Cards
