# Proyecto Integrador: Nivel 2 - Front 1 (JavaScript y DOM)

## Documento de Entregables Detallados

### Objetivo General de la Materia

El objetivo de esta materia es evolucionar las maquetas estáticas (HTML/CSS) del Nivel 1 para convertirlas en interfaces web interactivas. Los estudiantes aprenderán a manipular el DOM para mostrar contenido dinámicamente, gestionar eventos del usuario, y simular una base de datos persistente en el navegador usando `localStorage`.

### Requerimientos de Entrega y Repositorio (GitHub)

La entrega final del proyecto se gestionará *exclusivamente* a través de un repositorio de GitHub.

* **Flujo de Trabajo (Fork):** Cada equipo deberá hacer un `fork` del repositorio "base" original que será proporcionado.
* **Nombre del Repositorio:** El repositorio forkeado debe tener *exactamente* el nombre del repositorio original.
* **Nombre de la carpeta interna del proyecto:** Dentro del repositorio forkeado se debe crear una carpeta y esta debe tener *exactamente* el nombre del módulo asignado (ej. `modulo-1-autenticacion-y-registro`, `modulo-2-catalogo-de-cursos`, etc., según la convención `kebab-case`).
* **Archivo `README.md`:** El repositorio de cada equipo debe contener un archivo `README.md` en la raíz.
* **Contenido del `README.md`:** Este archivo es obligatorio y debe incluir:
    * Una descripción y documentación técnica/funcional del módulo asignado.
    * La lista completa de los integrantes del equipo (Nombres y Apellidos).

---

### Requerimientos Técnicos Globales (Obligatorios)

Estos requerimientos aplican a *todos* los módulos y son la base de la evaluación de buenas prácticas.

**1. Convenciones de Nomenclatura**

* **`kebab-case` (guion-medio):** Se debe usar OBLIGATORIAMENTE para:
    * Nombres de carpetas (ej. `js-modules`, `css-styles`).
    * Nombres de archivos (ej. `auth-controller.js`, `main-styles.css`).
    * Clases de CSS (ej. `.curso-card`, `.btn-principal`).
* **`camelCase` (MayúsculaInterna):** Se debe usar OBLIGATORIAMENTE para:
    * Variables de JavaScript (ej. `listaDeCursos`).
    * Funciones de JavaScript (ej. `renderizarCursos`).

**2. Estructura del Proyecto y Módulos JS**

* **Raíz del Proyecto:** El archivo `index.html` debe estar en la raíz del proyecto.
* **Estructura de Carpetas:** Se debe definir una estructura de carpetas lógica y ordenada:
    ```
    / (Raíz del proyecto, contiene index.html)
    /src
      /pages       (Contiene las demás páginas HTML y sus estilos CSS/JS específicos)
      /helpers     (Módulos JS con funciones de utilidad: validaciones, generadores de ID, etc.)
      /assets      (Imágenes, videos, fuentes, etc.)
      /modules     (Módulos JS principales, como el de datos iniciales o controladores)
      /styles      (Archivos CSS globales, como main.css o normalize.css)
    
    ```
* **Módulos ES (`import`/`export`):** Se prohíbe el uso de scripts globales. Todo el código JavaScript debe estar modularizado usando `import` y `export`.
    * El archivo `index.html` (y demás páginas) debe cargar el script principal con `type="module"`.

**3. Datos Simulados y Persistencia en `localStorage`**

* **Módulo de Datos Iniciales (Semilla):**
    * [ ] Creación de un módulo JS dedicado para los datos *iniciales* (semilla).
    * [ ] El módulo debe `export` (exportar) todos los arreglos de datos (usuarios, cursos, etc.).
    * [ ] Contenido: Definición de arreglos para `usuarios` (mínimo 3), `cursos` (mínimo 6), `inscripciones`, `calificaciones`, `asistencias` y `anuncios`.
