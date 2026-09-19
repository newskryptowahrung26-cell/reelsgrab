import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Baixar Reels do Instagram Grátis Sem Marca d'Água HD",
  description:
    "Baixe Reels do Instagram grátis em HD 1080p sem marca d'água e com áudio original. Funciona no iPhone e Android — sem login, sem aplicativo.",
  keywords: [
    "baixar reels do instagram", "baixar reels instagram",
    "baixar reels sem marca d agua", "baixar reels instagram sem marca dagua",
    "como baixar reels do instagram", "baixar audio de reels instagram",
    "baixar reels instagram hd", "baixar reel instagram gratis",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
    languages: {
      en: `${SITE_CONFIG.url}/instagram-reels-download`,
      es: `${SITE_CONFIG.url}/es/descargar-reels-instagram`,
    },
  },
};

const passos = [
  { title: "Abra o Reel no Instagram", description: "Abra o Instagram, encontre o Reel que deseja baixar e toque nos três pontos (···)." },
  { title: "Copie o link do Reel", description: "Toque em 'Copiar link'. O link do Reel do Instagram já está na sua área de transferência." },
  { title: "Cole o link aqui", description: "Volte a esta página, cole o link no campo acima e clique em 'Baixar Reel'." },
  { title: "Escolha o formato", description: "Selecione HD 1080p sem marca d'água, 720p ou áudio MP3. O arquivo baixa na hora." },
];

const perguntas = [
  { q: "Como baixar Reels do Instagram sem marca d'água?", a: "Cole o link do Reel do Instagram no campo acima e clique em Baixar. ReelsGrab baixa o Reel em HD sem nenhuma marca d'água — você recebe o vídeo original limpo." },
  { q: "Como baixar Reels do Instagram com áudio e música?", a: "ReelsGrab combina automaticamente as trilhas de vídeo e áudio (que o Instagram separa internamente) para que seu download sempre inclua o áudio e a música originais." },
  { q: "Dá para baixar Reels do Instagram no iPhone?", a: "Sim! Abra o Reel, copie o link, cole aqui e toque em Baixar HD no Safari. O vídeo é salvo no seu app Arquivos. Depois você pode mover para a Galeria de Fotos." },
  { q: "O baixador de Reels do Instagram é grátis?", a: "100% grátis, sem assinatura, sem taxas ocultas e sem limite diário. Baixe quantos Reels do Instagram quiser." },
  { q: "Posso converter um Reel do Instagram em MP3?", a: "Sim! Após colar o link, clique em Baixar e selecione 'Áudio MP3' para extrair e baixar apenas o áudio do Reel." },
];

export default function BaixarReelsInstagramPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Baixar Reels do Instagram", url: "/pt/baixar-reels-instagram" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Baixar Reels do Instagram", "Baixe Reels do Instagram grátis em HD sem marca d'água e com áudio.", `${SITE_CONFIG.url}/pt/baixar-reels-instagram`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("Como Baixar Reels do Instagram", "Baixe Reels do Instagram em HD sem marca d'água grátis", passos)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Início</a></li><li>/</li>
              <li className="text-slate-300">Baixar Reels do Instagram</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-medium mb-5">
            🇧🇷 Baixar Reels do Instagram
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Baixar Reels do Instagram{" "}
            <span className="gradient-text">Sem Marca d&apos;Água Grátis</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Baixe Reels do Instagram em <strong className="text-white">HD 1080p</strong> sem marca d&apos;água
            e com áudio original — grátis, sem login, funciona no iPhone e Android.
          </p>
          <DownloadTool platform="instagram" placeholder="Cole o link do Reel do Instagram aqui..." buttonLabel="Baixar Reel" />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/pt/baixar-video-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">📹 Baixar Video Facebook</a>
            <a href="/instagram-reels-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">🇬🇧 English Version</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Publicidade</div></div>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Como Baixar Reels do Instagram</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 passos simples — pronto em 10 segundos</p>
          <HowToSteps steps={passos} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Perguntas Frequentes</h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
