# Configuración

### 1. Introducción

El asistente de configuración de AHORA Express nos permite definir el comportamiento de la aplicación para los procesos de **ventas, compras, contable y de gestión del almacén**.

A través de una serie de pasos, el asistente nos mostrará todos los parámetros más importantes a tener en cuenta para la configuración de los procesos indicados.

Una vez configurada la aplicación, ya podremos empezar a trabajar con los procesos operativos propios del ERP.

Cuando se realiza la instalación de Ahora ERP Express, y realizamos la conexión a una base de datos vacía, automáticamente se iniciará el asistente de configuración, según vemos en la pantalla a continuación.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_1.png)

_Fig. 1 Configurador Ahora Freeware ERP_

No obstante, aunque ya se haya utilizado y configurado a través del asistente, podremos volver a iniciarlo a través del nodo del **menú -&gt;Administración -&gt; Asistente de configuración.**

### **1.1. Objetivo** 

El objetivo de este documento es explicar mediante un paso a paso gráfico cómo utilizar el asistente de configuración.

### 2. Funcionalidad

Según hemos visualizado en la captura anterior, disponemos de tres opciones de configuración, este manual se centrará en la primera opción **“Ahora Express -  Configuración básica”.**

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_1_1.png)

_Fig. 2 Configuración Ahora Express_

La segunda opción corresponde a **Instalcore**, a través de la cual se puede configurar el ERP para empresas instaladoras que requieren de la utilización de partes de trabajo y herramientas adicionales a las que se incluyen en la versión express.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_2.png)

_Fig. 2.1 Configuración Instalcore_

La tercera y última opción es **Tiendacore**, la cual ofrece la posibilidad de realizar una configuración específica para los procesos relativos a las TPV.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_3.png)

_Fig. 3 Configuración - Tiendacore_

### 3. Configuración Ahora Express

### **3.1.  Bienvenida** 

Para iniciar el configurador de Ahora Express tan solo realizaremos un click sobre el icono de Ahora Express y nos pasará a la siguiente ventana de Bienvenida.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_4.png)

_Fig. 4 Bienvenida_

### **3.2. Empresa** 

En el menú lateral izquierdo pulsaremos Empresa, para comenzar a configurar los datos de la empresa.

Si observamos el nodo activo del menú, veremos que quedará resaltado en negrita para indicar al usuario en que pantalla se encuentra en todo momento.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_5.png)

_Fig. 5 Empresa_

El primer paso del configurador después de pulsar el icono de Empresa, permite al usuario definir la información relativa a los datos de contacto de la empresa, así como los datos del registro mercantil.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_6.png)

_Fig. 6 Empresa II_

Los datos de obligado cumplimiento aparecen marcados con un asterisco \(\*\), en caso de que no se cumplimente alguno de los campos, el propio asistente, nos informará y no podremos avanzar hasta el siguiente paso.

Al introducir el Logo de la empresa, aparecerá de forma automática en los listados**\***, los formatos de imagen admitidos son; .bmp, .ico y .jpg.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_7.png)

_Fig. 7 Empresa III_

_\* Previa configuración del path de los listados._

### 3.3. Gestión de seguridad

Ahora Express cuenta con una serie de grupos y perfiles de seguridad, en la pantalla de configuración del asistente, tenemos dos accesos diferentes; **Grupos seguridad** y **Gestión de empleados.**

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_8.png)

_Fig. 8 Gestión de seguridad_

**Grupos seguridad**

Al acceder a Grupos de seguridad encontramos cuatro grupos de seguridad predefinidos. Cada grupo de seguridad viene preconfigurado con los objetos con los que puede trabajar el usuario, así como los nodos del menú de gestión y los menús de los formularios habilitados.

Los grupos disponibles son: **Comercial, Compras, Contabilidad y Ventas**.

El asistente de configuración nos permite dar de alta a los usuarios de la aplicación y asignarle el grupo o grupos de seguridad al que pertenece.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_9.png)

_Fig. 9 Grupos de seguridad_

La pantalla está estructurada en dos rejillas. En la rejilla superior aparecen los grupos de seguridad disponibles, y en la inferior los objetos, nodos y menús de formularios que están habilitados para el grupo de seguridad seleccionado.

Para generar los grupos de seguridad se debe seleccionar aquél o aquéllos que nos interesan y pulsar el botón “Generar”.

Desde esta pantalla no se puede modificar la configuración de los grupos de seguridad. Si se desea realizar algún cambio, se debe plantear desde la utilidad Ahora Admon.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_10.png)

_Fig. 10 Grupos de seguridad II_

**Gestión de empleados**

El asistente de configuración nos permite dar de alta los usuarios de la aplicación y asignarle uno o varios grupos de seguridad.  Es imprescindible conocer el usuario y contraseña con permisos de administración de la instancia SQL Server donde esté restaurada la base de datos.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_11.png)

_Fig. 11 Gestión de empleados_

En este ejemplo hemos dado de alta el usuario como Ahora2, una vez creado el login, pulsamos el botón aceptar y nos saldrá en pantalla el siguiente mensaje.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_12.png)

_Fig. 12 Gestión de empleados II_

**3.4. Gestión Contable**

El asistente de configuración en esta sección, nos permite realizar una serie de configuraciones como **dar de alta el ejercicio contable predeterminado**, que será el que se encontrará activo al iniciar la aplicación \(se deberá indicar la fecha de inicio y fin del mismo\).

Otras opciones que se configurarán en este paso, son el **número de dígitos que tendrán las cuentas contables**, a través de un desplegable podremos realizar la selección desde 9 hasta 12 dígitos.

