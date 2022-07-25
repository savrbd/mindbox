import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const TableTodos = ({todos, onTodoCompleted}) => {
    if (todos[0]){
        return (
            <table className="table">
                <TableHeader/>
                <TableBody todos={todos} onTodoCompleted={onTodoCompleted}/>
            </table>
        );
    } else {
        return (
            <h5>Внесите список задач</h5>
        )
    }
    
}
 
export default TableTodos;