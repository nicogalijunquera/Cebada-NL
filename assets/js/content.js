/**
 * CONTENIDO SEMANAL
 * ------------------
 * Este es el ÚNICO archivo que necesitas editar cada semana.
 *
 * NUEVO: Geopolítica y Mercados ahora usan "topics" para dar
 * mayor profundidad de análisis, agrupado en tres ejes
 * transversales: Defensa, Inteligencia Artificial y Energía.
 * Economía se mantiene en formato simple (items + figures).
 *
 * Instrucciones rápidas:
 * 1. Cambia EDITION, DATE y DATELINE.
 * 2. Actualiza TICKER con 4-8 titulares cortos.
 * 3. Reescribe HEADLINE y SUMMARY (el resumen ejecutivo de portada).
 * 4. Dentro de cada "topic", edita los "items" (texto) y "figures".
 *    - Sube las imágenes nuevas a: assets/img/<AÑO>-W<SEMANA>/
 * 5. Guarda y sube los cambios a GitHub.
 */

const CONTENT = {
  edition: "Nº 28",
  date: "12 de julio de 2026",
  dateline: "GINEBRA",

  ticker: [
    "EJEMPLO — Gasto en defensa de la OTAN se acerca al nuevo umbral acordado",
    "EJEMPLO — Inversión en infraestructura de IA se acelera en Asia y Europa",
    "EJEMPLO — Precios del gas natural europeo se estabilizan tras semanas de volatilidad",
    "EJEMPLO — BCE mantiene el tipo de referencia sin cambios",
    "EJEMPLO — Nuevas restricciones a la exportación de semiconductores avanzados",
  ],

  headline: "EJEMPLO — Titular principal de la semana en una línea clara y directa",
  summary:
    "EJEMPLO — Resumen ejecutivo de tres a cuatro frases. Aquí se sintetiza el hecho " +
    "más relevante de la semana en geopolítica, economía y mercados, sin especulación, " +
    "con referencia directa a las fuentes que sustentan el análisis.",

  sections: [
    {
      id: "geopolitica",
      title: "Geopolítica",
      dateline: "BRUSELAS",
      topics: [
        {
          name: "Defensa",
          label: "DEFENSA",
          items: [
            {
              heading: "EJEMPLO — Encabezado del despacho de defensa",
              body:
                "EJEMPLO — Desarrollo del análisis sobre gasto militar, alianzas o " +
                "acuerdos de cooperación en defensa, priorizando hechos verificables.",
              source: "Fuente: [OTAN / Ministerio de Defensa / SIPRI]",
            },
          ],
          figures: [
            {
              src: "assets/img/2026-W28/defensa-gasto-otan.svg",
              caption: "EJEMPLO — Gasto en defensa como % del PIB por país",
              source: "Fuente: [SIPRI / OTAN]",
            },
          ],
        },
        {
          name: "Inteligencia Artificial",
          label: "IA",
          items: [
            {
              heading: "EJEMPLO — Encabezado del despacho de IA",
              body:
                "EJEMPLO — Análisis de la competencia geopolítica en torno a la IA: " +
                "regulación, control de exportaciones de chips, o alianzas tecnológicas.",
              source: "Fuente: [Comisión Europea / agencia estatal / informe sectorial]",
            },
          ],
          figures: [],
        },
        {
          name: "Energía",
          label: "ENERGÍA",
          items: [
            {
              heading: "EJEMPLO — Encabezado del despacho energético",
              body:
                "EJEMPLO — Análisis de seguridad energética, rutas de suministro o " +
                "acuerdos entre bloques regionales en materia de energía.",
              source: "Fuente: [Agencia Internacional de la Energía / IEA]",
            },
          ],
          figures: [
            {
              src: "assets/img/2026-W28/energia-rutas.svg",
              caption: "EJEMPLO — Mapa de rutas de suministro energético",
              source: "Fuente: [IEA / operador energético regional]",
            },
          ],
        },
      ],
    },
    {
      id: "economia",
      title: "Economía",
      dateline: "FRÁNCFORT",
      items: [
        {
          heading: "EJEMPLO — Encabezado del despacho económico",
          body:
            "EJEMPLO — Explicación de la decisión de política monetaria o dato " +
            "macroeconómico más relevante de la semana.",
          source: "Fuente: [BCE / Reserva Federal / Eurostat]",
        },
      ],
      figures: [
        {
          src: "assets/img/2026-W28/economia-inflacion.svg",
          caption: "EJEMPLO — Evolución de la inflación interanual",
          source: "Fuente: [Eurostat / INE / FMI]",
        },
      ],
    },
    {
      id: "mercados",
      title: "Mercados",
      dateline: "LONDRES",
      topics: [
        {
          name: "Defensa",
          label: "DEFENSA",
          items: [
            {
              heading: "EJEMPLO — Encabezado del despacho de mercados de defensa",
              body:
                "EJEMPLO — Comportamiento semanal de valores del sector defensa, " +
                "contratos relevantes o flujos de inversión, sin recomendaciones.",
              source: "Fuente: [Bloomberg / Reuters]",
            },
          ],
          figures: [
            {
              src: "assets/img/2026-W28/mercados-defensa.svg",
              caption: "EJEMPLO — Cotización semanal de valores del sector defensa",
              source: "Fuente: [Bolsa correspondiente]",
            },
          ],
        },
        {
          name: "Inteligencia Artificial",
          label: "IA",
          items: [
            {
              heading: "EJEMPLO — Encabezado del despacho de mercados de IA",
              body:
                "EJEMPLO — Flujos de inversión en semiconductores, infraestructura " +
                "de datos o compañías de IA, con base en datos verificables.",
              source: "Fuente: [Bloomberg / informes sectoriales]",
            },
          ],
          figures: [
            {
              src: "assets/img/2026-W28/mercados-ia.svg",
              caption: "EJEMPLO — Inversión trimestral en infraestructura de IA",
              source: "Fuente: [informe sectorial / Bloomberg]",
            },
          ],
        },
        {
          name: "Energía",
          label: "ENERGÍA",
          items: [
            {
              heading: "EJEMPLO — Encabezado del despacho de mercados de energía",
              body:
                "EJEMPLO — Evolución semanal de precios del petróleo, gas natural " +
                "o materias primas energéticas relevantes.",
              source: "Fuente: [IEA / mercado correspondiente]",
            },
          ],
          figures: [
            {
              src: "assets/img/2026-W28/mercados-energia.svg",
              caption: "EJEMPLO — Precios semanales de petróleo y gas natural",
              source: "Fuente: [IEA / Bloomberg]",
            },
          ],
        },
      ],
    },
  ],

  generalSources: [
    "Reuters",
    "Financial Times",
    "Fondo Monetario Internacional (FMI)",
    "Banco Mundial",
    "Eurostat",
    "SIPRI",
    "Agencia Internacional de la Energía (IEA)",
  ],
};
