import React from 'react';
const TableBody = ({todos, onTodoCompleted}) => {
    if(todos){
        return (
        <tbody>
            {
                todos.map((item)=>{ return (
                    <tr key={item.todo}>
                        <td><div onClick={()=>{onTodoCompleted(item)}}><i className={"bi bi" + (item.active? "":"-check") + "-circle"}></i></div></td>
                        <td>{item.todo}</td>
                    </tr>)
                })
            }
            
                    
        </tbody>
    );
    }
    
}
 
export default TableBody;