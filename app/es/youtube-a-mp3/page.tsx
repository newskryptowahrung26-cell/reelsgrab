import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import { Music, Zap, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Convertidor de YouTube a MP3 – Descargar Audio MP3 320kbps Gratis",
  description:
    "Convierte y descarga videos de YouTube a MP3 en alta calidad 320kbps online gratis. Rápido, seguro, sin programas, compatible con iPhone, Android y PC.",
  keywords: [
    "youtube a mp3",
    "convertidor de youtube a mp3",
    "descargar musica de youtube",
    "convertir youtube a mp3",
    "youtube mp3 320kbps",
    "descargar audio de youtube",
    "ytmp3 en español",
    "descargar canciones de youtube gratis",
    "convertidor youtube mp3 online",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/youtube-a-mp3`,
    languages: {
      en: `${SITE_CONFIG.url}/youtube-to-mp3`,
      pt: `${SITE_CONFIG.url}/pt/youtube-para-mp3`,
    },
  },
};

const caracteristicas = [
  {
    icon: Music,
    title: "Calidad de Estudio 320kbps",
    description: "Extrae audio MP3 con la máxima fidelidad acústica disponible sin pérdida de compresión.",
  },
  {
    icon: Zap,
    title: "Conversión Ultra Rápida",
    description: "Nuestros servidores en la nube procesan y convierten cualquier enlace de YouTube en menos de 3 segundos.",
  },
  {
    icon: Shield,
    title: "100% Seguro y Sin Anuncios",
    description: "Sin anuncios emergentes molestos, sin virus y sin necesidad de instalar programas o extensiones.",
  },
  {
    icon: Sparkles,
    title: "Soporte para YouTube Shorts",
    description: "Convierte tanto videos tradicionales como canciones de YouTube Shorts a formato MP3 al instante.",
  },
];

const pasos = [
  {
    title: "Copia el enlace de YouTube",
    description: "Abre YouTube en tu móvil o navegador, encuentra la canción o video que deseas y copia su URL.",
  },
  {
    title: "Pega el enlace aquí",
    description: "Pega el enlace en el cuadro de descarga de arriba y presiona 'Convertir a MP3'.",
  },
  {
    title: "Selecciona Calidad 320kbps",
    description: "Elige la calidad de audio que prefieras (320kbps alta fidelidad o 128kbps estándar).",
  },
  {
    title: "Descarga tu archivo MP3",
    description: "Haz clic en descargar para guardar el archivo de audio directamente en tu teléfono o computadora.",
  },
];

const preguntas = [
  {
    q: "¿Cómo convertir videos de YouTube a MP3 en alta calidad 320kbps?",
    a: "Simplemente copia el enlace del video de YouTube, pégalo en nuestro convertidor arriba y haz clic en 'Convertir a MP3'. Selecciona la opción de 320kbps para obtener la mejor calidad de sonido.",
  },
  {
    q: "¿Es gratis este convertidor de YouTube a MP3?",
    a: "Sí, ReelsGrab es 100% gratuito. No hay límites de descarga, no se requieren suscripciones ni registros de cuenta.",
  },
  {
    q: "¿Puedo descargar canciones de YouTube en mi iPhone o Android?",
    a: "Sí. En Android, abre Chrome, pega el enlace y descarga directamente en tu carpeta de Descargas. En iPhone, usa Safari para descargar el archivo en la aplicación Archivos.",
  },
  {
    q: "¿Se pueden convertir YouTube Shorts a MP3?",
    a: "¡Sí! Nuestro convertidor es totalmente compatible con los enlaces de YouTube Shorts. Copia el enlace desde la app de YouTube y pégalo aquí.",
  },
  {
    q: "¿Es seguro usar ReelsGrab?",
    a: "Totalmente seguro. Nuestra herramienta funciona 100% en la nube a través de HTTPS seguro. No requiere instalar ningún software ni extensiones en tu dispositivo.",
  },
];

export default function YouTubeAMp3Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Inicio", url: "/" },
          { name: "YouTube a MP3", url: "/es/youtube-a-mp3" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Convertidor de YouTube a MP3",
          "Convierte y descarga videos de YouTube a MP3 en alta calidad 320kbps online gratis.",
          `${SITE_CONFIG.url}/es/youtube-a-mp3`,
          "4.9",
          "118900"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Cómo Convertir YouTube a MP3 en Alta Calidad",
          "Guía paso a paso para convertir y descargar videos y shorts de YouTube a audio MP3",
          pasos
        )}
      />

      {/* Hero */}
      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <a href="/" className="hover:text-slate-300">
                  Inicio
                </a>
              </li>
              <li>/</li>
              <li className="text-slate-300">YouTube a MP3</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full mb-6">
            <Music className="w-3.5 h-3.5" />
            <span>Convertidor de YouTube a MP3 de Alta Fidelidad</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            YouTube a MP3 – Calidad de Estudio{" "}
            <span className="gradient-text">320kbps Gratis</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Convierte cualquier video o Short de YouTube a audio MP3 en alta fidelidad.
            Rápido, gratis, sin registro y sin molestos anuncios emergentes.
          </p>

          <DownloadTool
            platform="youtube"
            mode="audio"
            placeholder="Pega el enlace de YouTube para convertir a MP3..."
            buttonLabel="Convertir a MP3"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a
              href="/es/youtube-a-mp4"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🎬 YouTube a MP4 (HD)
            </a>
            <a
              href="/youtube-to-mp3"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🇬🇧 English Version
            </a>
            <a
              href="/pt/youtube-para-mp3"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🇧🇷 Versão em Português
            </a>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            ¿Por Qué Elegir Nuestro Convertidor de YouTube a MP3?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            La forma más rápida, limpia y confiable de guardar música y audio de YouTube.
          </p>
        </div>
        <FeaturesGrid features={caracteristicas} />
      </section>

      {/* Cómo Funciona */}
      <section className="bg-slate-900/40 border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Cómo Convertir Videos de YouTube a MP3 en 4 Pasos
            </h2>
            <p className="text-slate-400 text-sm">
              Descarga cualquier audio de YouTube a tu dispositivo en segundos
            </p>
          </div>
          <HowToSteps steps={pasos} />
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Preguntas Frecuentes sobre YouTube a MP3
        </h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
