import React from 'react';
//头部组件
function AppHeader({ isListView, onChangeView }) {
    return (
        <div className="header"> 
            <button
                className={isListView ? "nav-button active" : "nav-button"}
                onClick={() => onChangeView(true)}
            >
                待办列表
            </button>
            <button
                className={!isListView ? "nav-button active" : "nav-button"}
                onClick={() => onChangeView(false)}
            >
                添加待办
            </button>
        </div>
    );
}

export default AppHeader;
