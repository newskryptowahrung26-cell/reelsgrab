import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Descargar Reels de Facebook Gratis HD Sin Marca de Agua",
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

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Preguntas Frecuentes</h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