La selección **de los niveles de contabilidad** con los que trabajarán las subcuentas nos permite….

Será posible establecer el **agrupar las cuentas de Cliente y de Proveedor**. Esto significa que todas las cuentas del Clientes se agruparán en la cuenta 430 y todas las de proveedor en la cuenta 400.

Y por último podremos establecer a través de un check, el contabilizar ciertos estados de las carteras.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_13.png)

_Fig. 13 Gestión contable_

**3.5. Aspectos generales**

En esta sección se podrán configurar los **directorios** en los que almacenaremos los datos y **otros parámetros** relativos al funcionamiento de la aplicación.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_14.png)

_Fig. 14 Aspectos generales_

Directorios

AHORA Express cuenta con una funcionalidad avanzada de gestión documental, gestión de imágenes de empleados y artículos, gestión de iconos y gestión de listados.

Además, facilita la generación de copias de seguridad desde la aplicación y desde el configurador permite hacer una volcado de los principales ficheros maestros a la aplicación.

Para ello, el instalador de AHORA Express crea un directorio donde almacenar todos estos ficheros. En caso de querer cambiar la ruta donde se almacena esta información, se debe indicar en este paso.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_15.png)

_Fig. 15 Directorios_

Otros

En este apartado se podrán establecer una serie de configuraciones adicionales. Como vemos en la siguiente captura, al posicionar el puntero del ratón sobre una opción, nos sale un texto con información adicional.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_16.png)

_Fig. 16 Otros_

**3.6. Gestión de ventas**

En esta sección encontramos siete configuraciones relativas al proceso de ventas.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_17.png)

_Fig. 17 Gestión de ventas_

A continuación, se mostrarán cada una de las subsecciones mediante capturas, donde se podrá visualizar cada una de las opciones de configuración disponibles.

Clientes

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_18.png)

_Fig. 18 Clientes_

Plantas

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_19.png)

_Fig. 19 Plantas_

Ofertas clientes

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_20.png)

_Fig. 20 Ofertas_

Pedidos clientes

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_21.png)

_Fig. 21 Pedidos_

Albaranes clientes

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_22.png)

_Fig. 22 Albaranes_

Facturas clientes

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_23.png)

_Fig. 23 Facturas_

Contratos de cuotas

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_24.png)

_Fig. 24 Contratos_

**3.7.** Gestión de compras

Al igual que en la gestión de ventas disponemos de una serie de subsecciones en las que realizar configuraciones relativas al proceso de compra.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_25.png)

_Fig. 25 Gestión de Compras_

A continuación, se mostrarán cada una de las subsecciones mediante capturas, donde se podrá visualizar cada una de las opciones de configuración disponibles.

Proveedores

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_26.png)

_Fig. 26 Proveedores_

Pedidos Proveedores

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_27.png)

_Fig. 27 Pedidos_

Albaranes Proveedores

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_28.png)

_Fig. 28 Albaranes_

Facturas Proveedores

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_29.png)

_Fig. 29 Facturas_

Facturas Acreedores

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_30.png)

_Fig. 30 Facturas Acreedores_

**3.8. Gestión de Artículos**

En la sección de la gestión de artículos, disponemos de una serie de subsecciones, las cuales se muestran en la captura inferior.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_31.png)

_Fig.31 Gestión de artículos_

A continuación, se mostrarán cada una de las subsecciones mediante capturas, donde se podrá visualizar cada una de las opciones de configuración disponibles.

Artículos

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_32.png)

_Fig. 32 Artículos_

Precios clientes

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_33.png)

_Fig. 33 Artículos_

Precios proveedores

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_34.png)

_Fig. 34 Artículos_

Amortizaciones

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_35.png)

_Fig. 35 Artículos_

**3.9.  Gestión de Proyectos**

En el apartado de Gestión de proyectos, se podrá configurar como renombrar los proyectos.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_36.png)

_Fig. 36 Gestión de proyectos_

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_37.png)

_Fig. 37 Gestión de proyectos II_

**3.10.** Gestión de Almacén

AHORA Express viene predefinido para trabajar con un almacén. No obstante, desde la propia aplicación podemos dar de alta todos los almacenes que sean necesarios para el correcto funcionamiento de la empresa.

Desde este apartado podremos definir la configuración de los almacenes y el proceso logístico en cuanto al uso de lotes y series.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_38.png)

_Fig. 38 Gestión de almacén_

Inventarios

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_39.png)

_Fig. 39 Inventarios_

Almacenes

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_40.png)

_Fig. 40 Almacenes_

Lotes

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_41.png)

_Fig. 41 Lotes_

Series

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_42.png)

_Fig. 42 Series_

**3.11. Importación**

El asistente de configuración, cuenta con una herramienta de importación de datos maestros a la base de datos. El origen de los datos son unas plantillas Excel que son facilitadas en la instalación de AHORA Express en el directorio “Importación”.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_43.png)

_Fig. 43 Importación_

**3.12. Tpv**

AHORA Express cuenta con la funcionalidad de TPV para la gestión de ventas.

El asistente de configuración permite marcar si vamos a trabajar con la TPV. Si es así nos habilitará todos los parámetros que influyen en su comportamiento.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_44.png)

_Fig. 44 TPV_

### 3.13. Fin del asistente de configuración

El último paso del asistente de configuración nos informa que hemos llegado a su finalización.

![Configuraci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/asistente_configuracion/Screenshot_45.png)

_Fig. 45 Fin_

