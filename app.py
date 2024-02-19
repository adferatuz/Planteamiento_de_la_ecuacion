import math

iniciar_programa = str(input('Bienvenido al programa para calcular el area de una figura geometrica,👍👍👍👌 para iniciar  digita la letra "s" o "S":  '));

#calcular el area de un triangulo
# a = base, h = altura 
# Opcion 1
def calcular_area_triangulo(a, h):
    area = (a * h) / 2;
    return area;

#Calcular el area de un cuadrado
# a = lado, b = lado
# Opcion 2
def calcular_area_cuadrado(a, b):
    area =(a * b);
    return area;

#cacular ell area de un rombo
# d = diagonal 1 , c = diagonal 2
# Opcion 3
def calcular_area_rombo(d, c):
    area = (d * c) / 2;
    return area;

#Calcular area de un paralelogramo
# a = base, h = altura
# Opcion 4
def calcular_area_paralelogramo(a, h):
    area = (a * h);
    return area;

#Calcular area de un trapecio
# a = base 1, b = base 2, h = altura
# Opcion 5
def calcular_area_trapecio(a, b, h):
    area =  (( a + b ) / 2 ) * h;
    return area;

#Calcular area de un poligono regular
# s = longitud del lado, n = numero de lados
# Opcion 6
def calcular_area_poligono_regular(s, n,):  
    apotema = 0;
    perimetro = 0;  
    def calcular_apotema(s, n):
        apotema = s / (2 * math.tan(math.pi / n));
        return apotema;


    apotema = calcular_apotema(s, n);
    perimetro = (s * n);
    area =  (perimetro * apotema) / 2;
    return area;

#funcion menu de areas figuras geometricas
def menu_areas_geometricas():
    opcion = 0;
    print('Por favor elija una de las opciones presentadas en el siguiente menu:\n',
          '1). Hallar el area de un triangulo.\n',
          '2). Hallar el area de un cuadrado o rectangulo.\n',
          '3). Hallar el area de un rombo.\n',
          '4). Hallar el area de un paralelogramo.\n',
          '5). Hallar el area de un trapecio.\n',
          '6). Hallar el area de un poligono regular.');
    return ;

