// Datos completos de las 8 modalidades técnicas del INEM Ibagué.

export const modalidades = [
  {
    slug: "ciencias-naturales",
    nombre: "Ciencias Naturales",
    tagline: "Investigación y conciencia ambiental",
    descripcion:
      "La modalidad de Ciencias Naturales fortalece el pensamiento crítico y la curiosidad científica de nuestros estudiantes a través de la observación, la experimentación y el análisis riguroso de fenómenos naturales, preparándolos para asumir retos ambientales y de salud en su comunidad.",
    icon: "FlaskConical",
    color: "#16a34a",
    mascota: "/images/ardillas/ardilla-ciencias.jpg",
    galeria: null,
    objetivos: [
      { icon: "Microscope", title: "Investigación", text: "Uso del método científico." },
      { icon: "Leaf", title: "Conciencia Ambiental", text: "Sostenibilidad y respeto." },
      { icon: "FlaskConical", title: "Práctica Experimental", text: "Habilidades en laboratorio." },
      { icon: "Brain", title: "Pensamiento Crítico", text: "Análisis de datos riguroso." },
      { icon: "TestTube", title: "Ciencia Aplicada", text: "Casos de la vida cotidiana." },
      { icon: "GraduationCap", title: "Base Académica", text: "Éxito en educación superior." },
    ],
    perfil: [
      "Auxiliar en laboratorios.",
      "Gestor ambiental.",
      "Promotor de salud.",
      "Apoyo técnico ambiental.",
    ],
  },
  {
    slug: "humanidades",
    nombre: "Humanidades",
    tagline: "Comunicación y pensamiento crítico",
    descripcion:
      "La modalidad de Humanidades desarrolla competencias comunicativas, lectoras y de pensamiento crítico a través del estudio de la lengua, la literatura, las ciencias sociales y un segundo idioma, formando estudiantes capaces de interpretar y transformar su entorno.",
    icon: "BookOpen",
    color: "#7c3aed",
    mascota: "/images/ardillas/ardilla-humanidades.jpeg",
    galeria: null,
    objetivos: [
      { icon: "BookOpen", title: "Comprensión Lectora", text: "Análisis de textos y contextos." },
      { icon: "Languages", title: "Bilingüismo", text: "Fortalecimiento del idioma inglés." },
      { icon: "MessageCircle", title: "Comunicación Asertiva", text: "Expresión oral y escrita." },
      { icon: "Globe", title: "Conciencia Social", text: "Comprensión de la realidad social." },
      { icon: "PenLine", title: "Producción Textual", text: "Redacción y argumentación." },
      { icon: "GraduationCap", title: "Base Académica", text: "Preparación para educación superior." },
    ],
    perfil: [
      "Gestor cultural y comunitario.",
      "Auxiliar en comunicaciones.",
      "Mediador de lectura y biblioteca.",
      "Apoyo en proyectos sociales.",
    ],
  },
  {
    slug: "financiera",
    nombre: "Adm. Financiera",
    tagline: "Contabilidad y gestión empresarial",
    descripcion:
      "La modalidad de Administración Financiera prepara a los estudiantes en fundamentos de contabilidad, finanzas y gestión empresarial, desarrollando habilidades para la organización, el emprendimiento y la toma de decisiones económicas responsables.",
    icon: "LineChart",
    color: "#0891b2",
    mascota: "/images/ardillas/ardilla-financiera.jpg",
    galeria: null,
    objetivos: [
      { icon: "Calculator", title: "Contabilidad Básica", text: "Registro y control financiero." },
      { icon: "LineChart", title: "Análisis Financiero", text: "Interpretación de estados financieros." },
      { icon: "Briefcase", title: "Gestión Empresarial", text: "Administración de recursos." },
      { icon: "Coins", title: "Educación Financiera", text: "Ahorro e inversión responsable." },
      { icon: "Lightbulb", title: "Emprendimiento", text: "Formulación de proyectos productivos." },
      { icon: "GraduationCap", title: "Base Académica", text: "Éxito en programas de educación superior." },
    ],
    perfil: [
      "Auxiliar contable y administrativo.",
      "Asistente de tesorería.",
      "Emprendedor y gestor de negocios.",
      "Apoyo en procesos de facturación.",
    ],
  },
  {
    slug: "sistemas",
    nombre: "Sistemas",
    tagline: "Programación, redes y soporte",
    descripcion:
      "La modalidad de Sistemas forma técnicos capaces de desarrollar software, administrar redes y brindar soporte tecnológico, combinando pensamiento lógico, trabajo en equipo y actualización constante frente a las tecnologías de la información.",
    icon: "Code2",
    color: "#2563eb",
    mascota: "/images/ardillas/ardilla-sistemas.jpg",
    galeria: ["/images/sistemas/sistemas-1.jpeg", "/images/sistemas/sistemas-2.jpeg", "/images/sistemas/sistemas-3.jpeg"],
    objetivos: [
      { icon: "Code2", title: "Programación", text: "Lógica y desarrollo de software." },
      { icon: "Network", title: "Redes", text: "Instalación y configuración de redes." },
      { icon: "Laptop", title: "Soporte Técnico", text: "Mantenimiento de equipos y software." },
      { icon: "Database", title: "Bases de Datos", text: "Gestión de información digital." },
      { icon: "ShieldCheck", title: "Seguridad Informática", text: "Buenas prácticas digitales." },
      { icon: "GraduationCap", title: "Base Académica", text: "Preparación para carreras en TI." },
    ],
    perfil: [
      "Auxiliar de soporte técnico.",
      "Asistente en desarrollo de software.",
      "Técnico en mantenimiento de equipos.",
      "Auxiliar en redes y telecomunicaciones.",
    ],
  },
  {
    slug: "deportes",
    nombre: "Programas Deportivos",
    tagline: "Actividad física y vida saludable",
    descripcion:
      "La modalidad de Programas Deportivos fomenta el desarrollo físico, motriz y el trabajo en equipo, formando estudiantes con hábitos de vida saludable, disciplina y liderazgo dentro y fuera del campo de juego.",
    icon: "Trophy",
    color: "#ea580c",
    mascota: "/images/ardillas/ardilla-deportes.jpg",
    galeria: null,
    objetivos: [
      { icon: "Trophy", title: "Fundamentación Deportiva", text: "Técnica en distintas disciplinas." },
      { icon: "HeartPulse", title: "Vida Saludable", text: "Hábitos de bienestar físico." },
      { icon: "Users", title: "Trabajo en Equipo", text: "Cooperación y liderazgo." },
      { icon: "Award", title: "Arbitraje y Reglamentación", text: "Conocimiento de normas deportivas." },
      { icon: "Dumbbell", title: "Preparación Física", text: "Acondicionamiento y entrenamiento." },
      { icon: "GraduationCap", title: "Base Académica", text: "Proyección en ciencias del deporte." },
    ],
    perfil: [
      "Monitor deportivo comunitario.",
      "Auxiliar en programas de recreación.",
      "Asistente en gestión de eventos deportivos.",
      "Apoyo en acondicionamiento físico.",
    ],
  },
  {
    slug: "construcciones",
    nombre: "Construcciones",
    tagline: "Dibujo técnico y procesos constructivos",
    descripcion:
      "La modalidad de Construcciones brinda formación en dibujo técnico, interpretación de planos y procesos básicos de construcción, desarrollando precisión, trabajo en equipo y sentido de seguridad en obra.",
    icon: "Ruler",
    color: "#b45309",
    mascota: "/images/ardillas/ardilla-construcciones.jpg",
    galeria: null,
    objetivos: [
      { icon: "PencilRuler", title: "Dibujo Técnico", text: "Interpretación y elaboración de planos." },
      { icon: "Ruler", title: "Metrología", text: "Medición y trazado preciso." },
      { icon: "HardHat", title: "Seguridad en Obra", text: "Normas de seguridad industrial." },
      { icon: "Building2", title: "Procesos Constructivos", text: "Técnicas básicas de construcción." },
      { icon: "Users", title: "Trabajo en Equipo", text: "Coordinación en obra." },
      { icon: "GraduationCap", title: "Base Académica", text: "Proyección en ingeniería y arquitectura." },
    ],
    perfil: [
      "Auxiliar de dibujo técnico.",
      "Ayudante de obra y construcción.",
      "Asistente en control de calidad de obra.",
      "Apoyo en planeación de proyectos.",
    ],
  },
  {
    slug: "metal",
    nombre: "Metal-Mecánica",
    tagline: "Mecanizado, soldadura y metalistería",
    descripcion:
      "La modalidad de Metalmecánica forma técnicos en procesos de mecanizado, soldadura y transformación de metales, desarrollando precisión manual, manejo seguro de herramientas y pensamiento técnico aplicado a la industria.",
    icon: "Hammer",
    color: "#475569",
    mascota: "/images/ardillas/ardilla-metales.jpg",
    galeria: null,
    objetivos: [
      { icon: "Hammer", title: "Metalistería", text: "Transformación y forjado de metales." },
      { icon: "Flame", title: "Soldadura", text: "Técnicas de unión de materiales." },
      { icon: "Cog", title: "Mecanizado", text: "Uso de máquinas y herramientas." },
      { icon: "Ruler", title: "Metrología Industrial", text: "Medición y control de calidad." },
      { icon: "ShieldCheck", title: "Seguridad Industrial", text: "Prevención de riesgos laborales." },
      { icon: "GraduationCap", title: "Base Académica", text: "Proyección en ingeniería mecánica." },
    ],
    perfil: [
      "Auxiliar de taller de metalmecánica.",
      "Operario de máquinas y herramientas.",
      "Asistente en procesos de soldadura.",
      "Apoyo en mantenimiento industrial.",
    ],
  },
  {
    slug: "maderas",
    nombre: "Maderas",
    tagline: "Ebanistería y diseño en madera",
    descripcion:
      "La modalidad de Maderas forma técnicos en procesos de carpintería y ebanistería, combinando diseño, precisión manual y manejo responsable de herramientas para la elaboración de piezas y mobiliario en madera.",
    icon: "TreeDeciduous",
    color: "#65a30d",
    mascota: "/images/ardillas/ardilla-maderas.jpg",
    galeria: null,
    objetivos: [
      { icon: "TreeDeciduous", title: "Selección de Materiales", text: "Conocimiento de tipos de madera." },
      { icon: "PencilRuler", title: "Diseño y Trazado", text: "Planeación de piezas en madera." },
      { icon: "Hammer", title: "Ensamble", text: "Técnicas de unión y acabado." },
      { icon: "PaintRoller", title: "Acabados", text: "Lijado, tintes y barnizado." },
      { icon: "ShieldCheck", title: "Seguridad en Taller", text: "Manejo seguro de herramientas." },
      { icon: "GraduationCap", title: "Base Académica", text: "Proyección en diseño y producción." },
    ],
    perfil: [
      "Auxiliar de taller de ebanistería.",
      "Operario en procesos de carpintería.",
      "Asistente en diseño de mobiliario.",
      "Apoyo en acabados y terminaciones.",
    ],
  },
];

export function getModalidad(slug) {
  return modalidades.find((m) => m.slug === slug);
}

export const navLinks = {
  institucion: [
    { href: "/historia", label: "Nuestra Historia" },
    { href: "/mision-vision", label: "Misión y Visión" },
    { href: "/sedes", label: "Sedes" },
    { href: "/equipo", label: "Nuestro Equipo" },
  ],
  modalidades: modalidades.map((m) => ({
    href: `/modalidades/${m.slug}`,
    label: m.nombre,
  })),
};
