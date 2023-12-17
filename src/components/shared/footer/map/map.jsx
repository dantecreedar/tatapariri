import React from 'react';
import "./map.scss";

const Map = () => {
    return (
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14176.991909793203!2d-55.59728716080342!3d-27.336714860855775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457dc1b4988d1f1%3A0x6932a54b4fe31a4f!2sPuerto%20Santa%20Ana%2C%20Misiones!5e0!3m2!1ses-419!2sar!4v1701528172254!5m2!1ses-419!2sar" allowFullScreen="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Map