import { modalUnstyledClasses } from "@mui/material";

const fakeData = [
  {
    name: "Disco sólido interno Kingston",
    description:
      "Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional. Al estar compuesta por una memoria flash es silenciosa y posee pocas probabilidades de tener fallas",
    rating: [5, 5, 1, 5],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_804287-MLA49587128302_042022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_610435-MLA49587025826_042022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_629244-MLA51279403456_082022-F.webp",
    ],
    price: 4.594,
    category: "Discos Rígidos",
    marca: "Kingston",
    cantidad: 100,
  },

  {
    name: "Disco sólido interno Gigabyte GP",
    description:
      "Más velocidad a tu alcance. Este producto posee una interfaz SATA III que se encarga de transferir datos con la placa madre de tu computadora. Es de gran importancia y con su velocidad de envío de información mejora el rendimiento. Vas a poder cargar todo tipo de archivos en tu PC con rapidez.",
    rating: [5, 2],
    Reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_707852-MLA40177545670_122019-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_973461-MLA40178190200_122019-O.webp",
    ],
    price: 3.499,
    category: "Disco Rígido",
    marca: "Gigabyte",
    cantidad: 10,
  },

  {
    name: "Auriculares gamer inalámbricos HyperX Cloud Flight",
    description:
      "Ideado para los gamers más exigentes, el HyperX Cloud Flight tiene todo lo que un jugador busca. Su conectividad inalámbrica permite moverte de un lugar a otro sin cables. A su vez, su batería de larga duración te dará horas interminables de sonidos envolventes en tus partidas. Sus orejeras son sinónimo de comodidad, ya que pueden rotar en un ángulo de 90 grados y reposar de forma suave en tu cuello. Y como si esto fuera poco, en estas vas a controlar los efectos de luz LED, silenciar o encender el micrófono con cancelación de ruido y regular el volumen.",
    rating: [5],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_675916-MLA40762447172_022020-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_655577-MLA40762447178_022020-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_750991-MLA40762174384_022020-F.webp",
    ],
    price: 18.899,
    category: "Auriculares",
    marca: "HyperX",
    cantidad: 50,
  },

  {
    name: "Palanca de cambios Driving Force",
    description:
      "La palanca de cambio para los volantes de carreras G29/G920 Driving Force™",
    rating: [3],
    reviews: [],
    image: [
      "https://logitechar.vteximg.com.br/arquivos/ids/156585-450-450/941-000119_1.png?v=636973475855830000",
      "https://logitechar.vteximg.com.br/arquivos/ids/156733-450-450/941-000119_2.png?v=636973480568200000",
      "https://logitechar.vteximg.com.br/arquivos/ids/156866-450-450/941-000119_3.png?v=636973483819530000",
    ],
    price: 20.188,
    category: "Audifono",
    marca: "Logitech",
    cantidad: 80,
  },
  {
    name: "Mouse inalámbricos Logitech G PRO X SUPERLIGHT GAMING magenta",
    description:
      "El nuevo favorito de los mejores profesionales de esports pesa menos de 63 gramos y se desliza sin apenas fricción. PRO X SUPERLIGHT hace gala de nuestra tecnología de diseño ZERØ OPOSICIÓN, nuestro propósito de eliminar obstáculos y crear una conexión lo más pura posible entre el jugador y el juego",
    rating: [4],
    reviews: [],
    image: [
      "https://logitechar.vteximg.com.br/arquivos/ids/158597-450-450/PRO-X-SUPERLIGHT-MAGENTA_1000-px-x-1000-px_Mesa-de-trabajo-1-copia-2.png?v=637814056067130000",
      "https://logitechar.vteximg.com.br/arquivos/ids/158600-450-450/PRO-X-SUPERLIGHT-MAGENTA_1000-px-x-1000-px_Mesa-de-trabajo-1-copia-5.png?v=637814056669470000",
      "https://logitechar.vteximg.com.br/arquivos/ids/158602-450-450/PRO-X-SUPERLIGHT-MAGENTA_1000-px-x-1000-px_Mesa-de-trabajo-1-copia-7.png?v=637814057008570000",
    ],
    price: 21.999,
    category: "Mouse",
    marca: "Logitech",
    cantidad: 80,
  },
  {
    name: "Notebook Acer Aspire 5 A515-54 plateada 15.6",
    description:
      "Con la línea Aspire 5 de Acer podrás experimentar un nuevo nivel de diseño y rendimiento, tanto para el uso cotidiano de la notebook, como para el uso profesional.Su procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_725908-MLA50956784010_082022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_948875-MLA50956684625_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_928427-MLA50956659886_082022-O.webp",
    ],
    price: 145.999,
    category: "Notebook",
    marca: "Acer",
    cantidad: 80,
  },
  {
    name: "Notebook Lenovo Ideapad 3 14iil05 ",
    description:
      "Lenovo IdeaPad 3 81WD010UUS funciona con Intel Core i3 1005G1 de 10.ª generación. El procesador de doble núcleo es un procesador de gama baja para portátiles delgados y ligeros. En el extremo gráfico del juego, Intel UHD Graphics G1 es muy capaz de manejar la mayoría de ellos; sin embargo, cuando se trata de cargas de trabajo mucho más pesadas, como la representación 3D, los gráficos UHD G1 no son una buena solución. Aprovecha más tu entretenimiento con Dolby Audio y disfruta de un sonido nítido tanto si estás viendo un video, transmitiendo música o chateando por video.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_975834-MLA51015201380_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_871829-MLA51015292076_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_793533-MLA51015061959_082022-O.webp",
    ],
    price: 89.999,
    category: "Notebook",
    marca: "Lenovo",
    cantidad: 80,
  },
  {
    name: "Teclado gamer HyperX Alloy Origins ",
    description:
      "Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_944449-MLA50305077491_062022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_849227-MLA50305077493_062022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_841356-MLA50305077494_062022-O.webp",
    ],
    price: 8.89,
    category: "Teclado",
    marca: "HyperX",
    cantidad: 80,
  },
  {
    name: "Teclado inalámbrico Logitech K400",
    description:
      "Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_614187-MLA32722390623_102019-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_876979-MLA32722390626_102019-F.webp",
    ],
    price: 4.899,
    category: "Teclado",
    marca: "Logitech",
    cantidad: 80,
  },
  {
    name: "Memoria RAM Fury Beast DDR4",
    description:
      "Con su tecnología DDR4, mejorará el desempeño de tu equipo, ya que aumentará la fluidez y la velocidad en la transferencia de datos ¡Optimizá al máximo el rendimiento de tu computadora y reducí el consumo energético!",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_908770-MLA48636149604_122021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_737074-MLA48636203569_122021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_967310-MLA48636298118_122021-O.webp",
    ],
    price: 7.899,
    category: "Memoria",
    marca: "Fury",
    cantidad: 80,
  },
  {
    name: "Memoria RAM color verde 8GB 1 Crucial CB8GS2666",
    description:
      "Con una actualización de memoria es una de las formas más rápidas, fáciles y económicas de mejorar de manera inmediata el rendimiento de tu computadora. Ya sea para un ordenador portátil, de escritorio o una estación de trabajo que funciona lento y relentiza tus actividades, instalar más memoria tomará solo unos minutos y te brindará soluciones inmediatas y duraderas a corto, mediano y largo plazo. Acelerá y extendé la vida útil del sistema y aprovechá la capacidad de respuesta que te da para trabajar de manera simple y confortable. No lo dudes más, la memoria Crucial es una de las formas más accesibles para aumentar de manera fácil la capacidad multitarea de tu computadora.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_996650-MLA49063608069_022022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_816027-MLA48991748090_022022-F.webp",
    ],
    price: 6.399,
    category: "Memoria",
    marca: "Crucial",
    cantidad: 80,
  },
  {
    name: "Mouse Pad gamer Noga ST-G12 Stormer ",
    description:
      "Es tan fácil deslizar el mouse. Con tu Noga ST-G12 podrás llenar la pantalla de tu ordenador de clicks. Su elaborada superficie le dará precisión y comodidad a tus movimientos.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_778681-MLA46769613582_072021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_835909-MLA46769543686_072021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_998307-MLA46769543705_072021-O.webp",
    ],
    price: 2.3,
    category: "Noga",
    marca: "Pad",
    cantidad: 80,
  },
  {
    name: "Mouse Pad gamer HP MP9040 ",
    description:
      "Diseñada con materiales de calidad, tu almohadilla de caucho te dará una agradable sensación al tacto y evitará un gran desgaste en la base de tu mouse. Este tipo de opción es ideal para gamers ya que reparte la presión de manera simétrica, conservando un nivel de precisión adecuado.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_829026-MLA41162250935_032020-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_792281-MLA41162597419_032020-F.webp",
    ],
    price: 2.999,
    category: "HP",
    marca: "Pad",
    cantidad: 80,
  },
  {
    name: "Disco sólido interno Kingston",
    description:
      "Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional. Al estar compuesta por una memoria flash es silenciosa y posee pocas probabilidades de tener fallas.",
    rating: [5, 5, 1, 5],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_804287-MLA49587128302_042022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_610435-MLA49587025826_042022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_629244-MLA51279403456_082022-F.webp",
    ],
    price: 4.594,
    category: "Discos Rígidos",
    marca: "Kingston",
    cantidad: 100,
  },

  {
    name: "Disco sólido interno Gigabyte GP",
    description:
      "Más velocidad a tu alcance. Este producto posee una interfaz SATA III que se encarga de transferir datos con la placa madre de tu computadora. Es de gran importancia y con su velocidad de envío de información mejora el rendimiento. Vas a poder cargar todo tipo de archivos en tu PC con rapidez.",
    rating: [5, 2],
    Reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_707852-MLA40177545670_122019-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_973461-MLA40178190200_122019-O.webp",
    ],
    price: 3.499,
    category: "Disco Rígido",
    marca: "Gigabyte",
    cantidad: 10,
  },

  {
    name: "Auriculares gamer inalámbricos HyperX Cloud Flight",
    description:
      "Ideado para los gamers más exigentes, el HyperX Cloud Flight tiene todo lo que un jugador busca. Su conectividad inalámbrica permite moverte de un lugar a otro sin cables. A su vez, su batería de larga duración te dará horas interminables de sonidos envolventes en tus partidas. Sus orejeras son sinónimo de comodidad, ya que pueden rotar en un ángulo de 90 grados y reposar de forma suave en tu cuello. Y como si esto fuera poco, en estas vas a controlar los efectos de luz LED, silenciar o encender el micrófono con cancelación de ruido y regular el volumen.",
    rating: [5],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_675916-MLA40762447172_022020-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_655577-MLA40762447178_022020-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_750991-MLA40762174384_022020-F.webp",
    ],
    price: 18.899,
    category: "Auriculares",
    marca: "HyperX",
    cantidad: 50,
  },

  {
    name: "Palanca de cambios Driving Force",
    description:
      "La palanca de cambio para los volantes de carreras G29/G920 Driving Force™",
    rating: [3],
    reviews: [],
    image: [
      "https://logitechar.vteximg.com.br/arquivos/ids/156585-450-450/941-000119_1.png?v=636973475855830000",
      "https://logitechar.vteximg.com.br/arquivos/ids/156733-450-450/941-000119_2.png?v=636973480568200000",
      "https://logitechar.vteximg.com.br/arquivos/ids/156866-450-450/941-000119_3.png?v=636973483819530000",
    ],
    price: 20.188,
    category: "Audifono",
    marca: "Logitech",
    cantidad: 80,
  },
  {
    name: "Mouse inalámbricos Logitech G PRO X SUPERLIGHT GAMING magenta",
    description:
      "El nuevo favorito de los mejores profesionales de esports pesa menos de 63 gramos y se desliza sin apenas fricción. PRO X SUPERLIGHT hace gala de nuestra tecnología de diseño ZERØ OPOSICIÓN, nuestro propósito de eliminar obstáculos y crear una conexión lo más pura posible entre el jugador y el juego.",
    rating: [4],
    reviews: [],
    image: [
      "https://logitechar.vteximg.com.br/arquivos/ids/158597-450-450/PRO-X-SUPERLIGHT-MAGENTA_1000-px-x-1000-px_Mesa-de-trabajo-1-copia-2.png?v=637814056067130000",
      "https://logitechar.vteximg.com.br/arquivos/ids/158600-450-450/PRO-X-SUPERLIGHT-MAGENTA_1000-px-x-1000-px_Mesa-de-trabajo-1-copia-5.png?v=637814056669470000",
      "https://logitechar.vteximg.com.br/arquivos/ids/158602-450-450/PRO-X-SUPERLIGHT-MAGENTA_1000-px-x-1000-px_Mesa-de-trabajo-1-copia-7.png?v=637814057008570000",
    ],
    price: 21.999,
    category: "Mouse",
    marca: "Logitech",
    cantidad: 80,
  },
  {
    name: "Notebook Acer Aspire 5 A515-54 plateada 15.6",
    description:
      "Con la línea Aspire 5 de Acer podrás experimentar un nuevo nivel de diseño y rendimiento, tanto para el uso cotidiano de la notebook, como para el uso profesional.Su procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_725908-MLA50956784010_082022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_948875-MLA50956684625_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_928427-MLA50956659886_082022-O.webp",
    ],
    price: 145.999,
    category: "Notebook",
    marca: "Acer",
    cantidad: 80,
  },
  {
    name: "Notebook Lenovo Ideapad 3 14iil05 ",
    description:
      "Lenovo IdeaPad 3 81WD010UUS funciona con Intel Core i3 1005G1 de 10.ª generación. El procesador de doble núcleo es un procesador de gama baja para portátiles delgados y ligeros. En el extremo gráfico del juego, Intel UHD Graphics G1 es muy capaz de manejar la mayoría de ellos; sin embargo, cuando se trata de cargas de trabajo mucho más pesadas, como la representación 3D, los gráficos UHD G1 no son una buena solución. Aprovecha más tu entretenimiento con Dolby Audio y disfruta de un sonido nítido tanto si estás viendo un video, transmitiendo música o chateando por video.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_975834-MLA51015201380_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_871829-MLA51015292076_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_793533-MLA51015061959_082022-O.webp",
    ],
    price: 89.999,
    category: "Notebook",
    marca: "Lenovo",
    cantidad: 80,
  },
  {
    name: "Teclado gamer HyperX Alloy Origins ",
    description:
      "Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_944449-MLA50305077491_062022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_849227-MLA50305077493_062022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_841356-MLA50305077494_062022-O.webp",
    ],
    price: 8.89,
    category: "Teclado",
    marca: "HyperX",
    cantidad: 80,
  },
  {
    name: "Teclado inalámbrico Logitech K400",
    description:
      "Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_614187-MLA32722390623_102019-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_876979-MLA32722390626_102019-F.webp",
    ],
    price: 4.899,
    category: "Teclado",
    marca: "Logitech",
    cantidad: 80,
  },
  {
    name: "Memoria RAM Fury Beast DDR4",
    description:
      "Con su tecnología DDR4, mejorará el desempeño de tu equipo, ya que aumentará la fluidez y la velocidad en la transferencia de datos ¡Optimizá al máximo el rendimiento de tu computadora y reducí el consumo energético!",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_908770-MLA48636149604_122021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_737074-MLA48636203569_122021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_967310-MLA48636298118_122021-O.webp",
    ],
    price: 7.899,
    category: "Memoria",
    marca: "Fury",
    cantidad: 80,
  },
  {
    name: "Memoria RAM color verde 8GB 1 Crucial CB8GS2666",
    description:
      "Con una actualización de memoria es una de las formas más rápidas, fáciles y económicas de mejorar de manera inmediata el rendimiento de tu computadora. Ya sea para un ordenador portátil, de escritorio o una estación de trabajo que funciona lento y relentiza tus actividades, instalar más memoria tomará solo unos minutos y te brindará soluciones inmediatas y duraderas a corto, mediano y largo plazo. Acelerá y extendé la vida útil del sistema y aprovechá la capacidad de respuesta que te da para trabajar de manera simple y confortable. No lo dudes más, la memoria Crucial es una de las formas más accesibles para aumentar de manera fácil la capacidad multitarea de tu computadora.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_996650-MLA49063608069_022022-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_816027-MLA48991748090_022022-F.webp",
    ],
    price: 6.399,
    category: "Memoria",
    marca: "Crucial",
    cantidad: 80,
  },
  {
    name: "Mouse Pad gamer Noga ST-G12 Stormer ",
    description:
      "Es tan fácil deslizar el mouse. Con tu Noga ST-G12 podrás llenar la pantalla de tu ordenador de clicks. Su elaborada superficie le dará precisión y comodidad a tus movimientos.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_778681-MLA46769613582_072021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_835909-MLA46769543686_072021-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_998307-MLA46769543705_072021-O.webp",
    ],
    price: 2.3,
    category: "Noga",
    marca: "Pad",
    cantidad: 80,
  },
  {
    name: "Mouse Pad gamer HP MP9040 ",
    description:
      "Diseñada con materiales de calidad, tu almohadilla de caucho te dará una agradable sensación al tacto y evitará un gran desgaste en la base de tu mouse. Este tipo de opción es ideal para gamers ya que reparte la presión de manera simétrica, conservando un nivel de precisión adecuado.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_829026-MLA41162250935_032020-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_792281-MLA41162597419_032020-F.webp",
    ],
    price: 2.999,
    category: "HP",
    marca: "Pad",
    cantidad: 80,
  },
  {
    name: "Microfono HyperX SoloCast condensador cardioide negro",
    description:
      "Con el micrófono HyperX descubrirás una nueva forma de captar y emitir audios.Fiel reflejo de la realidad. Ideal para varias actividades. Te brindará un sonido de calidad y conseguirás la nitidez de las voces.",
    rating: [4],
    reviews: [],
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_743737-MLA51046135070_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_697098-MLA51046068343_082022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_964872-MLA51046034408_082022-O.webp",
    ],
    price: 10.699,
    category: "HyperX",
    marca: "Micrófonos",
    cantidad: 80,
  },
  {
    name: "Microfono BLUE ICEPOP",
    description:
      "Maximiza el audio de tu juego y la claridad de tus comunicaciones. Blue Icepop, un diseño de la renombrada marca Blue Microphones, es un micrófono premium pensado para audífonos con micrófono Pro para juegos. La legendaria calidad de audio de Blue unida al desempeño de juego de Logitech G.",
    rating: [4],
    reviews: [],
    image: [
      "https://logitechar.vteximg.com.br/arquivos/ids/158896-450-450/Low_Resolution_JPG-Blue-Ice-Pop-MIC-3QTR-OUT.png?v=637963650822330000",
      "https://logitechar.vteximg.com.br/arquivos/ids/158899-450-450/Low_Resolution_JPG-Blue-Ice-Pop-MIC-IN-USE-POSITION.png?v=637963651224000000",
      "https://logitechar.vteximg.com.br/arquivos/ids/158897-450-450/Low_Resolution_JPG-Blue-Ice-Pop-MIC-BACK.png?v=637963650974600000",
    ],
    price: 13.599,
    category: "Logitech",
    marca: "Micrófonos",
    cantidad: 80,
  },
  {
    name: "Parlante 5.1 SURROUNDSOUND Z607",
    description:
      " Con una potencia de pico de 160 vatios, este parlante 5.1 llena tu espacio con audio de alta calidad que suena increíble. Disfruta de auténtico sonido envolvente desde cualquier fuente: televisor, teléfono, ordenador, juegos 1 y más. Incluso puedes reProducir contenido de audio directamente de tarjetas SD, unidades USB o radio FM.",
    rating: [4],
    reviews: [],
    image: [
      "https://logitechar.vteximg.com.br/arquivos/ids/156552-450-450/980-001322_1.png?v=636973475359400000",
      "https://logitechar.vteximg.com.br/arquivos/ids/156701-450-450/980-001322_2.png?v=636973479912900000",
      "https://logitechar.vteximg.com.br/arquivos/ids/156836-450-450/980-001322_3.png?v=636973482920600000",
    ],
    price: 27.599,
    category: "Logitech",
    marca: "Parlante",
    cantidad: 80,
  },
];

export default fakeData;
