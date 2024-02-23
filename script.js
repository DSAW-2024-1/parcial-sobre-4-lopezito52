document.addEventListener('DOMContentLoaded', () => {
    const boton1 = document.querySelector('#boton1');
    const registro = document.querySelector('#registro');
    const mensaje = document.querySelector('#mensaje');
    const boton2 = document.querySelector('#boton2');
    const correo = document.querySelector('#correo');
    const email = document.querySelector('#emailX');
    const error = document.querySelector('#error');

    const exepcion = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');

    boton1.addEventListener('click', () => {
        mensaje.classList.remove('opacidad');
        if(exepcion.test(email.value)){
            if(error.classList.contains('visible') && email.classList.contains('error')){
                error.classList.remove('visible');
                email.classList.remove('error');
            }
            correo.textContent = email.value;
            registro.classList.add('opacidad');
            setTimeout(() => {
                registro.classList.add('display');
                mensaje.classList.remove('display');
            }, 500);
        }
        else{
            error.classList.add('visible');
            email.classList.add('error');
        }
    });

    boton2.addEventListener('click', () => {
        mensaje.classList.add('opacidad');
        setTimeout(() => {
            registro.classList.remove('opacidad');
            registro.classList.remove('display');
            mensaje.classList.add('display');
        }, 500);
    });
});
