import React, { useState } from 'react';
import AddTodoForm from './addTodoForm';
import GroupList from './groupList';
import TableTodos from './tableTodos';

const Main = () => {
      const initialState = [{active: true, todo: "Тестовое задание"}, {active: true, todo: "Прекрасный код"}] 
      const [todos, setTodos]= useState(initialState);
      const cc = {
          todo: "",
          active: true
        };
      const [data, setData] = useState(cc);
      const groupList= ["Active", "Completed"];
      const [selectedProf, setSelectedProf] = useState()
      const handleChange = ({ target }) => {
        setData((prevState) => ({
          ...prevState,
          [target.name]: target.value,
        }));
      };
      const addNewTodo = () => {
        setTodos((prevState)=>([...prevState, data]))
        setData(cc)
      }
      const handleTodoCompleted = (params) => {
        console.log(params)
        const newTodos=[...todos];
        const elementIndex= todos.findIndex((el)=>el==params)
        newTodos[elementIndex]={...params, active:!params.active}
        setTodos(newTodos)
      }
      const handleItemSelect = (item) => {
        setSelectedProf(item)
      }
      const handleDeleteSelect = () => {
        setSelectedProf()
      }
      const selectTodos = selectedProf? todos.filter((item)=> { if(selectedProf==="Active"){ return item.active===true}
    else if(selectedProf==="Completed"){return item.active===false}}): todos
    return (
        <>
            <h1>todos</h1>
            <AddTodoForm data={data} onChange={handleChange} addNewTodo={addNewTodo}/>
            <div className='d-flex'>
              <GroupList groupList={groupList} onItemSelect={handleItemSelect} selectedProf={selectedProf} onDeleteSelect={handleDeleteSelect}/>
              <TableTodos todos={selectTodos} onTodoCompleted={handleTodoCompleted} />
            </div>
        </>    
        
    );
}
 
export default Main;