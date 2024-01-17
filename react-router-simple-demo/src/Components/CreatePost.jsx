import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../Redux/Slice/action';
import { createPost } from '../api';

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreatePost = async () => {
    const newPost = await createPost({ title, body });
    dispatch(addPost(newPost));
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Body:</label>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <br />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;