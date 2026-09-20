import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Shield,
  Music,
  Zap,
  Lock,
  Video,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  Share2,
  Film,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Descargar Reels de Instagram Gratis Sin Marca de Agua en HD (Con Audio)",
  description:
    "Descarga Reels de Instagram gratis en HD 1080p sin marca de agua y con audio original y música. El mejor descargador de Reels de Instagram online: sin aplicaciones, sin iniciar sesión. Compatible con iPhone, Android y PC.",
  keywords: [
    "descargar reels de instagram",
    "descargar reels instagram",
    "descargar reel de instagram",
    "descargador de reels de instagram",
    "bajar reels de instagram",
    "descargar reels instagram sin marca de agua",
    "como descargar reels de instagram",
    "descargar reels de instagram gratis",
    "descargar musica de reels instagram",
    "descargar audio de instagram reels",
    "descargar reels instagram iphone",
    "descargar reels instagram android",
    "descargar reels instagram hd 1080p",
    "guardar reels de instagram en galeria",
    "snapinsta alternativa",
    "fastdl alternativa",
    "saveinsta alternativa",
    "inflact alternativa",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/descargar-reels-instagram`,
    languages: {
      en: `${SITE_CONFIG.url}/instagram-reels-download`,
      pt: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
    },
  },
  openGraph: {
    title: "Descargar Reels de Instagram Gratis Sin Marca de Agua en HD (Con Audio)",
    description:
      "Descarga Reels de Instagram gratis en HD 1080p sin marca de agua y con audio original. Sin aplicaciones ni registro.",
    url: `${SITE_CONFIG.url}/es/descargar-reels-instagram`,
  },
};

const features = [
  {
    icon: Shield,
    title: "100% Sin Marca de Agua",
    description:
      "Descarga videos MP4 completamente limpios sin el logotipo de Instagram, sin marcas de agua y sin nombres de usuario superpuestos.",
  },
  {
    icon: Music,
    title: "Audio y Música Originales",
    description:
      "Olvídate de los videos mudos o sin sonido. Nuestro sistema extrae y combina las pistas de audio originales, incluyendo música con derechos y tendencias.",
  },
  {
    icon: Video,
    title: "Calidad HD 1080p y 4K",
    description:
      "Descarga en la máxima resolución original disponible (hasta 1080x1920 Full HD a 60fps) conservando colores vivos y máxima nitidez.",
  },
  {
    icon: Lock,
    title: "Sin Registro ni Contraseña",
    description:
      "Privacidad total y anonimato. Nunca te solicitamos credenciales de Instagram, contraseñas ni permisos personales.",
  },
  {
    icon: Smartphone,
    title: "iPhone, Android y PC",
    description:
      "Funciona directamente en Safari para iPhone, Chrome para Android, Windows y Mac sin necesidad de instalar aplicaciones ni APKs.",
  },
  {
    icon: Zap,
    title: "Procesamiento en 3 Segundos",
    description:
      "Nuestros servidores en la nube procesan y empaquetan el video en menos de 3 segundos sin colas de espera ni demoras.",
  },
  {
    icon: Layers,
    title: "Publicaciones Carrusel y Álbumes",
    description:
      "Descarga videos individuales de publicaciones carrusel de Instagram de forma rápida y sencilla.",
  },
  {
    icon: Sparkles,
    title: "Convertir Reels a MP3",
    description:
      "Extrae la pista de audio o música de fondo de cualquier Reel directamente en formato MP3 de alta fidelidad a 320kbps.",
  },
];

const pasos = [
  {
    title: "Copia el enlace del Reel",
    description:
      "Abre la aplicación de Instagram o el sitio web, busca el Reel que deseas descargar, toca el icono de Compartir (el avión de papel) o los tres puntos (···) y selecciona 'Copiar enlace'.",
  },
  {
    title: "Pega el enlace en ReelsGrab",
    description:
      "Abre ReelsGrab en tu navegador y pega la URL en la barra de búsqueda ubicada en la parte superior de esta página.",
  },
  {
    title: "Selecciona el formato o calidad",
    description:
      "Elige entre descargar en video Full HD 1080p sin marca de agua o extraer exclusivamente la pista de audio en formato MP3.",
  },
  {
    title: "Guarda en tu dispositivo",
    description:
      "Haz clic en 'Descargar'. En iPhone Safari, toca la flecha azul para guardar en la app Fotos/Carrete. En Android y PC, se guardará directamente en la carpeta Descargas.",
  },
];

const competitorMatrix = [
  {
    feature: "Sin Marca de Agua",
    reelsgrab: "✅ 100% Limpio (Sin Logo / Usuario)",
    snapinsta: "⚠️ A veces deja borde",
    fastdl: "✅ Limpio",
    saveinsta: "⚠️ Marca periódica",
    nativeApp: "❌ Logotipo grande y usuario",
  },
  {
    feature: "Audio y Música Completa",
    reelsgrab: "✅ Audio Completo (Música Licenciada)",
    snapinsta: "⚠️ Frecuentemente Mudo",
    fastdl: "⚠️ Falla en algunos audios",
    saveinsta: "⚠️ Inconsistente",
    nativeApp: "❌ Elimina música con derechos",
  },
  {
    feature: "Calidad Máxima de Video",
    reelsgrab: "✅ Hasta 1080p Full HD (60fps)",
    snapinsta: "⚠️ Comprime a 720p",
    fastdl: "⚠️ 720p / 1080p",
    saveinsta: "⚠️ Bitrate variable",
    nativeApp: "❌ Fuerte recompresión",
  },
  {
    feature: "Publicidad Invasiva / Popups",
    reelsgrab: "✅ 0% (Sin Popups Engañosos)",
    snapinsta: "❌ Popunders agresivos",
    fastdl: "❌ Múltiples pestañas nuevas",
    saveinsta: "❌ Redirecciones sospechosas",
    nativeApp: "N/A",
  },
  {
    feature: "Iniciar Sesión Obligatorio",
    reelsgrab: "✅ No requiere login",
    snapinsta: "✅ No requiere",
    fastdl: "✅ No requiere",
    saveinsta: "✅ No requiere",
    nativeApp: "❌ Cuenta obligatoria",
  },
  {
    feature: "Guardar en Carrete de iPhone",
    reelsgrab: "✅ 1 Clic Directo en Safari",
    snapinsta: "⚠️ Proceso complejo",
    fastdl: "⚠️ Trampas publicitarias",
    saveinsta: "⚠️ Falla en iOS",
    nativeApp: "⚠️ Solo marcadores en la app",
  },
  {
    feature: "Velocidad de Descarga",
    reelsgrab: "⚡ Menos de 3 segundos",
    snapinsta: "⏳ 8 - 15 segundos",
    fastdl: "⏳ 10 - 20 segundos",
    saveinsta: "⏳ 12 - 25 segundos",
    nativeApp: "⚡ Rápido (solo en la app)",
  },
  {
    feature: "Seguridad y Cero Malware",
    reelsgrab: "🛡️ 100% Seguro (Sin APKs ni extensiones)",
    snapinsta: "⚠️ Falsos avisos de virus",
    fastdl: "⚠️ Notificaciones spam",
    saveinsta: "⚠️ Enlaces dudosos",
    nativeApp: "🛡️ Seguro",
  },
];

const videoResolutions = [
  {
    resolution: "1080p Full HD (1080x1920)",
    aspectRatio: "9:16 Vertical",
    fps: "30 / 60 fps",
    bitrate: "3,500 - 6,000 kbps",
    bestFor: "Republicar en TikTok, YouTube Shorts, pantallas 4K y archivo profesional",
  },
  {
    resolution: "720p HD (720x1280)",
    aspectRatio: "9:16 Vertical",
    fps: "30 fps",
    bitrate: "1,500 - 2,500 kbps",
    bestFor: "Compartir por WhatsApp, historias y ahorro de datos móviles",
  },
  {
    resolution: "480p Estándar (480x854)",
    aspectRatio: "9:16 Vertical",
    fps: "30 fps",
    bitrate: "800 - 1,200 kbps",
    bestFor: "Vista previa rápida, conexiones lentas de internet",
  },
  {
    resolution: "Solo Audio (MP3 / AAC)",
    aspectRatio: "N/A (Audio)",
    fps: "N/A",
    bitrate: "128 - 320 kbps",
    bestFor: "Extracción de canciones, tonos de llamada y podcast",
  },
];

const preguntas = [
  {
    q: "¿Cómo descargar Reels de Instagram sin marca de agua gratis?",
    a: "Copia el enlace del Reel en Instagram, pégalo en la barra de búsqueda de ReelsGrab y haz clic en 'Descargar Reel'. Nuestro servidor extrae el video original directamente de los servidores de Instagram, eliminando cualquier logotipo o nombre de usuario superpuesto sin comprimir la calidad.",
  },
  {
    q: "¿Por qué los Reels descargados con otras herramientas no tienen sonido?",
    a: "Instagram utiliza la tecnología de transmisión DASH, donde el video y el audio se almacenan en pistas separadas. La mayoría de los descargadores gratuitos solo toman el video, dejando el archivo mudo. Además, cuando descargas desde la propia app de Instagram, la plataforma elimina la música con derechos de autor. ReelsGrab une el video y el audio original automáticamente para que tu descarga siempre tenga sonido perfecto.",
  },
  {
    q: "¿Cómo guardar Reels de Instagram en el carrete de fotos del iPhone?",
    a: "Copia el enlace del Reel, abre Safari y entra en ReelsGrab. Pega el enlace y toca 'Descargar Reel'. Cuando Safari pregunte si deseas descargar el archivo, toca 'Descargar'. Luego, toca la flecha azul de descargas en la barra de direcciones de Safari, abre el video, toca el botón de compartir de iOS (cuadrado con flecha hacia arriba) y selecciona 'Guardar video'. El video aparecerá directamente en tu app Fotos de Apple.",
  },
  {
    q: "¿Cómo descargar Reels de Instagram en teléfonos Android?",
    a: "En la app de Instagram, toca el icono de Compartir en el Reel y selecciona 'Copiar enlace'. Abre Chrome o tu navegador favorito, entra en ReelsGrab, pega el enlace y haz clic en Descargar. El video se guardará al instante en la carpeta 'Descargas' de tu dispositivo y aparecerá en tu Galería o Google Fotos.",
  },
  {
    q: "¿Se pueden descargar Reels en calidad Full HD 1080p?",
    a: "Sí. Si el creador subió el video en resolución 1080p Full HD (1080x1920), ReelsGrab te proporcionará el archivo exacto en 1080p con el bitrate más alto disponible.",
  },
  {
    q: "¿Es necesario instalar alguna aplicación o extensión?",
    a: "No. ReelsGrab funciona 100% online desde cualquier navegador web. No necesitas instalar programas sospechosos, APKs ni extensiones que pongan en riesgo tu dispositivo.",
  },
  {
    q: "¿Puedo descargar Reels de cuentas privadas de Instagram?",
    a: "Por motivos de privacidad y seguridad de la API de Instagram, ReelsGrab solo permite descargar Reels y videos de perfiles públicos.",
  },
  {
    q: "¿Puedo descargar solo el audio o música de un Reel de Instagram?",
    a: "¡Sí! Al pegar el enlace en ReelsGrab, verás la opción de descargar 'Audio MP3'. Esto extraerá la música o sonido de fondo en formato MP3 de alta fidelidad a 320kbps.",
  },
  {
    q: "¿Existe algún límite diario de descargas?",
    a: "No hay límites. Puedes descargar todos los Reels, videos e historias de Instagram que desees de manera 100% gratuita y sin restricciones.",
  },
  {
    q: "¿Es legal descargar Reels de Instagram?",
    a: "Descargar Reels para visualización personal sin conexión, investigación o referencia educativa es considerado uso legítimo. Sin embargo, si deseas republicar o utilizar el contenido comercialmente, debes obtener la autorización del creador original y darle los créditos correspondientes.",
  },
];

const relatedTools = [
  { emoji: "📹", label: "Descargar Videos Facebook", href: "/es/descargar-videos-facebook", description: "Descarga videos de Facebook en HD" },
  { emoji: "📘", label: "Descargar Reels Facebook", href: "/es/descargar-reels-facebook", description: "Descarga Reels de FB sin marca de agua" },
  { emoji: "🎵", label: "YouTube a MP3 (ES)", href: "/es/youtube-a-mp3", description: "Convierte videos de YouTube a MP3 320kbps" },
  { emoji: "🎬", label: "YouTube a MP4 (ES)", href: "/es/youtube-a-mp4", description: "Descarga videos de YouTube en 1080p HD" },
  { emoji: "🎧", label: "Reels a MP3", href: "/reels-to-mp3", description: "Extrae audio de cualquier Reel" },
  { emoji: "🇬🇧", label: "English Version", href: "/instagram-reels-download", description: "Download Instagram Reels in HD" },
];

export default function DescargarReelsInstagramPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Inicio", url: "/" },
          { name: "Descargar Reels de Instagram", url: "/es/descargar-reels-instagram" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Descargador de Reels de Instagram",
          "Descarga Reels de Instagram gratis en HD 1080p sin marca de agua y con audio original online.",
          `${SITE_CONFIG.url}/es/descargar-reels-instagram`,
          "4.9",
          "164200"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Cómo Descargar Reels de Instagram Sin Marca de Agua",
          "Guía paso a paso para descargar Reels de Instagram en calidad HD 1080p con audio en iPhone, Android y PC.",
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
              <li className="text-slate-300">Descargar Reels de Instagram</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-medium mb-5">
            <Film size={14} /> Descargador de Reels de Instagram | HD 1080p Sin Marca de Agua
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Descargar Reels de Instagram{" "}
            <span className="gradient-text">Sin Marca de Agua (Con Audio)</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Descarga Reels de Instagram en <strong className="text-white">HD 1080p</strong> sin marca de agua,
            con audio y música original completa. Rápido, 100% gratis, sin login. Compatible con iPhone, Android y PC.
          </p>

          <DownloadTool
            platform="instagram"
            placeholder="Pega el enlace del Reel de Instagram aquí... (instagram.com/reel/...)"
            buttonLabel="Descargar Reel"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/es/youtube-a-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎵 YouTube a MP3 (ES)
            </a>
            <a href="/es/youtube-a-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎬 YouTube a MP4 (ES)
            </a>
            <a href="/es/descargar-videos-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📹 Descargar Videos Facebook
            </a>
            <a href="/es/descargar-reels-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📘 Descargar Reels Facebook
            </a>
            <a href="/instagram-reels-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
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
            ¿Por Qué ReelsGrab es el Mejor Descargador de Reels de Instagram?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Diseñado para solucionar todos los problemas de los descargadores tradicionales: sin marcas de agua molestas, con audio completo y sin anuncios engañosos.
          </p>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO STEPS */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Cómo Descargar Reels de Instagram en 4 Pasos Sencillos
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Guarda cualquier Reel público de Instagram en tu teléfono o computadora en cuestión de segundos.
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
              La Guía Definitiva para Descargar Reels de Instagram Sin Marca de Agua
            </h2>
            <p>
              Los <strong>Instagram Reels</strong> se han convertido en el formato favorito de millones de personas para disfrutar
              de entretenimiento rápido, recetas de cocina, tutoriales de fitness, comedia, noticias y creatividad visual.
              Sin embargo, Instagram impone fuertes restricciones a la hora de querer guardar y exportar estos videos fuera de su aplicación.
            </p>
            <p>
              Si utilizas el botón &quot;Guardar&quot; que viene dentro de Instagram, el video solo queda archivado dentro de tu cuenta.
              Esto significa que no puedes verlo sin conexión a internet, no puedes compartirlo en WhatsApp, Telegram o TikTok, y si el creador
              borra la publicación, tu guardado desaparece. Por otro lado, si usas la opción de descarga en las historias de Instagram,
              el video resultante tiene una enorme marca de agua y, lo peor de todo, <strong>pierde el audio de las canciones con derechos de autor</strong>.
            </p>
            <p>
              <strong>ReelsGrab</strong> soluciona todos estos inconvenientes. Es una plataforma web gratuita que te permite descargar cualquier
              Reel público de Instagram en <strong>calidad original Full HD 1080p</strong>, totalmente <strong>sin marcas de agua</strong> y con
              el <strong>100% del audio original</strong>.
            </p>
          </div>

          {/* SECCIÓN 2: El misterio del audio resuelto */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                <Music size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                ¿Por Qué Otros Descargadores Entregan Videos Sin Sonido?
              </h3>
            </div>
            <p>
              Muchos usuarios se quejan de que al descargar un Reel en otros sitios web, el video se reproduce en silencio.
              Esto ocurre porque Instagram transmite videos mediante la tecnología <strong>DASH (Dynamic Adaptive Streaming over HTTP)</strong>,
              almacenando el video y el audio en servidores y archivos completamente independientes.
            </p>
            <p>
              Las páginas de descarga de baja calidad solo obtienen el enlace del video, omitiendo la pista de audio.
              En <strong>ReelsGrab</strong>, nuestros servidores en la nube unen y sincronizan el flujo de video en alta definición
              con la pista de audio AAC original en tiempo real, garantizando que tu descarga conserve toda la música y efectos sonoros.
            </p>
          </div>

          {/* SECCIÓN 3: Tabla comparativa */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabla Comparativa: ReelsGrab vs. Otros Descargadores de Reels
            </h3>
            <p className="mb-6">
              A continuación, compara las características de ReelsGrab frente a opciones como SnapInsta, FastDL, SaveInsta y la app oficial:
            </p>

            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Característica</th>
                    <th className="p-3.5 font-semibold text-pink-400 bg-pink-950/20">ReelsGrab</th>
                    <th className="p-3.5 font-semibold">SnapInsta</th>
                    <th className="p-3.5 font-semibold">FastDL</th>
                    <th className="p-3.5 font-semibold">SaveInsta</th>
                    <th className="p-3.5 font-semibold">App Oficial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {competitorMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 font-semibold text-emerald-400 bg-pink-950/20">{row.reelsgrab}</td>
                      <td className="p-3.5 text-slate-400">{row.snapinsta}</td>
                      <td className="p-3.5 text-slate-400">{row.fastdl}</td>
                      <td className="p-3.5 text-slate-400">{row.saveinsta}</td>
                      <td className="p-3.5 text-slate-400">{row.nativeApp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECCIÓN 4: Tutoriales por dispositivo */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Guía Paso a Paso: Cómo Descargar Reels de Instagram en Cualquier Dispositivo
            </h3>

            {/* iPhone */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Reels de Instagram en iPhone y iPad (iOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Abre la app de Instagram y dirígete al Reel que deseas guardar. Toca el botón Compartir y elige <strong>&quot;Copiar enlace&quot;</strong>.</li>
                <li>Abre Safari e ingresa a <code>www.reelsgrab.net/es/descargar-reels-instagram</code>.</li>
                <li>Pega el enlace en el campo de entrada y toca <strong>&quot;Descargar Reel&quot;</strong>.</li>
                <li>Toca <strong>&quot;Descargar Video HD&quot;</strong>. Safari mostrará un aviso de confirmación; pulsa <strong>Descargar</strong>.</li>
                <li>Toca la flecha azul de descargas en la barra de direcciones de Safari, abre el video descargado, toca el botón de compartir de iOS y elige <strong>&quot;Guardar video&quot;</strong> para que se guarde en tu Carrete/Fotos.</li>
              </ol>
            </div>

            {/* Android */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Reels de Instagram en Android (Samsung, Xiaomi, Motorola)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>En Instagram, toca los tres puntos o el avión de papel en el Reel y selecciona <strong>&quot;Copiar enlace&quot;</strong>.</li>
                <li>Abre Chrome o tu navegador móvil y entra en ReelsGrab. Pega el enlace y pulsa <strong>&quot;Descargar Reel&quot;</strong>.</li>
                <li>Elige la opción HD 1080p y toca Descargar. El archivo se guardará al instante en tu carpeta <code>/Descargas/</code> y aparecerá en tu Galería de imágenes.</li>
              </ol>
            </div>

            {/* PC y Mac */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Laptop size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Reels de Instagram en PC y Mac (Windows, macOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Entra a <code>instagram.com</code> desde tu navegador de escritorio y localiza el Reel.</li>
                <li>Copia el enlace de la barra de direcciones o desde el menú de tres puntos del post.</li>
                <li>Pega la URL en ReelsGrab y haz clic en <strong>&quot;Descargar Reel&quot;</strong>.</li>
                <li>Haz clic en Descargar HD y el archivo MP4 se guardará directamente en tu carpeta de Descargas, listo para ser editado en Premiere, DaVinci o CapCut.</li>
              </ol>
            </div>
          </div>

          {/* SECCIÓN 5: Resoluciones */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Especificaciones Técnicas: Resoluciones y Calidad de Video
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Perfil de Resolución</th>
                    <th className="p-3.5 font-semibold">Relación de Aspecto</th>
                    <th className="p-3.5 font-semibold">Fotogramas (FPS)</th>
                    <th className="p-3.5 font-semibold">Tasa de Bits</th>
                    <th className="p-3.5 font-semibold">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {videoResolutions.map((res, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{res.resolution}</td>
                      <td className="p-3.5 text-slate-400">{res.aspectRatio}</td>
                      <td className="p-3.5 text-slate-400">{res.fps}</td>
                      <td className="p-3.5 text-slate-400">{res.bitrate}</td>
                      <td className="p-3.5 text-slate-300">{res.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECCIÓN 6: Estrategia para creadores */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Estrategia de Reutilización de Contenido para Creadores
            </h3>
            <p>
              Los algoritmos de TikTok y YouTube Shorts penalizan activamente los videos que contienen logotipos o marcas de agua
              visibles de plataformas competidoras. Si descargas un Reel con el logotipo de Instagram y lo subes a TikTok, tu video
              recibirá muchas menos impresiones en la página &quot;Para Ti&quot;.
            </p>
            <p>
              Con ReelsGrab, obtienes el video original completamente limpio, lo que te permite redistribuir tu contenido
              en TikTok, Shorts y Facebook Reels manteniendo el máximo potencial de alcance orgánico.
            </p>
          </div>

          {/* SECCIÓN 7: Conclusión */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Comienza a Descargar Reels de Instagram con ReelsGrab
            </h3>
            <p>
              ReelsGrab es la solución más rápida, segura y cómoda para descargar Reels de Instagram sin marcas de agua y con
              audio completo. ¡Guarda esta página en tus marcadores y descarga tus videos favoritos ahora mismo!
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
          Preguntas Frecuentes | Descargar Reels de Instagram
        </h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
