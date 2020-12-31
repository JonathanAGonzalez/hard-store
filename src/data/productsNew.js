const Products = [
  {
    id: 1,
    category: "cpu-gamer",
    nombre: "Cpu Gamer Armada Ryzen 5",
    imagen: "/assets/images/products/cpugamer.png",
    description: [
      "Memoria Ddr4 16 gb",
      "Gabinete GC-550",
      "Disco Solido SSD 250GB",
      "Procesador Ryzen 5 1600",
      "Fuente W600",
    ],
    especificaciones: [
      "Microprocesador Intel Celeron G4930 - 2 Núcleos - 3.1 Ghz - Cache 2Mb - Gráficos Integrados Intel HD 610",
      "Motherboard H310M series - DDR4 hasta 32GB - USB 3.0 - PCI-E 3.0 - LAN 1Gbps - Salida de Vídeo HDMI / VGA",
      "Memoria RAM 8GB DDR4 2666",
      "Disco Solido (SSD) 240Gb",
      "Gabinete Kit con Teclado y mouse de regalo o Gabinete Slim según disponibilidad.",
      "PREGUNTAS FRECUENTES",
      "Se puede modificar y agregar cualquier componente para ajustar la configuración a sus necesidades.",
      "Se entrega el equipo armado con las cajas de los productos instalados, las cuales debe conservar para la garantía junto con la factura.",
      "El equipo no posee faja de seguridad, por lo tanto el usuario puede abrirlo sin invalidar la garantía.",
      "-ADVERTENCIA COVID-19-",
      "Frente a la crisis sanitaria que estamos atravesando varios sectores de la cadena de suministros están con problemas para cumplir con sus compromisos de entrega, por lo que existe la posibilidad de que el producto atraviese modificaciones. Ante cualquier consulta o cambio todos los canales de contacto estan disponibles!",
    ],
    precio: 4320,
  },
  {
    id: 2,
    category: "accesories",
    nombre: "Razer DEATHADDER V2",
    imagen: "/assets/images/products/deathadder.png",
    description: [
      "Sensor óptico Focus+",
      "Base del ratón grande",
      "Rueda de desplazamiento táctil",
      "Iluminación Razer RGB Chroma",
      "Gamer Design",
    ],
    especificaciones: [
      "Sensor óptico Focus+ con 20 000 PPP reales",
      "Hasta 650 pulgadas por segundo (IPS)/50 G de aceleración/la mejor precisión de resolución de la industria con un 99,6 %",
      "Switches ópticos para ratón Razer™ con una duración de hasta 70 millones de clics",
      "Diseño ergonómico mejorado con agarres laterales de goma ultraduraderos",
      "Base del ratón grande de teflón 100 % (0,8 mm de grosor)",
      "Rueda de desplazamiento táctil especial para juegos",
      "Ajustes inmediatos de sensibilidad (niveles predeterminados: 400/800/1600/2400/3200)",
      "Almacenamiento híbrido en la nube y memoria integrada (4 perfiles +1)",
      "Iluminación Razer Chroma™ RGB con 16,8 millones de colores reales personalizables",
      "Ocho botones Hyperesponse programables de forma independiente",
      "Personalización avanzada de la distancia de elevación/apoyo",
      "Compatible con Razer Synapse 3",
      "Cable Speedflex de 2,1 m/7 pies",
      "Tamaño aproximado: 127,0 mm (largo) x 61,7 mm (ancho de agarre) x 42,7 mm (alto)",
      "Peso aproximado: 82 grs. (sin el cable)",
      "Compatible con Xbox One para entrada básica",
    ],
    precio: 4320,
  },
  {
    id: 3,
    category: "notebook",
    nombre: "Macbook Pro Retina",
    imagen: "/assets/images/products/appleretina.png",
    description: [
      "Memoria Ddr4 16 gb",
      "Gabinete GC-550",
      "Disco Solido SSD 250GB",
      "Procesador Ryzen 5 1600",
      "Pantalla 13.5 Retina",
    ],
    especificaciones: [
      "PANTALLA",
      "Retina de 13.3 pulgadas (diagonal) retroiluminada por LED con tecnología IPS",
      "resolución nativa de 2560 x 1600 a 227 pixeles por pulgada compatible con millones de colores",
      "Compatible con resoluciones a escala:1680 x 1050 1440 x 900 1024 x 640",
      "Brillo de 300 nits",
      "Gama de colores estándar (sRGB)",
      "Relación de contraste de 900:1",
    ],
    precio: 4320,
  },
  {
    id: 4,
    category: "hardware",
    nombre: "Kingston DDR4 3200 MHz",
    imagen: "/assets/images/products/ddr4.png",
    description: [
      "Memoria Ddr4 16 gb",
      "Velocidad de reloj: 3200Mhz ",
      "Latencia CAS: 16",
      "NonECC",
      "Gamer Design",
    ],
    especificaciones: [
      "PANTALLA",
      "Retina de 13.3 pulgadas (diagonal) retroiluminada por LED con tecnología IPS",
      "resolución nativa de 2560 x 1600 a 227 pixeles por pulgada compatible con millones de colores",
      "Compatible con resoluciones a escala:1680 x 1050 1440 x 900 1024 x 640",
      "Brillo de 300 nits",
      "Gama de colores estándar (sRGB)",
      "Relación de contraste de 900:1",
    ],
    precio: 4320,
  },
  {
    id: 5,
    category: "hardware",
    nombre: "Procesador Ryzen 5 1600",
    imagen: "/assets/images/products/procesador-r5-1600.png",
    description: [
      "Numero de nucleos: 6",
      "Relojo Maximo: 3.6 Ghz",
      "Package: AM4",
      "Reloj Base: 3.2",
      "Familia de producto: AMD Ryzen™ Processors",
    ],
    especificaciones: [
      "Micro Procesador",
      "El procesador para computadoras de escritorio de 12 subprocesos y 6 núcleos",
      "Menor consumo de energía de todo el mundo3 con verdadera inteligencia artificial",
      "Mas velocidad a la hora de jugar o editar videos",
      "Con cooler",
      "Posibilidades de Overclock",
      "www.amd.com/es/cpu/amd-ryzen-5-1600",
    ],
    precio: 15.302,
  },
  {
    id: 6,
    category: "gabinetes",
    nombre: "Gabinete Redragons Devastator",
    imagen: "/assets/images/products/gc-550.png",
    description: [
      "Alto: 445mm Largo: x380mm Ancho: x180mm.",
      "Compatible con motherboards Micro ATX y ATX.",
      "Panel frontal: Nos encontraremos con un puerto USB 3.0.",
      "luminación: Compuesta por tiras de iluminación RGB",
    ],
    especificaciones: [
      "Materiales: Chasis de acero negro, Plastico ABS cepillado, Acrilico en el panel lateral izquierdo",
      "Soporta motherboards: ATX y Micro ATX",
      "Puertos de Expansión: 7",
      "Bahías: 2 unidades de disco duro de 3,5″ + 2 unidades SSD 2,5″",
      "Puerto I/O Frontal: USB 3.0×1, USB 2.0×2, Audio + Mic, Boton Power, Boton Reset, Botón RGB",
      "Coolers Pre instalados: 1x 120 mm posterior",
      "Cantidad máxima para coolers: 6 (2 frontales, 2 superiores, 1 posterior)",
      "Soporte Watercooling: No",
      "Altura máxima CPU Cooler: 157 mm",
      "Largo máximo GPU: 370 mm",
      "Peso: 4.5 kg",
    ],
    precio: 6302,
  },
];

export default Products;
