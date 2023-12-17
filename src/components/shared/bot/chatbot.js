"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ChatNeuron {
    constructor() {
        this.logic = {
            "hola": {
                "feliz": ["¡Hola! ¿En qué puedo ayudarte?", "¡Hola, buen día! ¿En qué puedo ayudarte hoy?"],
                "triste": ["Hola, ¿cómo estás?", "Hola, espero que tu día mejore."],
            },
            "adios": {
                "feliz": ["¡Hasta luego!", "¡Que tengas un día increíble!"],
                "triste": ["Hasta luego, cuídate.", "Espero verte pronto."],
            },
            "que tal el dia": {
                "feliz": ["¡Bastante soleado!", "¡pero con buenos ánimos!"],
                "triste": ["El día no ha sido el mejor, pero espero que mejore.", "Espero que tu día esté yendo bien."],
            },
            "muestrame el catalogo de misiones": {
                "feliz": ["¡Este es el catálogo del negocio: comida, productos!", "¡Explora nuestras emocionantes misiones!"],
                "triste": ["Nuestro catálogo de misiones puede alegrar tu día. ¡Échale un vistazo!", "Hasta luego, cuídate."],
            },
            "distribuidora de productos": {
                "feliz": ["Bienvenido a nuestra distribuidora de productos. ¿En qué categoría estás interesado?", "Explora nuestro catálogo de productos."],
                "triste": ["Lamentamos que no tengamos lo que estás buscando. ¿Podemos ayudarte con algo más?", "Esperamos que encuentres lo que necesitas pronto."],
            },
            "productos de limpieza": {
                "feliz": ["Tenemos una amplia variedad de productos de limpieza. ¿Necesitas algo específico?", "¡Descubre nuestras opciones de productos de limpieza!"],
                "triste": ["Si estás buscando productos de limpieza, podemos ayudarte a encontrar lo que necesitas.", "Lamentamos si no tenemos lo que buscas en este momento."],
            },
            "productos de alimenticios": {
                "feliz": ["¿Hambre? Descubre nuestra gama de productos alimenticios. ¡Hay algo para todos los gustos!", "Explora nuestros deliciosos productos alimenticios."],
                "triste": ["Si buscas algo para comer, estamos aquí para ayudarte a encontrar la opción perfecta.", "Lamentamos si no encuentras lo que necesitas en nuestro catálogo alimenticio."],
            },
            "productos electrónicos": {
                "feliz": ["¡Descubre la última tecnología con nuestros productos electrónicos! ¿Necesitas asesoramiento?", "Explora nuestra selección de productos electrónicos de alta calidad."],
                "triste": ["Si estás buscando productos electrónicos, estamos aquí para ayudarte a encontrar lo que necesitas.", "Lamentamos si no tenemos el producto electrónico que buscas en este momento."],
            },
            "precio de productos de belleza": {
                "feliz": ["Nuestros productos de belleza tienen precios increíbles. ¿Necesitas información sobre alguno en particular?", "¡Descubre ofertas especiales en productos de belleza con nosotros!"],
                "triste": ["Lamentamos si los precios no cumplen con tus expectativas. ¿Podemos ayudarte en algo más?", "Estamos aquí para discutir opciones de precios que se ajusten a tu presupuesto."],
            },
            "precio de productos hogar": {
                "feliz": ["Encuentra excelentes ofertas en productos para el hogar. ¿Hay algo específico que estés buscando?", "Consulta nuestros precios competitivos en artículos para el hogar."],
                "triste": ["Lamentamos si los precios no son lo que esperabas. ¿En qué más podemos ayudarte?", "Si buscas opciones más económicas, estamos aquí para ayudarte a encontrarlas."],
            },
            "precio de productos deportivos": {
                "feliz": ["Descubre precios atractivos en nuestra sección de productos deportivos. ¿Necesitas información sobre algún artículo en particular?", "¡Explora nuestras ofertas en productos deportivos y encuentra lo que necesitas!"],
                "triste": ["Lamentamos si los precios de nuestros productos deportivos no cumplen con tus expectativas. ¿En qué más podemos ayudarte?", "Si buscas ofertas especiales, estamos aquí para discutir opciones de precios contigo."],
            },
            "precio de productos tecnológicos": {
                "feliz": ["Explora la última tecnología a precios competitivos. ¿Hay algo específico que te interese?", "Consulta nuestros precios en productos tecnológicos y descubre increíbles ofertas."],
                "triste": ["Lamentamos si los precios de nuestros productos tecnológicos no son lo que esperabas. ¿En qué más podemos ayudarte?", "Estamos aquí para discutir opciones de precios que se adapten a tus necesidades."],
            },
            "precio de productos infantiles": {
                "feliz": ["Descubre precios asequibles en nuestra sección de productos infantiles. ¿Necesitas información sobre algún artículo para niños?", "¡Consulta nuestras ofertas en productos infantiles y encuentra productos de calidad para tus pequeños!"],
                "triste": ["Lamentamos si los precios de nuestros productos infantiles no cumplen con tus expectativas. ¿En qué más podemos ayudarte?", "Si buscas opciones más económicas, estamos aquí para ayudarte a encontrarlas."],
            },
            "precio de productos gourmet": {
                "feliz": ["Explora nuestra selección gourmet a precios irresistibles. ¿Hay algo específico que te gustaría probar?", "Consulta nuestros precios competitivos en productos gourmet y disfruta de la alta calidad."],
                "triste": ["Lamentamos si los precios no son lo que esperabas en nuestra sección gourmet. ¿En qué más podemos ayudarte?", "Si buscas opciones más económicas, estamos aquí para ayudarte a encontrarlas."],
            },
            "precio de productos para mascotas": {
                "feliz": ["Encuentra productos para mascotas a precios convenientes. ¿Necesitas información sobre algún artículo para tus mascotas?", "Consulta nuestros precios en productos para mascotas y cuida a tus amigos peludos."],
                "triste": ["Lamentamos si los precios de nuestros productos para mascotas no cumplen con tus expectativas. ¿En qué más podemos ayudarte?", "Estamos aquí para discutir opciones de precios que se adapten a tu presupuesto."],
            },
            "precio de productos libros": {
                "feliz": ["Descubre precios atractivos en nuestra sección de libros. ¿Hay algo específico que te interese leer?", "Consulta nuestros precios competitivos en libros y amplía tu biblioteca."],
                "triste": ["Lamentamos si los precios de nuestros libros no son lo que esperabas. ¿En qué más podemos ayudarte?", "Estamos aquí para discutir opciones de precios contigo y encontrar las mejores lecturas para ti."],
            },
            "precio de productos moda": {
                "feliz": ["Explora la moda a precios increíbles. ¿Necesitas información sobre alguna prenda en particular?", "Consulta nuestros precios competitivos en productos de moda y mantente a la vanguardia del estilo."],
                "triste": ["Lamentamos si los precios de nuestros productos de moda no cumplen con tus expectativas. ¿En qué más podemos ayudarte?", "Estamos aquí para discutir opciones de precios que se adapten a tu estilo y presupuesto."],
            },
            "precio de productos jardinería": {
                "feliz": ["Encuentra herramientas y accesorios para jardinería a precios convenientes. ¿Necesitas algo específico para tu jardín?", "Consulta nuestros precios en productos de jardinería y embellece tu espacio verde."],
                "triste": ["Lamentamos si los precios de nuestros productos de jardinería no son lo que esperabas. ¿En qué más podemos ayudarte?", "Estamos aquí para discutir opciones de precios contigo y ayudarte a cuidar de tu jardín de manera asequible."],
            },
        };
        this.fetchUserData = () => __awaiter(this, void 0, void 0, function*() {
            const response = yield fetch('./Api/api.json');
            return response.json();
        });
        this.calculateJaccardSimilarity = (a, b) => {
            const setA = new Set(a);
            const setB = new Set(b);
            const intersection = new Set([...setA].filter(x => setB.has(x)));
            const union = new Set([...setA, ...setB]);
            return intersection.size / union.size;
        };
        this.calculateLevenshteinDistance = (a, b) => {
            if (a.length === 0)
                return b.length;
            if (b.length === 0)
                return a.length;
            const matrix = [];
            for (let i = 0; i <= b.length; i++) {
                matrix[i] = [i];
            }
            for (let j = 0; j <= a.length; j++) {
                matrix[0][j] = j;
            }
            for (let i = 1; i <= b.length; i++) {
                for (let j = 1; j <= a.length; j++) {
                    const cost = a[j - 1] === b[i - 1] ? 0 : 1;
                    matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
                }
            }
            return 1 - matrix[b.length][a.length] / Math.max(a.length, b.length);
        };
        this.findSimilarWords = (message) => {
            const threshold = 0.5;
            const similarWords = [];
            for (const word in this.logic) {
                const similarityJaccard = this.calculateJaccardSimilarity(message, word);
                const similarityLevenshtein = this.calculateLevenshteinDistance(message, word);
                if (similarityJaccard > threshold || similarityLevenshtein > threshold) {
                    similarWords.push(word);
                }
            }
            return similarWords;
        };
        this.getRandomResponse = (responses) => {
            const randomIndex = Math.floor(Math.random() * responses.length);
            return responses[randomIndex];
        };
        this.sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        };
    }
    getResponse(message, mood) {
        return __awaiter(this, void 0, void 0, function*() {
            const lowerCaseMessage = message.toLowerCase();
            yield this.sleep(1000);
            for (const word in this.logic) {
                if (lowerCaseMessage.includes(word)) {
                    const availableResponses = this.logic[word][mood];
                    if (availableResponses) {
                        return this.getRandomResponse(availableResponses);
                    }
                }
            }
            if (lowerCaseMessage.includes("usuarios")) {
                try {
                    const data = yield this.fetchUserData();
                    const userNames = data.map(user => user.name);
                    return `Usuarios disponibles: ${userNames.join(', ')}`;
                } catch (error) {
                    console.error('Error al obtener datos de la API:', error);
                    return 'Ocurrió un error al obtener los datos de la API.';
                }
            }
            if (lowerCaseMessage.includes("caja")) {
                try {
                    const data = yield this.fetchUserData();
                    const userNames = data.map(user => user.name);
                    return `Cajas disponibles: ${userNames.join(', ')}`;
                } catch (error) {
                    console.error('Error al obtener datos de la API:', error);
                    return 'Ocurrió un error al obtener los datos de la API.';
                }
            }
            if (lowerCaseMessage.includes("precios a ver")) {
                try {
                    const data = yield this.fetchUserData();
                    const userNames = data.map(user => user.name);
                    return `Precios a ver y disponibles: ${userNames.join(', ')}`;
                } catch (error) {
                    console.error('Error al obtener datos de la API:', error);
                    return 'Ocurrió un error al obtener los datos de la API.';
                }
            }
            const similarWords = this.findSimilarWords(lowerCaseMessage);
            if (similarWords.length > 0) {
                return `¿Quisiste decir "${similarWords.join('", "')}"?`;
            }
            return "Lo siento, no entiendo ese mensaje. ¿Puedes ser más claro?";
        });
    }
}
const chatNeuron = new ChatNeuron();
let currentMood = "feliz";

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chat = document.getElementById("chat");
    const previousResponse = chat.querySelector('.typing-effect');
    if (previousResponse) {
        previousResponse.remove();
    }
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Cargando...';
    loadingMessage.classList.add('loading');
    chat.appendChild(loadingMessage);
    const userMessage = userInput.value;
    chatNeuron.getResponse(userMessage, currentMood)
        .then(botResponse => {
            loadingMessage.remove();
            const responseContainer = document.createElement('div');
            responseContainer.classList.add('typing-effect');
            chat.appendChild(responseContainer);
            const characters = botResponse.split('');
            characters.forEach((char, index) => {
                setTimeout(() => {
                    responseContainer.textContent += char;
                }, index * 50);
            });
        })
        .catch(error => console.error('Error:', error));
    userInput.value = "";
}

function startSpeechRecognition() {
    const recognition = new(webkitSpeechRecognition || SpeechRecognition)();
    recognition.lang = 'es-ES';
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const userInput = document.getElementById("user-input");
        userInput.value = transcript;
        sendMessage();
    };
    recognition.start();
}
//# sourceMappingURL=script.js.map