import React from 'react';
//待办组件
function TodoItem({ item, onToggleComplete, onDelete }) {
    return (
        <div className="list-item"> 
            <div className="list-item-text-container"> 
                <span
                    className={item.completed ? "list-item-hope-text completed" : "list-item-hope-text"}
                >
                    {item.hope}
                </span>
                <span className="list-item-text">{item.date}</span> 
            </div>
            <div>
                <button
                    className={item.completed ? "complete-button" : "complete-button pending"}
                    onClick={() => onToggleComplete(item.id)}>
                    {item.completed ? '已完成' : '待办'}
                </button>
                <button
                    className="delete-button" 
                    onClick={() => onDelete(item.id)}>
                    删除
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
