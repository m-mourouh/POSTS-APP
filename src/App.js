import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState,useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { api } from "./api/api";
import EditPost from "./components/EditPost";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  // variables
  const [togglePost,setTogglePost] = useState(false);
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res =  await api.get('/posts');
        const data = await res.data ;       
        setPosts(data); 
      }catch(err){
        console.error(err);
      }

    }
    console.log(posts)
    fetchPosts();
    console.log(posts)
  },[])
// show & hide post form
  const toggleBtn = () => {
    setTogglePost(!togglePost);
  }
// delete post
  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    setPosts(posts.filter(p => p.id != id))
  } 
// Add post 
const addPost = async (post) => {
  try {
    const postID = Math.floor(Math.random() * 1000) ;
    const postedDate = new Date();
    const newPost = {...post,id: postID,date: postedDate} ;
    const res = await api.post('/posts',newPost) ;
    const addedPost = await res.data ;
    setPosts([...posts,addedPost]);

  }catch(err){
    console.error(err)
  }
}
// edit post 
const editPost = async (post) => {
  try {
    const res = await api.put(`/posts/${post.id}`,post) ;
    const data = await res.data ;
    setPosts(posts.map(p => p.id === post.id ? data : p));

  }catch(err){
    console.error(err)
  }
}

  return (
      <Router> 
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main togglePost={togglePost} toggleBtn={toggleBtn} posts={posts} deletePost={deletePost} addPost={addPost}/>} />
        <Route path="/edit/:id" element={<EditPost  editPost={editPost}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
      </Router>
  );
}

export default App;
