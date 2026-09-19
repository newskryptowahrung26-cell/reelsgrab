import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Descargar Reels de Instagram Gratis Sin Marca de Agua 2025",
  description:
    "Descarga Reels de Instagram gratis en HD sin marca de agua y con audio original. Descargador de Reels de Instagram online — sin login, funciona en iPhone y Android.",
  keywords: [
    "descargar reels de instagram", "descargar reels instagram",
    "descargar reel de instagram", "descargador de reels de instagram",
    "bajar reels de instagram", "descargar reels instagram sin marca de agua",
    "como descargar reels de instagram", "descargar reels de instagram gratis",
    "descargar musica de reels instagram",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/descargar-reels-instagram`,
    languages: {
      en: `${SITE_CONFIG.url}/instagram-reels-download`,
      pt: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
    },
  },
};

const pasos = [
  { title: "Abre el Reel en Instagram", description: "Abre Instagram en tu teléfono o navegador, encuentra el Reel que deseas descargar y toca el menú de tres puntos (···)." },
  { title: "Copia el enlace del Reel", description: "Selecciona 'Copiar enlace'. El enlace del Reel de Instagram ahora está en tu portapapeles." },
  { title: "Pega el enlace aquí", description: "Regresa a esta página, pega el enlace en el campo de arriba y haz clic en 'Descargar Reel'." },
  { title: "Elige tu formato", description: "Selecciona HD 1080p sin marca de agua, 720p, o solo audio MP3. El archivo se descarga instantáneamente." },
];

const preguntas = [
  { q: "¿Cómo descargar Reels de Instagram sin marca de agua?", a: "Pega el enlace del Reel de Instagram en el campo de arriba y haz clic en Descargar. ReelsGrab descarga el Reel en HD sin añadir ninguna marca de agua — obtienes el video original limpio." },
  { q: "¿Cómo descargar Reels de Instagram con audio y música?", a: "ReelsGrab combina automáticamente las pistas de video y audio (que Instagram separa internamente) para que tu descarga siempre incluya el audio y la música originales, incluso para pistas con licencia." },
  { q: "¿Se puede descargar Reels de Instagram en el iPhone?", a: "Sí. Abre el Reel, copia el enlace, pégalo aquí y toca Descargar HD en Safari. El video se guarda en tu app Archivos. Desde ahí puedes moverlo a Fotos." },
  { q: "¿El descargador de Reels de Instagram es gratis?", a: "100% gratis, sin suscripción, sin cargos ocultos y sin límite diario. Descarga tantos Reels de Instagram como quieras." },
  { q: "¿Puedo convertir un Reel de Instagram a MP3?", a: "Sí. Después de pegar el enlace, haz clic en Descargar y selecciona la opción 'Audio MP3' para extraer y descargar solo el audio." },
  { q: "¿Funciona para cuentas privadas de Instagram?", a: "Para cuentas públicas no se necesita iniciar sesión. Para cuentas privadas, necesitas seguirlas en Instagram. Copia el enlace mientras estás conectado y puedes ver el Reel." },
];

export default function DescargarReelsInstagramPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Inicio", url: "/" }, { name: "Descargar Reels de Instagram", url: "/es/descargar-reels-instagram" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Descargador de Reels de Instagram", "Descarga Reels de Instagram gratis en HD sin marca de agua y con audio.", `${SITE_CONFIG.url}/es/descargar-reels-instagram`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("Cómo Descargar Reels de Instagram", "Descarga Reels de Instagram en HD sin marca de agua y con audio gratis", pasos)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Inicio</a></li><li>/</li>
              <li className="text-slate-300">Descargar Reels de Instagram</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-medium mb-5">
            📸 Descargador de Reels de Instagram
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Descargar Reels de Instagram{" "}
            <span className="gradient-text">Sin Marca de Agua Gratis</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Descarga Reels de Instagram en <strong className="text-white">HD 1080p</strong> sin marca de agua
            y con audio original — gratis, sin login, funciona en iPhone y Android.
          </p>
          <DownloadTool platform="instagram" placeholder="Pega el enlace del Reel de Instagram aquí..." buttonLabel="Descargar Reel" />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/es/descargar-videos-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">📹 Descargar Videos Facebook</a>
            <a href="/es/descargar-reels-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">📘 Descargar Reels Facebook</a>
            <a href="/instagram-reels-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">🇬🇧 English Version</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Publicidad</div></div>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Cómo Descargar Reels de Instagram</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 pasos simples — listo en 10 segundos</p>
          <HowToSteps steps={pasos} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Publicidad</div></div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Preguntas Frecuentes — Descargar Reels de Instagram</h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
