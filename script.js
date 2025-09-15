document.addEventListener('DOMContentLoaded', () => {
    // Referencia al formulario
    const form = document.getElementById('personal-form');

    // Manejador del evento de envío
    form.addEventListener('submit', (e) => {
        // Previene el comportamiento de envío por defecto del formulario
        e.preventDefault();
        
        // Verifica si el formulario es válido (campos 'required' llenos)
        if (form.checkValidity()) {
            alert('¡Gracias por tu respuesta, pronto te contactaremos😁!');
        } else {
            
        }
    });
});