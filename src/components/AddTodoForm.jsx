import React from 'react';

//添加待办组件
function AddTodoForm({ newHope, newDate, onHopeChange, onDateChange, onAddTodo }) {
    return (
        <div>
            <h1 className="heading">添加待办</h1> 
            <p className="form-paragraph"> 
                待办
                <input
                    type="text"
                    placeholder='请输入待办内容'
                    onChange={onHopeChange}
                    value={newHope}
                    className="form-input" 
                />
            </p>
            <p className="form-paragraph">
                日期
                <input
                    type="date"
                    onChange={onDateChange}
                    value={newDate}
                    className="form-input" 
                />
            </p>
            <button className="add-button" onClick={onAddTodo}>添加</button> 
        </div>
    );
}

export default AddTodoForm;
