// ============================================
// Elementos compartidos entre todas las vistas
// ============================================
const vistaFormulario = document.getElementById('vista-formulario');
const vistaResultado = document.getElementById('vista-resultado');

// ============================================
// MURO
// ============================================
const formMuro = document.getElementById('form-muro');
if (formMuro) {
    formMuro.addEventListener('submit', function (e) {
        e.preventDefault();

        const espesor = document.querySelector('input[name="espesor"]:checked').value;
        const largo = parseFloat(document.getElementById('largo').value);
        const alto = parseFloat(document.getElementById('alto').value);

        if (isNaN(largo) || isNaN(alto) || largo <= 0 || alto <= 0) {
            alert("Ingresa valores válidos.");
            return;
        }

        const superficie = largo * alto;
        const cementoPorM2 = espesor === "20" ? 10.9 : 15.2;
        const arenaPorM2 = espesor === "20" ? 0.09 : 0.115;
        const ladrillosPorM2 = espesor === "20" ? 90 : 120;

        const cemento = superficie * cementoPorM2;
        const arena = superficie * arenaPorM2;
        const ladrillos = Math.ceil(superficie * ladrillosPorM2);

        document.getElementById('resultado-titulo').textContent = `Muro de ${espesor} cm`;
        document.getElementById('valor-superficie').textContent = `${superficie.toFixed(2)} m²`;
        document.getElementById('valor-cemento').textContent = `${cemento.toFixed(1)} Kg`;
        document.getElementById('valor-arena').textContent = `${arena.toFixed(2)} m³`;
        document.getElementById('valor-ladrillos').textContent = ladrillos;

        vistaFormulario.style.display = 'none';
        vistaResultado.style.display = 'block';
    });
}

// ============================================
// VIGA
// ============================================
const formViga = document.getElementById('form-viga');
if (formViga) {
    formViga.addEventListener('submit', function (e) {
        e.preventDefault();

        const largo = parseFloat(document.getElementById('largo').value);

        if (isNaN(largo) || largo <= 0) {
            alert("Ingrese un valor válido");
            return;
        }

        const cemento = largo * 9;
        const arena = largo * 0.02;
        const piedra = largo * 0.02;
        const hierro8 = largo * 4;
        const hierro4 = largo * 3;

        document.getElementById('resultado-titulo').textContent = `Viga de ${largo} m`;
        document.getElementById('valor-cemento').textContent = `${cemento.toFixed(0)} Kg`;
        document.getElementById('valor-arena').textContent = `${arena.toFixed(2)} m³`;
        document.getElementById('valor-piedra').textContent = `${piedra.toFixed(2)} m²`;
        document.getElementById('valor-hierro8').textContent = `${hierro8.toFixed(0)} m`;
        document.getElementById('valor-hierro4').textContent = `${hierro4.toFixed(0)} m`;

        vistaFormulario.style.display = 'none';
        vistaResultado.style.display = 'block';
    });
}

const formcolumna = document.getElementById('form-columna');
if (formcolumna) {
    formcolumna.addEventListener('submit', function (e) {
        e.preventDefault();

        const largo = parseFloat(document.getElementById('largo').value);

        if (isNaN(largo) || largo <= 0) {
            alert("Ingrese un valor válido");
            return;
        }

        const cemento = largo * 9;
        const arena = largo * 0.02;
        const piedra = largo * 0.016;
        const hierro10 = largo * 4;
        const hierro4 = largo * 3;

        document.getElementById('resultado-titulo').textContent = `Columna de ${largo} m`;
        document.getElementById('valor-cemento').textContent = `${cemento.toFixed(0)} Kg`;
        document.getElementById('valor-arena').textContent = `${arena.toFixed(2)} m³`;
        document.getElementById('valor-piedra').textContent = `${piedra.toFixed(2)} m²`;
        document.getElementById('valor-hierro10').textContent = `${hierro10.toFixed(0)} m`;
        document.getElementById('valor-hierro4').textContent = `${hierro4.toFixed(0)} m`;

        document.getElementById('vista-formulario').style.display = 'none';
        document.getElementById('vista-resultado').style.display = 'block';
    });
}

// ============================================
// CONTRAPISO
// ============================================
const CEMENTO_POR_M3 = 105;  // Kg de cemento por m³
const ARENA_POR_M3 = 0.45;   // m³ de arena por m³
const PIEDRA_POR_M3 = 0.9;   // m³ de piedra por m³

