// Configuración: Aquí puedes agregar tus GIFs y textos
// Agrega la ruta de tus GIFs y los textos que quieras mostrar
const contentSequence = [
    {
        type: 'text',
        content: 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa mi vida, ¿cómo estás?\nNo tenía papel a mano, así que preferí escribirte algo por acá jejeje\nMe siento como el sticker el perrito que está temblando jeje'
    },
    {
        type: 'gif',
        src: 'ifvshoran-cachorrinho.gif'
    },
    {
        type: 'both',
        src: 'cat-tongue.gif',
        content: 'Después de ver los videos de Martin Cirio, siento que todo lo que puedo decir por acá es trillado ajasdj, entonces escribiré lo primero que se me venga a la mente😜😜😜'
    },
    // {
    //     type: 'text',
    //     content: 'Ese viernes 5 de diciembre fue un día re malo, recuerdo que cuando llegué a la casa de mi abuelita destruído me fui a acostar y estuve a punto de cancelar la salida jajs pensando que todo podía salir peor :( \nPero no sé, agradezco con mi vida haber podido conocerte ese día y también que no me cancelaras la salida jajs'
    // },
    {
        type: 'both',
        content: 'ERES MI DELIRO\nERES MI MARTILLO\nERES MI SODA POP',
        src: 'cool-fun.gif'
    },
    {
        type: 'both',
        content: 'wtf siempre pensé que decía martirio, no martillo jasjd los wnes raros',
        src: 'pmTsA1.gif'
    },
    {
        type: 'text',
        content: 'Ahora sí bebé\nPucha, no sé si agradecerle al destino, a tinder, a boric, no sée. Pero coincidir ese día fue del top de mejores cosas que me pudieron pasar en la vida.\nQuizá nunca pensé que esto llegaría a ser tan especial, pero pucha que lo he disfrutado, cada momento contigo es sentir la fokin vibra.\nA veces me pregunto si esto fue muy rápido, si quizá nos apresuramos con ciertas decisiones, pero la verdad siento que no jeje. Siento infinitas cosas por ti, y no quiero perder ningún momento ni tener que esperar para poder compartir cada cosa que pase contigooooo'
    },
    {
        type: 'both',
        content: 'En resumen, quiero tooo',
        src: 'loco-rene-rene-puente.gif'
    },
    {
        type: 'both',
        content: 'Este es nuestro primer mes bb y puta, me encantaría llegar a viejito contigo jajajs🌞💖\nTe amo mucho y espero que podamos seguir disfrutando muchos más momentos juntos 💖💖💖 más sushis, más tacos, perú huevón, más abrazos, más besitos, más comidas ricas, más pizzas, más gatos, más juegos, más viajes, más risas, menos therian, menos furros, más kanye, ¡MÁS DETONADAS!',
        src: 'cat-cat-with-tongue.gif'
    },
    {
        type: 'both',
        content: 'más mmmmmm ¿qué puede ser?',
        src: 'cat-underwater.gif'
    },
    {
        type: 'both',
        content: 'Más de esto 💖',
        src: 'corazon.gif'
    }
];

let currentIndex = 0;
const giftBox = document.getElementById('gift-box');
const content = document.getElementById('content');
const gifContainer = document.getElementById('gif-container');
const textContainer = document.getElementById('text-container');
const nextBtn = document.getElementById('next-btn');

// Función para mostrar el siguiente elemento
function showNext() {
    // Si llegamos al final, reiniciamos desde el principio
    if (currentIndex >= contentSequence.length) {
        currentIndex = 0;
    }

    const currentItem = contentSequence[currentIndex];
    
    // Verificar si tiene GIF
    if (currentItem.src) {
        gifContainer.innerHTML = `<img src="${currentItem.src}" alt="GIF especial">`;
    } else {
        gifContainer.innerHTML = '';
    }
    
    // Verificar si tiene texto
    if (currentItem.content) {
        const textWithBreaks = currentItem.content.replace(/\n/g, '<br>');
        textContainer.innerHTML = `<p>${textWithBreaks}</p>`;
        textContainer.classList.remove('hidden');
    } else {
        textContainer.innerHTML = '';
        textContainer.classList.add('hidden');
    }
    
    nextBtn.classList.remove('hidden');
    currentIndex++;
}

// Evento para abrir la caja de regalo
giftBox.addEventListener('click', () => {
    giftBox.classList.add('hidden');
    content.classList.remove('hidden');
    showNext();
});

// Evento para el botón siguiente
nextBtn.addEventListener('click', () => {
    showNext();
});

// Permitir tocar en cualquier parte del contenido para avanzar (opcional)
content.addEventListener('click', (e) => {
    // Solo avanzar si no se hace clic en el botón (para evitar doble clic)
    if (e.target !== nextBtn && !nextBtn.contains(e.target)) {
        if (!nextBtn.classList.contains('hidden')) {
            showNext();
        }
    }
});