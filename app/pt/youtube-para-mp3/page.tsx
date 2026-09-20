import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import { Music, Zap, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Conversor de YouTube para MP3 – Baixar Músicas em 320kbps Grátis",
  description:
    "Converta e baixe vídeos do YouTube para MP3 em alta qualidade 320kbps online grátis. Rápido, seguro, sem programas, compatível com celular e PC.",
  keywords: [
    "youtube para mp3",
    "conversor de youtube para mp3",
    "baixar musica do youtube",
    "converter youtube para mp3",
    "youtube mp3 320kbps",
    "baixar audio do youtube",
    "ytmp3 portugues",
    "baixar musicas do youtube gratis",
    "conversor youtube mp3 online",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/youtube-para-mp3`,
    languages: {
      en: `${SITE_CONFIG.url}/youtube-to-mp3`,
      es: `${SITE_CONFIG.url}/es/youtube-a-mp3`,
    },
  },
};

const caracteristicas = [
  {
    icon: Music,
    title: "Qualidade de Estúdio 320kbps",
    description: "Extraia áudio MP3 na mais alta fidelidade acústica disponível sem perdas de compressão.",
  },
  {
    icon: Zap,
    title: "Conversão Instantânea",
    description: "Nossos servidores na nuvem processam e convertem qualquer link do YouTube em menos de 3 segundos.",
  },
  {
    icon: Shield,
    title: "100% Seguro e Sem Anúncios",
    description: "Sem anúncios popunder irritantes, sem vírus e sem necessidade de instalar aplicativos.",
  },
  {
    icon: Sparkles,
    title: "Suporte a YouTube Shorts",
    description: "Converta vídeos normais e músicas de YouTube Shorts para formato MP3 com um único clique.",
  },
];

const passos = [
  {
    title: "Copie o link do YouTube",
    description: "Abra o YouTube no celular ou navegador, encontre a música ou vídeo que deseja e copie o link.",
  },
  {
    title: "Cole o link aqui",
    description: "Cole o link no campo de download acima e clique em 'Converter para MP3'.",
  },
  {
    title: "Escolha a Qualidade 320kbps",
    description: "Selecione a qualidade de áudio desejada (320kbps alta fidelidade ou 128kbps padrão).",
  },
  {
    title: "Baixe seu arquivo MP3",
    description: "Clique em baixar para salvar o áudio diretamente na memória do seu celular ou computador.",
  },
];

const perguntas = [
  {
    q: "Como converter vídeos do YouTube para MP3 em 320kbps?",
    a: "Copie o link do vídeo do YouTube, cole no conversor acima e clique em 'Converter para MP3'. Selecione 320kbps para obter a melhor qualidade de som.",
  },
  {
    q: "O conversor de YouTube para MP3 é gratuito?",
    a: "Sim, o ReelsGrab é 100% gratuito. Não há limites de download diário, nem cobranças ocultas ou necessidade de cadastro.",
  },
  {
    q: "Posso baixar músicas do YouTube no iPhone ou Android?",
    a: "Sim! No Android, use o Google Chrome para baixar diretamente na pasta Downloads. No iPhone, use o Safari para salvar o arquivo no app Arquivos.",
  },
  {
    q: "É possível converter YouTube Shorts para MP3?",
    a: "Sim! Nossa ferramenta suporta totalmente links de YouTube Shorts. Basta copiar o link no aplicativo e colar aqui.",
  },
  {
    q: "É seguro usar o ReelsGrab?",
    a: "Totalmente seguro. Funciona 100% online por conexão HTTPS protegida, sem exigir instalação de programas ou extensões.",
  },
];

export default function YouTubeParaMp3Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "YouTube para MP3", url: "/pt/youtube-para-mp3" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Conversor de YouTube para MP3",
          "Converta e baixe vídeos do YouTube para MP3 em alta qualidade 320kbps online grátis.",
          `${SITE_CONFIG.url}/pt/youtube-para-mp3`,
          "4.9",
          "98400"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Como Converter YouTube para MP3 em Alta Qualidade",
          "Guia passo a passo para converter e baixar vídeos e shorts do YouTube em áudio MP3",
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
              <li className="text-slate-300">YouTube para MP3</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full mb-6">
            <Music className="w-3.5 h-3.5" />
            <span>Conversor de YouTube para MP3 em Alta Fidelidade</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            YouTube para MP3 – Qualidade de Estúdio{" "}
            <span className="gradient-text">320kbps Grátis</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Converta qualquer vídeo ou Short do YouTube para áudio MP3 com som cristalino.
            Rápido, gratuito, sem cadastro e sem anúncios popunder indesejados.
          </p>

          <DownloadTool
            platform="youtube"
            mode="audio"
            placeholder="Cole o link do YouTube para converter em MP3..."
            buttonLabel="Converter para MP3"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a
              href="/pt/youtube-para-mp4"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🎬 YouTube para MP4 (HD)
            </a>
            <a
              href="/youtube-to-mp3"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              🇬🇧 English Version
            </a>
            <a
              href="/es/youtube-a-mp3"
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
            Por Que Escolher Nosso Conversor de YouTube para MP3?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A forma mais rápida, limpa e segura de baixar músicas e áudios do YouTube.
          </p>
        </div>
        <FeaturesGrid features={caracteristicas} />
      </section>

      {/* Como Funciona */}
      <section className="bg-slate-900/40 border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Como Converter Vídeos do YouTube para MP3 em 4 Passos
            </h2>
            <p className="text-slate-400 text-sm">
              Baixe qualquer áudio do YouTube no seu celular ou PC em segundos
            </p>
          </div>
          <HowToSteps steps={passos} />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Perguntas Frequentes sobre YouTube para MP3
        </h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
