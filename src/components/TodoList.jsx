import React from 'react';
import TodoItem from './TodoItem';

//待办列表
function TodoList({ todos, onToggleComplete, onDelete }) {
  //根据待办状态进行排序
    const sortedTodos = [...todos].sort((a, b) => {
        if (!a.completed && b.completed) {
            return -1;
        }
        if (a.completed && !b.completed) {
            return 1;
        }

        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
    });
    //过滤出已完成和未完成的待办
    const completedCount = todos.filter(item => item.completed).length;
    const pendingCount = todos.filter(item => !item.completed).length;

    return (
        <div>
            <h1 className="heading">待办清单</h1>
            <ul className="ul-reset"> 
                {sortedTodos.map((item) => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            <div className="footer"> 
                <p>已完成: {completedCount} | 待办: {pendingCount}</p>
            </div>
        </div>
    );
}

export default TodoList;
