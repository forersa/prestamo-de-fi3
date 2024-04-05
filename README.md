Guía de PFM(Desarrollo Frontend Web3) 
Proyecto Final de MásterGuía de PFM (Desarrollo Frontend Web3) __________________________________________________________________________________________________ 
1. Introducción 
2. Requerimientos del Proyecto 
3. Stack Tecnológico y Librerías 
4. Componentes Base de la Aplicación 
5. Componentes de Interacción con el Contrato 
6. Estructura de las diferentes páginas de la aplicación 
7. Manejo de Errores y Excepciones 3 3 4 6 7 7 9 __________________________________________________________________________________________ __________________________________________________________________________________________________ 
1. Introducción En el mundo del desarrollo de aplicaciones web3, librerías como React juegan un papel crucial al facilitar la creación de interfaces de usuario interactivas y dinámicas para interactuar con tecnologías blockchain. Estas interfaces son fundamentales para democratizar el acceso a los servicios y aplicaciones descentralizadas (dApps), permitiendo a los usuarios realizar una variedad de acciones, desde transacciones financieras hasta votaciones descentralizadas, de manera intuitiva y segura a través de aplicaciones web. React, con su modelo de componentes y su enfoque en la creación de interfaces de usuario declarativas, se convierte en una herramienta indispensable para los desarrolladores que buscan construir aplicaciones web3 eficientes y escalables. Al utilizar bibliotecas como Web3.js, ethers.js o viem, React permite conectar estas aplicaciones de manera efectiva con diversas blockchains, facilitando la interacción directa con contratos inteligentes mediante llamadas a funciones, gestión de transacciones y consulta de datos en tiempo real. La integración de React en el desarrollo de aplicaciones web3 no solo busca mejorar la experiencia del usuario, sino que también implica una comprensión profunda de cómo las interfaces pueden influir en la interacción eficiente y segura con las tecnologías blockchain, lo que contribuye a la expansión y adopción generalizada de aplicaciones descentralizadas en la web3. 
2. Requerimientos del Proyecto: ● Inicialización y Gestión del Repositorio: Se debe establecer un repositorio en GitHub específicamente para este proyecto. Este repositorio servirá como el contenedor central donde todo el código fuente, documentación, y recursos relacionados con el proyecto serán almacenados y gestionados. ● Desarrollo de una dApp con React y Vite: El proyecto requiere la creación de una aplicación descentralizada (dApp) desde cero, utilizando React junto con Vite como base para el entorno de desarrollo. Esta dApp debe estar diseñada para interactuar de manera eficiente con el contrato inteligente "PrestamoDeFi", aprovechando las funcionalidades que ofrece el stack tecnológico seleccionado. ● DiseñodeInterfaz con Enfoque Mobile First y 100% Responsivo con Tailwind CSS: La interfaz de usuario de la dApp debe ser intuitiva, atractiva, y desarrollada utilizando Tailwind CSS, priorizando un enfoque "mobile first". Esto significa que el diseño debe ser pensado y optimizado inicialmente para dispositivos móviles, asegurando que la experiencia de usuario sea óptima en pequeñas pantallas. Posteriormente, se adaptará y escalará el diseño para garantizar una visualización y funcionalidad perfectas en dispositivos de mayor tamaño. El objetivo es lograr un diseño pulido, profesional y completamente responsivo, que mejore la experiencia del usuario al interactuar con la aplicación en cualquier dispositivo. ● Implementación de Componentes: Es necesario desarrollar componentes React específicos que faciliten la interacción con cada uno de los métodos proporcionados por el contrato inteligente "PrestamoDeFi". Estos componentes deben estar optimizados para una integración fluida y eficaz con las funcionalidades del contrato. ● Navegación yOrganización de Páginas: Se debe estructurar la aplicación de manera que incorpore diferentes páginas para demostrar y poner en práctica los conocimientos de navegación dentro de una dApp. Esto implica la correcta utilización de rutas y la organización lógica de la interfaz para facilitar el acceso a sus diferentes funcionalidades. ● Gestión deEventos y Retroalimentación al Usuario: Es crucial implementar un manejo adecuado de los eventos dentro de la aplicación, especialmente aquellos relacionados con las interacciones del contrato inteligente. Debe proveerse retroalimentación clara y oportuna al usuario, por ejemplo, mediante la implementación de notificaciones (utilizando react-hot-toast o similar) que informen sobre el estado de las transacciones, como la confirmación de operaciones completadas, errores, y otros mensajes relevantes. ● Despliegue de la Aplicación en Vercel: El proyecto contemplará el despliegue de la dApp en Vercel para asegurar su accesibilidad global y una alta disponibilidad. Se configurará la integración continua con el repositorio de GitHub, permitiendo despliegues automáticos con cada actualización del código. Esto incluirá la configuración de las variables de entorno necesarias para el entorno de producción. La optimización del rendimiento y la seguridad serán prioritarias, siguiendo las recomendaciones de Vercel para garantizar una experiencia de usuario óptima. 

