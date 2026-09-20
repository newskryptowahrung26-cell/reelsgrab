import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import { Video, Zap, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Baixar Vídeos do YouTube MP4 – Download em HD 1080p e 4K Grátis",
  description:
    "Baixe vídeos do YouTube e Shorts em MP4 Full HD 1080p e 4K com áudio sincronizado. Conversor de YouTube para MP4 online e gratuito.",
  keywords: [
    "youtube para mp4",
    "baixar videos do youtube",
    "conversor youtube para mp4",
    "baixar youtube mp4 1080p",
    "baixar youtube shorts",
    "ytmp4 portugues",
    "salvar video do youtube",
    "baixar video youtube gratis",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/youtube-para-mp4`,
    languages: {
      en: `${SITE_CONFIG.url}/youtube-to-mp4`,
      es: `${SITE_CONFIG.url}/es/youtube-a-mp4`,
    },
  },
};

const caracteristicas = [
  {
    icon: Video,
    title: "Qualidade Full HD 1080p e 4K",
    description: "Baixe vídeos em 1080p, 720p e 4K com áudio cristalino totalmente sincronizado.",
  },
  {
    icon: Sparkles,
    title: "Download de YouTube Shorts",
    description: "Salve vídeos curtos verticais do YouTube Shorts em alta resolução sem marca d'água.",
  },
  {
    icon: Zap,
    title: "Download Direto e Rápido",
    description: "Conexão de alta velocidade sem filas de espera ou limites diários de download.",
  },
  {
    icon: Shield,
    title: "Sem Cadastro ou Programas",
    description: "100% online e gratuito. Não precisa instalar aplicativos ou criar contas.",
  },
];

const passos = [
  {
    title: "Copie o link do vídeo",
    description: "Abra o YouTube e copie o link do vídeo ou Short que você deseja baixar.",
  },
  {
    title: "Cole o link no ReelsGrab",
    description: "Cole o link na barra de download acima e clique em 'Baixar MP4'.",
  },
  {
    title: "Escolha a resolução",
    description: "Selecione entre 1080p Full HD, 720p HD ou 360p conforme sua preferência.",
  },
  {
    title: "Salve o vídeo no seu dispositivo",
    description: "O arquivo MP4 será salvo diretamente no seu celular ou computador para assistir offline.",
  },
];

const perguntas = [
  {
    q: "Como baixar vídeos do YouTube em 1080p com áudio?",
    a: "Cole o link do vídeo no campo de download acima e clique em 'Baixar MP4'. Selecione a opção 1080p para salvar o vídeo com som original sincronizado.",
  },
  {
    q: "É possível baixar vídeos do YouTube Shorts?",
    a: "Sim! O ReelsGrab é totalmente compatível com YouTube Shorts. Basta copiar o link do Short e colar aqui para baixar em formato vertical MP4.",
  },
  {
    q: "Como baixar vídeos do YouTube no iPhone?",
    a: "Abra o Safari no iOS, acesse o ReelsGrab, cole o link do YouTube e clique em Baixar. O arquivo será salvo no aplicativo Arquivos, de onde pode ser movido para o Fotos.",
  },
  {
    q: "Existe limite de downloads por dia?",
    a: "Não. O ReelsGrab oferece downloads totalmente ilimitados e gratuitos todos os dias.",
  },
  {
    q: "É seguro baixar vídeos com o ReelsGrab?",
    a: "Sim, 100% seguro. Conexão protegida por SSL/HTTPS, sem anúncios maliciosos e sem necessidade de fornecer dados pessoais.",
  },
];

export default function YouTubeParaMp4Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "YouTube para MP4", url: "/pt/youtube-para-mp4" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Baixar Vídeos do YouTube MP4",
          "Baixe vídeos do YouTube e Shorts em MP4 Full HD 1080p e 4K com áudio sincronizado online e grátis.",
          `${SITE_CONFIG.url}/pt/youtube-para-mp4`,
          "4.9",
          "112400"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Como Baixar Vídeos do YouTube para MP4",
          "Guia passo a passo para baixar vídeos e shorts do YouTube em HD MP4",
          passos
        )}
      />

      {/* Hero */}
      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <a href="/" className="hover:text-slate-300">
                  Início
                </a>
              </li>
              <li>/</li>
              <li className="text-slate-300">YouTube para MP4</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs px-3 py-1 rounded-full mb-6">
            <Video className="w-3.5 h-3.5" />
            <span>Baixar Vídeos do YouTube em HD 1080p e 4K</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            YouTube para MP4 – Baixar Vídeos em{" "}
            <span className="gradient-text">HD 1080p Grátis</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Converta e baixe vídeos e Shorts do YouTube em formato MP4 de alta resolução.
            Aproveite qualidade 1080p Full HD e 4K com áudio original perfeitamente sincronizado.
          </p>

          <DownloadTool
            platform="youtube"
            mode="video"
            placeholder="Cole o link do YouTube ou Shorts aqui..."
            buttonLabel="Baixar MP4"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a
              href="/pt/youtube-para-mp3"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🎧 YouTube para MP3 (320kbps)
            </a>
            <a
              href="/youtube-to-mp4"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🇬🇧 English Version
            </a>
            <a
              href="/es/youtube-a-mp4"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🇪🇸 Versión en Español
            </a>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Vantagens do Nosso Baixador de YouTube MP4
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A ferramenta mais confiável e rápida para salvar vídeos do YouTube em qualidade máxima.
          </p>
        </div>
        <FeaturesGrid features={caracteristicas} />
      </section>

      {/* Como Funciona */}
      <section className="bg-slate-900/40 border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Como Baixar Vídeos do YouTube em 4 Passos
            </h2>
            <p className="text-slate-400 text-sm">
              Rápido e simples: salve qualquer vídeo no seu celular ou PC em segundos
            </p>
          </div>
          <HowToSteps steps={passos} />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Perguntas Frequentes sobre Download do YouTube MP4
        </h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
