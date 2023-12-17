import React from 'react';
import "./cotizationbannerinner.scss"

const CotizationBannerInner = ({ moneysCotizations }) => {



  if (moneysCotizations.nombre !== "Solidario") {
    return (
      <>
        <li className='cotization dolar-item'>
          <span className='uppercase dolar-name mr-5'><i className="bi bi-cash"></i> {moneysCotizations.moneda} {moneysCotizations.casa}</span>
          <span className='uppercase mr-5'><i className="bi bi-bag-heart-fill"></i> Compra: $ {moneysCotizations.compra}</span>
          <span className='uppercase mr-5'><i className="bi bi-bag-fill"></i> Venta: $ {moneysCotizations.venta}</span>
        </li>
      </>
    )
  }
}

export default CotizationBannerInner;