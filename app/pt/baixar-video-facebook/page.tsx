import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Baixar Video do Facebook Grátis HD 2025 | Sem Programa",
  description:
    "Baixe vídeos do Facebook grátis em HD 1080p sem instalar programas. O melhor baixador de vídeos do Facebook online — rápido, seguro, sem marca d'água.",
  keywords: [
    "baixar video do facebook", "baixar video facebook",
    "baixador de video do facebook", "como baixar video do facebook",
    "baixar video privado do facebook", "baixar videos do facebook gratis",
    "baixar video facebook hd", "baixar video de facebook sem aplicativo",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/baixar-video-facebook`,
    languages: {
      en: `${SITE_CONFIG.url}/facebook-video-download`,
      es: `${SITE_CONFIG.url}/es/descargar-videos-facebook`,
    },
  },
};

const passos = [
  { title: "Abra o vídeo no Facebook", description: "Vá ao Facebook, encontre o vídeo que deseja baixar e clique no menu de três pontos (···) do post." },
  { title: "Copie o link do vídeo", description: "Selecione 'Copiar link'. No computador, clique com o botão direito no vídeo e copie a URL." },
  { title: "Cole o link aqui e clique em Baixar", description: "Cole a URL no campo acima e clique em 'Baixar Vídeo'." },
  { title: "Escolha a qualidade e salve", description: "Selecione HD 1080p, 720p ou apenas áudio MP3. O arquivo baixa diretamente para o seu dispositivo." },
];

const perguntas = [
  { q: "Como baixar vídeos do Facebook de graça?", a: "Copie o link do vídeo do Facebook, cole no campo acima e clique em Baixar. Selecione HD 1080p — é totalmente grátis sem precisar de login ou instalar programas." },
  { q: "Posso baixar vídeos do Facebook sem instalar programas?", a: "Sim! ReelsGrab funciona direto no seu navegador. Não é necessário baixar ou instalar nenhum aplicativo ou programa. Apenas cole o link e baixe." },
  { q: "Como baixar vídeo privado do Facebook?", a: "Para vídeos privados, faça login no Facebook no navegador, abra o vídeo, copie a URL da barra de endereços e cole aqui. Funciona para vídeos que você tem acesso." },
  { q: "O baixador de vídeos do Facebook é seguro?", a: "Sim, completamente seguro. Nunca pedimos sua senha do Facebook. Só processamos o link do vídeo que você colar. Nenhum dado pessoal é armazenado." },
  { q: "Posso baixar vídeos do Facebook em HD?", a: "Sim! Se o vídeo original foi enviado em 1080p, nossa ferramenta oferecerá a opção de download HD 1080p com a melhor qualidade disponível." },
  { q: "Tem limite de downloads por dia?", a: "Não há limite. Você pode baixar quantos vídeos do Facebook quiser, completamente grátis e sem restrições." },
];

export default function BaixarVideoFacebookPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Baixar Video do Facebook", url: "/pt/baixar-video-facebook" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Baixar Video do Facebook", "Baixe vídeos do Facebook grátis em HD — sem programas, sem marca d'água.", `${SITE_CONFIG.url}/pt/baixar-video-facebook`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("Como Baixar Vídeos do Facebook", "Baixe qualquer vídeo do Facebook grátis em HD sem programas", passos)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Início</a></li><li>/</li>
              <li className="text-slate-300">Baixar Video do Facebook</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-5">
            🇧🇷 Baixar Video do Facebook
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Baixar Video do Facebook{" "}
            <span className="gradient-text">Grátis HD Sem Programa</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Baixe qualquer vídeo do Facebook em <strong className="text-white">HD 1080p</strong> grátis —
            sem marca d&apos;água, sem programas, sem fazer login. O melhor baixador de vídeos do Facebook online.
          </p>
          <DownloadTool platform="facebook" placeholder="Cole o link do vídeo do Facebook aqui..." buttonLabel="Baixar Vídeo" />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/pt/baixar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">📸 Baixar Reels Instagram</a>
            <a href="/facebook-video-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">🇬🇧 English Version</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Publicidade</div></div>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Como Baixar Vídeos do Facebook</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 passos simples — pronto em 15 segundos</p>
          <HowToSteps steps={passos} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Publicidade</div></div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Perguntas Frequentes — Baixar Video do Facebook</h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
