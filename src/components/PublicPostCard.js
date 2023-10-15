import React from 'react'
import "../css/PublicPostCard.css"
function PublicPostCard() {
  return (
    <div className="post-box">
      <div className="card">
        <div className="card-header d-flex align-items-center">
          <img src="profile_picture.jpg" alt="Profile Picture" className="img-thumbnail profile-picture" />
          <span className="profile-name ms-2">John Doe</span>
        </div>
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla purus sit amet justo posuere, vel aliquet arcu pulvinar.</p>
        </div>
        <div className="card-footer">
          <div className="comments">
            <div className="comment">
              <img src="commenter1.jpg" alt="Commenter 1" className="commenter-img" />
              <span className="commenter-name">Alice</span>
              <p className="comment-text">Nice post!</p>
            </div>
            <div className="comment">
              <img src="commenter2.jpg" alt="Commenter 2" className="commenter-img" />
              <span className="commenter-name">Bob</span>
              <p className="comment-text">I agree!</p>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default PublicPostCard