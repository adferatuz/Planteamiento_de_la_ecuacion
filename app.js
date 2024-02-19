//declaracion de variables
let base, base1, base2, ladoA, ladoB, diagonal1, diagoganl2, longitudLados, numeroLados, altura, area, perimetro, apotema = 0;
let modal = document.getElementById("miModal");

//capturamos el  contenedor a usar  
let contenidoModal = document.getElementById('modalContenido');
let contenidoDinamico = document.getElementById('contenidodinamico');

//almacenamos los elementos en una variable
let elementosModal = crearElementos();
let boton = crearBoton()

//funcion para crear un boton
function crearBoton(){
    //crear elemento
    let boton = document.createElement('button');

    //Agregamos atributos al boton
    boton.textContent = ' Calcular'
    boton.id = 'abrirModal'
    boton.classList.add('btn-calcular')    

    return boton;

}

//funcion para crear elementos html
function crearElementos(){
    let label = document.createElement('label');
    let input = document.createElement('input');
    let parrafo = document.createElement('p');
    let spanX = document.createElement('span');

    return {label, input, parrafo, spanX};
}

//funcion para remover y agregar la clase a los contenedores
function agregarClaseContenedores(){
    //removemos y agregamos una nueva clase
    contenidoDinamico.classList.remove('oculto');
    contenidoDinamico.classList.add('visible');  

    //agregamos la clase modal al contenedor Modal
    contenidoModal.classList.add('modal-contenido');
}

//funcion para limpiar los contenedores
function limpiarContenedores(){
    contenidoDinamico.innerHTML = '';
    contenidoModal.innerHTML = '';
}

//funcion para agregar los elementos al modal
function elementoModal(){
    //agregamos la X de cerrar el modal
    elementosModal.spanX.textContent = 'X';
    elementosModal.spanX.classList.add('cerrar-modal');

    //agregamos la X de cerrar la ventana al modal y el evento de cerrar modal
    contenidoModal.appendChild(elementosModal.spanX);
    elementosModal.spanX.addEventListener('click', function (){
        modal.style.display = "none";
    })
}

//funcion para calcular apotema
function calcular_apotema(s, n){
    apotema = s / (2 * Math.tan(Math.PI / n));
    return apotema;
};

