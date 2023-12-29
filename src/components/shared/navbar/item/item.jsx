
// eslint-disable-next-line react/prop-types
const Item = ({ item }) => {
  return (
    <>
      <li className="">{
        // eslint-disable-next-line react/prop-types
        item.status ?
        // eslint-disable-next-line react/prop-types
        <a href={item.url} className="block py-2 px-3 text-white bg-black  md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page"><i className={item.icon} />  {item.name}
        </a>
        // eslint-disable-next-line react/prop-types
        : <a href={item.url} className="isDisabled block py-2 px-3 text-white bg-black md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page"><i className={item.icon} />  {item.name}
        </a>
        }
      </li>
    </>
  )
}

export default Item;