3. Stack Tecnologico y Librerias 
1. React: Biblioteca de JavaScript para construir interfaces de usuario. Será el núcleo para desarrollar los componentes de la aplicación. 
2. React Router: Maneja la navegación entre los distintos componentes de la aplicación sin recargar la página, proporcionando una experiencia de usuario fluida y dinámica. 
3. Vite: Herramienta de construcción que ofrece un entorno de desarrollo rápido para proyectos modernos de JavaScript, React incluido. Vite mejora significativamente el tiempo de inicio del servidor de desarrollo y tiene soporte integrado para TypeScript, JSX, CSS y más.
4. TailwindCSS: Tailwind CSS es un framework de CSS que prioriza la eficiencia en diseño, ofreciendo altas velocidades de desarrollo y rendimiento optimizado. Al utilizar clases reutilizables directamente en HTML, minimiza el CSS redundante y mejora la carga de páginas, haciendo que los proyectos sean más rápidos y ligeros. Su enfoque modular y personalizable permite a los desarrolladores construir interfaces ágilmente sin sacrificar el desempeño. 
5. Viem: Es una interfaz de TypeScript para Ethereum, sirviendo como una alternativa ligera a web3.js y ethers.js, optimizada para el desarrollo de aplicaciones de blockchain. Aunque está diseñada para TypeScript, también es compatible con JavaScript, lo que amplía su accesibilidad. Se destaca por su eficiencia en tamaño y rendimiento, facilitando la interacción segura y componible con la red de Ethereum. 
6. ConnectKit: Un conjunto de componentes React listos para usar que facilitan la conexión de wallets de criptomonedas a tu aplicación web. Ayuda a simplificar el proceso de integración de wallets como Metamask. 
7. Wagmi:Unacolección de React Hooks que facilitan la interacción con Ethereum. Permite conectarse a wallets Ethereum, leer el estado del blockchain y enviar transacciones de forma sencilla. 
8. React Hot Toast: Biblioteca para agregar notificaciones a tu aplicación React. Se puede utilizar para mostrar mensajes de éxito, error o información sobre las interacciones del usuario con el contrato inteligente. 
9. Vercel: Plataforma de despliegue y hosting para aplicaciones web frontend. Ofrece integración continua, despliegues automáticos desde repositorios de Git, y una experiencia de usuario optimizada para aplicaciones React. DOCUMENTACIONYREFERENCIAS:- Referencias: Para empezar el proyecto y realizar la configuración inicial, podeis utilizar como referencia en la guía realizada en este repositorio que es el proyecto que realizamos en el módulo 
10: ● https://github.com/blockmaker-academy/erc20-web3-dapp/blob/main/README.md Para la configuración de rutas para navegación interna de la aplicación, podeis utilizar como referencia la guía realizada en el repositorio “introduccion react 02” del módulo 6: ● https://github.com/blockmaker-academy/introduccion-react-02- Documentación------React: https://es.react.dev/ React-Router: https://reactrouter.com/es/main/router-components/browser-router Vite: https://vitejs.dev/guide/ TailwindCSS: https://tailwindcss.com/docs/guides/vite Viem: https://viem.sh/ React Hot Toast: https://react-hot-toast.com/ Vercel: https://vercel.com/ 

 ATENCION: Debido a una reciente y significativa actualización que modifica sustancialmente la configuración inicial y altera algunos métodos en las librerias de Warmi y Connectkit, optaremos por continuar utilizando la versión anterior junto con su correspondiente documentación de referencia: ● Wagmi:https://0.6.x.wagmi.sh/react/hooks/useContractRead ● ConnectKit: https://web.archive.org/web/20230929142557/https://docs.family.co/connectkit/ge tting-started 4. Componentes base de la Aplicación Podéis añadir todos los componentes adicionales que consideréis necesarios para enriquecer la experiencia de usuario y funcionalidad de la aplicación. No obstante, es imperativo que, como mínimo, la aplicación incluya los siguientes componentes esenciales: 
 1. Componente Página Home: Página de inicio con una visión general de la aplicación, incluye descripción breve y enlaces para las principales funcionalidades. 
 2. Componente ConnectWallet: Facilita la conexión de wallets de Ethereum con integración sencilla mediante ConnectKit. 
 3. Componente Navbar: Proporciona navegación principal dentro de la aplicación. Puede estar incluido dentro del Header, usa React Router para la conexión entre componentes. 
 4. Componente Header: Muestra el logo, información clave, el botón de conexión a la wallet y también se puede integrar el Navbar, esencial para la identificación y navegación. 
 5. Componente Footer: Ofrece información adicional, enlaces de contacto y políticas de uso, ubicado al final de cada página. 
 6. Componente AppLayout: Define la estructura de la aplicación, organizando Header, Footer y contenido principal para una experiencia de usuario coherente. 
 
 Componentes de Interacción con el Contrato El módulo PrestamoDeFi contiene funciones clave para interactuar con el contrato inteligente "PrestamoDeFi". Cada función se encarga de una operación específica, facilitando la interacción entre el usuario y el contrato en la blockchain de Ethereum. A continuación, se detallan componentes a realizar para interactuar con los metodos del contrato. 
 1. Componente AltaPrestamista: Formulario para que los usuarios se registren como prestamistas en el sistema. Incluirá campos para ingresar la información requerida por el contrato inteligente y enviarla mediante una transacción. 
 2. Componente AltaCliente: Similar al componente AltaPrestamista, pero destinado al registro de clientes que deseen solicitar préstamos. 
 3. Componente DepositarGarantia: Permite a los usuarios depositar garantía en el contrato. Deberá manejar el envío de Ether al contrato y actualizar el estado del usuario como corresponda. 
 4. Componente SolicitarPrestamo: Formulario a través del cual los clientes pueden solicitar un nuevo préstamo, especificando el monto y el plazo. 
 5. Componente AprobarPrestamo: Interfaz para que los prestamistas aprueben las solicitudes de préstamos. Podría incluir una lista de solicitudes pendientes y la opción de aprobarlas individualmente. 
 6. Componente ReembolsarPrestamo: Permite a los clientes reembolsar sus préstamos. Este componente deberá manejar las transacciones para transferir los fondos de vuelta al prestamista o al contrato. 
 7. Componente LiquidarGarantia: Interfaz para que los prestamistas liquiden la garantía de un préstamo en caso de no reembolso. 
 8. Componente PrestamosCliente: Una tabla donde los clientes pueden ver el estado de sus préstamos, incluyendo montos, plazos, y estados de aprobación o reembolso.  
 
 Estructura para las diferentes paginas de la aplicacion: Tenéis la libertad de estructurar las páginas de la aplicación según lo veáis conveniente; sin embargo, aqui teneis una sugerencia de estructura que podría serviros como punto de partida. 
 1. Página 
 1: Inicio y Autenticación- Componente Pagina Home: Presenta la aplicación, su propósito y características principales.- Componente ConnectWallet: Permite a los usuarios conectar su wallet de Ethereum. Esta funcionalidad es crucial y debe ser accesible desde la barra de navegación o directamente en la página de inicio para fomentar la interacción inmediata. 
 2. Página 2: Gestión de Usuarios- Componente AltaPrestamista: Permite a los usuarios registrarse como prestamistas en la plataforma.- Componente AltaCliente: Permite a los usuarios registrarse como clientes que buscan préstamos. Esta página actuará como un centro de gestión de usuarios donde los prestamistas y clientes pueden registrarse dependiendo de su rol. La navegación entre el formulario de AltaPrestamista y AltaCliente puede gestionarse mediante sub-rutas o botones interactivos dentro de la misma página para una experiencia de usuario f luida. 
 3. Página 3: Operaciones de Préstamos- Componente SolicitarPrestamo: Donde los clientes pueden solicitar nuevos préstamos.- Componente AprobarPrestamo: Interfaz para que los prestamistas revisen y aprueben solicitudes de préstamo pendientes.- Componente ReembolsarPrestamo: Permite a los clientes reembolsar sus préstamos.- Componente LiquidarGarantia: Facilita a los prestamistas la liquidación de garantías en caso de incumplimiento.- Componente PrestamosCliente: Muestra a los clientes un resumen de sus préstamos actuales, incluyendo estado, monto, y plazos. Esta página se enfoca en todas las operaciones relacionadas con los préstamos. Se podría estructurar utilizando tabs o un menú lateral para cambiar entre las diferentes acciones (solicitar, aprobar, reembolsar, etc.) sin necesidad de cargar nuevas páginas, manteniendo así una experiencia de usuario cohesiva. 
 7. Manejo de Errores y Excepciones Importancia del Manejo Adecuado de Errores y Excepciones ● Evitar Fallos Críticos: Un manejo adecuado de errores asegura que el programa no falle inesperadamente, lo que es crucial en operaciones financieras donde los errores pueden tener consecuencias significativas. ● FeedbackInformativo: Proporciona información clara al usuario sobre qué fue mal y por qué, lo que es esencial para la depuración y el mantenimiento del código. 
 8. Recursos Adicionales: Flowbite: Proporciona componentes gratuitos basados en Tailwind CSS, perfectos para agregar elementos de UI modernos. ● https://flowbite.com/docs/components/buttons TailwindUI: Ofrece una variedad de componentes gratuitos y premium para diseñar interfaces de usuario eficientemente. ● https://tailwindui.com/components Alchemy Sepolia Faucet: Para obtener eth en la red de sepolia. ● https://www.alchemy.com/faucets/ethereum-sepolia EtherScan Sepolia: Herramienta para explorar transacciones, direcciones, tokens y otras actividades en la red de prueba Sepolia de la blockchain de Ethereum. ● https://sepolia.etherscan.io/
