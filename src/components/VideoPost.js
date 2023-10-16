import { React } from 'react'
import { FcLike } from 'react-icons/fc';
import { IoHeartDislikeOutline } from 'react-icons/io5';

const VideoPost = ({ userName, title, videoUrl, likes, dislikes, authorImage, userImage }) => {

    return (
        <div className="card mt-3 mb-3 shadow" style={{ width: '25rem' }}>
            {/* <div class="embed-responsive embed-responsive-16by9"></div>
            <iframe src={videoUrl} className="card-img-top mx-auto my-2" alt="Post" style={{ width: '300px', height: 'auto' }} ></iframe>
        </div> */}
            <div class="embed-responsive embed-responsive-16by9" style={{ marginLeft: '50px', marginTop: '10px', width: '400px', height: 'auto' }}>
                <iframe class="embed-responsive-item" src={videoUrl} allowfullscreen></iframe>
            </div>
            {/* <hr /> */}
            <br />
            <div className="card-body">
                <h5 className="card-title "><b>{title}</b></h5>
                <img src={authorImage} className="rounded-circle ml-5" alt="user" style={{ height: '30px', width: '30px' }} />
                {' '}
                <span className='text-muted ml-1'>{userName}</span>
                {/* <p className="card-text">
                    {content}
                </p> */}
                <p>
                    <FcLike size={30} />{' '}{likes}{' '}
                    <IoHeartDislikeOutline size={30} />{' '}{dislikes}
                    <a href="#" className="btn btn-dark" style={{ width: '100px', marginLeft: '200px', backgroundColor: 'black' }}>Watch</a>
                </p>
            </div>
            <div class="card-footer">
                <img src={userImage} className="rounded-circle" alt="user" style={{ height: '40px', width: '45px' }} />
                {' '}
                <span className='text-muted mx-3'><u>Comment</u></span>
            </div>
        </div >

    )
}

export default VideoPost