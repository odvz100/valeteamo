const contentSequence = [
    {
        type: 'text',
        content: 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaa mi vida, ¿cómo estás?\nNo tenía papel a mano, así que preferí escribirte algo por acá jejeje\nMe siento como el sticker del perrito que está temblando jeje'
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
    {
        type: 'both',
        content: 'ERES MI DELIRO\nERES MI MARTIRIO\nERES MI SODA POP',
        src: 'cool-fun.gif'
    },
    {
        type: 'both',
        content: 'nosotros cuando veamos un therian',
        src: 'pmTsA1.gif'
    },
    {
        type: 'text',
        content: 'Ahora sí bebé\nPucha, no sé si agradecerle al destino, a tinder, a boric, no sée. Pero coincidir ese día fue del top de mejores cosas que me pudieron pasar en la vida.\nQuizá nunca pensé que esto llegaría a ser tan especial, pero pucha que lo he disfrutado, cada momento contigo es sentir la fokin vibra.\nA veces me pregunto si esto fue muy rápido, si quizá nos apresuramos con ciertas decisiones, pero la verdad siento que no jeje. Siento infinitas cosas por ti, y no quiero perder ningún momento ni tener que esperar para poder compartir cada cosa contigooooo'
    },
    {
        type: 'both',
        content: 'En resumen, quiero tooo',
        src: 'loco-rene-rene-puente.gif'
    },
    {
        type: 'both',
        content: 'Este es nuestro primer mes bb y puta, me encantaría llegar a viejito contigo jajajs🌞💖\nTe amo mucho y espero que podamos seguir disfrutando muchos más momentos juntos 💖💖💖 más sushis, más tacos, ir a perú huevón, más abrazos, más besitos, más comidas ricas, más pizzas, más gatos, más juegos, más viajes, más risas, menos therian, menos furros, más kanye, ¡MÁS DETONADAS!',
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

function showNext() {
    if (currentIndex >= contentSequence.length) {
        currentIndex = 0;
    }

    const currentItem = contentSequence[currentIndex];
    
    if (currentItem.src) {
        gifContainer.innerHTML = `<img src="${currentItem.src}" alt="GIF especial">`;
    } else {
        gifContainer.innerHTML = '';
    }
    
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

giftBox.addEventListener('click', () => {
    giftBox.classList.add('hidden');
    content.classList.remove('hidden');
    showNext();
});

nextBtn.addEventListener('click', () => {
    showNext();
});

content.addEventListener('click', (e) => {
    if (e.target !== nextBtn && !nextBtn.contains(e.target)) {
        if (!nextBtn.classList.contains('hidden')) {
            showNext();
        }
    }
});