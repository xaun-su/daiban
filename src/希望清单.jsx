import React, { useState ,useEffect} from 'react';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './App.css';

export default function App() {
    //tab切换
    const [list, setList] = useState(true);
    const [newHope, setNewHope] = useState('');
    const [newDate, setNewDate] = useState('');
    //存储待办
    const [data, setData] = useState(()=>{
          const listData = localStorage.getItem('list');
          return listData ? JSON.parse(listData) : [];
    });
    
    //当数据发生变化修改本地数据
     useEffect(() => {
         localStorage.setItem('list', JSON.stringify(data));
    }, [data]);

    //切换待办状态
     const toggleCompletion = (id) => {
        // 判断唯一id再进行一个切换
        const index = data.findIndex(item => item.id === id);
        if (index === -1) return; 

        const newData = [...data];
        newData[index].completed = !newData[index].completed;
        setData(newData);
    };
    //删除待办
    const delHope = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    };

    //切换tab
    const changeView = (isListView) => {
        if (!isListView) {
            setNewHope('');
            setNewDate('');
        }
        setList(isListView);
    };

    //添加待办
    const addNewHope = () => {
        if (!newHope || !newDate) {
            alert('希望内容和日期都不能为空！');
            return;
        }
        setData([...data, {  id: Date.now().toString(),hope: newHope, date: newDate, completed: false }]);
        setNewHope('');
        setNewDate('');
        setList(true);
    };

    return (
        <div className="app-container">
            <AppHeader isListView={list} onChangeView={changeView} />
            <div className="content-section"> 
                {list ? (
                    <TodoList
                        todos={data}
                        onToggleComplete={toggleCompletion}
                        onDelete={delHope}
                    />
                ) : (
                    <AddTodoForm
                        newHope={newHope}
                        newDate={newDate}
                        onHopeChange={(e) => setNewHope(e.target.value)}
                        onDateChange={(e) => setNewDate(e.target.value)}
                        onAddTodo={addNewHope}
                    />
                )}
            </div>
        </div>
    );
}
