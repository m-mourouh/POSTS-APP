import Button from './Button';
import { useState} from 'react';


const AddPost = ({addPost}) => {
  const [title, setTitle] = useState('');
  const [body,setBody] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title){
      alert('Please enter poste title')
    }else if(!body){
      alert('Please enter poste description')
    }else {
      const post = {title,body};
      addPost(post);
      setTitle('');
      setBody('');
    }
  }
  return (
    <form className='add-post-form' onSubmit={handleSubmit}>
      <input type="text" placeholder='Post title' value={title} onChange={(e)=> setTitle(e.target.value)} />
      <textarea name="" id="" cols="30" rows="5" placeholder='Write something...' value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
      <Button color="#62a1ff" text="POST" type="submit"/>
    </form>
  );
}

export default AddPost;