* **Inicialización de Datos (Arranque):**
    * [ ] La aplicación debe tener una lógica de "arranque" (ej. en el script principal de `index.html`).
    * [ ] Al cargar, debe verificar si los datos (ej. `localStorage.getItem('usuarios')`) existen en `localStorage`.
    * [ ] **Si NO existen,** debe cargar los datos iniciales (del módulo semilla) y guardarlos en `localStorage`.
    * [ ] **Si YA existen,** no debe hacer nada (para no sobrescribir los cambios del usuario).
* **Persistencia Global (Fuente de Verdad):**
    * [ ] Toda la información que pueda ser modificada (nuevos usuarios, inscripciones, anuncios) DEBE persistir en `localStorage`.
    * [ ] Una vez inicializada, **`localStorage` se convierte en la única fuente de verdad.** Todos los módulos deben LEER y ESCRIBIR directamente en `localStorage`.

---

### Módulo 1: Autenticación y Registro

**Objetivo del Módulo:** Validar formularios del lado del cliente y simular el proceso de inicio de sesión y registro contra `localStorage`, gestionando la navegación.

**Páginas involucradas:** `login.html`, `registro.html`, `recuperar.html`

**Lista de Requerimientos:**

* [ ] **Prevención de Envío:** Gestionar el envío de los tres formularios para evitar que la página se recargue por defecto.
* [ ] **Validación (Registro):** Implementar validación en `registro.html` que verifique en tiempo real que el campo "confirmar contraseña" coincide con "contraseña".
* [ ] **Validación (Todos):** Verificar que los campos no estén vacíos al intentar procesar el formulario (la validación se debe hacer desde JavaScript).
* [ ] **Manipulación del DOM (Feedback de Error):** Mostrar y ocultar mensajes de error claros (ej. "Las contraseñas no coinciden", "Campo requerido") directamente en el HTML, en una ubicación visible cerca de los campos correspondientes.
* [ ] **Manipulación del DOM (Estilos):** Añadir y quitar clases CSS a los campos del formulario según su estado de validación.
* [ ] **Lógica (Login):** En `login.html`, al procesar el login, el script debe leer el arreglo `usuarios` *desde `localStorage`* y verificar si el email y la contraseña coinciden.
* [ ] **Lógica (Simulación de Sesión):** Si el login es exitoso, guardar un identificador o información del usuario en `localStorage` (ej. `usuarioLogueado`) y **redirigir a la vista principal** (ej. `cursos.html` o `dashboard.html`).
* [ ] **Lógica (Registro):** En `registro.html`, al procesar un registro exitoso, el script debe añadir el nuevo usuario al arreglo `usuarios` **OBLIGATORIAMENTE en `localStorage`** y **redirigir a la vista de login**.
* [ ] **Simulación (Recuperar):** En `recuperar.html`, al procesar la solicitud, comprobar si el email existe en los datos de `localStorage` y mostrar un mensaje genérico (ej. "Si el correo está registrado, recibirás un enlace.").

### Módulo 2: Catálogo de Cursos

**Objetivo del Módulo:** Generar contenido HTML dinámicamente leyendo desde `localStorage` y filtrar dicho contenido interactivamente sin recargar la página.

**Páginas involucradas:** `cursos.html`, `categorias.html`

**Lista de Requerimientos:**

* [ ] **Renderizado Dinámico (`cursos.html`):** Al cargar la página, el script debe leer el arreglo `cursos` **desde `localStorage`**.
* [ ] **Creación de Elementos:** El HTML original de `cursos.html` solo debe tener un contenedor vacío. El script debe recorrer el arreglo y generar el HTML de las tarjetas de cursos.
* [ ] **Inserción en DOM:** Insertar todas las tarjetas generadas dentro del contenedor correspondiente.
* [ ] **Filtro Interactivo (`categorias.html`):** Hacer que los botones o enlaces de las categorías sean interactivos.
* [ ] **Lógica de Filtro:** Al seleccionar una categoría, obtener una nueva lista filtrada del arreglo `cursos` (leído de `localStorage`).
* [ ] **Actualización del DOM (Sin Recarga):** El script debe limpiar el contenedor de cursos y volver a renderizar las tarjetas usando *solo* el arreglo filtrado. **La página NO debe recargarse**.
* [ ] **Contador (Categorías):** (Opcional avanzado) En `categorias.html`, calcular y mostrar cuántos cursos hay por cada categoría.

