import React from "react";

function MenuBarItem({menu}){
    return(
        <div className="menubar-item">
            <p>{menu.name}</p>
        </div>
    );
}

export default MenuBarItem;