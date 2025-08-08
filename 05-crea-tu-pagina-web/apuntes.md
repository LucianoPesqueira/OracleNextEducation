# 1 - HTML y CSS: Ambientes de desarrollo

## Quirks Mode:
Es una tecnica usada por los navegadores para mantener la compatibilidad con paginas web diseñadas para navegadores antiguos.
Al momento de declarar <!DOCTYPE html> utiliza el modo estandar, evitamos el uso de quirks que puden traer problemas de compatibilidad.

### etiquetas
- <strong>: sirve para destacar texto en negrita.
- <span>: a diferencia de *strong* no aplica negrita por defecto, pero es otra forma de resaltar texto.




# 2 - HTML y CSS: Clases, Posicionamiento y Flexbox

## **box-sizing**
Es responsable de cómo se calculan el ancho y el alto totales de un elemento

## Viewport:
Es la porción del área visible de un plano y se utiliza como unidad de medida en CSS para crear páginas web 100% responsivas.
- Medidas *relativas*: em y rem
- Medidas *absolutas*: pixeles(px)
- *Points(pt)*: se usa generalmente en propiedades relacionadas con la fuente de su proyecto
- *In(inches/pulgadas)*: es otra unidad de medida que conocemos del mundo de las medidas absolutas, pero que no se usa en proyectos web.
- *Centimetro y Milimetro(cm/mm)*: Así como el pt, se espera el uso de estos dos para hojas de estilo para impresiones


## Flexbox propiedades:
- gap: especifica el tamaño de los espacios entre las filas y columnas en diseños de cuadricula.

## etiquetas
- <section>: sirve para definir secciones en un documento.
ej: 
<section>
  <h2>Título de la sección</h2>
  <p>Contenido relacionado con el tema de la sección.</p>
  <p>Más contenido relevante.</p>
</section>

- <div></div>: un contenedor de otros elementos, se usa cuando queremos agrupar elementos sin usar las etiquetas semanticas

## **Centrar un elemento con CSS**
si queremos centrar el texto dentro de un div:
<div class="container"> 
    <p>Aquí tenemos un texto</p> 
<div> 
uso: .container { text-align: center; }

pero si quiero centrar el div en la pantalla:
.container { 
    width: 700px; 
    margin-left: auto;
    margin-right: auto; 
}



# 3 - HTML y CSS: Header, Footer y variables CSS

* siempre es importante tener solo un h1 en la pagina por motivos de SEO

## pseudo-class
- hover: a:hover{background-color:red;} esto me permite que al posicionar el mouse sobre el elemento a cambie su color a rojo

## Variables CSS
me permite crear variables para evitar repetir estilos

!color: color-hunt me ofrece paletas de 4 colores que combinan entre si para mi pagina web.


# 4 - HTML y CSS: Responsividad y Publicacion de proyectos
## Medidas
Al utilizar **medidas absolutas** como px, no permitimos que al cambiar la fuente de nuestro navegador se modifique la fuente de nuestra pagina y permanezca igual, para eso debemos usar **medidas relativas**

- CSS Units: me permite obtener ejemplos de medidas

1. px (píxeles) → Medida absoluta

Es fija, no cambia según el tamaño de texto del usuario o la configuración del navegador.

Ejemplo: 16px siempre mide 16 píxeles en pantalla.

Útil para cosas que deben tener un tamaño exacto, como bordes o iconos.

2. em (relativa al elemento padre) → Relativa

1 em = tamaño de fuente del elemento padre.

Ejemplo:

Si el padre tiene font-size: 20px, entonces 1em = 20px.

Si un hijo usa 2em, será 40px.

El problema: puede acumularse si hay muchos elementos anidados y el tamaño va creciendo o achicando sin querer.

3. rem (relativa al elemento raíz) → Relativa, pero más estable

1 rem = tamaño de fuente del elemento raíz (html).

Ejemplo:

Si html tiene font-size: 16px, entonces 1rem = 16px en cualquier parte del documento.

Es más predecible que em porque no depende de padres intermedios.

## media quieries
Permiten aplicar estilos CSS según el tipo general de un dispositivo