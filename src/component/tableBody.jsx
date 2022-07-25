import React from 'react';
const TableBody = ({todos, onTodoCompleted}) => {
    if(todos){
        return (
        <tbody>
            {
                todos.map((item)=>{ return (
                    <tr key={item.todo}>
                        <td><div onClick={()=>{onTodoCompleted(item)}}><i className={"bi bi" + (item.active? "":"-check") + "-circle"}></i></div></td>
                        <td><div className={(item.active ? "": "text-decoration-line-through")}>{item.todo}</div></td>
                    </tr>)
                })
            }
            
                    
        </tbody>
    );
    }
    
}
 
export default TableBody;