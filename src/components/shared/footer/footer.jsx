import React from 'react';
import "./footer.scss";
import Map from './map/map';
import { items } from '../../items';
import ItemMenu from "./itemMenu/itemMenu";
import DetailsInfo from "./detailsInfo/detailsInfo";
import Clima from '../../services/clima/clima';
import BannerFooter from '../banner1/bannerFooter';

const Footer = () => {
    return (
        <>
            <section className="bg-gray-900 lg:grid lg:grid-cols-5">
                <div className="relative block h-32 lg:col-span-2 lg:h-full">
                    <Map />
                </div>
                <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

                        <section className='details'>
                            <DetailsInfo />
                        </section>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <h6 className="font-medium text-white text-lg"><i className="bi bi-map-fill"></i>  Mapa del sitio</h6>

                                <ul className="mt-6 space-y-4 text-sm">
                                    {
                                        items.map((item, idx) => {
                                            return (<ItemMenu item={item} key={idx} />)
                                        })
                                    }
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-white text-lg"><i className="bi bi-radar"></i> Tiempo:</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    <Clima />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-12">
                        <div className=" text-center">
                            <p className="mt-8 text-xs text-white sm:mt-0">
                                &copy; 2023 Cooperativa Tatá Piriri Ltda. Todos los derechos reservados
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <BannerFooter />
        </>
    )
}

export default Footer;