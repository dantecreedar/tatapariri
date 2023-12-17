import React from 'react'

const ItemMenu = ({ item }) => {
  return (
    <>
      {
        item.status ?
          <li><a href={item.url} className="text-white transition hover:opacity-75"><i className={item.icon}></i> {item.name}</a></li>
          :
          <li><a href={item.url} className="isDisabled text-white transition hover:opacity-75"><i className={item.icon}></i> {item.name}</a></li>
    }

    </>
  )
}

export default ItemMenu;