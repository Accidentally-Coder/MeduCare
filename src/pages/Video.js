// may be will not use it

import { React, useState } from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { Container, Row, Col } from 'react-bootstrap';
import VideoPost from './../components/VideoPost';

const Video = () => {
    const initialPosts = [
        {
            "id": 1,
            "author": "Farzana Reefat Raha",
            "title": "Telehealth : The Balanced Approach",
            "video": "video1.mp4",
            "likes": 7,
            "dislikes": 1,
            "authorImage": "raha.jpg",
        },
        {
            "id": 2,
            "author": "Dr. Shaun Murphy",
            "title": "Arthritis Awareness In America",
            "video": "video2.mp4",
            "likes": 10,
            "dislikes": 0,
            "authorImage": "dummy.jpg",
        },
    ];

    const [posts, setPosts] = useState(initialPosts);

    const updatePosts = () => {
        const updatedPost = {
            "id": 2,
            "author": "New Author",
            "title": "New Title",
            "content": "New Content",
            "image": "new-image.jpg",
            "likes": 100,
            "dislikes": 10,
            "authorImage": "new-author-image.jpg",
        };

        // Use a function to update the state and ensure the previous state is preserved
        setPosts(prevPosts => [...prevPosts, updatedPost]);
    };

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col xs={2} className="p-0">
                        <Sidebar />
                    </Col>
                    <Col xs={10}>
                        <div className='row'>
                            {posts.map((post, index) => (

                                index % 2 === 0 && (

                                    <div key={post.id} className='col-6'>

                                        <VideoPost
                                            userName={post.author}
                                            title={post.title}
                                            videoUrl={post.video}
                                            likes={post.likes}
                                            dislikes={post.dislikes}
                                            authorImage={post.authorImage}
                                            userImage={"dummyDp.png"}
                                        />

                                    </div>


                                )



                            )

                            )

                            }
                        </div>




                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Video