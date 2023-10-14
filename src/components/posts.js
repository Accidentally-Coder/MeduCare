import React from 'react';

const Post = ({ userName, content, imageUrl }) => {
    return (
      <div className="card mb-3">
        <div className='row'>
          <div className='col'>
            <img src={imageUrl} alt="Post" />
          </div>
        </div>
        <div className='col'>
          <h5>{userName}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{content}</p>
        </div>
      </div>
    );
  };
  
  export default Post;