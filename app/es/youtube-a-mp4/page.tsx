import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import { Video, Zap, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Descargador de YouTube a MP4 – Descargar Videos en HD 1080p y 4K Gratis",
  description:
    "Descarga videos de YouTube y Shorts a MP4 en HD 1080p y 4K con audio sincronizado. Convertidor de YouTube a MP4 online gratis para iPhone, Android y PC.",
  keywords: [
    "youtube a mp4",
    "descargar videos de youtube",
    "convertidor youtube a mp4",
    "descargar youtube mp4 1080p",
    "descargar youtube shorts",
    "ytmp4 en español",
    "bajar videos de youtube gratis",
    "convertir youtube a mp4 hd",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/youtube-a-mp4`,
    languages: {
      en: `${SITE_CONFIG.url}/youtube-to-mp4`,
      pt: `${SITE_CONFIG.url}/pt/youtube-para-mp4`,
    },
  },
};

const caracteristicas = [
  {
    icon: Video,
    title: "Calidad Full HD 1080p y 4K",
    description: "Descarga videos en 1080p, 720p y hasta 4K con video y audio totalmente sincronizados.",
  },
  {
    icon: Sparkles,
    title: "Descargar YouTube Shorts",
    description: "Guarda videos cortos verticales de YouTube Shorts en HD sin marcas de agua molestas.",
  },
  {
    icon: Zap,
    title: "Descarga Directa y Rápida",
    description: "Conexión directa a servidores CDN de alta velocidad para descargas sin esperas ni límites.",
  },
  {
    icon: Shield,
    title: "Sin Registro ni Programas",
    description: "100% online y gratuito. No necesitas instalar programas, aplicaciones ni crear cuentas.",
  },
];

const pasos = [
  {
    title: "Copia el enlace del video",
    description: "Encuentra el video o Short de YouTube que deseas guardar y copia su URL.",
  },
  {
    title: "Pega el enlace en ReelsGrab",
    description: "Pega el enlace en el campo de texto arriba y haz clic en 'Descargar MP4'.",
  },
  {
    title: "Elige la resolución deseada",
    description: "Selecciona entre 1080p Full HD, 720p HD o 360p según tus necesidades.",
  },
  {
    title: "Guarda el video en tu dispositivo",
    description: "El archivo MP4 se descargará al instante en tu almacenamiento local listo para ver sin conexión.",
  },
];

const preguntas = [
  {
    q: "¿Cómo descargar videos de YouTube en 1080p con audio?",
    a: "Pega el enlace del video en el cuadro de descarga de arriba y haz clic en 'Descargar MP4'. Selecciona la opción de 1080p para descargar el video con audio original sincronizado.",
  },
  {
    q: "¿Se pueden descargar videos de YouTube Shorts?",
    a: "Sí, ReelsGrab es totalmente compatible con YouTube Shorts. Solo copia el enlace del Short y pégalo aquí para descargarlo en formato vertical MP4.",
  },
  {
    q: "¿Cómo descargar videos de YouTube en iPhone?",
    a: "Abre Safari en iOS, entra a ReelsGrab, pega el enlace de YouTube y toca Descargar. Guarda el archivo en la app Archivos y luego guárdalo en tu carrete de Fotos.",
  },
  {
    q: "¿El servicio tiene algún límite de descargas diarias?",
    a: "No, ReelsGrab ofrece descargas totalmente ilimitadas y gratuitas todos los días.",
  },
  {
    q: "¿Es seguro descargar videos con ReelsGrab?",
    a: "Sí, 100% seguro. No recopilamos datos personales ni incluimos anuncios emergentes engañosos.",
  },
];

export default function YouTubeAMp4Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Inicio", url: "/" },
          { name: "YouTube a MP4", url: "/es/youtube-a-mp4" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Descargador de YouTube a MP4",
          "Descarga videos de YouTube y Shorts a MP4 en HD 1080p y 4K con audio sincronizado online gratis.",
          `${SITE_CONFIG.url}/es/youtube-a-mp4`,
          "4.9",
          "129300"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Cómo Descargar Videos de YouTube a MP4",
          "Guía paso a paso para descargar videos y shorts de YouTube en HD MP4",
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
              <li className="text-slate-300">YouTube a MP4</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs px-3 py-1 rounded-full mb-6">
            <Video className="w-3.5 h-3.5" />
            <span>Descargador de Videos YouTube en HD 1080p y 4K</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            YouTube a MP4 – Descargar Videos en{" "}
            <span className="gradient-text">HD 1080p Gratis</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Convierte y descarga videos y Shorts de YouTube en formato MP4 de alta calidad.
            Disfruta de resolución 1080p Full HD y 4K con audio original sincronizado.
          </p>

          <DownloadTool
            platform="youtube"
            mode="video"
            placeholder="Pega el enlace de YouTube o Shorts aquí..."
            buttonLabel="Descargar MP4"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a
              href="/es/youtube-a-mp3"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🎧 YouTube a MP3 (320kbps)
            </a>
            <a
              href="/youtube-to-mp4"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🇬🇧 English Version
            </a>
            <a
              href="/pt/youtube-para-mp4"
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
            Ventajas de Nuestro Descargador de YouTube MP4
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            La herramienta más rápida y segura para guardar videos de YouTube sin pérdidas de calidad.
          </p>
        </div>
        <FeaturesGrid features={caracteristicas} />
      </section>

      {/* Cómo Funciona */}
      <section className="bg-slate-900/40 border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Cómo Descargar Videos de YouTube en 4 Pasos
            </h2>
            <p className="text-slate-400 text-sm">
              Rápido y sencillo: guarda cualquier video en tu dispositivo en segundos
            </p>
          </div>
          <HowToSteps steps={pasos} />
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Preguntas Frecuentes sobre Descargas de YouTube MP4
        </h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
