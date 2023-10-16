import React, { useState } from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import Post from '../components/Post';

const BlogPage = () => {
    const initialPosts = [
        {
            "id": 1,
            "author": "Farzana Reefat Raha",
            "title": "PCOS Life: Thriving Beyond the Diagnosis",
            "content": "Introduction Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder that affects people assigned female at birth. While it may come with a variety of challenges, those  those living with PCOS have shown incredible resilience and have learned to thrive beyond the diagnosis. In this blog, we will explore the various aspects of PCOS and how individuals can lead fulfilling lives while managing...",
            "image": "pcos.jpg",
            "likes": 12,
            "dislikes": 3,
            "authorImage": "raha.jpg",
        },
        {
            "id": 2,
            "author": "Dr. Shaun Murphy",
            "title": "Cancer Research and Clinical Trials:Advancements in Medicine",
            "content": "Cancer, a complex group of diseases characterized by the uncontrolled growth of abnormal cells, continues to pose a significant health challenge worldwide. However, there is hope on the horizon in the form of cutting-edge research and clinical trials. In this blog, we will explore the vital role of cancer research and clinical trials in advancing medical knowledge and improving treatment options for ...",
            "image": "cancer.jpg",
            "likes": 256,
            "dislikes": 45,
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
                        {/* <Post /> */}
                        {posts.map((post) => (
                            <Post
                                key={post.id}
                                userName={post.author}
                                title={post.title}
                                content={post.content}
                                imageUrl={post.image}
                                likes={post.likes}
                                dislikes={post.dislikes}
                                authorImage={post.authorImage}
                                userImage={"dummyDp.png"}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default BlogPage