import React ,{useState} from "react";
import './index.css'

function App(){
const [content,setComments]=useState([])
const [newComment,setNewComment]=useState('')
//获取输入框新状态
const handleInputChange = (e) => {
  setNewComment(e.target.value);
};
//添加评论
const handleAddComment=()=>{
  //判断输入内容是否为空
  if(newComment.trim()!==''){
      //不为空更新替换
      setComments([...content,newComment])// // 使用扩展运算符将现有评论与新评论合并
      setNewComment('')
  }
}
//删除评论
const handleDeleteComment = (index) => {
  // 使用 filter 方法创建一个新的评论数组，排除掉需要删除的评论
  const updatedComments = content.filter((_, i) => i !== index);//filter
  setComments(updatedComments);
};

  return(
    <div>
      <h2>评论区</h2>
      <div>
        <textarea
        value={newComment}
        //当发生改变调用handleInputChange
        onChange={handleInputChange}
        placeholder="请输入评论..."
        />
        
        <button onClick={handleAddComment}>发表评论</button>
      </div>
      <ul>
        {content.map((content, index) => (
          <li key={index}>
            {content}
            <button onClick={() => handleDeleteComment(index)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App