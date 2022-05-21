import Button from './Button';
import { useState,useEffect} from 'react';
import {useParams,useNavigate,useLocation} from "react-router-dom";
import { api } from '../api/api';
const EditPost = ({editPost}) => {

  const params = useParams();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [post,setPost] = useState({});
  // retrieve data 
  useEffect(()=>{
    const getPost = async () => {
      try {
        const res = await api.get(`/posts/${params.id}`);
        const data = await res.data;
        setPost(data);
      }catch(err){
        console.error(err);
      }
    }
    getPost();
  },[])
  // submission handling
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!post.title){
      alert('Please enter poste title')
    }else if(!post.body){
      alert('Please enter poste description')
    }else {
      editPost(post);
      navigate('/');
    }
  }
  return (
    <div className="editPost">
    <form className='add-post-form' onSubmit={handleSubmit}>
      <input type="text" placeholder='Post title' value={post.title} onChange={(e)=> setPost({...post,'title':e.target.value})} />
      <textarea name="" id="" cols="30" rows="5" placeholder='Write something...' value={post.body} onChange={(e)=> setPost({...post,'body':e.target.value})}></textarea>
      <Button color="#ffdc62" text="POST" type="submit"/>
    </form>

    </div>
  );
}

export default EditPost;
