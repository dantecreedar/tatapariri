import { useState } from "react";
import "./navbar.scss";
import { items } from "../../items";
import NavbarBtn from "./navbarbtn/navbarbtn";
import Item from "./item/item";
import CotizationBanner from "../../services/cotizationBanner/cotizationBanner";
import logo from "../../../assets/goop.png"



const Navbar = () => {

    // eslint-disable-next-line no-unused-vars
    let [coins, setCoins] = useState(0);

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 w-full z-auto mt-auto border-b border-gray-200 dark:border-gray-600">
                <CotizationBanner />
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-6" alt="Flowbite Logo" />
                        <span className="self-center text-2x1 font-semibold whitespace-nowrap dark:text-white">Cooperativa Tatá Pariri</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <NavbarBtn coins={coins} />
                        {/* <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button> */}
                    </div>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                items.map((item, idx) => {
                                    return (<Item item={item} key={idx} />)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;