### Módulo 3: Gestión de Inscripciones

**Objetivo del Módulo:** Simular un flujo de usuario que involucra múltiples páginas, guardando el estado de la inscripción en `localStorage`.

**Páginas involucradas:** `detalle-curso.html`, `proceso-inscripcion.html`, `mis-cursos.html`

**Lista de Requerimientos:**

* [ ] **Guardar Estado (`detalle-curso.html`):** Al accionar el botón "Inscribirme", el script debe guardar el `id` del curso seleccionado en `localStorage` (para ser leído por la siguiente página).
* [ ] **Leer Estado (`proceso-inscripcion.html`):** Al mostrar esta página, el script debe leer el `id` del curso, buscar los detalles completos (leyendo `cursos` de `localStorage`) y pintar esa información en la página.
* [ ] **Simular Inscripción:** Al confirmar la inscripción en `proceso-inscripcion.html`, el script debe simular la inscripción (guardando un nuevo objeto de inscripción en el arreglo `inscripciones` **OBLIGATORIAMENTE en `localStorage`**).
* [ ] **Redirección:** Redirigir automáticamente a `confirmacion.html` tras la inscripción.
* [ ] **Renderizado de Tabla (`mis-cursos.html`):** La sección de la tabla donde van los datos debe estar vacía en el HTML.
* [ ] **Lógica de Tabla (Desacoplada):** Al mostrar la página, el script debe:
    1.  Verificar si existe un identificador de usuario en `localStorage` (el `usuarioLogueado`).
    2.  Si existe, filtrar el arreglo `inscripciones` (de `localStorage`) por ese usuario y buscar los datos del curso (de `localStorage`).
    3.  Generar dinámicamente las filas de la tabla con los cursos e insertarlas.
    4.  **Si NO existe usuario,** la tabla debe mostrar un estado vacío o un mensaje (ej. "Inicia sesión para ver tus cursos"). La página no debe generar un error.

### Módulo 4: Asistencia y Evaluaciones

**Objetivo del Módulo:** Generar tablas dinámicas con datos complejos leídos de `localStorage` y aplicar estilos condicionales, manejando estados de sesión simulados.

**Páginas involucradas:** `mis-calificaciones.html`, `historial-asistencia.html`

**Lista de Requerimientos:**

* [ ] **Renderizado de Tablas (Desacoplado):** Las secciones de las tablas donde van los datos deben estar vacías. Al cargar la página:
    1.  El script debe verificar si existe un usuario logueado en `localStorage`.
    2.  Si existe, debe leer los arreglos (`calificaciones` / `asistencias`) de `localStorage`, filtrar por el usuario y generar dinámicamente las filas.
    3.  **Si NO existe usuario,** las tablas deben mostrar un estado vacío (no deben romperse).
* [ ] **Inserción en DOM:** Ambas tablas deben rellenarse usando JavaScript.
* [ ] **Estilo Condicional (`historial-asistencia.html`):** El script debe analizar los datos de asistencia. Si el estado es "Ausente" o "Tardanza", debe añadir una clase CSS a la celda o fila correspondiente.

### Módulo 5: Perfil del Colaborador (HV)

**Objetivo del Módulo:** Leer datos de un usuario desde `localStorage` para rellenar vistas y formularios, y simular la actualización de datos (guardando los cambios en `localStorage`).

**Páginas involucradas:** `perfil.html`, `editar-perfil.html`, `seguridad.html`

**Lista de Requerimientos:**

* [ ] **Simular Sesión (Desacoplado):** El script debe identificar al "usuario logueado" leyendo de `localStorage`.
    * **Si NO existe usuario,** la página debe mostrar un estado de "No autenticado" o gestionar la redirección al login. No debe intentar leer datos de un usuario nulo.
