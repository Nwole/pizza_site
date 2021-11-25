import React from 'react'
import  MenuList  from '../../Helpers/MenuList'
import  MenuItem  from '../../Components/MenuItemFolder/MenuItem'

import './menu.css'

const Menu = () => {
    
    return (
        <div className="menu">
            <h1 className="menu-title">
                Our Menu
            </h1>
            <div className="menu-list">
                {MenuList.map((menuItem, key) => {
                return ( 
                <MenuItem 
                key={key}
                photo={menuItem.image}
                name={menuItem.name} 
                price={menuItem.Price}/>

        ) })}
    
        </div>
        </div>
    )
}

export default Menu
