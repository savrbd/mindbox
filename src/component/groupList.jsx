import React from 'react';
const GroupList = ({ groupList, onItemSelect, selectedProf, onDeleteSelect }) => {
    return (  
        <ul className="list-group">
            {groupList.map((item)=><li key={item} className={"btn btn-light m-2" + (selectedProf===item ? "active" : "")} onClick={()=>onItemSelect(item)}>{item}</li>)}
            <li className="btn btn-light m-2" onClick={onDeleteSelect}>All</li>
        </ul>
    );
}
 
export default GroupList;