#funcion para dar inicio al programa
def iniciar_app(iniciar):

    #si la condicion de iniciar  es verdadera inicia el ciclo
    while(iniciar == 's' or iniciar == 'S'):

        #iniciamos el menú del programa
        menu_areas_geometricas();

        #Elegimos la opcion deseada
        opcion = int(input('Por favor digita el numero de opcion a elegir:  '));

        #este ciclo esta para corregir posibles errores al ingresar datos erroneos
        while(opcion <= 0 or opcion > 6):
            opcion = int(input('La opcion que elegiste es invalida, elige la opcion que deseas entre la 1 y la 6:  '));
    
        #empezamos con el bloque de condicionales para ejecutar la opcion deseada
        if( opcion == 1):
            #capturamos los datos para la opcion 1
            base = float(input('Digita la base del triangulo: '));
            altura = float(input('Digita la altura del triangulo: '));

            #capturamos la llamada de la funcion en una variable
            area_tiangulo = calcular_area_triangulo(base, altura);

            #imprimimos el resultado esperado
            print(f'El area del triangulo es {"{:.2f}".format(area_tiangulo)} unidades');

            iniciar = str(input('Si desea continuar con el programa digite la "S", de lo contrario digite la "N":  '));
            
            #si el usuario digita la opcion 'N' se termina el programa
            if(iniciar == 'n' or iniciar == 'N'):
                print('Gracias por usar el programa, ¡HASTA LA PROXIMA! 👌😁👍');
                return;       

        if(opcion == 2):
            #capturamos los datos correspondientes
            lado_a = float(input('Digita el valor del primer lado de la figura geometrica:  '));
            lado_b = float(input('Digita el valor del segundo lado de la figura geometrica:  '));

            #capturamos la llamada a la funcion en una variable
            area_cuadrado = calcular_area_cuadrado(lado_a, lado_b);

            #imprimimos el resultado esperado
            print(f'El area del cuadrado o rectangulo es {"{:.2f}".format(area_cuadrado)} unidades'); 

            #seteamos la opcion de continuar
            iniciar = str(input('Si desea continuar con el programa digite la "S", de lo contrario digite la "N":  '));

            #si el usuario digita la opcion 'N' se termina el programa
            if(iniciar == 'n' or iniciar == 'N'):
                print('Gracias por usar el programa, ¡HASTA LA PROXIMA! 👌😁👍');
                return;
           
        if(opcion == 3):
            #capturamos los datos correspondientes
            diagonal_1 = float(input('Digita el valor de la primera diagonal de la figura geometrica:  '));
            diagonal_2 = float(input('Digita el valor de la segunda diagonal de la figura geometrica:  '));

            #capturamos la llamada a la funcion en una variable
            area_rombo = calcular_area_rombo(diagonal_1, diagonal_2);

            #imprimimos el resultado esperado
            print(f'El area del rombo es {"{:.2f}".format(area_rombo)} unidades'); 

            #seteamos la opcion de continuar
            iniciar = str(input('Si desea continuar con el programa digite la "S", de lo contrario digite la "N":  '));

            #si el usuario digita la opcion 'N' se termina el programa
            if(iniciar == 'n' or iniciar == 'N'):
                print('Gracias por usar el programa, ¡HASTA LA PROXIMA! 👌😁👍');
                return;       
                   
        if(opcion == 4):
            #capturamos los datos correspondientes
            base = float(input('Digita el valor de la base de la figura geometrica:  '));
            altura = float(input('Digita el valor de la altura de la figura geometrica:  '));

            #capturamos la llamada a la funcion en una variable
            area_paralelogramo = calcular_area_paralelogramo(base, altura);

            #imprimimos el resultado esperado
            print(f'El area del paralelogramo es {"{:.2f}".format(area_paralelogramo)} unidades'); 

            #seteamos la opcion de continuar
            iniciar = str(input('Si desea continuar con el programa digite la "S", de lo contrario digite la "N":  '));

            #si el usuario digita la opcion 'N' se termina el programa
            if(iniciar == 'n' or iniciar == 'N'):
                print('Gracias por usar el programa, ¡HASTA LA PROXIMA! 👌😁👍');
                return;       

        if(opcion == 5):
            #capturamos los datos correspondientes
            base_1 = float(input('Digita el valor de la primera base de la figura geometrica:  '));
            base_2 = float(input('Digita el valor de la segunda base de la figura geometrica:  '));
            altura = float(input('Digita el valor de la altura de la figura geometrica:  '));

            #capturamos la llamada a la funcion en una variable
            area_trapecio = calcular_area_trapecio(base_1, base_2, altura);

            #imprimimos el resultado esperado
            print(f'El area del trapecio es {"{:.2f}".format(area_trapecio)} unidades'); 

            #seteamos la opcion de continuar
            iniciar = str(input('Si desea continuar con el programa digite la "S", de lo contrario digite la "N":  '));

            #si el usuario digita la opcion 'N' se termina el programa
            if(iniciar == 'n' or iniciar == 'N'):
                print('Gracias por usar el programa, ¡HASTA LA PROXIMA! 👌😁👍');
                return; 

        if(opcion == 6):
            #capturamos los datos correspondientes
            longitud_lado = float(input('Digita el valor de la longitud de un lado de la figura geometrica:  '));
            numero_lados = float(input('Digita el numero de lados  de la figura geometrica:  '));
          

            #capturamos la llamada a la funcion en una variable
            area_poligono_regular = calcular_area_poligono_regular(longitud_lado, numero_lados);

            #imprimimos el resultado esperado
            print(f'El area del poligono regular es {"{:.2f}".format(area_poligono_regular)} unidades'); 

            #seteamos la opcion de continuar
            iniciar = str(input('Si desea continuar con el programa digite la "S", de lo contrario digite la "N":  '));

            #si el usuario digita la opcion 'N' se termina el programa
            if(iniciar == 'n' or iniciar == 'N'):
                print('Gracias por usar el programa, ¡HASTA LA PROXIMA! 👌😁👍');
                return; 

#Esta funcion Inicia el sistema
iniciar_app(iniciar_programa);