//funcion para mostrar los contenidos
function MostrarElementos(id){

    //codigo para hallar el area de un triangulo
    if(id == 'triangulo'){
        
        //declaramos variables de base y altura
        const componentesBase = crearElementos();
        const componentesAltura = crearElementos();

        //limpiamos el contenedor para que este vacio
        limpiarContenedores();        
        
        //Agregamos atributos al label e input base
        componentesBase.label.textContent = 'Base:';
        componentesBase.label.setAttribute('for','base')
        componentesBase.input.id = 'base';
        componentesBase.input.type = 'number';

        //Agregamos atributos al label e input altura
        componentesAltura.label.textContent = 'Altura:';
        componentesAltura.label.setAttribute('for','altura')
        componentesAltura.input.id = 'altura';
        componentesAltura.input.type = 'number';

        //Agregamos los componentes dentro del contenedor
        contenidoDinamico.appendChild(componentesBase.label);
        contenidoDinamico.appendChild(componentesBase.input);
        contenidoDinamico.appendChild(componentesAltura.label);
        contenidoDinamico.appendChild(componentesAltura.input);
        contenidoDinamico.appendChild(boton);

        //funcion para agregar clases
        agregarClaseContenedores();
        
        //funcion para agregar elementos al modal
        elementoModal();

        //evento para capturar los datos de los inputs con el boton
        boton.addEventListener('click', function(){
            //capturamos los valores de los inputs y los parseamos
            base = parseFloat(componentesBase.input.value);
            altura = parseFloat(componentesAltura.input.value);

            //hacemos la operacion correspondiente
            area =(base * altura) / 2;
            
            //seteamos los inputs
            componentesBase.input.value = '';
            componentesAltura.input.value = '';

            
            //creamos el mensaje a mostrar en el modal
            elementosModal.parrafo.textContent = `El area del triangulo es ${area.toFixed(2)} unidades cuadradas `;

            contenidoModal.appendChild(elementosModal.parrafo);
            
            //mostramos el contenido
            modal.style.display = "flex";
            
        })
        
    }

    //codigo para hallar el area de un cuadrado
    if(id == 'cuadrado'){
        
        //declaramos variables de lado a y lado b
        const componentesLadoA = crearElementos();
        const componentesLadoB = crearElementos();

        //limpiamos el contenedor para que este vacio
        limpiarContenedores(); 
        
        //Agregamos atributos al label e input Lado a
        componentesLadoA.label.textContent = 'Lado A:';
        componentesLadoA.label.setAttribute('for','ladoa')
        componentesLadoA.input.id = 'ladoa';
        componentesLadoA.input.type = 'number';

        //Agregamos atributos al label e input Lado b
        componentesLadoB.label.textContent = 'Lado B:';
        componentesLadoB.label.setAttribute('for','ladob')
        componentesLadoB.input.id = 'ladob';
        componentesLadoB.input.type = 'number';

        //Agregamos los componentes dentro del contenedor
        contenidoDinamico.appendChild(componentesLadoA.label);
        contenidoDinamico.appendChild(componentesLadoA.input);
        contenidoDinamico.appendChild(componentesLadoB.label);
        contenidoDinamico.appendChild(componentesLadoB.input);
        contenidoDinamico.appendChild(boton);

        //funcion para agregar clases
        agregarClaseContenedores();

        //funcion para agregar elementos al modal
        elementoModal();

        //evento para capturar los datos de los inputs con el boton
        boton.addEventListener('click', function(){
        //capturamos los valores de los inputs y los parseamos
        ladoA = parseFloat(componentesLadoA.input.value);
        ladoB = parseFloat(componentesLadoB.input.value);

        //hacemos la operacion correspondiente
        area =(ladoA * ladoB);
        
        //seteamos los inputs
        componentesLadoA.input.value = '';
        componentesLadoB.input.value = '';

        
        //creamos el mensaje a mostrar en el modal
        elementosModal.parrafo.textContent = `El area del cuadrado es ${area.toFixed(2)} unidades cuadradas `;

        contenidoModal.appendChild(elementosModal.parrafo);
        
        //mostramos el contenido
        modal.style.display = "flex";
            
        })


        
    }

    //codigo para hallar el area de un rombo
    if(id == 'rombo'){
        
        //declaramos variables de lado a y lado b
        const componentesDiagonalA = crearElementos();
        const componentesDiagonalB= crearElementos();

        //lismpiamos el contenedor para que este vacio
        limpiarContenedores();
        
        //Agregamos atributos al label e input base
        componentesDiagonalA.label.textContent = 'Diagonal A:';
        componentesDiagonalA.label.setAttribute('for','diagonala')
        componentesDiagonalA.input.id = 'diagonala';
        componentesDiagonalA.input.type = 'number';

        //Agregamos atributos al label e input altura
        componentesDiagonalB.label.textContent = 'Diagonal B:';
        componentesDiagonalB.label.setAttribute('for','diagonalb')
        componentesDiagonalB.input.id = 'diagonalb';
        componentesDiagonalB.input.type = 'number';

        //Agregamos los componentes dentro del contenedor
        contenidoDinamico.appendChild(componentesDiagonalA.label);
        contenidoDinamico.appendChild(componentesDiagonalA.input);
        contenidoDinamico.appendChild(componentesDiagonalB.label);
        contenidoDinamico.appendChild(componentesDiagonalB.input);
        contenidoDinamico.appendChild(boton);

        //funcion para agregar clases
        agregarClaseContenedores();
        
        //funcion para agregar elementos al modal
        elementoModal();

        //evento para capturar los datos de los inputs con el boton
        boton.addEventListener('click', function(){
            //capturamos los valores de los inputs y los parseamos
            diagonal1 = parseFloat(componentesDiagonalA.input.value);
            diagoganl2 = parseFloat(componentesDiagonalB.input.value);

            //hacemos la operacion correspondiente
            area =(diagonal1 * diagoganl2) / 2;
            
            //seteamos los inputs
            componentesDiagonalA.input.value = '';
            componentesDiagonalB.input.value = '';

            
            //creamos el mensaje a mostrar en el modal
            elementosModal.parrafo.textContent = `El area del rombo es ${area.toFixed(2)} unidades cuadradas `;

            contenidoModal.appendChild(elementosModal.parrafo);
            
            //mostramos el contenido
            modal.style.display = "flex";
            
        })
        
    }

    //codigo para hallar el area de un paralelogramo
    if(id == 'paralelogramo'){
        
        //declaramos variables de base y altura
        const componentesBase = crearElementos();
        const componentesAltura = crearElementos();
 
        //limpiamos el contenedor para que este vacio
        limpiarContenedores();   
         
        //Agregamos atributos al label e input base
        componentesBase.label.textContent = 'Base:';
        componentesBase.label.setAttribute('for','base')
        componentesBase.input.id = 'base';
        componentesBase.input.type = 'number';

        //Agregamos atributos al label e input altura
        componentesAltura.label.textContent = 'Altura:';
        componentesAltura.label.setAttribute('for','altura')
        componentesAltura.input.id = 'altura';
        componentesAltura.input.type = 'number';

        //Agregamos los componentes dentro del contenedor
        contenidoDinamico.appendChild(componentesBase.label);
        contenidoDinamico.appendChild(componentesBase.input);
        contenidoDinamico.appendChild(componentesAltura.label);
        contenidoDinamico.appendChild(componentesAltura.input);
        contenidoDinamico.appendChild(boton);
 
        //funcion para agregar clases
        agregarClaseContenedores();
        
        //funcion para agregar elementos al modal
        elementoModal();

        //evento para capturar los datos de los inputs con el boton
        boton.addEventListener('click', function(){
            //capturamos los valores de los inputs y los parseamos
            base = parseFloat(componentesBase.input.value);
            altura = parseFloat(componentesAltura.input.value);

            //hacemos la operacion correspondiente
            area =(base * altura);
            
            //seteamos los inputs
            componentesBase.input.value = '';
            componentesAltura.input.value = '';

            
            //creamos el mensaje a mostrar en el modal
            elementosModal.parrafo.textContent = `El area del paralelogramo es ${area.toFixed(2)} unidades cuadradas `;

            contenidoModal.appendChild(elementosModal.parrafo);
            
            //mostramos el contenido
            modal.style.display = "flex";
            
        })
        
    }

    //codigo para hallar el area de un trapecio
    if(id == 'trapecio'){
        
        //declaramos variables de base y altura
        const componentesBase1 = crearElementos();
        const componentesBase2 = crearElementos();
        const componentesAltura = crearElementos();

        //limpiamos el contenedor para que este vacio
        limpiarContenedores();
        
        //Agregamos atributos al label e input base 1
        componentesBase1.label.textContent = 'Base 1:';
        componentesBase1.label.setAttribute('for','base1')
        componentesBase1.input.id = 'base1';
        componentesBase1.input.type = 'number';
        
        //Agregamos atributos al label e input base 2
        componentesBase2.label.textContent = 'Base 2:';
        componentesBase2.label.setAttribute('for','base2')
        componentesBase2.input.id = 'base2';
        componentesBase2.input.type = 'number';

        //Agregamos atributos al label e input altura
        componentesAltura.label.textContent = 'Altura:';
        componentesAltura.label.setAttribute('for','altura')
        componentesAltura.input.id = 'altura';
        componentesAltura.input.type = 'number';

        //Agregamos los componentes dentro del contenedor
        contenidoDinamico.appendChild(componentesBase1.label);
        contenidoDinamico.appendChild(componentesBase1.input);
        contenidoDinamico.appendChild(componentesBase2.label);
        contenidoDinamico.appendChild(componentesBase2.input);
        contenidoDinamico.appendChild(componentesAltura.label);
        contenidoDinamico.appendChild(componentesAltura.input);
        contenidoDinamico.appendChild(boton);

        //funcion para agregar clases
        agregarClaseContenedores();
        
        //funcion para agregar elementos al modal
        elementoModal();

        //evento para capturar los datos de los inputs con el boton
        boton.addEventListener('click', function(){
            //capturamos los valores de los inputs y los parseamos
            base1 = parseFloat(componentesBase1.input.value);
            base2 = parseFloat(componentesBase2.input.value);
            altura = parseFloat(componentesAltura.input.value);

            //hacemos la operacion correspondiente
            area =((base1 + base2 ) /2) * altura;
            
            //seteamos los inputs
            componentesBase1.input.value = '';
            componentesBase2.input.value = '';
            componentesAltura.input.value = '';
            
            //creamos el mensaje a mostrar en el modal
            elementosModal.parrafo.textContent = `El area del trapecio es ${area.toFixed(2)} unidades cuadradas `;

            contenidoModal.appendChild(elementosModal.parrafo);
            
            //mostramos el contenido
            modal.style.display = "flex";
            
        })
        
    }

    //codigo para hallar el area de un trapecio
    if(id == 'poligonoregular'){
        
        //declaramos variables de lado a y lado b
        const componentesLongitudLado = crearElementos();
        const componentesNumeroLados = crearElementos();

        //limpiamos el contenedor para que este vacio
        limpiarContenedores();        
        
        
        //Agregamos atributos al label e input base
        componentesLongitudLado.label.textContent = 'Longitud de un Lado:';
        componentesLongitudLado.label.setAttribute('for','longitudlado')
        componentesLongitudLado.input.id = 'longitudlado';
        componentesLongitudLado.input.type = 'number';

        //Agregamos atributos al label e input altura
        componentesNumeroLados.label.textContent = 'Numero de Lados:';
        componentesNumeroLados.label.setAttribute('for','numerolados')
        componentesNumeroLados.input.id = 'numerolados';
        componentesNumeroLados.input.type = 'number';

        //Agregamos los componentes dentro del contenedor
        contenidoDinamico.appendChild(componentesLongitudLado.label);
        contenidoDinamico.appendChild(componentesLongitudLado.input);
        contenidoDinamico.appendChild(componentesNumeroLados.label);
        contenidoDinamico.appendChild(componentesNumeroLados.input);
        contenidoDinamico.appendChild(boton);

        //funcion para agregar clases
        agregarClaseContenedores();
        
        //funcion para agregar elementos al modal
        elementoModal();

        //evento para capturar los datos de los inputs con el boton
        boton.addEventListener('click', function(){
            //capturamos los valores de los inputs y los parseamos
            
            longitudLados = parseFloat(componentesLongitudLado.input.value);
            numeroLados = parseFloat(componentesNumeroLados.input.value);

            //calculamos el perimetro
            perimetro = longitudLados * numeroLados;
            //calculamos el apotema
            apotema = calcular_apotema(longitudLados, numeroLados);

            //hacemos la operacion correspondiente
            area =(perimetro * apotema) / 2;
            
            //seteamos los inputs
            componentesLongitudLado.input.value = '';
            componentesNumeroLados.input.value = '';

            
            //creamos el mensaje a mostrar en el modal
            elementosModal.parrafo.textContent = `El area del poligono regular  es ${area.toFixed(2)} unidades cuadradas `;

            contenidoModal.appendChild(elementosModal.parrafo);
            
            //mostramos el contenido
            modal.style.display = "flex";
            
        })
        
    }
}


