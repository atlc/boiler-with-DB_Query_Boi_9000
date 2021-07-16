import React, { useState, useEffect } from 'react';
import { Posts } from '../../types';
import { GET } from '../services/fetchExtender';

const Posts = () => {
    const [posts, setPosts] = useState<Posts[]>([]);

    useEffect(() => {
        GET('/api/posts')
        .then(res => setPosts(res))
    }, []);

    if (!posts) return <h1 className="display-1">Generic non-NSFW error</h1>

    return (
        <div>
            {posts.map(post => (
                <div key={`author-card-${post.id}`} className="card">
                    <div className="card-header">
                        {post.title}
                    </div>
                    <div className="card-body">
                        {post.content}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts;
