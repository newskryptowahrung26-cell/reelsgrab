import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Music,
  Zap,
  Shield,
  Smartphone,
  Headphones,
  FileAudio,
  CheckCircle2,
  AlertTriangle,
  Laptop,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Convertidor de YouTube a MP3 | Audio en Alta Calidad 320kbps Gratis",
  description:
    "Convierte y descarga videos de YouTube a MP3 en alta calidad 320kbps, 256kbps y 128kbps. El convertidor de YouTube a MP3 online más rápido y seguro: compatible con iPhone, Android, Mac y PC sin publicidad invasiva ni programas.",
  keywords: [
    "youtube a mp3",
    "convertidor youtube a mp3",
    "convertir youtube a mp3",
    "descargar musica de youtube",
    "youtube mp3 320kbps",
    "descargar audio de youtube",
    "convertidor de videos de youtube a mp3 gratis",
    "youtube a mp3 alta calidad",
    "descargar canciones de youtube",
    "ytmp3 alternativa",
    "y2mate alternativa",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/youtube-a-mp3`,
    languages: {
      en: `${SITE_CONFIG.url}/youtube-to-mp3`,
      pt: `${SITE_CONFIG.url}/pt/youtube-para-mp3`,
    },
  },
  openGraph: {
    title: "Convertidor de YouTube a MP3 | Audio en Alta Calidad 320kbps Gratis",
    description:
      "Convierte y descarga videos de YouTube a MP3 en alta calidad 320kbps, 256kbps y 128kbps sin programas.",
    url: `${SITE_CONFIG.url}/es/youtube-a-mp3`,
  },
};

const features = [
  {
    icon: Headphones,
    title: "Calidad de Estudio 320kbps",
    description:
      "Extrae audio puro y nítido de cualquier video o canción de YouTube con el máximo rango dinámico y sin degradación de sonido.",
  },
  {
    icon: Zap,
    title: "Conversión Instantánea en la Nube",
    description:
      "Nuestros servidores dedicados procesan videos de YouTube en tiempo real en menos de 3 segundos, sin colas de espera.",
  },
  {
    icon: Shield,
    title: "100% Seguro: Cero Popups o Virus",
    description:
      "A diferencia de clones dudosos de YTMP3, ReelsGrab no tiene publicidad emergente invasiva, sin spam de notificaciones y sin programas dañinos.",
  },
  {
    icon: Smartphone,
    title: "Compatibilidad Total",
    description:
      "Convierte YouTube a MP3 fácilmente en iPhone (Safari), Android (Chrome), Mac, Windows y Linux sin instalar ninguna app.",
  },
];

const pasos = [
  {
    title: "Copia el enlace del video de YouTube",
    description:
      "Abre YouTube en tu computadora o app móvil. Localiza el video, canción o podcast que deseas convertir y copia el enlace desde la barra de direcciones o el botón Compartir.",
  },
  {
    title: "Pega la URL en el convertidor",
    description:
      "Vuelve a ReelsGrab y pega el enlace de YouTube copiado en el campo de entrada ubicado en la parte superior de esta página.",
  },
  {
    title: "Selecciona la calidad de audio",
    description:
      "Elige la tasa de bits preferida: Calidad de Estudio (320kbps), Alta Fidelidad (256kbps) o Estándar (128kbps).",
  },
  {
    title: "Descarga tu archivo MP3",
    description:
      "Haz clic en 'Descargar MP3'. El archivo se guardará directamente en tu carpeta de Descargas o app Archivos en el móvil.",
  },
];

const competitorMatrix = [
  { feature: "Anuncios Popunder / Redirecciones", reelsgrab: "✅ 0% (Sin Popups)", ytmp3: "❌ Popunders agresivos", y2mate: "❌ Carga alta de anuncios", snapsave: "❌ Múltiples pestañas" },
  { feature: "Selección de Bitrate (128-320kbps)", reelsgrab: "✅ Sí (Todos los bitrates)", ytmp3: "⚠️ Limitado", y2mate: "⚠️ Básico", snapsave: "❌ Fijo" },
  { feature: "Soporte para YouTube Shorts", reelsgrab: "✅ Soporte Total", ytmp3: "⚠️ Falla a veces", y2mate: "✅ Soportado", snapsave: "⚠️ Parcial" },
  { feature: "Descarga Directa en Safari iPhone", reelsgrab: "✅ 1 Clic Directo", ytmp3: "❌ Roto en iOS", y2mate: "⚠️ Muchos anuncios antes", snapsave: "⚠️ Complejo" },
  { feature: "Velocidad de Conversión", reelsgrab: "⚡ Menos de 3 segundos", ytmp3: "⏳ 10 - 25 segundos", y2mate: "⏳ 8 - 15 segundos", snapsave: "⏳ 10 - 20 segundos" },
  { feature: "Seguridad y Riesgo de Malware", reelsgrab: "🛡️ Cero Riesgo", ytmp3: "⚠️ Notificaciones spam", y2mate: "⚠️ Botones falsos", snapsave: "⚠️ Enlaces dudosos" },
];

const bitrateComparison = [
  {
    bitrate: "320 kbps",
    quality: "Calidad de Estudio (Audiófilo)",
    fileSize: "~2.4 MB / min",
    frequency: "Hasta 20 kHz",
    recommended: "Música, conciertos en vivo, auriculares Hi-Fi",
  },
  {
    bitrate: "256 kbps",
    quality: "Alta Fidelidad",
    fileSize: "~1.9 MB / min",
    frequency: "Hasta 19 kHz",
    recommended: "Auriculares prémium, audio para autos",
  },
  {
    bitrate: "192 kbps",
    quality: "Estándar Plus",
    fileSize: "~1.4 MB / min",
    frequency: "Hasta 18 kHz",
    recommended: "Escucha diaria, tonos de llamada",
  },
  {
    bitrate: "128 kbps",
    quality: "Estándar (Nativo Web)",
    fileSize: "~0.95 MB / min",
    frequency: "Hasta 16 kHz",
    recommended: "Podcasts, conferencias, ahorro de espacio",
  },
  {
    bitrate: "64 kbps",
    quality: "Voz Compacta",
    fileSize: "~0.48 MB / min",
    frequency: "Hasta 11 kHz",
    recommended: "Audiolibros, notas de voz, bajo consumo de datos",
  },
];

const preguntas = [
  {
    q: "¿Cómo convertir videos de YouTube a MP3 gratis?",
    a: "Copia el enlace de cualquier video o Short de YouTube, pégalo en el cuadro de búsqueda superior y haz clic en 'Convertir a MP3'. Selecciona la calidad deseada (como 320kbps) y descarga tu archivo. Es 100% gratis y sin registro.",
  },
  {
    q: "¿Cuál es la máxima calidad de audio disponible?",
    a: "ReelsGrab ofrece audio MP3 de hasta 320kbps con calidad de estudio. YouTube transmite audio en Opus (~160kbps) y AAC (~128kbps); nuestro convertidor preserva el 100% de esta fidelidad sonora al empaquetarlo en el contenedor MP3.",
  },
  {
    q: "¿Puedo convertir YouTube Shorts a MP3?",
    a: "¡Sí! Nuestro convertidor es totalmente compatible con los enlaces de YouTube Shorts (youtube.com/shorts/...). Pega el enlace y obtén el audio en segundos.",
  },
  {
    q: "¿Cómo descargar MP3 de YouTube en iPhone o iPad?",
    a: "Abre Safari en tu iPhone, pega el enlace de YouTube en ReelsGrab y toca Descargar. Safari mostrará un mensaje de descarga; pulsa 'Descargar' para guardarlo directamente en tu app Archivos.",
  },
  {
    q: "¿Puedo convertir videos largos como podcasts o audiolibros?",
    a: "Sí. Nuestro motor en la nube puede procesar videos largos, sesiones de DJ, podcasts y audiolibros de hasta 2 horas de duración de forma fluida.",
  },
  {
    q: "¿Es necesario instalar algún programa o extensión?",
    a: "No requieres ningún programa, extensión ni aplicación externa. ReelsGrab opera 100% online a través de cualquier navegador web moderno.",
  },
  {
    q: "¿Cuál es la diferencia entre 320kbps y 128kbps?",
    a: "320kbps ofrece la resolución de audio más alta con frecuencias de hasta 20kHz, ideal para música con auriculares de alta gama. 128kbps genera archivos más ligeros (~1MB por minuto), perfecto para podcasts y ahorro de memoria.",
  },
  {
    q: "¿Es legal convertir videos de YouTube a MP3?",
    a: "La conversión es legal para uso personal, contenido de dominio público, música bajo licencia Creative Commons y videos de tu propia autoría. Siempre respeta los derechos de autor.",
  },
];

const relatedTools = [
  { emoji: "🎬", label: "YouTube a MP4 (ES)", href: "/es/youtube-a-mp4", description: "Descarga videos de YouTube en 1080p HD" },
  { emoji: "📸", label: "Descargar Reels Instagram", href: "/es/descargar-reels-instagram", description: "Descarga Reels de IG en 1080p" },
  { emoji: "📹", label: "Descargar Videos Facebook", href: "/es/descargar-videos-facebook", description: "Descarga videos de Facebook en HD" },
  { emoji: "🎧", label: "Reels a MP3", href: "/reels-to-mp3", description: "Extrae audio de cualquier Reel" },
  { emoji: "🇬🇧", label: "English Version", href: "/youtube-to-mp3", description: "Convert YouTube to MP3 in 320kbps" },
];

export default function YouTubeAMp3Page() {
  return (
    <>
      {/* JSON-LD Schemas */}
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
          "Convierte y descarga videos de YouTube a MP3 en alta calidad 320kbps gratis online.",
          `${SITE_CONFIG.url}/es/youtube-a-mp3`,
          "4.9",
          "128400"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Cómo Convertir YouTube a MP3 en Alta Calidad",
          "Guía paso a paso para convertir y descargar videos y shorts de YouTube a audio MP3.",
          pasos
        )}
      />

      {/* HERO SECTION */}
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

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-medium mb-5">
            <FileAudio size={14} /> Convertidor Gratis de YouTube a MP3 | 320kbps Alta Calidad
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Convertidor de YouTube a MP3{" "}
            <span className="gradient-text">Calidad de Estudio 320kbps</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Convierte cualquier video o Short de YouTube en audio <strong className="text-white">MP3 de alta fidelidad</strong>.
            Rápido, 100% gratis, sin registro y sin anuncios emergentes engañosos.
          </p>

          <DownloadTool
            platform="youtube"
            mode="audio"
            placeholder="Pega el enlace del video o Short de YouTube aquí..."
            buttonLabel="Convertir a MP3"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/es/youtube-a-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎬 YouTube a MP4 (ES)
            </a>
            <a href="/es/descargar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📸 Descargar Reels Instagram
            </a>
            <a href="/es/descargar-videos-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📹 Descargar Videos Facebook
            </a>
            <a href="/youtube-to-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🇬🇧 English Version
            </a>
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <div className="max-w-4xl mx-auto px-4 my-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Publicidad
        </div>
      </div>

      {/* FEATURES GRID */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            ¿Por Qué ReelsGrab es el Mejor Convertidor de YouTube a MP3?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Diseñado para garantizar la máxima fidelidad acústica, velocidad instantánea y total privacidad del usuario.
          </p>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO STEPS */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Cómo Convertir YouTube a MP3 en 4 Pasos Sencillos
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Extracción de audio rápida y sin esfuerzo en menos de 10 segundos.
          </p>
          <HowToSteps steps={pasos} />
        </div>
      </section>

      {/* GUÍA DE AUTORIDAD SEO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">

          {/* SECCIÓN 1: Introducción */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Guía de Autoridad: Cómo Convertir Videos de YouTube a MP3 en 320kbps
            </h2>
            <p>
              YouTube es la plataforma de música y video más grande del mundo. Millones de personas disfrutan diariamente
              de álbumes completos, conciertos en vivo, podcasts, conferencias y audiolibros en YouTube.
              Sin embargo, escuchar videos con la pantalla bloqueada o en movimiento consume grandes cantidades de batería
              y datos móviles si no se cuenta con una suscripción prémium.
            </p>
            <p>
              Con <strong>ReelsGrab YouTube a MP3</strong>, puedes extraer la pista de audio de cualquier video o Short de YouTube
              y guardarla en formato MP3 estándar a <strong>320kbps de máxima calidad</strong>. No necesitas descargar programas
              pesados, registrarte ni soportar ventanas emergentes de publicidad invasiva.
            </p>
          </div>

          {/* SECCIÓN 2: Tabla comparativa de competidores */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabla Comparativa: ReelsGrab vs. Otros Convertidores de YouTube a MP3
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Característica</th>
                    <th className="p-3.5 font-semibold text-purple-400 bg-purple-950/20">ReelsGrab</th>
                    <th className="p-3.5 font-semibold">YTMP3</th>
                    <th className="p-3.5 font-semibold">Y2Mate</th>
                    <th className="p-3.5 font-semibold">SnapSave</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {competitorMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 font-semibold text-emerald-400 bg-purple-950/20">{row.reelsgrab}</td>
                      <td className="p-3.5 text-slate-400">{row.ytmp3}</td>
                      <td className="p-3.5 text-slate-400">{row.y2mate}</td>
                      <td className="p-3.5 text-slate-400">{row.snapsave}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECCIÓN 3: Desglose de Bitrate */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Comparativa de Tasas de Bits (Bitrates): ¿Cuál Deberías Elegir?
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Tasa de Bits</th>
                    <th className="p-3.5 font-semibold">Calidad Acústica</th>
                    <th className="p-3.5 font-semibold">Tamaño Estimado</th>
                    <th className="p-3.5 font-semibold">Rango de Frecuencia</th>
                    <th className="p-3.5 font-semibold">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {bitrateComparison.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{item.bitrate}</td>
                      <td className="p-3.5 text-slate-300">{item.quality}</td>
                      <td className="p-3.5 text-slate-400">{item.fileSize}</td>
                      <td className="p-3.5 text-slate-400">{item.frequency}</td>
                      <td className="p-3.5 text-slate-300">{item.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECCIÓN 4: Tutoriales por dispositivo */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Cómo Convertir YouTube a MP3 en Cualquier Dispositivo
            </h3>

            {/* iPhone */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar YouTube a MP3 en iPhone y iPad (iOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Abre YouTube y copia el enlace del video deseado mediante el botón Compartir.</li>
                <li>Abre Safari e ingresa a <code>www.reelsgrab.net/es/youtube-a-mp3</code>.</li>
                <li>Pega el enlace en el campo de entrada y toca <strong>&quot;Convertir a MP3&quot;</strong>.</li>
                <li>Toca <strong>&quot;Descargar MP3&quot;</strong> y confirma la descarga en Safari para guardarlo en la app Archivos.</li>
              </ol>
            </div>

            {/* Android */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar YouTube a MP3 en Android (Samsung, Xiaomi, Motorola)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copia el enlace del video de YouTube en la app móvil.</li>
                <li>Abre Chrome, entra en ReelsGrab y pega la URL en el convertidor.</li>
                <li>Toca Descargar MP3 y el archivo se guardará al instante en tu carpeta <code>/Descargas/</code>, listo para reproducirse sin conexión.</li>
              </ol>
            </div>

            {/* PC y Mac */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Laptop size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Convertir YouTube a MP3 en PC y Mac (Windows, macOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copia el enlace del video de YouTube desde la barra de direcciones de tu navegador.</li>
                <li>Pégalo en ReelsGrab y haz clic en <strong>&quot;Convertir a MP3&quot;</strong>.</li>
                <li>Haz clic en Descargar MP3 y el archivo se guardará directamente en tu disco duro.</li>
              </ol>
            </div>
          </div>

          {/* SECCIÓN 5: Conclusión */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Disfruta de la Mejor Música con ReelsGrab
            </h3>
            <p>
              ReelsGrab es el convertidor de YouTube a MP3 más rápido, seguro y con la más alta fidelidad de audio del mercado.
              Sin programas, sin suscripciones y sin publicidad invasiva. ¡Prueba convertir tu primer video arriba!
            </p>
          </div>

        </article>
      </section>

      {/* RELATED TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl font-bold text-white mb-6">Herramientas Relacionadas</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      {/* Ad Slot */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Publicidad
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Preguntas Frecuentes | Convertidor de YouTube a MP3
        </h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
