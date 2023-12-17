import React, { useState } from 'react';
import { useEffect } from 'react';
import "./cotizationBanner.scss";
import CotizationBannerInner from './cotizationBannerInner/cotizationBannerInner';
import { getDolarCotizations, getEuroCotizations, getPesosChilenos, getPesosUruguayos, getRealesCotizations } from '../../../services/monedaApi';



const CotizationBanner = () => {

    const [moneys, setMoneys] = useState([{}]);

    useEffect(() => {
        getDolarCotizations().then((dolar) => {
            setMoneys(dolar)
        });
    }, [])

    return (
        <>
            <section className='dolar-box-container bg-gray-900 font-semibold'>
                <ul className='grid grid-flow-col auto-cols-max banner'>
                    {
                        moneys.map((moneys, idx) => {
                            return <CotizationBannerInner moneysCotizations={moneys} key={idx} />
                        })
                    }
                </ul>

            </section>
        </>
    )
}

export default CotizationBanner;