$(function() {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;
        let long = crd.longitude;
        let latit = crd.latitude;
        let temp;
        $.ajax({
            type: "GET",
            url: "https://fcc-weather-api.glitch.me/api/current?lat=" +
                latit +
                "&lon=" +
                long,
            success: function(data) {
                document.getElementById("city").innerHTML = String(data.name);
                const weather = String(data.weather[0].main);

                let iconPicker = (we) => {
                    switch (we) {
                        case "Rain":
                            document.getElementById("icon").innerHTML =
                                '<i class="bi bi-cloud-drizzle-fill"></i>';
                            break;
                        case "Drizzle":
                            document.getElementById("icon").innerHTML =
                                '<i class="bi bi-cloud-rain-fill"></i>';
                            break;
                        case "Clouds":
                            document.getElementById("icon").innerHTML =
                                '<i class="bi bi-cloud-fill"></i>';
                            break;
                        case "Snow":
                            document.getElementById("icon").innerHTML =
                                '<i class="bi bi-snow2"></i>';
                            break;
                        case "Clear":
                            document.getElementById("icon").innerHTML =
                                '<i class="bi bi-brightness-high-fill"></i>';
                            break;
                        case "Thunderstorm":
                            document.getElementById("icon").innerHTML =
                                '<i class="bi bi-cloud-lightning-rain-fill"></i>';
                            break;
                        default:
                            document.getElementById("icon").innerHTML =
                                '<i class="bi bi-bell-slash-fill"></i>';
                    }
                }


                iconPicker(weather);
                const tempterature = document.getElementById("temp");
                let tempInC = Math.round(data.main.temp);
                tempterature.innerHTML = "<span>" + tempInC + "°C</span>";
                document.getElementById("weather").innerHTML = data.weather[0].main;

                tempInF = Math.round(tempInC * 1.8 + 32);

                function toggleTemp(element) {
                    if (element.innerHTML == "<span>" + tempInC + "°C</span>") {
                        element.innerHTML = "<span>" + tempInF + "°F</span>";
                    } else {
                        element.innerHTML = "<span>" + tempInC + "°C</span>";
                    }
                }
                tempterature.addEventListener("click", function() {
                    toggleTemp(tempterature);
                });
            }
        });
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    document.addEventListener(
        "DOMContentLoaded",
        navigator.geolocation.getCurrentPosition(success, error, options)
    );
});