* [ ] **Pintar Datos (`perfil.html`):** Si el usuario existe, leer sus datos desde el arreglo `usuarios` (de `localStorage`) y rellenar los elementos HTML con la información (nombre, email, etc.).
* [ ] **Pre-rellenar Formulario (`editar-perfil.html`):** Si el usuario existe, leer sus datos y rellenar los campos del formulario con la información actual.
* [ ] **Lógica de Actualización (`editar-perfil.html`):** Al guardar los cambios, el script debe actualizar el objeto del usuario correspondiente en el arreglo `usuarios` **en `localStorage`**.
* [ ] **Validación (Seguridad):** En `seguridad.html`, gestionar el envío del formulario, y validar que:
    1.  La "contraseña actual" coincide con la guardada en `localStorage` para el usuario logueado.
    2.  La "nueva contraseña" y la "confirmación" son idénticas.
* [ ] **Lógica de Actualización (Seguridad):** Si la validación es exitosa, actualizar la contraseña del usuario **en `localStorage`**.
* [ ] **Manipulación del DOM (Feedback):** Mostrar mensajes de error específicos en `seguridad.html` (ej. "La contraseña actual es incorrecta") y un mensaje de éxito/error al guardar en `editar-perfil.html`.

### Módulo 6: Comunicaciones Internas

**Objetivo del Módulo:** Añadir dinámicamente nuevo contenido a una lista desde un formulario y persistir ese nuevo contenido obligatoriamente en `localStorage`.

**Páginas involucradas:** `anuncios.html`, `crear-anuncio.html`

**Lista de Requerimientos:**

* [ ] **Fuente de Verdad (`localStorage`):** El arreglo `anuncios` debe gestionarse en `localStorage`.
* [ ] **Renderizado Dinámico (`anuncios.html`):** Al mostrar la página, el script debe leer el arreglo `anuncios` desde `localStorage` (o desde el arreglo de datos inicial si `localStorage` está vacío, como parte de la lógica de arranque) y pintar la lista de anuncios en el DOM.
* [ ] **Captura de Formulario (`crear-anuncio.html`):** Gestionar el envío del formulario, prevenir el envío por defecto, y obtener los valores del título y contenido.
* [ ] **Actualización de Datos:** Crear un nuevo objeto "anuncio" (con `id`, `titulo`, `contenido`, `fecha`).
* [ ] **Persistencia:** Añadir el nuevo objeto al arreglo `anuncios` **OBLIGATORIAMENTE en `localStorage`**.
* [ ] **Feedback al Usuario:** Limpiar el formulario y mostrar un mensaje de "Anuncio publicado con éxito".
* [ ] **Verificación:** Al navegar de vuelta a `anuncios.html`, el nuevo anuncio debe aparecer en la lista.

### Módulo 7: Dashboard Analítico

**Objetivo del Módulo:** Crear una interfaz de "pestañas" (tabs) que oculte y muestre diferentes secciones de contenido dinámicamente, calculando métricas desde `localStorage`.

**Página involucrada:** `dashboard.html`

**Lista de Requerimientos:**

* [ ] **Estructura HTML:** La página debe tener los botones/enlaces de navegación (Reporte General, Reporte Cursos, Reporte Usuarios) y los contenedores para el contenido de cada reporte.
* [ ] **Estado Inicial:** Al mostrar la página, solo el primer reporte (General) y su pestaña deben estar visibles/activos.
* [ ] **Gestión de Eventos:** Implementar la interacción con las pestañas/botones de navegación.
* [ ] **Lógica de Tabs (Visual):** Al seleccionar una pestaña:
    1.  Ocultar *todos* los contenedores de reportes.
    2.  Mostrar *solo* el contenedor de contenido correspondiente a la pestaña seleccionada.
* [ ] **Gestión de Clases (Estilo):** El script debe añadir/quitar una clase de "activo" a los botones de pestaña y/o a los contenedores de contenido para gestionar la visibilidad y el estilo activo.
* [ ] **Cálculo de Métricas:** Crear funciones JS que lean los arreglos de datos **desde `localStorage`** y calculen métricas simples (ej. "Total Usuarios", "Total Cursos").
* [ ] **Pintar Métricas:** Escribir los resultados de esos cálculos en el DOM, dentro del contenedor del reporte correspondiente.