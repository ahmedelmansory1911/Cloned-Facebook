import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '../../../../firebase-config';
import Post from './Post';
function Posting() {
    const postsCollectionRef = collection(db, 'posts');
    const postsQuery = query(postsCollectionRef, orderBy('timeStamp', 'desc'));

    const [realtimePosts, loading, error] = useCollection(postsQuery);

    if (loading) {
        console.log('Loading...');
        return <div>Loading...</div>;
    }
    if (error) {
        console.log('Error:', error);
        return <div>Error: {error.message}</div>;
    }
    console.log('Realtime Posts:', realtimePosts?.docs);
    if (!realtimePosts?.docs.length) return <div>No posts found</div>;


    return (
        <>
            {realtimePosts?.docs.length === 0
                ? <div>No posts found.</div>
                : realtimePosts?.docs.map((post) => (
                    <Post
                        key={post.id}
                        message={post.data().message}
                        time={post.data().timeStamp}
                        postImage={post.data().postImage}
                    />
                ))
            }
        </>
    );
}

export default Posting;
