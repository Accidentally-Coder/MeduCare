import React from 'react';
import { FcLike } from 'react-icons/fc';
import { IoHeartDislikeOutline } from 'react-icons/io5';

const Post = ({ userName, title, content, imageUrl, likes, dislikes, authorImage, userImage }) => {
    return (
        <div className="card mb-3 mt-3 shadow" style={{ width: '100%' }}>
            <img src={imageUrl} className="card-img-top mx-auto my-2" alt="Post" style={{ width: '300px', height: 'auto' }} />
            <hr />
            <div className="card-body">
                <h5 className="card-title "><b>{title}</b></h5>
                <img src={authorImage} className="rounded-circle ml-5" alt="user" style={{ height: '30px', width: '30px' }} />
                {' '}
                <span className='text-muted ml-1'>{userName}</span>
                <p className="card-text">
                    {content}
                </p>
                <p>
                    <FcLike size={30} />{' '}{likes}{' '}
                    <IoHeartDislikeOutline size={30} />{' '}{dislikes}
                    <a href="#" className="btn btn-dark" style={{ width: '100px', marginLeft: '50px', backgroundColor: 'black' }}>Read</a>
                </p>
            </div>
            <div class="card-footer">
                <img src={userImage} className="rounded-circle" alt="user" style={{ height: '40px', width: '45px' }} />
                {' '}
                <span className='text-muted mx-3'><u>Comment</u></span>
            </div>
        </div>

    );
};

export default Post;