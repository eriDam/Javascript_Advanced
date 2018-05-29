---
description: Cómo instalar Ahora ERP en Cliente
---

# Instalación

### Prerrequisitos

### **bold**

 Asegúrese de que ha leído la página de  [prerrequisitos](https://ahora-wiki.gitbook.io/erp/~/drafts/-LDck_4LnF0E6aCJ9jhq/primary/instalacion/untitled) para asegurarse de que su equipo cumple con los requisitos mínimos.

### Instalación

[Enlace al manual para su descarga](http://videos.ahora.es/Manual/1097)

### 1. Introducción

Para proceder a la instalación del programa ERP Ahora Express on-site, se facilita un paquete todo incluido en un ejecutable con extensión .exe, el objetivo de este manual es explicar a través de  capturas el proceso de despliegue del producto ERP Ahora Express.

### 2. Preparación del equipo

El objetivo es que este ejecutable, sea el que se inicie en el cliente por primera vez.  Por ello, si queremos habilitar todas las características que ofrece el programa, tenemos que tener en cuenta que el ordenador desde dónde se ejecute tenga instalado un IIS con la versión de ASP.NET 3.5. \(Este IIS estará instalado en todos los servidores que tengan SQL Server, ya que es requisito indispensable para su instalación\).

#### 2.1 Instalación y configuración del IIS

Para configurar el IIS seguiremos los pasos que indica el siguiente manual que se encuentra en la WIKI:

 [http://wiki.ahora.es/Instalacion-del-IIS-Internet-Information-Services.ashx](http://wiki.ahora.es/Instalacion-del-IIS-Internet-Information-Services.ashx)

#### 2.2 Instalación de SQL Server

Además, ha de tener acceso a un servidor con SQL Server 2008 SP2 o superior, que puede estar instalado en el mismo servidor o en otro dentro de la misma red.

Para instalar SQL Server se seguirán los pasos del siguiente manual:

 [http://wiki.ahora.es/Instalacion-de-SQL-Server-2008.ashx?HL=sql\#C\_Instalación\_del\_Service\_Pack\_B\_19](http://wiki.ahora.es/Instalacion-de-SQL-Server-2008.ashx?HL=sql%23C_Instalaci%C3%B3n_del_Service_Pack_B_19)

#### 2.3 Desinstalación de AHORA ERP

Siempre **se recomienda** desinstalar de forma manual el programa ya que es posible que en el equipo en el que se va a proceder a realizar la instalación, se encuentre instalada una versión anterior del ERP,

en este caso, deberemos desinstalarla.

Para ello, accedemos al **Panel de control -&gt; Programas - &gt; Programas y características** y lo desinstalamos.

![Desinstalar](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_15.png)

_Fig. 1 Desinstalar Ahora Freeware ERP_

La aplicación AHORA ERP, incluye la herramienta que se ocupa de desinstalar otras versiones del programa, siempre que este, esté cerrado, pero como hemos indicado en el párrafo anterior, lo**óptimo** es **realizar la desinstalación de forma manual.**

#### 2.4 Instalación modulos Crystal Reports

Antes de proceder a la instalación del ERP o una vez finalizada esta, es necesario instalar los módulos de Crystal Reports que se utilizan para la visualización e impresión de los informes/reports  en la aplicación.

Para ello, en el pack descargado de la versión encontraremos el MSI que hay que instalar **en cada máquina** donde vaya a usarse el ERP,  que se llama _Modulos Crystal Reports 11R2\_SP6\_3.msi_.

La instalación es rápida, pulsaremos **siguiente** en todas las pantallas del asistente, cuando lleguemos a la tercera pantalla, NO se debe indicar la ruta de instalación, simplemente pulsaremos **siguiente** y **finalizar**.

![](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_22.png)

_Fig.1.2 Ejecutable modulos_

### 3. Instalación

La instalación se realiza a través de la ejecución del archivo **.exe** que se le ha suministrado.

![Ejecutable](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_16.png)

_Fig. 2 Ejecutable .exe Ahora Freeware ERP_

Es indispensable tener permisos de administrador para la instalación. Esto es debido a que el programa registra módulos y librerías en las carpetas de sistema, también crea entradas en el registro.

Una vez ejecutado el archivo de instalación, nos aparecerá la siguiente ventana.

![Permisos](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_1.png)

_Fig. 3 Solicitud de permisos Windows_

#### 3.1 Asistente de instalación

Escogemos la opción _**Ejecutar de todas formas**_ y nos aparecerá el asistente de instalación del ERP con la versión que hayamos escogido.

![Asistente instalaci&#xF3;n Ahora Express](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_2.png)

_Fig. 4 Asistente de instalación de AhoraERP 4.4.1700_

#### 3.2 Componentes de la instalación

Cabe destacar que **a partir de la versión 4.4.1700** visualizaremos nuevos componentes en la instalación, **no debemos marcar el componente TechFUN** dado que necesita de un proceso interno para su ejecución y parametrización y todavía es una **versión ALPHA no liberada**, no obstante este nuevo componente, no afectará en nada en la versión 4.4.1700.

![Componentes instalacion Ahora Express](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_3.png)

_Fig. 5 Componentes de la instalación_

A continuación, se describen los componentes del paquete de instalación:

* **Principal:** Instala la herramienta Ahora ERP.
* **Administrador:** Instala el componente de configuración de administrador \(Admon\).
* **Actualizador:** Instala la utilidad encargada de actualizar la base de datos
* **Replicador:** Instala la utilidad encargada de realizar una copia de la configuración de la base de datos de Ahora.

Avanzaremos con el botón _**siguiente**_ del asistente y pasaremos a la próxima ventana donde escogeremos la ruta de instalación en nuestro equipo.

Haciendo click en el botón examinar podremos establecer otra ruta para la instalación, en cualquier caso, por defecto viene preestablecida _**C:\Program Files \(x86\)\AHORA Freeware ERP**_ según observamos en la captura a continuación.

![Ruta de instalacion](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_4.png)

_Fig. 6 Ruta de instalación_

Pulsamos el botón instalar, se iniciará la instalación del ERP, esperamos a que esta finalice y una vez completada la instalación, cerraremos.

![Completada la instalaci&#xF3;n](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_5.png)

_Fig. 7 Finalización de la instalación_

* 
#### 3.3 Finalización de la instalación

Una vez finalizada la instalación, el programa habrá realizado las siguientes acciones:

* Instalar el programa en la ruta que viene por defecto:

 - C:\Program Files\AHORA Freeware ERP\    ó  C:\Program Files \(x86\)\AHORA Freeware ERP\ \(_si se trata de una máquina de 64 bits\)_

* Crear la estructura de carpetas en la ruta que viene por defecto.                          
* Registrar los componentes necesarios para la ejecución del programa \(ejecutables, librerías, componentes...\).
* Registrar los componentes necesarios para la ejecución de los listados \(componentes Bussines Objects, Crystal Reports...\).
* Creará el icono de acceso directo a la aplicación en el escritorio.
* Añadirá la entrada “AHORA Freeware ERP” en la lista de programas del sistema operativo.

Encontraremos el icono en el escritorio de Windows o podemos acceder a el a través del menú de inicio -&gt; programas.

### 4. Comenzar

Una vez instalado el **ERP**, para poder empezar a trabajar, se tendrán que seguir los siguientes pasos:

* Restaurar base de datos
* Crear usuario
* Establecer conexión

#### 4.1 Restaurar Base de datos

Se debe restaurar la base de datos vacía que se ha descargado en el pack de instalación junto con el _\*.msi_ del **Ahora ERP**.

La versión de la base de datos debe coincidir con la versión del programa **Ahora ERP**.

Si necesitamos saber la versión de la base de datos, se tendrá que ejecutar la consulta “zversion” y para saber la versión del **Ahora ERP** que se encuentra instalada ejecutaremos la aplicación y nos fijaremos en la parte superior izquierda de la ventana.

#### 4.2 Crear usuario

Para iniciar sesión en el programa, se tendrá que crear el usuario ahora en SQL server y asignárselo a la base de datos correspondiente.

El nombre de usuario ha de ser **ahora** ya que en otro caso fallará el inicio de sesión.

![usuario](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_28.png)

_Fig. 8.1 Creación de usuario_

Para dar de alta nuevos usuarios se podrá realizar mas adelante utilizando la herramienta de administración \(**ADMON**\).

En la página web [http://videos.ahora.es/videos](http://videos.ahora.es/videos) podemos encontrar mas información.

#### 4.3 Iniciar la aplicación

Al iniciar el ERP haciendo doble click sobre el icono del programa, se nos abrirá una pantalla donde se deben indicar los datos de acceso. Si ya tenemos conexiones creadas, las recordará. En caso de ser la primera instalación, aparecerá vacío.

![Ventana de inicio del ERP](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/inicio_sin_conex.png)

_Fig. 8 Ventana de inicio del ERP_

Los datos de acceso son los siguientes:

* **Usuario:** Debe ser un inicio de sesión de SQL Server y tener acceso a la Base de datos del ERP.

El inicio de sesión debe estar vinculado con un empleado dado de alta en la base de datos \(se vincula con el campo login. Esta acción se realiza desde AHORA Admon\).

* **Contraseña:** Es la clave de SQL server \(del inicio de sesión\).  
* **Conexión**: Es el acceso a la base de datos.

### 5. Configurar conexión

La conexión a la base de datos la podemos configurar de dos formas diferentes.

Se configura de dos formas diferentes:

1.- Desde el icono que tenemos en la pantalla de inicio del ERP.

![Ventana de inicio del ERP](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_7_.png)

_Fig. 9 Conexión desde pantalla de inicio_

En esta ventana, configuraremos los siguientes datos de conexión, necesarios para el arranque del programa:

* **Descripción**: Nombre descriptivo de la conexión.
* **Nombre de la instancia donde está instalado el servidor SQL.**
* **Base de datos:** Nombre de la base de datos donde están alojados los datos del cliente.

 2.- Desde la aplicación AHORA Conexión \(ejecutable .exe que se ubica en el directorio de instalación de la aplicación\).

![Ventana de inicio del ERP](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_6_.png)

_Fig. 10 Conexión desde ‘AhoraConexión.exe’_

#### Ahora Conexión

Cuando ejecutemos **AhoraConexion.exe,** configuraremos los mismos datos de conexión, que en la opción 1.

Podemos ver un ejemplo a continuación.

![Conexi&#xF3;n desde &#x2018;AhoraConexi&#xF3;n.exe&#x2019; II](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_19.png)

_Fig. 11 Conexión desde ‘AhoraConexión.exe’ II_

El siguiente paso, será probar la conexión, una ventana emergente, nos solicitará el usuario administrador y la contraseña.

![Conexi&#xF3;n desde &#x2018;AhoraConexi&#xF3;n.exe&#x2019; III-](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_20.png)

_Fig. 12 Conexión desde ‘AhoraConexión.exe’ III_

Si la conexión se ha creado correctamente, nos saldrá un mensaje informando del éxito al crear la conexión, aceptamos y guardamos la conexión creada.

![Conexi&#xF3;n desde &#x2018;AhoraConexi&#xF3;n.exe&#x2019; IV](http://funcionalidad.ahora.es/manuales/Imagenes/html/instalacionErp_4_4_1700/Screenshot_21.png)

_Fig. 13 Conexión desde ‘AhoraConexión.exe’ IV_

Una vez finalizado este paso nos loguearemos en la pantalla de inicio y podremos empezar a trabajar. __

_Fecha de la última actualización: Martes 25 de abril de 2018_

