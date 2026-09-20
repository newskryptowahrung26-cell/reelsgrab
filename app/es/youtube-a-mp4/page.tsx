import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Video,
  Zap,
  Shield,
  Smartphone,
  Film,
  CheckCircle2,
  AlertTriangle,
  Laptop,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Descargador de YouTube a MP4 – Videos en HD 1080p y 4K Gratis",
  description:
    "Descarga videos de YouTube en formato MP4 en calidad HD 1080p, 720p y 4K con audio sincronizado. El descargador de YouTube a MP4 online más rápido y seguro — compatible con iPhone, Android, Mac y PC sin publicidad invasiva ni programas.",
  keywords: [
    "youtube a mp4",
    "descargar videos de youtube",
    "descargador de youtube",
    "convertir youtube a mp4",
    "descargar videos youtube 1080p",
    "descargar videos youtube 4k",
    "youtube mp4 gratis",
    "descargar videos de youtube sin programas",
    "descargar shorts de youtube",
    "y2mate alternativa",
    "savefrom alternativa",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/youtube-a-mp4`,
    languages: {
      en: `${SITE_CONFIG.url}/youtube-to-mp4`,
      pt: `${SITE_CONFIG.url}/pt/youtube-para-mp4`,
    },
  },
  openGraph: {
    title: "Descargador de YouTube a MP4 – Videos en HD 1080p y 4K Gratis",
    description:
      "Descarga videos de YouTube en formato MP4 en calidad HD 1080p, 720p y 4K con audio sincronizado gratis.",
    url: `${SITE_CONFIG.url}/es/youtube-a-mp4`,
  },
};

const features = [
  {
    icon: Film,
    title: "Resolución HD 1080p y 4K",
    description:
      "Descarga videos de YouTube en auténtica resolución Full HD 1080p y 4K Ultra HD a 60fps con la máxima nitidez visual.",
  },
  {
    icon: Zap,
    title: "Velocidad de Descarga Ultrarrápida",
    description:
      "Nuestros servidores en la nube procesan y empaquetan los flujos de video y audio en menos de 3 segundos.",
  },
  {
    icon: Shield,
    title: "100% Seguro: Cero Publicidad Engañosa",
    description:
      "Sin ventanas emergentes sospechosas, sin redirecciones molestas y sin necesidad de instalar extensiones ni programas.",
  },
  {
    icon: Smartphone,
    title: "Compatible con Todos los Dispositivos",
    description:
      "Funciona directamente en Safari para iPhone y iPad, Chrome para Android, Windows, Mac y Linux.",
  },
];

const pasos = [
  {
    title: "Copia el enlace del video de YouTube",
    description:
      "Abre YouTube, localiza el video o Short que deseas descargar y copia su enlace desde la barra de direcciones o botón Compartir.",
  },
  {
    title: "Pega la URL en el descargador",
    description:
      "Entra a ReelsGrab y pega el enlace copiado en el campo de entrada en la parte superior de esta página.",
  },
  {
    title: "Selecciona la resolución de video",
    description:
      "Elige la calidad deseada: 1080p Full HD, 720p HD, 480p o 4K Ultra HD si está disponible en el video original.",
  },
  {
    title: "Guarda el video en tu dispositivo",
    description:
      "Haz clic en 'Descargar Video'. El archivo MP4 se guardará directamente en tu dispositivo para reproducir sin conexión.",
  },
];

const competitorMatrix = [
  { feature: "Publicidad Invasiva / Popups", reelsgrab: "✅ 0% (Sin Popups)", y2mate: "❌ Múltiples pestañas", savefrom: "❌ Enlaces dudosos", snapsave: "❌ Anuncios agresivos" },
  { feature: "Resolución Máxima", reelsgrab: "✅ 1080p / 4K (Con Audio)", y2mate: "⚠️ 1080p mudo a veces", savefrom: "⚠️ Requiere software para 1080p", snapsave: "⚠️ Limitado" },
  { feature: "Soporte para YouTube Shorts", reelsgrab: "✅ Soporte Total", y2mate: "✅ Soportado", savefrom: "⚠️ Inestable", snapsave: "⚠️ Parcial" },
  { feature: "Descarga en iPhone Safari", reelsgrab: "✅ Directo en 1 Clic", y2mate: "⚠️ Requiere apps externas", savefrom: "❌ Falla en iOS", snapsave: "⚠️ Complejo" },
  { feature: "Velocidad de Descarga", reelsgrab: "⚡ Menos de 3 segundos", y2mate: "⏳ 10 - 20 segundos", savefrom: "⏳ 15 - 30 segundos", snapsave: "⏳ 10 - 25 segundos" },
];

const videoResolutions = [
  {
    resolution: "4K Ultra HD (2160p)",
    pixels: "3840 x 2160",
    fps: "60 fps",
    bitrate: "15,000 - 25,000 kbps",
    bestFor: "Pantallas 4K, televisores inteligentes, edición profesional",
  },
  {
    resolution: "1080p Full HD",
    pixels: "1920 x 1080",
    fps: "30 / 60 fps",
    bitrate: "4,000 - 8,000 kbps",
    bestFor: "Monitores de PC, tabletas, archivo personal en alta calidad",
  },
  {
    resolution: "720p HD",
    pixels: "1280 x 720",
    fps: "30 fps",
    bitrate: "1,500 - 3,000 kbps",
    bestFor: "Teléfonos inteligentes, ahorro de almacenamiento y datos",
  },
  {
    resolution: "480p / 360p Estándar",
    pixels: "854 x 480 / 640 x 360",
    fps: "30 fps",
    bitrate: "500 - 1,000 kbps",
    bestFor: "Conexiones lentas a internet, visualización rápida",
  },
];

const preguntas = [
  {
    q: "¿Cómo descargar videos de YouTube a MP4 gratis?",
    a: "Copia el enlace de cualquier video o Short de YouTube, pégalo en la barra de búsqueda de ReelsGrab y haz clic en 'Descargar Video'. Elige la resolución deseada (como 1080p Full HD) y descarga el archivo MP4 inmediatamente sin costo.",
  },
  {
    q: "¿Los videos en 1080p y 4K descargados incluyen audio?",
    a: "¡Sí! YouTube separa las pistas de video y audio en resoluciones de alta definición. ReelsGrab une automáticamente ambas pistas en la nube para que disfrutes de video en 1080p o 4K con audio estéreo sincronizado.",
  },
  {
    q: "¿Se pueden descargar YouTube Shorts en formato MP4?",
    a: "Sí, ReelsGrab es totalmente compatible con los enlaces de YouTube Shorts. Pega el enlace del Short y descárgalo en MP4 al instante.",
  },
  {
    q: "¿Cómo descargar videos de YouTube en iPhone o iPad?",
    a: "Abre Safari en tu iPhone, entra a ReelsGrab, pega la URL del video y toca Descargar. Safari te preguntará si deseas descargar el archivo MP4; pulsa 'Descargar' para guardarlo en la app Archivos.",
  },
  {
    q: "¿Es necesario instalar algún programa o extensión?",
    a: "No. ReelsGrab funciona 100% online en cualquier navegador web sin necesidad de instalar programas ni extensiones que ocupen espacio en tu dispositivo.",
  },
  {
    q: "¿Hay límite diario de descargas?",
    a: "No hay límites. Puedes descargar todos los videos de YouTube que quieras de forma gratuita e ilimitada.",
  },
  {
    q: "¿Es legal descargar videos de YouTube a MP4?",
    a: "Descargar videos para uso personal sin conexión, fines educativos o archivo personal es ampliamente tolerado bajo el uso justo. Recuerda siempre respetar los derechos de autor de los creadores.",
  },
];

const relatedTools = [
  { emoji: "🎵", label: "YouTube a MP3 (ES)", href: "/es/youtube-a-mp3", description: "Convierte videos de YouTube a MP3 320kbps" },
  { emoji: "📸", label: "Descargar Reels Instagram", href: "/es/descargar-reels-instagram", description: "Descarga Reels de IG en 1080p" },
  { emoji: "📹", label: "Descargar Videos Facebook", href: "/es/descargar-videos-facebook", description: "Descarga videos de Facebook en HD" },
  { emoji: "🎧", label: "Reels a MP3", href: "/reels-to-mp3", description: "Extrae audio de cualquier Reel" },
  { emoji: "🇬🇧", label: "English Version", href: "/youtube-to-mp4", description: "Download YouTube videos in 1080p HD" },
];

export default function YouTubeAMp4Page() {
  return (
    <>
      {/* JSON-LD Schemas */}
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
          "Descarga videos de YouTube en MP4 en calidad HD 1080p y 4K con audio gratis online.",
          `${SITE_CONFIG.url}/es/youtube-a-mp4`,
          "4.9",
          "156200"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Cómo Descargar Videos de YouTube a MP4 en HD",
          "Guía paso a paso para descargar videos y shorts de YouTube en formato MP4 en alta definición.",
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
              <li className="text-slate-300">YouTube a MP4</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-medium mb-5">
            <Film size={14} /> Descargador Gratis de YouTube a MP4 – HD 1080p y 4K
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Descargador de YouTube a MP4{" "}
            <span className="gradient-text">Videos HD 1080p y 4K Gratis</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Descarga videos y Shorts de YouTube en formato <strong className="text-white">MP4 en calidad HD 1080p y 4K</strong> con
            audio sincronizado. Rápido, seguro, sin programas y sin publicidad invasiva.
          </p>

          <DownloadTool
            platform="youtube"
            mode="video"
            placeholder="Pega el enlace del video o Short de YouTube aquí..."
            buttonLabel="Descargar Video"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/es/youtube-a-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎵 YouTube a MP3 (ES)
            </a>
            <a href="/es/descargar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📸 Descargar Reels Instagram
            </a>
            <a href="/es/descargar-videos-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📹 Descargar Videos Facebook
            </a>
            <a href="/youtube-to-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
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
            ¿Por Qué Elegir ReelsGrab para Descargar Videos de YouTube?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            La plataforma más confiable para guardar tus videos favoritos de YouTube con calidad visual inigualable y cero complicaciones.
          </p>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO STEPS */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Cómo Descargar Videos de YouTube en 4 Pasos
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Descarga rápida de videos en MP4 en menos de 10 segundos.
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
              La Guía Definitiva para Descargar Videos de YouTube a MP4 en HD
            </h2>
            <p>
              YouTube contiene la mayor variedad de contenidos audiovisuales del mundo: tutoriales, cursos educativos,
              entrevistas, documentales, música y entretenimiento. Sin embargo, ver videos en YouTube requiere una conexión
              continua a internet y puede consumir rápidamente los datos móviles de tu celular.
            </p>
            <p>
              Con <strong>ReelsGrab YouTube a MP4</strong>, puedes descargar cualquier video o Short en formato MP4 estándar
              en resoluciones <strong>720p HD, 1080p Full HD y hasta 4K Ultra HD</strong>. El archivo resultante es compatible
              con cualquier reproductor de video, televisor inteligente o aplicación de edición como Premiere o CapCut.
            </p>
          </div>

          {/* SECCIÓN 2: Tabla comparativa */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabla Comparativa: ReelsGrab vs. Otros Descargadores de YouTube
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Característica</th>
                    <th className="p-3.5 font-semibold text-red-400 bg-red-950/20">ReelsGrab</th>
                    <th className="p-3.5 font-semibold">Y2Mate</th>
                    <th className="p-3.5 font-semibold">SaveFrom</th>
                    <th className="p-3.5 font-semibold">SnapSave</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {competitorMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 font-semibold text-emerald-400 bg-red-950/20">{row.reelsgrab}</td>
                      <td className="p-3.5 text-slate-400">{row.y2mate}</td>
                      <td className="p-3.5 text-slate-400">{row.savefrom}</td>
                      <td className="p-3.5 text-slate-400">{row.snapsave}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECCIÓN 3: Resoluciones */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Resoluciones y Especificaciones Técnicas de Descarga
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Resolución</th>
                    <th className="p-3.5 font-semibold">Píxeles</th>
                    <th className="p-3.5 font-semibold">FPS</th>
                    <th className="p-3.5 font-semibold">Bitrate Estimado</th>
                    <th className="p-3.5 font-semibold">Recomendado Para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {videoResolutions.map((res, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{res.resolution}</td>
                      <td className="p-3.5 text-slate-300">{res.pixels}</td>
                      <td className="p-3.5 text-slate-400">{res.fps}</td>
                      <td className="p-3.5 text-slate-400">{res.bitrate}</td>
                      <td className="p-3.5 text-slate-300">{res.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECCIÓN 4: Tutoriales por dispositivo */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Cómo Descargar Videos de YouTube a MP4 en Cualquier Dispositivo
            </h3>

            {/* iPhone */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Videos de YouTube en iPhone y iPad (iOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copia el enlace del video de YouTube desde la app o navegador.</li>
                <li>Abre Safari e ingresa a <code>reelsgrab.vercel.app/es/youtube-a-mp4</code>.</li>
                <li>Pega el enlace en el campo de entrada y toca <strong>&quot;Descargar Video&quot;</strong>.</li>
                <li>Toca <strong>&quot;Descargar Video HD&quot;</strong> y confirma la descarga en Safari para guardarlo en la app Archivos.</li>
              </ol>
            </div>

            {/* Android */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Videos de YouTube en Android (Samsung, Xiaomi, Motorola)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copia el enlace del video en la app de YouTube.</li>
                <li>Abre Chrome, entra a ReelsGrab y pega la URL en la barra de búsqueda.</li>
                <li>Toca Descargar y el archivo MP4 se guardará directamente en tu carpeta de Descargas y aparecerá en tu Galería.</li>
              </ol>
            </div>

            {/* PC y Mac */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Laptop size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Videos de YouTube en PC y Mac (Windows, macOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copia el enlace del video de YouTube desde la barra de direcciones de tu navegador.</li>
                <li>Pégalo en ReelsGrab y haz clic en <strong>&quot;Descargar Video&quot;</strong>.</li>
                <li>Haz clic en Descargar HD y el archivo MP4 se guardará en tu carpeta de Descargas.</li>
              </ol>
            </div>
          </div>

          {/* SECCIÓN 5: Conclusión */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Disfruta de tus Videos Favoritos de YouTube con ReelsGrab
            </h3>
            <p>
              ReelsGrab es el descargador de YouTube a MP4 más eficiente, seguro y de mayor calidad.
              Sin programas, sin suscripciones y sin publicidad invasiva. ¡Descarga tu primer video arriba!
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
          Preguntas Frecuentes — Descargador de YouTube a MP4
        </h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
