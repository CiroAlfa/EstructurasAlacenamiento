# EstructurasAlacenamiento
 Evidencia de desempeño: GA3-220501093-AA3-EV02 resolución a problemas algorítmicos aplicando  estructuras de almacenamiento
# Proyecto de Resolución de Algoritmos

Este proyecto desarrolla programas en JavaScript para resolver una serie de problemas propuestos. Cada problema se encuentra organizado en su carpeta respectiva.

## Problemas Propuestos

### 1. Cálculo de Área y Perímetro de Figuras Planas
Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas según la siguiente tabla:

| Figura      | Perímetro                        | Área                                 |
|-------------|----------------------------------|--------------------------------------|
| Cuadrado    | 4 * lado                         | lado * lado                          |
| Rectángulo  | 2 * (largo + ancho)              | largo * ancho                        |
| Círculo     | 2 * π * radio                    | π * radio^2                           |
| Triángulo   | lado1 + lado2 + lado3            | (base * altura) / 2                  |

### 2. Almacenamiento y Análisis de Edades
Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de enteros y luego determine:
- La cantidad de personas que son menores de edad.
- La cantidad de personas que son mayores de edad.
- La cantidad de adultos mayores (edad ≥ 60).
- La edad más baja.
- La edad más alta.
- El promedio de edades ingresadas.

Validar que las edades estén en un rango entre 1 y 120 años. En caso de error, notificar y solicitar un nuevo valor.

### 3. Mezcla de Vectores Ordenados
Escribir un programa que lea dos vectores de números enteros ordenados ascendentemente y luego produzca la lista ordenada de la mezcla de los dos. Por ejemplo, si los vectores son `1 3 6 9 17` y `2 4 10 17`, la lista resultante debe ser `1 2 3 4 6 9 10 17 17`.

Limitar los vectores a un tamaño de 5 y validar que los datos se ingresen de forma ascendente.

### 4. Encuesta de Gustos Musicales
Una emisora desea conocer el rating de canciones y cantantes más escuchados en el semestre. Se desarrollará una solución que permita conocer la respuesta de 6 personas con relación a sus gustos musicales. 

Se deben registrar los siguientes datos:
- Nombre
- Número de identificación (cédula)
- Fecha de nacimiento
- Correo electrónico
- Ciudad de residencia
- Ciudad de origen
- Artista favorito
- Títulos de hasta 3 canciones favoritas

#### Menú de Opciones
a. Agregar una persona con los datos listados.
b. Mostrar la información personal de una persona particular por su posición en el vector.

## Uso
Para ejecutar cada uno de los programas, asegúrate de tener instalado Node.js en tu sistema. Navega a la carpeta correspondiente del problema y ejecuta el archivo con Node.js:

```bash
node nombreDelArchivo.js
