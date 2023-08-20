import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import postsData from "../posts.json"
import authorImage from "../images/pic.svg"
import commenterImage from "../images/icon.svg"
import Footer from '../components/Footer'

const SinglePostPage = ()=> {
  const { id } = useParams();
  const post = postsData.find((post) => post.id === parseInt(id));  

  if (!post) {
    return <div>Post not found</div>;
  }

  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState(post.comments);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== '') {
      const newComment = {
        text: comment.trim(),
        author: 'User',
        date: new Date().toLocaleDateString(),
        likes: 0,
        isLiked: false,
      };

      setCommentsList((prevComments) => [...prevComments, newComment]);
      setComment('');
    }
  };

  const handleHeartClick = (commentIndex) => {
    setCommentsList((prevComments) => {
      const newComments = [...prevComments];
      newComments[commentIndex].isLiked = !newComments[commentIndex].isLiked;
      return newComments;
    });
  };
  
  return (
    <div>
      <div className='blogpost-container'>      

          <div className='blog-image2'>
            <img className='image' src={post.image} alt='Blog Image' />
          </div>
        
        <div className='blog-content'>   
          <Link className='blog' to='/'>
            <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 12L0 6L6 0L6.7875 0.7875L2.1375 5.4375H12V6.5625H2.1375L6.7875 11.2125L6 12Z" fill="#0266FF"/>
            </svg>
            Blog
          </Link>         
          <div className='blog-details'>
            <h1 className='blog-title'>{post.title}</h1>
            <div className='author-date'>
              <img src={authorImage}></img>
              <div className='author'>{post.author}</div>{post.date}
            </div>
            <div className='blog-text'>
              {post.text}
            </div>
            <div className='comment-likes'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M0 14V1.05C0 0.781667 0.105 0.539583 0.315 0.32375C0.525 0.107917 0.77 0 1.05 0H12.95C13.2183 0 13.4604 0.107917 13.6763 0.32375C13.8921 0.539583 14 0.781667 14 1.05V10.15C14 10.4183 13.8921 10.6604 13.6763 10.8763C13.4604 11.0921 13.2183 11.2 12.95 11.2H2.8L0 14ZM1.05 11.4625L2.3625 10.15H12.95V1.05H1.05V11.4625Z" fill="#9D9DB5"/>
              </svg>
              {post.comment}
              <div className='like-icon' onClick={toggleLike}>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                  {isLiked ? (
                    <path d="M11.6398 19L10.8568 18.2933C9.50705 17.0582 8.39291 15.9918 7.51432 15.0941C6.63574 14.1965 5.93543 13.3943 5.41337 12.6876C4.89131 11.9809 4.52524 11.3411 4.31514 10.7681C4.10505 10.1951 4 9.61573 4 9.03001C4 7.88404 4.38518 6.92588 5.15553 6.15553C5.92588 5.38518 6.87767 5 8.01091 5C8.7367 5 9.40837 5.1719 10.0259 5.51569C10.6435 5.85948 11.1814 6.35607 11.6398 7.00546C12.1746 6.31787 12.7412 5.81173 13.3397 5.48704C13.9382 5.16235 14.5812 5 15.2688 5C16.402 5 17.3538 5.38518 18.1241 6.15553C18.8945 6.92588 19.2797 7.88404 19.2797 9.03001C19.2797 9.61573 19.1746 10.1951 18.9645 10.7681C18.7544 11.3411 18.3884 11.9809 17.8663 12.6876C17.3442 13.3943 16.6439 14.1965 15.7653 15.0941C14.8868 15.9918 13.7726 17.0582 12.4229 18.2933L11.6398 19Z" fill="#0266FF"/>
                    ) : (
                    <path d="M11.6398 19L10.8568 18.2933C9.51 17.0567 8.3966 15.9899 7.51654 15.093C6.63648 14.1961 5.93543 13.3943 5.41337 12.6876C4.89131 11.9809 4.52524 11.3411 4.31514 10.7681C4.10505 10.1951 4 9.61573 4 9.03001C4 7.88206 4.38518 6.92341 5.15553 6.15405C5.92588 5.38468 6.87767 5 8.01091 5C8.7367 5 9.40837 5.1719 10.0259 5.51569C10.6435 5.85948 11.1814 6.35607 11.6398 7.00546C12.1746 6.31787 12.7412 5.81173 13.3397 5.48704C13.9382 5.16235 14.5812 5 15.2688 5C16.402 5 17.3538 5.38468 18.1241 6.15405C18.8945 6.92341 19.2797 7.88206 19.2797 9.03001C19.2797 9.61573 19.1746 10.1951 18.9645 10.7681C18.7544 11.3411 18.3884 11.9809 17.8663 12.6876C17.3442 13.3943 16.6432 14.1961 15.7631 15.093C14.8831 15.9899 13.7697 17.0567 12.4229 18.2933L11.6398 19ZM11.6398 17.4911C12.9289 16.307 13.9897 15.2916 14.8222 14.4448C15.6547 13.598 16.3161 12.8563 16.8063 12.2196C17.2965 11.583 17.6403 11.0155 17.8377 10.5172C18.035 10.0189 18.1337 9.52408 18.1337 9.03278C18.1337 8.19055 17.8663 7.49886 17.3315 6.95771C16.7967 6.41655 16.1106 6.14598 15.2731 6.14598C14.617 6.14598 14.0098 6.34652 13.4514 6.74761C12.8931 7.1487 12.442 7.71214 12.0982 8.43793H11.1623C10.8313 7.72487 10.3866 7.16462 9.82824 6.75716C9.26988 6.3497 8.66267 6.14598 8.00662 6.14598C7.1691 6.14598 6.48295 6.41655 5.94816 6.95771C5.41337 7.49886 5.14598 8.19164 5.14598 9.03605C5.14598 9.52861 5.24466 10.0264 5.44202 10.5293C5.63938 11.0323 5.98317 11.6053 6.4734 12.2483C6.96362 12.8913 7.62892 13.633 8.4693 14.4734C9.30969 15.3138 10.3665 16.3197 11.6398 17.4911Z" fill="#9D9DB5"/>
                    )
                  }
                </svg>     
              </div>
              <p className='like-icon-number'>{post.like}</p>
            </div>   
            <h2>Leave a comment:</h2>   
              <div className='leave-comment'>
                <textarea className='text-area' value={comment} onChange={handleCommentChange} />
                <button className='send' onClick={handleSubmitComment}>Send</button>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 100% 2" fill="none">
                <path d="M0 1H7000" stroke="#EBEFF8"/>
              </svg>
            <h2>Comments:</h2>
            <div className='comment-section'>
              {commentsList.map((comment, index) => (
                <div key={index} className='posted-comment'> 
                  <div>
                    <img src={commenterImage}></img> 
                  </div>                                                      
                  <div className='comment-details'>
                    <div className='commenter'>{comment.author}</div>
                    <div>{comment.text}</div>
                    <div className='commenter-date-like'>
                      {comment.date} 
                      <span className='heart-icon' onClick={() => handleHeartClick(index)}>
                        {comment.isLiked ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 14" fill="none">
                            <path d="M11.6398 19L10.8568 18.2933C9.50705 17.0582 8.39291 15.9918 7.51432 15.0941C6.63574 14.1965 5.93543 13.3943 5.41337 12.6876C4.89131 11.9809 4.52524 11.3411 4.31514 10.7681C4.10505 10.1951 4 9.61573 4 9.03001C4 7.88404 4.38518 6.92588 5.15553 6.15553C5.92588 5.38518 6.87767 5 8.01091 5C8.7367 5 9.40837 5.1719 10.0259 5.51569C10.6435 5.85948 11.1814 6.35607 11.6398 7.00546C12.1746 6.31787 12.7412 5.81173 13.3397 5.48704C13.9382 5.16235 14.5812 5 15.2688 5C16.402 5 17.3538 5.38518 18.1241 6.15553C18.8945 6.92588 19.2797 7.88404 19.2797 9.03001C19.2797 9.61573 19.1746 10.1951 18.9645 10.7681C18.7544 11.3411 18.3884 11.9809 17.8663 12.6876C17.3442 13.3943 16.6439 14.1965 15.7653 15.0941C14.8868 15.9918 13.7726 17.0582 12.4229 18.2933L11.6398 19Z" fill="#0266FF"/>
                          </svg>
                          ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 14" fill="none">
                            <path d="M11.6398 19L10.8568 18.2933C9.51 17.0567 8.3966 15.9899 7.51654 15.093C6.63648 14.1961 5.93543 13.3943 5.41337 12.6876C4.89131 11.9809 4.52524 11.3411 4.31514 10.7681C4.10505 10.1951 4 9.61573 4 9.03001C4 7.88206 4.38518 6.92341 5.15553 6.15405C5.92588 5.38468 6.87767 5 8.01091 5C8.7367 5 9.40837 5.1719 10.0259 5.51569C10.6435 5.85948 11.1814 6.35607 11.6398 7.00546C12.1746 6.31787 12.7412 5.81173 13.3397 5.48704C13.9382 5.16235 14.5812 5 15.2688 5C16.402 5 17.3538 5.38468 18.1241 6.15405C18.8945 6.92341 19.2797 7.88206 19.2797 9.03001C19.2797 9.61573 19.1746 10.1951 18.9645 10.7681C18.7544 11.3411 18.3884 11.9809 17.8663 12.6876C17.3442 13.3943 16.6432 14.1961 15.7631 15.093C14.8831 15.9899 13.7697 17.0567 12.4229 18.2933L11.6398 19ZM11.6398 17.4911C12.9289 16.307 13.9897 15.2916 14.8222 14.4448C15.6547 13.598 16.3161 12.8563 16.8063 12.2196C17.2965 11.583 17.6403 11.0155 17.8377 10.5172C18.035 10.0189 18.1337 9.52408 18.1337 9.03278C18.1337 8.19055 17.8663 7.49886 17.3315 6.95771C16.7967 6.41655 16.1106 6.14598 15.2731 6.14598C14.617 6.14598 14.0098 6.34652 13.4514 6.74761C12.8931 7.1487 12.442 7.71214 12.0982 8.43793H11.1623C10.8313 7.72487 10.3866 7.16462 9.82824 6.75716C9.26988 6.3497 8.66267 6.14598 8.00662 6.14598C7.1691 6.14598 6.48295 6.41655 5.94816 6.95771C5.41337 7.49886 5.14598 8.19164 5.14598 9.03605C5.14598 9.52861 5.24466 10.0264 5.44202 10.5293C5.63938 11.0323 5.98317 11.6053 6.4734 12.2483C6.96362 12.8913 7.62892 13.633 8.4693 14.4734C9.30969 15.3138 10.3665 16.3197 11.6398 17.4911Z" fill="#9D9DB5"/>
                          </svg>
                        )}
                      </span>
                      {comment.likes}
                    </div>
                    <svg className='line' xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 100% 2" fill="none">
                      <path d="M0 1H680" stroke="#EBEFF8"/>
                    </svg>
                  </div>                                                                                                                                 
                </div>               
              ))}             
            </div>
            <div className='show-more'>
              <button className='show-more-btn'>Show more</button>
            </div>
          </div>
        </div>

          <div className='blog-image1'>
            <img className='image' src={post.image} alt='Blog Image' />
          </div>   
            
      </div>
      <Footer />
    </div>
  )
}

export default SinglePostPage