const formContrapiso = document.getElementById('form-contrapiso');
if (formContrapiso) {
    formContrapiso.addEventListener('submit', function (e) {
        e.preventDefault();

        const espesor = parseFloat(document.getElementById('espesor').value);
        const largo = parseFloat(document.getElementById('largo').value);
        const alto = parseFloat(document.getElementById('alto').value);

        if (isNaN(espesor) || isNaN(largo) || isNaN(alto) || espesor <= 0 || largo <= 0 || alto <= 0) {
            alert('Ingresa valores válidos.');
            return;
        }

        const volumen = largo * alto * espesor;   // m³
        const cemento = volumen * CEMENTO_POR_M3;  // Kg
        const arena = volumen * ARENA_POR_M3;      // m³
        const piedra = volumen * PIEDRA_POR_M3;    // m³

        document.getElementById('resultado-titulo').textContent =
            `Contra piso ${largo}x${alto} e= ${espesor}`;

        document.getElementById('piedra').textContent = `${piedra.toFixed(2)} m³`;
        document.getElementById('cemento').textContent = `${Math.round(cemento)} Kg`;
        document.getElementById('arena').textContent = `${arena.toFixed(2)} m³`;
        document.getElementById('volumen').textContent = `${volumen.toFixed(2)} m³`;

        vistaFormulario.style.display = 'none';
        vistaResultado.style.display = 'block';
    });
}

// ============================================
// TECHO
// ============================================
const PIEDRA_POR_M2 = 0.072;
const ARENA_POR_M2 = 0.072;
const CEMENTO_POR_M2 = 33;
const HIERRO8_POR_M2 = 7;
const HIERRO6_POR_M2 = 4;

const formTecho = document.getElementById('form-techo');
if (formTecho) {
    formTecho.addEventListener('submit', function (e) {
        e.preventDefault();

        const largo = parseFloat(document.getElementById('largo').value);
        const alto = parseFloat(document.getElementById('alto').value);

        if (isNaN(largo) || isNaN(alto) || largo <= 0 || alto <= 0) {
            alert('Ingresar valores validos');
            return;
        }

        const superficie = largo * alto;
        const piedra = superficie * PIEDRA_POR_M2;
        const cemento = superficie * CEMENTO_POR_M2;
        const arena = superficie * ARENA_POR_M2;
        const hierro8 = superficie * HIERRO8_POR_M2;
        const hierro6 = superficie * HIERRO6_POR_M2;

        document.getElementById('resultado-titulo').textContent =
            `Techo ${largo}x${alto} m`;

        document.getElementById('piedra').textContent = `${piedra.toFixed(2)} m³`;
        document.getElementById('cemento').textContent = `${Math.round(cemento)} Kg`;
        document.getElementById('arena').textContent = `${arena.toFixed(2)} m³`;
        document.getElementById('hierro8').textContent = `${Math.round(hierro8)} m`;
        document.getElementById('hierro6').textContent = `${Math.round(hierro6)} m`;
        document.getElementById('superficie').textContent = `${superficie.toFixed(0)} m²`;

        vistaFormulario.style.display = 'none';
        vistaResultado.style.display = 'block';
    });
}

const formPiso = document.getElementById('form-piso');
if (formPiso) {
    formPiso.addEventListener('submit', function (e) {
        e.preventDefault();
        const ancho = parseFloat(document.getElementById('ancho').value);
        const largo = parseFloat(document.getElementById('largo').value);

        if (isNaN(ancho) || isNaN(largo) || ancho <= 0 || largo <= 0) {
            alert("Ingrese valores validos.");
            return;
        }

        const superficie = ancho * largo;
        const superficieExtra = superficie * 1.10;

        document.getElementById('resultado-titulo').textContent = `Piso ${ancho}x${largo} m`;
        document.getElementById('valor-superficie').textContent = `${superficie.toFixed(2)} m²`;
        document.getElementById('valor-extra').textContent = `${superficieExtra.toFixed(2)} m²`

        document.getElementById('vista-formulario').style.display = 'none';
        document.getElementById('vista-resultado').style.display = 'block';
    });
}

const formPintura = document.getElementById('form-pintura');
if (formPintura) {
    formPintura.addEventListener('submit', function (e) {
        e.preventDefault();
        const ancho = parseFloat(document.getElementById('ancho').value);
        const alto = parseFloat(document.getElementById('alto').value);

        if (isNaN(ancho) || isNaN(alto) || alto <= 0 || ancho <= 0) {
            alert("Ingresa valores validos.");
            return;
        }
        const superficie = ancho * alto;
        const litros = superficie / 10;

        document.getElementById('resultado-titulo').textContent = `muro ${ancho}x${alto}.m`;
        document.getElementById('valor-superficie').textContent = `${superficie.toFixed(2)}m²`;
        document.getElementById('valor-litros').textContent = `${litros.toFixed(2)}L`

        document.getElementById('vista-formulario').style.display = 'none';
        document.getElementById('vista-resultado').style.display = 'block';
    });

}


