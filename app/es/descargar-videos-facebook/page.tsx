import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Descargar Videos de Facebook Gratis HD | Sin Programa",
  description:
    "Descarga videos de Facebook gratis en HD 1080p sin programas ni aplicaciones. El mejor descargador de videos de Facebook online — rápido, seguro y sin marca de agua.",
  keywords: [
    "descargar videos de facebook", "descargar video de facebook",
    "descargador de videos de facebook", "bajar videos de facebook",
    "bajar video de facebook", "descargar videos de facebook gratis",
    "descargar videos de facebook sin programas", "descargar videos facebook hd",
    "como descargar videos de facebook",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/es/descargar-videos-facebook`,
    languages: {
      en: `${SITE_CONFIG.url}/facebook-video-download`,
      pt: `${SITE_CONFIG.url}/pt/baixar-video-facebook`,
    },
  },
};

const pasos = [
  { title: "Abre el video en Facebook", description: "Ve a Facebook y encuentra el video que quieres descargar. Haz clic en el menú de tres puntos (···) del video." },
  { title: "Copia el enlace del video", description: "Selecciona 'Copiar enlace' del menú. En escritorio, haz clic derecho sobre el video y copia la URL." },
  { title: "Pega el enlace arriba", description: "Pega la URL copiada en el campo de entrada de arriba y haz clic en 'Descargar Video'." },
  { title: "Elige calidad y descarga", description: "Selecciona HD 1080p, 720p o solo audio MP3. El archivo se descarga directamente a tu dispositivo." },
];

const preguntas = [
  { q: "¿Cómo descargar videos de Facebook gratis?", a: "Copia el enlace del video de Facebook, pégalo en el campo de arriba y haz clic en Descargar. Selecciona la calidad HD 1080p y el archivo se descarga gratis directamente a tu dispositivo sin necesidad de ningún programa." },
  { q: "¿Puedo descargar videos de Facebook sin instalar programas?", a: "Sí, completamente. ReelsGrab funciona directamente en tu navegador — no necesitas descargar ni instalar ninguna aplicación o programa. Simplemente pega el enlace y listo." },
  { q: "¿Cómo descargar videos privados de Facebook?", a: "Para videos privados, asegúrate de estar conectado en Facebook, copia la URL del video desde la barra de direcciones de tu navegador y pégala aquí. Esto funciona para videos a los que tienes acceso." },
  { q: "¿El descargador de videos de Facebook es seguro?", a: "Completamente seguro. Nunca pedimos tu contraseña de Facebook. Solo procesamos el enlace del video que pegues. Ningún dato personal es almacenado." },
  { q: "¿Puedo descargar videos de Facebook en HD?", a: "Sí, si el video original fue subido en 1080p, nuestra herramienta ofrecerá la opción de descarga HD 1080p con la mejor calidad disponible." },
  { q: "¿Hay límite de descargas diarias?", a: "No hay límite. Puedes descargar tantos videos de Facebook como quieras, completamente gratis y sin restricciones." },
];

export default function DescargarVideosFacebookPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Inicio", url: "/" }, { name: "Descargar Videos de Facebook", url: "/es/descargar-videos-facebook" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Descargador de Videos de Facebook", "Descarga videos de Facebook gratis en HD — sin programas, sin marca de agua.", `${SITE_CONFIG.url}/es/descargar-videos-facebook`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(preguntas)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("Cómo Descargar Videos de Facebook", "Descarga cualquier video de Facebook gratis en HD sin programas", pasos)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Inicio</a></li><li>/</li>
              <li className="text-slate-300">Descargar Videos de Facebook</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-5">
            🇪🇸 Descargador de Videos de Facebook
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Descargar Videos de Facebook{" "}
            <span className="gradient-text">Gratis HD Sin Programas</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Descarga cualquier video de Facebook en <strong className="text-white">HD 1080p</strong> gratis —
            sin marca de agua, sin programas, sin iniciar sesión. El mejor descargador de Facebook online.
          </p>
          <DownloadTool platform="facebook" placeholder="Pega el enlace del video de Facebook aquí..." buttonLabel="Descargar Video" />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/es/descargar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">📸 Descargar Reels Instagram</a>
            <a href="/es/descargar-reels-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">📘 Descargar Reels Facebook</a>
            <a href="/facebook-video-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">🇬🇧 English Version</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Publicidad</div></div>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Cómo Descargar Videos de Facebook</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 pasos simples — listo en 15 segundos</p>
          <HowToSteps steps={pasos} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-xl font-bold text-white mb-4">Descargador de Videos de Facebook — Todo lo que Necesitas Saber</h2>
        <div className="text-slate-400 text-sm leading-relaxed space-y-4">
          <p>
            <strong className="text-white">Descargar videos de Facebook</strong> nunca fue tan fácil. Con {SITE_CONFIG.name} puedes
            guardar cualquier video de Facebook directamente en tu dispositivo en alta calidad HD 1080p,
            sin necesidad de instalar programas, aplicaciones ni extensiones del navegador.
          </p>
          <p>
            También puedes{" "}
            <a href="/es/descargar-reels-facebook" className="text-indigo-400 hover:underline">descargar Reels de Facebook</a>,{" "}
            <a href="/es/descargar-reels-instagram" className="text-indigo-400 hover:underline">descargar Reels de Instagram</a>, y
            convertir videos a MP3 — todo gratis desde una sola plataforma.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 mb-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Publicidad</div></div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Preguntas Frecuentes — Descargar Videos de Facebook</h2>
        <FaqSection faqs={preguntas} />
      </section>
    </>
  );
}
