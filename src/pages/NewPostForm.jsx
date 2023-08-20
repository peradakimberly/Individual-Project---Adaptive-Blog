import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PostImage } from "../components/PostImage"
import Footer from '../components/Footer'
import postsData from "../posts.json"

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleImageSuccess = (imageUrl) => {
    setImageUrl(imageUrl);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handlePostClick = () => {
    if (title.trim() !== '' && text.trim() !== '' && imageUrl.trim() !== '') {
      const newPost = {
        id: postsData.length + 1,
        title: title,
        text: text,
        image: imageUrl,
        author: 'Your Name', 
        date: new Date().toLocaleDateString(),
        like: 0,
        comment: 0,
        isLiked: false,
        comments: [],
      };

      postsData.push(newPost);

      setTitle('');
      setText('');
      setImageUrl('');

      alert('Post Published'); 
    } else {
      alert('Please fill in all fields');
    }
  };
  return (
    <div>
      <div className='blogpost-container'>
        <div className='newpostblog'>

          <div className='add-post-image2'>
            <PostImage addImageSuccessful={handleImageSuccess} />
          </div>

          <div className='add-post'>
            <Link className='blog' to='/'>
                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 12L0 6L6 0L6.7875 0.7875L2.1375 5.4375H12V6.5625H2.1375L6.7875 11.2125L6 12Z" fill="#0266FF"/>
                </svg>
                Blog
            </Link> 
            <h1 className='new-post'>New post</h1>
            <div className='add-title'>
                <h3>Add title*</h3>
                <textarea className='new-post-title' placeholder='Our First Concert in the U.S.!' value={title} onChange={handleTitleChange} /></div>
            <div className='add-text'>
              <h3>Add text*</h3>
              <textarea className='new-post-text' placeholder="It's official! We're coming to the U.S. for our first-ever concert!" value={text} onChange={handleTextChange} /></div>
            <button className='post'onClick={handlePostClick}>Post</button>
          </div>

          <div className='add-post-image1'>
            <PostImage addImageSuccessful={handleImageSuccess} />
          </div>
          
        </div>
          
      </div>
      <Footer />
    </div>
        
  )
}

export default NewPostForm