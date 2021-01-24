const Products = [
  {
    id: 1,
    category: "Cpu-gamer",
    nombre: "Cpu Gamer Armada Ryzen",
    imagen: "/assets/images/products/cpugamer.png",
    especificaciones:
      "* Microprocesador Intel Celeron G4930 - 2 Núcleos - 3.1 Ghz - Cache 2Mb - Gráficos Integrados Intel HD 610 * Motherboard H310M series - DDR4 hasta 32GB - USB 3.0 - PCI-E 3.0 - LAN 1Gbps - Salida de Vídeo HDMI / VGA * Memoria RAM 8GB DDR4 2666 * Disco Solido (SSD) 240Gb * Gabinete Kit con Teclado y mouse de regalo o Gabinete Slim según disponibilidad. * PREGUNTAS FRECUENTES * Se puede modificar y agregar cualquier componente para ajustar la configuración a sus necesidades. * Se entrega el equipo armado con las cajas de los productos instalados, las cuales debe conservar para la garantía junto con la factura. * El equipo no posee faja de seguridad, por lo tanto el usuario puede abrirlo sin invalidar la garantía. * -ADVERTENCIA COVID-19- * Frente a la crisis sanitaria que estamos atravesando varios sectores de la cadena de suministros están con problemas para cumplir con sus compromisos de entrega, por lo que existe la posibilidad de que el producto atraviese modificaciones. Ante cualquier consulta o cambio todos los canales de contacto estan disponibles!",
    precio: 4320,
    stock: 1,
  },
  {
    id: 2,
    category: "Hardware",
    nombre: "Procesador Ryzen 5 1600",
    imagen: "/assets/images/products/procesador-r5-1600.png",
    especificaciones:
      "* Micro Procesador * El procesador para computadoras de escritorio de 12 subprocesos y 6 núcleos * Menor consumo de energía de todo el mundo3 con verdadera inteligencia artificial * Mas velocidad a la hora de jugar o editar videos * Con cooler * Posibilidades de Overclock * www.amd.com/es/cpu/amd-ryzen-5-1600",
    precio: 4320,
    stock: 1,
  },
  {
    id: 3,
    category: "Notebook",
    nombre: "Macbook Pro Retina",
    imagen: "/assets/images/products/appleretina.png",
    especificaciones:
      "* PANTALLA * Retina de 13.3 pulgadas (diagonal) retroiluminada por LED con tecnología IPS * resolución nativa de 2560 x 1600 a 227 pixeles por pulgada compatible con millones de colores * Compatible con resoluciones a escala:1680 x 1050 1440 x 900 1024 x 640 * Brillo de 300 nits * Gama de colores estándar (sRGB) * Relación de contraste de 900:1",
    precio: 4320,
    stock: 1,
  },
  {
    id: 4,
    category: "Hardware",
    nombre: "Gigabyte RTX 2060",
    imagen: "/assets/images/products/rtx-2060.png",
    especificaciones:
      "* Materiales: Chasis de acero negro, Plastico ABS cepillado, Acrilico en el panel lateral izquierdo * Soporta motherboards: ATX y Micro ATX * Puertos de Expansión: 7 * Bahías: 2 unidades de disco duro de 3,5″ + 2 unidades SSD 2,5″ * Puerto I/O Frontal: USB 3.0×1, USB 2.0×2, Audio + Mic, Boton Power, Boton Reset, Botón RGB * Coolers Pre instalados: 1x 120 mm posterior * Cantidad máxima para coolers: 6 (2 frontales, 2 superiores, 1 posterior) * Soporte Watercooling: No * Altura máxima CPU Cooler: 157 mm * Largo máximo GPU: 370 mm * Peso: 4.5 kg",
    precio: 4320,
    stock: 1,
  },
  {
    id: 5,
    category: "Gabinetes",
    nombre: "Gabinete Devastator",
    imagen: "/assets/images/products/gc-550.png",
    especificaciones:
      "* Materiales: Chasis de acero negro, Plastico ABS cepillado, Acrilico en el panel lateral izquierdo * Soporta motherboards: ATX y Micro ATX * Puertos de Expansión: 7 * Bahías: 2 unidades de disco duro de 3,5″ + 2 unidades SSD 2,5″ * Puerto I/O Frontal: USB 3.0×1, USB 2.0×2, Audio + Mic, Boton Power, Boton Reset, Botón RGB * Coolers Pre instalados: 1x 120 mm posterior * Cantidad máxima para coolers: 6 (2 frontales, 2 superiores, 1 posterior) * Soporte Watercooling: No * Altura máxima CPU Cooler: 157 mm * Largo máximo GPU: 370 mm * Peso: 4.5 kg",
    precio: 4320,
    stock: 1,
  },
  {
    id: 6,
    category: "Hardware",
    nombre: "Memoria DDR4 3200 MHz",
    imagen: "/assets/images/products/ddr4.png",
    especificaciones:
      "Adaptada a tus necesidades Su capacidad de 8 GB distribuída en módulos de 1 x 8 GB, hace de esta memoria un soporte ideal para trabajos con documentos de alta complejidad, navegación en la web con múltiples pestañas, juegos, contenidos multimedia, entre otros.  Potenciá tu PC Con su tecnología DDR4 mejorará el desempeño de tu equipo, ya que aumentará la fluidez y la velocidad en la transferencia de datos ¡Optimizá al máximo el rendimiento de tu computadora y reducí el consumo energético!  Tu computadora como nueva Esta memoria de formato DIMM, es ideal para tu computadora de escritorio. ¡Instalala y comenzá a disfrutar de un óptimo funcionamiento!  Velocidad para exigentes Si sos fanático de los juegos en línea o usás tu computadora para trabajar con programas o aplicaciones pesadas, esta memoria es para vos. Gracias a su velocidad de 2400 MHz, podrás disfrutar de un alto rendimiento y hacer tus trabajos de manera rápida y efectiva.",
    precio: 4320,
    stock: 1,
  },
  {
    id: 7,
    category: "Accesories",
    nombre: "Auriculares Gamer Razer Kraken Razer Green",
    imagen: "/assets/images/products/auris.png",
    especificaciones:
      "Adaptada a tus necesidades Su capacidad de 8 GB distribuída en módulos de 1 x 8 GB, hace de esta memoria un soporte ideal para trabajos con documentos de alta complejidad, navegación en la web con múltiples pestañas, juegos, contenidos multimedia, entre otros.  Potenciá tu PC Con su tecnología DDR4 mejorará el desempeño de tu equipo, ya que aumentará la fluidez y la velocidad en la transferencia de datos ¡Optimizá al máximo el rendimiento de tu computadora y reducí el consumo energético!  Tu computadora como nueva Esta memoria de formato DIMM, es ideal para tu computadora de escritorio. ¡Instalala y comenzá a disfrutar de un óptimo funcionamiento!  Velocidad para exigentes Si sos fanático de los juegos en línea o usás tu computadora para trabajar con programas o aplicaciones pesadas, esta memoria es para vos. Gracias a su velocidad de 2400 MHz, podrás disfrutar de un alto rendimiento y hacer tus trabajos de manera rápida y efectiva.",
    precio: 4320,
    stock: 1,
  },
  {
    id: 8,
    category: "Accesories",
    nombre: "Teclado Redragon Kumara K552",
    imagen: "/assets/images/products/teclado.png",
    especificaciones:
      "La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.Distinción a todo color Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.Adiós a los líquidos molestos ¿Querés tomar café mientras leés un mail y no lo hacés por miedo a ensuciarlo? ¿O cualquier bebida cerca de él no te parece una buena idea? Su resistencia a salpicaduras de diversos líquidos lo vuelven un aparato prácticamente irrompible. ¡Que las preocupaciones sean cosas del pasado! ¡Disfrutá de la bebida que más te guste sin culpas!",
    precio: 4320,
    stock: 1,
  },
  {
    id: 9,
    category: "Accesories",
    nombre: "Gabinete Masterbox Mb520 Rgb Cooler Master",
    imagen: "/assets/images/products/teclado.png",
    especificaciones:
      "ESPECIFICACIONES Marca: Cooler Master Modelo: MB520 RGB P/N: MCB-B520-KGNN-R - Serie: MasterBox - Panel frontal: DarkMirror - Ventiladores LED RGB y control de iluminación- Entradas de rendimiento- Panel lateral de vidrio templado de borde a borde- Soporte de panel lateral de vidrio templado de borde a borde para un total de 6 ventiladores y soporte de tarjeta gráfica de enfriamiento de agua- Bandejas de almacenamiento de hasta 410 mm y cubierta PSU de longitud completa- Excelente rendimiento térmico: Flujo de aire optimizado debido a las grandes tomas a cada lado del panel frontal. Ventilación adicional en el panel superior agrega soporte térmico.- El espacioso interior se adapta a todas las placas base estándar para sus necesidades de juego. (ATX, Micro-ATX, Mini-ITX)",
    precio: 4320,
    stock: 1,
  },
];

export default Products;
