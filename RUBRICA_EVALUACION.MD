# Rúbrica de Evaluación: Proyecto Integrador Nivel 2 - Front 1

Este documento define los criterios y niveles de desempeño para la evaluación del proyecto de Front 1. La nota final se calculará con base en el puntaje ponderado de las siguientes categorías.

## Resumen de Categorías y Ponderación

| Categoría | Ponderación | Descripción |
| :--- | :---: | :--- |
| **1. Gestión del Proyecto y Buenas Prácticas** | 15% | Evalúa el cumplimiento de los estándares de entrega, nomenclatura y organización del repositorio. |
| **2. Arquitectura JS y Gestión de Datos** | 25% | Evalúa la correcta implementación de módulos ES6 y el uso de `localStorage` como única fuente de verdad. |
| **3. Funcionalidad del Módulo** | 30% | Evalúa si *todos* los requisitos funcionales del módulo asignado se completaron y operan correctamente. |
| **4. Manipulación del DOM e Interactividad** | 20% | Evalúa la habilidad para crear, modificar y estilizar elementos del DOM dinámicamente en respuesta a eventos. |
| **5. Calidad de Código y Desacoplamiento** | 10% | Evalúa la legibilidad, mantenibilidad y resiliencia del código (manejo de estados, ej. no logueado). |

---

## Detalle de la Rúbrica

### 1. Gestión del Proyecto y Buenas Prácticas (15%)

| Nivel | Descripción |
| :--- | :--- |
| **Sobresaliente (90-100%)** | El repositorio cumple *perfectamente* con todas las reglas: `fork` correcto, nombre exacto, `README.md` impecable (integrantes + docs). La nomenclatura (`kebab-case`/`camelCase`) se aplica en el 100% del proyecto. La estructura de carpetas es ejemplar y sigue la recomendación. |
| **Bueno (75-89%)** | El repositorio existe y cumple con los requisitos básicos de entrega. El `README.md` está presente pero puede ser breve. La nomenclatura y la estructura de carpetas se aplican en su mayoría, con algunos errores u omisiones menores. |
| **Suficiente (60-74%)** | Se entregó un repositorio, pero no sigue el flujo de `fork` o el nombre es incorrecto. El `README.md` está incompleto o ausente. La nomenclatura y la estructura de carpetas son inconsistentes o desordenadas. |
| **Insuficiente (0-59%)** | No se entrega un repositorio de GitHub funcional. No se siguen las convenciones mínimas de entrega, nomenclatura o estructura. |

### 2. Arquitectura JS y Gestión de Datos (25%)

| Nivel | Descripción |
| :--- | :--- |
| **Sobresaliente (90-100%)** | El proyecto utiliza módulos ES (`import`/`export`) a la perfección, sin scripts globales. La lógica de `localStorage` es impecable: la inicialización (semilla) funciona una sola vez y **toda** lectura y escritura (registros, inscripciones, etc.) se hace contra `localStorage`. |
| **Bueno (75-89%)** | El proyecto utiliza módulos ES, aunque puede haber algún detalle menor. La persistencia en `localStorage` funciona para la mayoría de las operaciones, pero la lógica de inicialización (semilla) puede ser inexistente o ejecutarse incorrectamente (ej. sobrescribe los datos del usuario). |
| **Suficiente (60-74%)** | Se intenta usar módulos ES, pero hay errores o se mezclan con scripts globales. Se utiliza `localStorage` de forma parcial (ej. solo para el login, pero no para registrar anuncios o inscripciones), o no existe un módulo de datos iniciales. |
| **Insuficiente (0-59%)** | No se utilizan módulos ES (solo scripts globales). Los datos no persisten en `localStorage` y se pierden al recargar la página. |

### 3. Funcionalidad del Módulo (30%)

| Nivel | Descripción |
| :--- | :--- |
| **Sobresaliente (90-100%)** | El 100% de los requisitos funcionales listados en el documento de entregables para el módulo asignado están implementados, funcionan correctamente y no presentan errores lógicos (ej. el filtro filtra bien, la validación funciona, etc.). |
| **Bueno (75-89%)** | Se implementan todos los requisitos funcionales *principales* del módulo, pero alguna característica secundaria (ej. "Contador de categorías" o "Pre-rellenar formulario") puede estar ausente o tener errores menores. |
| **Suficiente (60-74%)** | Se implementan la mayoría de los requisitos funcionales, pero con errores notables. Funcionalidades clave (ej. el renderizado dinámico, el guardado en `localStorage`) están incompletas o fallan. |
| **Insuficiente (0-59%)** | Las funcionalidades principales del módulo no están implementadas, no funcionan o generan errores críticos que impiden el uso de la aplicación. |

### 4. Manipulación del DOM e Interactividad (20%)

| Nivel | Descripción |
| :--- | :--- |
| **Sobresaliente (90-100%)** | Excelente habilidad para manipular el DOM. El contenido (listas, tablas, cards) se genera dinámicamente de forma limpia. El feedback al usuario (mensajes de error, estilos condicionales) aparece y desaparece en los momentos correctos. La interfaz se siente fluida y responde a las acciones sin recargar la página. |
| **Bueno (75-89%)** | Se logra manipular el DOM para cumplir los requisitos (renderizar contenido, mostrar/ocultar errores). La implementación funciona, aunque puede ser poco eficiente (ej. uso excesivo de `innerHTML` en lugar de `createElement`, o no se limpian los contenedores correctamente antes de repintar). |
| **Suficiente (60-74%)** | La manipulación del DOM es básica o presenta errores. El contenido se renderiza, pero el feedback (errores, estilos) es inconsistente (ej. los errores no desaparecen o se acumulan). Las actualizaciones de la interfaz pueden ser erráticas. |
| **Insuficiente (0-59%)** | No hay una manipulación significativa del DOM. El contenido es mayormente estático o el código JS genera errores de consola que impiden la interacción. |

### 5. Calidad de Código y Desacoplamiento (10%)

| Nivel | Descripción |
| :--- | :--- |
| **Sobresaliente (90-100%)** | El código es limpio, legible y sigue las convenciones. El proyecto es resiliente: las páginas "protegidas" (ej. `mis-cursos`, `perfil`) manejan correctamente el estado de "no autenticado" (mostrando un mensaje o redirigiendo) sin generar errores en consola. |
| **Bueno (75-89%)** | El código es funcional y mayormente legible. El desacoplamiento está presente, pero alguna página puede generar un error de consola si se accede sin estar logueado (aunque no impide que el resto de la app funcione). |
| **Suficiente (60-74%)** | El código es difícil de leer, desordenado o mezcla responsabilidades. El proyecto es frágil: las páginas fallan o "se rompen" (ej. `null reference`) si no se sigue el flujo exacto (ej. si se accede a `mis-cursos` sin loguearse primero). |
| **Insuficiente (0-59%)** | Código ilegible. Errores graves de lógica y acoplamiento. La consola está llena de errores que impiden la funcionalidad. |