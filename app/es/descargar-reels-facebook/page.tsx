import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Descargar Reels de Facebook Gratis",
  description:
    "Descarga Reels de Facebook gratis en HD 1080p sin marca de agua. Descargador de Reels de Facebook online: sin login, rápido, con audio original.",
  keywords: [
    "descargar reels de facebook", "bajar reels de facebook",
    "descargador de reels de facebook", "descargar reel facebook",
    "descargar reels facebook hd", "como descargar reels de facebook",
    "fb reels descargar", "descargar audio reel facebook",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/descargar-reels-facebook`,
    languages: {
      en: `${SITE_CONFIG.url}/facebook-reels-download`,
      es: `${SITE_CONFIG.url}/es/descargar-reels-facebook`,
      "x-default": `${SITE_CONFIG.url}/facebook-reels-download`,
    },
  },
  openGraph: {
    title: "Descargar Reels de Facebook Gratis | ReelsGrab",
    description:
      "Descarga Reels de Facebook gratis en HD 1080p sin marca de agua. Descargador de Reels de Facebook online: sin login, rápido, con audio original.",
    url: `${SITE_CONFIG.url}/es/descargar-reels-facebook`,
    type: "website",
    locale: "es_ES",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const pasos = [
  { title: "Encuentra el Reel en Facebook", description: "Abre Facebook, navega hasta el Reel que quieres descargar y toca el menú de tres puntos." },
  { title: "Copia el enlace del Reel", description: "Selecciona 'Copiar enlace'. En escritorio, copia la URL de la barra de direcciones." },
  { title: "Pega el enlace aquí y descarga", description: "Pega la URL en el campo de arriba y haz clic en 'Descargar Reel'." },
  { title: "Elige calidad y guarda", description: "Selecciona HD 1080p, 720p o audio MP3 y el archivo se descarga directamente." },
];

const preguntas = [
  { q: "¿Cómo descargar Reels de Facebook gratis?", a: "Copia el enlace del Reel de Facebook, pégalo en la herramienta de arriba y haz clic en Descargar. Selecciona HD 1080p: es completamente gratis sin necesidad de login." },
  { q: "¿Puedo descargar Reels de Facebook sin marca de agua?", a: "Sí. ReelsGrab descarga los Reels de Facebook en su calidad original sin añadir ninguna marca de agua. El archivo de video está limpio y listo para compartir." },
  { q: "¿Cómo descargar Reels de Facebook en el iPhone?", a: "Copia el enlace del Reel desde Facebook, pégalo aquí y toca Descargar HD. En Safari, el video se guarda en tu app Archivos. Desde ahí puedes moverlo a la fototeca." },
  { q: "¿Puedo extraer el audio de un Reel de Facebook como MP3?", a: "Sí. Después de pegar el enlace, haz clic en Descargar y selecciona 'Audio MP3' para descargar solo el audio del Reel de Facebook." },
  { q: "¿Hay límite de descargas?", a: "No. Puedes descargar tantos Reels de Facebook como quieras, completamente gratis sin ningún límite diario." },
];

export default function DescargarReelsFacebookPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang = 'es';" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Inicio", url: "/" }, { name: "Descargar Reels de Facebook", url: "/es/descargar-reels-facebook" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Descargador de Reels de Facebook", "Descarga Reels de Facebook gratis en HD sin marca de agua.", `${SITE_CONFIG.url}/es/descargar-reels-facebook`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("Cómo Descargar Reels de Facebook", "Descarga Reels de Facebook en HD gratis sin marca de agua", pasos)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Inicio</a></li><li>/</li>
              <li className="text-slate-300">Descargar Reels de Facebook</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-5">
            📘 Descargador de Reels de Facebook
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Descargar Reels de Facebook{" "}
            <span className="gradient-text">HD Gratis Sin Marca de Agua</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Descarga Reels de Facebook en <strong className="text-white">HD 1080p</strong> sin marca de agua
            y con audio original: gratis, sin login, funciona en todos los dispositivos.
          </p>
          <DownloadTool platform="facebook" placeholder="Pega el enlace del Reel de Facebook aquí..." buttonLabel="Descargar Reel" />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/es/descargar-videos-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">📹 Videos Facebook</a>
            <a href="/es/descargar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">📸 Reels Instagram</a>
            <a href="/facebook-reels-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">🇬🇧 English</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Publicidad</div></div>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Cómo Descargar Reels de Facebook</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 pasos rápidos: listo en segundos</p>
          <HowToSteps steps={pasos} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Ventajas de Usar ReelsGrab para Facebook</h2>
        <p className="text-center text-slate-400 text-sm mb-10 max-w-2xl mx-auto">
          Disfruta de la mejor experiencia para guardar videos cortos de Facebook con máxima fidelidad visual y sonora.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">Sin Marcas de Agua</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Obtén el archivo MP4 original directamente desde los servidores de Facebook, limpio y sin logotipos superpuestos.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">Audio Original Completo</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nuestra herramienta combina las pistas de video y audio para garantizar que nunca descargues un Reel en silencio.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">100% Gratis y Seguro</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sin registros, sin contraseñas y sin necesidad de instalar aplicaciones o extensiones sospechosas en tu navegador.
            </p>
          </div>
        </div>
      </section>

      {/* GUIA EDITORIAL COMPLETA (1,200+ PALABRAS) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Guía Definitiva para Descargar Reels de Facebook en HD Sin Marca de Agua
            </h2>
            <p>
              Los <strong>Reels de Facebook</strong> se han consolidado como uno de los formatos de video corto mas populares y consumidos
              en todo el mundo. Creadores de contenido, educadores, comediantes y marcas comparten diariamente millones de videos atractivos
              llenos de humor, tutoriales practicos, rutinas de entrenamiento y momentos inolvidables. Sin embargo, la plataforma de Meta
              impone limitaciones estrictas a la hora de guardar estos videos en el almacenamiento interno de tu telefono o computadora.
            </p>
            <p>
              Cuando intentas guardar un Reel utilizando la opcion oficial de la aplicacion de Facebook, el video unicamente se guarda en tu
              seccion de marcadores guardados dentro de tu perfil. Esto significa que no puedes compartirlo directamente por WhatsApp o
              Telegram, no puedes editarlo en programas como CapCut o Premiere Pro, y si el creador original borra la publicacion, el video
              desaparece para siempre.
            </p>
            <p>
              <strong>ReelsGrab</strong> nacio precisamente para darte libertad total. Como descargador de Reels de Facebook lider en la web,
              nuestra plataforma te permite extraer, convertir y guardar cualquier Reel publico en resolucion <strong>Full HD 1080p</strong>,
              completamente <strong>sin marcas de agua</strong>, con su <strong>audio original intacto</strong> y en formato universal MP4.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Por Que Muchos Descargadores Guardan Videos Sin Sonido (La Tecnologia DASH)
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Una de las quejas mas frecuentes de los usuarios al descargar videos de Facebook en otros sitios web es que el archivo MP4 resultante
              se reproduce completamente mudo. Esto ocurre debido a la arquitectura tecnica de transmision de video que emplea Meta:
              <strong>DASH (Dynamic Adaptive Streaming over HTTP)</strong>.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Bajo la arquitectura DASH, Facebook divide el archivo original en dos flujos de datos completamente independientes: una pista de
              video de alta definicion (codificada en H.264 o HEVC) y una pista de audio estereo (codificada en AAC). La mayoria de descargadores
              gratuitos solo descargan el flujo de video, entregando un archivo sin pista de audio.
            </p>
            <p className="text-sm text-emerald-300 font-medium leading-relaxed">
              En ReelsGrab contamos con servidores especializados equipados con tecnologia de multiplexacion FFmpeg. Nuestro motor une en tiempo
              real la pista de video HD con la pista de audio de alta fidelidad, entregandote un unico archivo MP4 perfectamente sincronizado
              en cuestion de segundos.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabla Comparativa: ReelsGrab vs Otros Descargadores de Facebook
            </h2>
            <p className="mb-6">
              Descubre por que miles de usuarios de habla hispana eligen ReelsGrab frente a las alternativas tradicionales:
            </p>
            <div className="overflow-x-auto border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Caracteristica</th>
                    <th className="p-3.5 font-semibold text-indigo-400">ReelsGrab ✨</th>
                    <th className="p-3.5 font-semibold">FDown.net</th>
                    <th className="p-3.5 font-semibold">SnapSave</th>
                    <th className="p-3.5 font-semibold">App Oficial Facebook</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="bg-slate-950/40">
                    <td className="p-3.5 font-medium text-white">Sin Marcas de Agua</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">100% Limpio</td>
                    <td className="p-3.5 text-slate-400">Variable</td>
                    <td className="p-3.5 text-slate-400">Limpio</td>
                    <td className="p-3.5 text-red-400">Marca gigante</td>
                  </tr>
                  <tr className="bg-slate-900/20">
                    <td className="p-3.5 font-medium text-white">Audio Original Muxed</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Garantizado en 1080p</td>
                    <td className="p-3.5 text-red-400">Falla a menudo</td>
                    <td className="p-3.5 text-slate-400">A veces mudo</td>
                    <td className="p-3.5 text-red-400">Silencia musica con copyright</td>
                  </tr>
                  <tr className="bg-slate-950/40">
                    <td className="p-3.5 font-medium text-white">Anuncios Invasivos (Popups)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">0% (Cero Ventanas Emergentes)</td>
                    <td className="p-3.5 text-red-400">Muy agresivos</td>
                    <td className="p-3.5 text-red-400">Redirecciones molestas</td>
                    <td className="p-3.5 text-slate-400">Anuncios en feed</td>
                  </tr>
                  <tr className="bg-slate-900/20">
                    <td className="p-3.5 font-medium text-white">Compatible con iPhone (Safari)</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Directo a Fotos</td>
                    <td className="p-3.5 text-red-400">Inestable en iOS</td>
                    <td className="p-3.5 text-slate-400">Requiere pasos extra</td>
                    <td className="p-3.5 text-slate-400">Solo marcadores</td>
                  </tr>
                  <tr className="bg-slate-950/40">
                    <td className="p-3.5 font-medium text-white">Extraccion a MP3</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Incluida (320kbps)</td>
                    <td className="p-3.5 text-red-400">No disponible</td>
                    <td className="p-3.5 text-red-400">No disponible</td>
                    <td className="p-3.5 text-red-400">No disponible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Guia Paso a Paso por Dispositivo: Como Guardar Reels de Facebook
            </h2>
            <p className="mb-6">
              Sigue estas instrucciones adaptadas al sistema operativo de tu equipo:
            </p>

            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">En iPhone y iPad (iOS 15, 16, 17, 18+)</h3>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-300">
                  <li>Abre la app de Facebook, ve al Reel que te gusta, toca el icono de <strong>Compartir</strong> y selecciona <strong>Copiar enlace</strong>.</li>
                  <li>Abre <strong>Safari</strong> y visita <code>www.reelsgrab.net/es/descargar-reels-facebook</code>.</li>
                  <li>Pega el enlace en la caja de busqueda y toca <strong>Descargar Reel</strong>.</li>
                  <li>Elige la calidad HD 1080p y confirma la descarga en el aviso de Safari tocando <strong>Descargar</strong>.</li>
                  <li>Toca la flecha azul de descargas en la barra de Safari, abre el video, toca el boton <strong>Compartir</strong> de iOS y elige <strong>Guardar video</strong> para enviarlo directamente al Carrete de Fotos.</li>
                </ol>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">En Telefonos y Tablets Android (Samsung, Xiaomi, Motorola, etc.)</h3>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-300">
                  <li>En Facebook, toca el menu de tres puntos (···) del Reel y selecciona <strong>Copiar enlace</strong>.</li>
                  <li>Abre Google Chrome o tu navegador favorito y accede a ReelsGrab.</li>
                  <li>Pega el enlace y presiona <strong>Descargar Reel</strong>.</li>
                  <li>Selecciona la resolucion Full HD. El video comenzara a descargarse de inmediato en la carpeta <strong>Descargas</strong> de tu dispositivo y aparecera al instante en tu Galeria y Google Fotos.</li>
                </ol>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">En Computadoras PC Windows y Mac</h3>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-300">
                  <li>Abre tu navegador web y copia la URL del Reel directamente desde la barra de direcciones de Facebook.</li>
                  <li>Pega la direccion en ReelsGrab y haz clic en Descargar.</li>
                  <li>Guarda el archivo MP4 en tu carpeta de Descargas o escritorio, listo para reproducir o editar sin restricciones.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Consejos de Seguridad, Derechos de Autor y Uso Etico
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              ReelsGrab es una herramienta tecnologica disenada para uso personal, respaldo privado y fines educativos. Recomendamos
              seguir siempre buenas practicas digitales:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-300">
              <li>
                <strong>Respeta la autoria:</strong> Si vas a compartir un video en tus propias redes sociales, solicita el consentimiento del creador y otorga los creditos correspondientes en la descripcion.
              </li>
              <li>
                <strong>Protege tu privacidad:</strong> Nunca compartas tu contrasena de Facebook en sitios web de terceros. ReelsGrab nunca solicita contrasenas ni datos de inicio de sesion.
              </li>
              <li>
                <strong>Solo contenido publico:</strong> Esta herramienta procesa unicamente Reels y videos de acceso publico en Facebook, respetando la privacidad de cuentas personales cerradas.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Preguntas Frecuentes</h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
