import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, updatePost as updatePostAction, deletePost as deletePostAction } from '../Redux/Slice/action';
import { getAllPosts, updatePost as apiUpdatePost, deletePost as apiDeletePost } from '../api';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await getAllPosts();
      dispatch(setPosts(postsData));
    };

    fetchData();
  }, [dispatch]);

  const handleUpdatePost = async (id, newData) => {
    const updatedPost = await apiUpdatePost(id, newData);
    dispatch(updatePostAction(id, updatedPost));
  };

  const handleDeletePost = async (id) => {
    await apiDeletePost(id);
    dispatch(deletePostAction(id));
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleUpdatePost(post.id, { title: 'Updated Title' })}>
            Update
          </button>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;