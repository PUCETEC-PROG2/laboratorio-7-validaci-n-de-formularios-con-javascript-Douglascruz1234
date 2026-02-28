// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        
        // Llamar a la función de validación
        if (validateForm()) {
            alert('✅ ¡Formulario válido! Registro exitoso.');
            form.reset();
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }
    });
});

/**
 * Función principal de validación del formulario
 * Retorna true si todos los campos son válidos, false si hay errores
 */
function validateForm() {
    let isValid = true;
    
    // ==========================================
    // VALIDACIÓN DE EJEMPLO: Campo Nombre
    // ==========================================
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();
    
    if (valorNombre === '') {
        // Campo vacío - marcar como inválido
        nombre.classList.add('no-valid');
        isValid = false;
    } else if (valorNombre.length < 2) {
        // Muy corto - marcar como inválido
        nombre.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        nombre.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Apellido Paterno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    // Pista: Usa getElementById('apellidoPaterno')
    
    const apellidoPaterno = document.getElementById('apellidoPaterno');

    if (!validarCampoTexto(apellidoPaterno, 2)) {
        isValid = false;
    }
    
    
    // ==========================================
    // TODO: Validar Apellido Materno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    
    const apellidoMaterno = document.getElementById('apellidoMaterno');

    if (!validarCampoTexto(apellidoMaterno, 2)) {
        isValid = false;
    }
    
    
    // ==========================================
    // TODO: Validar Cédula
    // ==========================================
    // Requisitos: Exactamente 10 dígitos numéricos
    // Pista: Usa /^\d{10}$/.test(valor) para validar
    
    const cedula = document.getElementById('cedula');
    const valorCedula = cedula.value.trim();

    if (!/^\d{10}$/.test(valorCedula)) {
        cedula.classList.add('no-valid');
        isValid = false;
    } else {
        cedula.classList.remove('no-valid');
    }
    
    
    // ==========================================
    // TODO: Validar Motivo
    // ==========================================
    // Requisitos: No vacío, mínimo 10 caracteres
    
    const motivo = document.getElementById('motivo');

    if (!validarCampoTexto(motivo, 10)) {
        isValid = false;
    }
    
    
    // ==========================================
    // TODO: Validar Tipo de Cuenta
    // ==========================================
    // Requisitos: Debe tener un valor seleccionado (no vacío)
    // Pista: Verifica que select.value !== ''
    
    const tipoCuenta = document.getElementById('tipoCuenta');

    if (tipoCuenta.value === '') {
        tipoCuenta.classList.add('no-valid');
        isValid = false;
    } else {
        tipoCuenta.classList.remove('no-valid');
    }
    
    
    // ==========================================
    // TODO: Validar Calle
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    
    const calle = document.getElementById('calle');

    if (!validarCampoTexto(calle, 3)) {
        isValid = false;
    }
    
    
    // ==========================================
    // TODO: Validar Número
    // ==========================================
    // Requisitos: No vacío
    
    const numero = document.getElementById('numero');

    if (numero.value.trim() === '') {
        numero.classList.add('no-valid');
        isValid = false;
    } else {
        numero.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Intersección
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    
    const interseccion = document.getElementById('interseccion');

    if (!validarCampoTexto(interseccion, 3)) {
        isValid = false;
    }
    
    
    // Retornar el resultado final de la validación
    return isValid;
}


// ==========================================
// FUNCIONES AUXILIARES (OPCIONALES)
// ==========================================
// Puedes crear funciones auxiliares para evitar repetir código
// Por ejemplo:

/**
 * Valida un campo de texto
 * @param {HTMLElement} campo - El elemento input a validar
 * @param {number} minLength - Longitud mínima requerida
 * @returns {boolean} - true si es válido, false si no
 */
function validarCampoTexto(campo, minLength) {
    const valor = campo.value.trim();
    
    if (valor === '' || valor.length < minLength) {
        campo.classList.add('no-valid');
        return false;
    } else {
        campo.classList.remove('no-valid');
        return true;
    }
}

// Ejemplo de uso de la función auxiliar:
// if (!validarCampoTexto(nombre, 2)) {
//     isValid = false;
// }
