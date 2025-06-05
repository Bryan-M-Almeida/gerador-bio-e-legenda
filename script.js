/* acessar arquivo json */
fetch('dados.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON');
        }
        return response.json();
    })
    .then(data => {
        // Seletores
        const formulario_biografia = document.querySelector('#seletor-biografia');
        const formulario_hashtag = document.querySelector('#seletor-hashtag');
        const formulario_legenda = document.querySelector('#seletor-legendas');

        // Botões
        const btnL = document.querySelector('.btn-l');
        const btnB = document.querySelector('.btn-b');
        const btnH = document.querySelector('.btn-h');

        // Resultados
        const resultado_legenda = document.querySelector('.resultado-legenda');
        const resultado_hashtag = document.querySelector('.resultado-hashtag');
        const resultado_biografia = document.querySelector('.resultado-biografia');

        // Formulários
        const forms = document.querySelectorAll('form');

        // Impedir refresh
        forms.forEach(form => {
            form.addEventListener('submit', e => e.preventDefault());
        });

        // Função de número aleatório
        const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

        // Botões
        btnL.addEventListener('click', () => {
            const categoria = formulario_legenda.value;
            const legendas = data.legendas[categoria];
            if (legendas && legendas.length) {
                resultado_legenda.innerText = getRandomItem(legendas);
            } else {
                resultado_legenda.innerText = "Nenhuma legenda gerada.";
            }
        });

        btnB.addEventListener('click', () => {
            const categoria = formulario_biografia.value;
            const bios = data.biografias[categoria];
            if (bios && bios.length) {
                resultado_biografia.innerText = getRandomItem(bios);
            } else {
                resultado_biografia.innerText = "Nenhuma bio gerada.";
            }
        });

        btnH.addEventListener('click', () => {
            const categoria = formulario_hashtag.value;
            const hashtag = data.hashtags[categoria];
            if (hashtag && hashtag.length) {
                resultado_hashtag.innerText = getRandomItem(hashtag);
            } else {
                resultado_hashtag.innerText = "Nenhuma hashtag gerada.";
            }
        });

    })
    .catch(error => {
        console.error('Erro:', error);
    });
