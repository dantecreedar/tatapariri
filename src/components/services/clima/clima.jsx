import React, { useEffect, useState } from 'react';
import "./clima.scss";

const Clima = () => {


    return (
        <>
            <section className="container-fluid">
                <div className="frame">
                    <div id="icon" className='iconClima ml-5'></div>
                    <h2 id="city"></h2>
                    <h3><b id="temp" className='ml-5'></b></h3>
                    
                </div>
            </section>
        </>
    )
}


export default Clima;