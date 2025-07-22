  // menú responsive
    const nav = document.querySelector('#nav');
    const abrir = document.querySelector('#abrir');
    const cerrar = document.querySelector('#cerrar');

    /* Evento de abrir y cerrar el menu en móvil */
    abrir.addEventListener('click', () => {
        nav.classList.add('visible')
    });

    cerrar.addEventListener('click', () => {
        nav.classList.remove('visible')
    });


    /* Evento que al precionar en cualquier lugar de la pantalla (estando dentro del menu Hamburguesa) se cierre. */
    document.addEventListener('click', (e) => {
        const fuera = nav.contains(e.target);
        const abierto = abrir.contains(e.target);

        if(!fuera && !abierto){
            nav.classList.remove('visible');
        }
    });