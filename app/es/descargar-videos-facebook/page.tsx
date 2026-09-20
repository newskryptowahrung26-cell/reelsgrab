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
  Video,
  Zap,
  Lock,
  Music,
  Globe,
  Download,
  Film,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  Share2,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Descargar Videos de Facebook Gratis",
  description:
    "Descarga videos de Facebook gratis en HD 1080p y 4K sin programas ni anuncios. Descargador online rápido, seguro y con audio original para PC y móvil.",
  keywords: [
    "descargar videos de facebook",
    "descargar video de facebook",
    "descargador de videos de facebook",
    "bajar videos de facebook",
    "bajar video de facebook",
    "descargar videos de facebook gratis",
    "descargar videos de facebook sin programas",
    "descargar videos facebook hd",
    "descargar videos facebook 1080p",
    "descargar videos facebook 4k",
    "como descargar videos de facebook",
    "descargar videos facebook iphone",
    "descargar videos facebook android",
    "fdown alternativa",
    "fbdown alternativa",
    "snapsave alternativa",
    "getfvid alternativa",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/descargar-videos-facebook`,
    languages: {
      en: `${SITE_CONFIG.url}/facebook-video-download`,
      es: `${SITE_CONFIG.url}/es/descargar-videos-facebook`,
      pt: `${SITE_CONFIG.url}/pt/baixar-video-facebook`,
      "x-default": `${SITE_CONFIG.url}/facebook-video-download`,
    },
  },
  openGraph: {
    title: "Descargar Videos de Facebook Gratis en HD | ReelsGrab",
    description:
      "Descarga videos de Facebook gratis en HD 1080p y 4K sin programas ni anuncios. Descargador online rápido, seguro y con audio original para PC y móvil.",
    url: `${SITE_CONFIG.url}/es/descargar-videos-facebook`,
    type: "website",
    locale: "es_ES",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    icon: Film,
    title: "Calidad Full HD 1080p y 4K",
    description:
      "Descarga videos de Facebook en su máxima calidad original disponible: 1080p Full HD, 2K o 4K con la tasa de bits más alta.",
  },
  {
    icon: Music,
    title: "Audio y Sonido Original Intacto",
    description:
      "Olvídate de los videos mudos. Nuestros servidores combinan los flujos DASH de audio y video para entregarte un archivo MP4 con sonido perfecto.",
  },
  {
    icon: Shield,
    title: "100% Sin Marca de Agua",
    description:
      "Obtén archivos limpios sin logotipos de Facebook, marcas de agua ni elementos publicitarios superpuestos.",
  },
  {
    icon: Video,
    title: "Todos los Tipos de Video",
    description:
      "Compatible con videos de Facebook Watch, publicaciones del muro, Reels, transmisiones en vivo finalizadas y videos de grupos públicos.",
  },
  {
    icon: Lock,
    title: "Sin Registro ni Contraseña",
    description:
      "Descarga de forma totalmente anónima. Nunca solicitamos tu contraseña de Facebook ni acceso a tus datos personales.",
  },
  {
    icon: Smartphone,
    title: "iPhone, Android y Computadora",
    description:
      "Funciona directamente en el navegador de tu celular (Safari o Chrome) y en computadoras Windows o Mac sin instalar software.",
  },
  {
    icon: Zap,
    title: "Descargas Instantáneas en 3s",
    description:
      "Servidores de alta velocidad procesan y preparan tu enlace de descarga en menos de 3 segundos sin demoras.",
  },
  {
    icon: Sparkles,
    title: "Convertir Video a MP3",
    description:
      "Extrae la pista de música, discursos o podcasts de cualquier video de Facebook directamente en audio MP3 a 320kbps.",
  },
];

const pasos = [
  {
    title: "Copia el enlace del video",
    description:
      "Entra a Facebook, busca el video que deseas guardar, haz clic en el botón Compartir o en los tres puntos (···) y selecciona 'Copiar enlace'.",
  },
  {
    title: "Pega el enlace en ReelsGrab",
    description:
      "Abre ReelsGrab en tu navegador y pega la URL en el campo de entrada ubicado en la parte superior de esta página.",
  },
  {
    title: "Selecciona la calidad deseada",
    description:
      "Elige entre resolución Full HD 1080p, 720p HD, calidad estándar o extraer únicamente la pista de audio en formato MP3.",
  },
  {
    title: "Descarga y guarda el archivo",
    description:
      "Haz clic en 'Descargar'. En iPhone Safari se guardará en tu app Archivos/Fotos, y en Android o PC irá directo a tu carpeta de Descargas.",
  },
];

const competitorMatrix = [
  {
    feature: "Audio Completo (DASH Muxed)",
    reelsgrab: "✅ Audio Completo (Sin Videos Mudos)",
    fdown: "⚠️ Frecuentemente Mudo en 1080p",
    snapsave: "⚠️ Desfase de audio habitual",
    getfvid: "❌ Audio en archivo separado",
    nativeApp: "❌ No permite exportar videos",
  },
  {
    feature: "Calidad Máxima de Video",
    reelsgrab: "✅ Hasta 1080p / 4K HD",
    fdown: "⚠️ Mayormente 720p HD",
    snapsave: "⚠️ Bitrate comprimido",
    getfvid: "⚠️ Máximo 720p",
    nativeApp: "❌ Calidad baja en app",
  },
  {
    feature: "Sin Marca de Agua",
    reelsgrab: "✅ 100% Limpio",
    fdown: "⚠️ Agrega marcas a veces",
    snapsave: "⚠️ Marca periódica",
    getfvid: "⚠️ Básico",
    nativeApp: "N/A",
  },
  {
    feature: "Publicidad Invasiva / Popups",
    reelsgrab: "✅ 0% (Sin Popups Engañosos)",
    fdown: "❌ Popunders agresivos",
    snapsave: "❌ Múltiples pestañas nuevas",
    getfvid: "❌ Banners engañosos de virus",
    nativeApp: "N/A",
  },
  {
    feature: "Iniciar Sesión Requerido",
    reelsgrab: "✅ No requiere login",
    fdown: "✅ No requiere",
    snapsave: "✅ No requiere",
    getfvid: "✅ No requiere",
    nativeApp: "❌ Cuenta obligatoria",
  },
  {
    feature: "Guardar en Carrete de iPhone",
    reelsgrab: "✅ Descarga directa en Safari",
    fdown: "⚠️ Falla frecuentemente en iOS",
    snapsave: "⚠️ Trampas de anuncios",
    getfvid: "⚠️ Proceso confuso",
    nativeApp: "⚠️ Solo marcadores en app",
  },
  {
    feature: "Velocidad de Procesamiento",
    reelsgrab: "⚡ Menos de 3 segundos",
    fdown: "⏳ 10 - 25 segundos",
    snapsave: "⏳ 8 - 20 segundos",
    getfvid: "⏳ 12 - 30 segundos",
    nativeApp: "⚡ Rápido (solo en app)",
  },
  {
    feature: "Seguridad y Cero Malware",
    reelsgrab: "🛡️ 100% Seguro (Sin APKs ni programas)",
    fdown: "⚠️ Falsos avisos de actualización",
    snapsave: "⚠️ Notificaciones no deseadas",
    getfvid: "⚠️ Redirecciones sospechosas",
    nativeApp: "🛡️ Seguro",
  },
];

const videoResolutions = [
  {
    resolution: "4K Ultra HD (2160p / 3840x2160)",
    aspectRatio: "16:9 Panorámico / 9:16 Vertical",
    fps: "60 fps",
    bitrate: "12,000 - 20,000 kbps",
    bestFor: "Televisores 4K, edición profesional y archivo de máxima calidad",
  },
  {
    resolution: "1080p Full HD (1920x1080 / 1080x1920)",
    aspectRatio: "16:9 Panorámico / 9:16 Vertical",
    fps: "30 / 60 fps",
    bitrate: "3,500 - 6,500 kbps",
    bestFor: "Republicar en YouTube, Instagram, monitores de computadora",
  },
  {
    resolution: "720p HD (1280x720 / 720x1280)",
    aspectRatio: "16:9 Panorámico / 9:16 Vertical",
    fps: "30 fps",
    bitrate: "1,500 - 2,800 kbps",
    bestFor: "Compartir por WhatsApp, visualización en teléfonos móviles",
  },
  {
    resolution: "480p Estándar (SD)",
    aspectRatio: "16:9 Panorámico / 9:16 Vertical",
    fps: "30 fps",
    bitrate: "600 - 1,200 kbps",
    bestFor: "Conexiones lentas de internet y ahorro de espacio en disco",
  },
  {
    resolution: "Solo Audio (MP3)",
    aspectRatio: "N/A (Audio)",
    fps: "N/A",
    bitrate: "128 - 320 kbps",
    bestFor: "Podcasts, discursos, música y conferencias",
  },
];

const preguntas = [
  {
    q: "¿Cómo descargar videos de Facebook gratis sin programas?",
    a: "Copia el enlace del video de Facebook, pégalo en la barra de búsqueda de ReelsGrab y haz clic en 'Descargar Video'. Selecciona la calidad deseada (1080p Full HD recomendada) y el archivo se guardará directamente en tu dispositivo sin instalar ninguna aplicación.",
  },
  {
    q: "¿Por qué los videos descargados en otras páginas no tienen sonido?",
    a: "Facebook utiliza el protocolo DASH para transmitir videos en alta definición (720p, 1080p y 4K), separando la pista de video de la pista de audio. Muchos sitios web gratuitos solo descargan el video, dejando el archivo en silencio. ReelsGrab une automáticamente ambas pistas en tiempo real mediante tecnología en la nube para que disfrutes de audio completo y nítido.",
  },
  {
    q: "¿Cómo descargar videos de Facebook en iPhone?",
    a: "En la app de Facebook, toca Compartir en el video y selecciona 'Copiar enlace'. Abre Safari, entra en ReelsGrab, pega el enlace y pulsa Descargar. Toca 'Descargar Video HD' y confirma la descarga en Safari. Luego, pulsa la flecha azul de descargas, abre el video y selecciona 'Guardar video' para enviarlo a tu app Fotos/Carrete.",
  },
  {
    q: "¿Cómo descargar videos de Facebook en Android?",
    a: "Toca los tres puntos o Compartir en el video de Facebook y elige 'Copiar enlace'. Abre Chrome, accede a ReelsGrab, pega la URL y haz clic en Descargar. El archivo se guardará automáticamente en tu carpeta de Descargas y aparecerá en tu Galería.",
  },
  {
    q: "¿Se pueden descargar videos de Facebook en calidad 4K o 1080p?",
    a: "Sí. Si el video original fue grabado y subido en calidad 1080p o 4K, ReelsGrab te ofrecerá la opción de descarga en esa resolución exacta con la tasa de bits más alta posible.",
  },
  {
    q: "¿Se pueden descargar transmisiones en vivo de Facebook?",
    a: "¡Sí! Una vez que una transmisión en vivo de Facebook finaliza y queda publicada en la página o perfil, puedes copiar su enlace y descargar la repetición completa con ReelsGrab.",
  },
  {
    q: "¿Cómo descargar videos privados de Facebook?",
    a: "Para videos publicados en grupos cerrados o con privacidad restringida que tengas permiso de ver, utiliza nuestra herramienta especializada: el Descargador de Videos Privados de Facebook.",
  },
  {
    q: "¿Puedo extraer solo el audio de un video de Facebook?",
    a: "Sí. Al procesar el enlace en ReelsGrab, elige la opción 'Audio MP3' para extraer únicamente la pista de sonido en formato MP3 de alta fidelidad a 320kbps.",
  },
  {
    q: "¿Es seguro usar ReelsGrab?",
    a: "Completamente seguro. No solicitamos contraseñas, no instalamos software ni APKs en tu dispositivo y no guardamos tus datos personales. Todo el proceso se realiza de manera anónima en tu navegador.",
  },
  {
    q: "¿Hay algún límite en la cantidad de descargas?",
    a: "No hay límites. Puedes descargar todos los videos de Facebook que quieras, cuantas veces lo necesites y sin ningún costo.",
  },
];

const relatedTools = [
  { emoji: "📘", label: "Descargar Reels Facebook", href: "/es/descargar-reels-facebook", description: "Descarga Reels de FB sin marca de agua" },
  { emoji: "📸", label: "Descargar Reels Instagram", href: "/es/descargar-reels-instagram", description: "Descarga Reels de IG en 1080p" },
  { emoji: "🎵", label: "YouTube a MP3 (ES)", href: "/es/youtube-a-mp3", description: "Convierte videos de YouTube a MP3 320kbps" },
  { emoji: "🎬", label: "YouTube a MP4 (ES)", href: "/es/youtube-a-mp4", description: "Descarga videos de YouTube en 1080p HD" },
  { emoji: "🔒", label: "Video Privado Facebook", href: "/facebook-private-video-download", description: "Descarga videos privados de FB" },
  { emoji: "🇬🇧", label: "English Version", href: "/facebook-video-download", description: "Download Facebook Videos in HD" },
];

export default function DescargarVideosFacebookPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang = 'es';" }} />
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Inicio", url: "/" },
          { name: "Descargar Videos de Facebook", url: "/es/descargar-videos-facebook" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Descargador de Videos de Facebook",
          "Descarga videos de Facebook gratis en HD 1080p y 4K sin programas y con audio original online.",
          `${SITE_CONFIG.url}/es/descargar-videos-facebook`,
          "4.9",
          "178500"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Cómo Descargar Videos de Facebook en HD",
          "Guía paso a paso para descargar cualquier video de Facebook en resolución HD 1080p con audio en iPhone, Android y PC.",
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
              <li className="text-slate-300">Descargar Videos de Facebook</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-5">
            <Film size={14} /> Descargador de Videos de Facebook | HD 1080p y 4K Sin Marca de Agua
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Descargar Videos de Facebook{" "}
            <span className="gradient-text">Gratis HD Sin Programas</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Descarga cualquier video de Facebook en <strong className="text-white">HD 1080p y 4K</strong> gratis:
            videos del muro, Facebook Watch, Reels y repeticiones de En Vivo. Sin programas, sin registro y con audio original completo.
          </p>

          <DownloadTool
            platform="facebook"
            placeholder="Pega el enlace del video de Facebook aquí... (facebook.com/... o fb.watch/...)"
            buttonLabel="Descargar Video"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/es/descargar-reels-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📘 Descargar Reels Facebook
            </a>
            <a href="/es/descargar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📸 Descargar Reels Instagram
            </a>
            <a href="/es/youtube-a-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎵 YouTube a MP3 (ES)
            </a>
            <a href="/es/youtube-a-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎬 YouTube a MP4 (ES)
            </a>
            <a href="/facebook-video-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
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
            ¿Por Qué ReelsGrab es el Mejor Descargador de Videos de Facebook?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Supera todas las limitaciones de las herramientas antiguas: sin publicidad invasiva, audio siempre sincronizado y verdadera calidad 1080p y 4K.
          </p>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO STEPS */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Cómo Descargar Videos de Facebook en 4 Pasos Rápidos
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Guarda cualquier video público de Facebook en tu dispositivo en menos de 15 segundos.
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
              Guía Completa para Descargar Videos de Facebook en Alta Definición
            </h2>
            <p>
              Facebook alberga una de las bibliotecas de video más grandes del planeta. Desde documentales y series en Facebook Watch
              hasta tutoriales de cocina, transmisiones en vivo, clips cómicos y coberturas de noticias, millones de videos interesantes
              se publican a diario.
            </p>
            <p>
              Sin embargo, Facebook no ofrece una opción oficial para descargar estos videos y guardarlos en tu almacenamiento local.
              Al hacer clic en &quot;Guardar video&quot;, únicamente se añade a tus marcadores de Facebook. Si no cuentas con conexión a internet
              o el autor borra el video, no podrás volver a verlo.
            </p>
            <p>
              <strong>ReelsGrab</strong> te brinda una solución moderna, limpia y potente para descargar cualquier video de Facebook en
              <strong>resolución original 1080p Full HD y 4K</strong>, <strong>sin marcas de agua</strong> y con <strong>audio completo</strong>.
            </p>
          </div>

          {/* SECCIÓN 2: La arquitectura DASH de Facebook */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Music size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                ¿Por Qué los Videos en HD de Facebook Suelen Descargarse Sin Audio?
              </h3>
            </div>
            <p>
              Para videos de baja resolución (SD 360p o 480p), Facebook almacena el video y el audio juntos en un solo archivo.
              No obstante, para calidades de alta definición (720p, 1080p y 4K), Facebook recurre a la tecnología <strong>DASH</strong>,
              separando el archivo de video de alta definición del archivo de audio estéreo AAC en servidores diferentes.
            </p>
            <p>
              La gran mayoría de los descargadores gratuitos de internet carecen de la capacidad de procesar y unir estos dos archivos.
              Por ello, le entregan al usuario un archivo de video en alta resolución pero totalmente mudo.
              En <strong>ReelsGrab</strong>, nuestros servidores en la nube combinan automáticamente el video en 1080p/4K con el audio AAC
              original en menos de 3 segundos, entregándote un archivo MP4 sincronizado y con sonido de máxima calidad.
            </p>
          </div>

          {/* SECCIÓN 3: Tabla comparativa */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabla Comparativa: ReelsGrab vs. Otros Descargadores de Facebook
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Característica</th>
                    <th className="p-3.5 font-semibold text-blue-400 bg-blue-950/20">ReelsGrab</th>
                    <th className="p-3.5 font-semibold">FDown (FBDown)</th>
                    <th className="p-3.5 font-semibold">SnapSave</th>
                    <th className="p-3.5 font-semibold">Getfvid</th>
                    <th className="p-3.5 font-semibold">App Oficial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {competitorMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 font-semibold text-emerald-400 bg-blue-950/20">{row.reelsgrab}</td>
                      <td className="p-3.5 text-slate-400">{row.fdown}</td>
                      <td className="p-3.5 text-slate-400">{row.snapsave}</td>
                      <td className="p-3.5 text-slate-400">{row.getfvid}</td>
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
              Cómo Descargar Videos de Facebook en Cualquier Dispositivo
            </h3>

            {/* iPhone */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Videos de Facebook en iPhone y iPad (iOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>En la app de Facebook, busca el video deseado, toca Compartir y pulsa <strong>&quot;Copiar enlace&quot;</strong>.</li>
                <li>Abre Safari e ingresa a <code>www.reelsgrab.net/es/descargar-videos-facebook</code>.</li>
                <li>Pega el enlace en el campo de entrada y toca <strong>&quot;Descargar Video&quot;</strong>.</li>
                <li>Toca <strong>&quot;Descargar Video HD&quot;</strong> y confirma la descarga en el aviso de Safari.</li>
                <li>Toca la flecha azul de descargas en Safari, abre el video y selecciona <strong>&quot;Guardar video&quot;</strong> para que se guarde en tu Carrete/Fotos.</li>
              </ol>
            </div>

            {/* Android */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Videos de Facebook en Android (Samsung, Xiaomi, Motorola)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Toca Compartir en el video de Facebook y selecciona <strong>&quot;Copiar enlace&quot;</strong>.</li>
                <li>Abre Chrome o tu navegador móvil, entra en ReelsGrab y pega el enlace.</li>
                <li>Selecciona la opción 1080p y toca Descargar. El video se guardará en tu carpeta de Descargas y aparecerá en tu Galería.</li>
              </ol>
            </div>

            {/* PC y Mac */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Laptop size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Cómo Descargar Videos de Facebook en PC y Mac (Windows, macOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Abre <code>facebook.com</code> en tu navegador de computadora y busca el video.</li>
                <li>Copia el enlace directamente de la barra de direcciones o haz clic derecho sobre el video para copiar la URL.</li>
                <li>Pega el enlace en ReelsGrab y haz clic en <strong>&quot;Descargar Video&quot;</strong>.</li>
                <li>Haz clic en Descargar HD y el archivo MP4 se guardará directamente en tu carpeta de Descargas.</li>
              </ol>
            </div>
          </div>

          {/* SECCIÓN 5: Resoluciones */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Especificaciones Técnicas: Resoluciones de Video de Facebook
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

          {/* SECCIÓN 6: Conclusión */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Comienza a Descargar Videos de Facebook con ReelsGrab
            </h3>
            <p>
              ReelsGrab te proporciona la experiencia más limpia, veloz y confiable de descarga de videos de Facebook en internet.
              Sin programas, sin anuncios engañosos y con audio original completo. ¡Pega tu enlace arriba y descarga tu primer video ahora!
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
          Preguntas Frecuentes | Descargador de Videos de Facebook
        </h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
