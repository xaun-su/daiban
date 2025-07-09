import React, { useState } from 'react';

function CommentSection() {
  // 初始化评论状态
  const [content, setComments] = useState([]);
  const [newContent, setNewComment] = useState('');
  
  // 处理新评论的输入
  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  // 添加评论
  const handleAddComment = () => {
    if (newContent.trim() !== '') {
      const updatedComments = [...content];
      updatedComments.push(newContent); 
      setComments(updatedComments); 
      setNewComment('');  
    }
  };

  // 删除评论
  const handleDeleteComment = (index) => {
    const updatedComments = [...content]; 
    updatedComments.splice(index, 1); 
    setComments(updatedComments); 
  };

  return (
    <div>
      <h2>评论区</h2>
      <div>
        <textarea
          value={newContent}
          onChange={handleInputChange}
          placeholder="请输入评论..."
        />
        <button onClick={handleAddComment}>发表评论</button>
      </div>

      <ul>
        {content.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => handleDeleteComment(index)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CommentSection;
