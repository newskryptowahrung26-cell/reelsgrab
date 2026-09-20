import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Video,
  Zap,
  Shield,
  Smartphone,
  Film,
  CheckCircle2,
  AlertTriangle,
  Laptop,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Baixar Vídeos do YouTube em MP4 – HD 1080p e 4K Grátis Online",
  description:
    "Baixe vídeos do YouTube em formato MP4 em qualidade HD 1080p, 720p e 4K com áudio sincronizado. O baixador de YouTube para MP4 online mais rápido e seguro — funciona no iPhone, Android, Mac e PC sem anúncios invasivos nem programas.",
  keywords: [
    "youtube para mp4",
    "baixar videos do youtube",
    "baixador de youtube",
    "converter youtube para mp4",
    "baixar videos youtube 1080p",
    "baixar videos youtube 4k",
    "youtube mp4 gratis",
    "baixar videos do youtube sem programas",
    "baixar shorts do youtube",
    "y2mate alternativa",
    "savefrom alternativa",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/youtube-para-mp4`,
    languages: {
      en: `${SITE_CONFIG.url}/youtube-to-mp4`,
      es: `${SITE_CONFIG.url}/es/youtube-a-mp4`,
    },
  },
  openGraph: {
    title: "Baixar Vídeos do YouTube em MP4 – HD 1080p e 4K Grátis Online",
    description:
      "Baixe vídeos do YouTube em formato MP4 em qualidade HD 1080p, 720p e 4K com áudio sincronizado grátis.",
    url: `${SITE_CONFIG.url}/pt/youtube-para-mp4`,
  },
};

const features = [
  {
    icon: Film,
    title: "Resolução HD 1080p e 4K",
    description:
      "Baixe vídeos do YouTube em resolução Full HD 1080p e 4K Ultra HD a 60fps com máxima fidelidade visual.",
  },
  {
    icon: Zap,
    title: "Velocidade de Download Ultrarrápida",
    description:
      "Nossos servidores em nuvem processam e empacotam os fluxos de vídeo e áudio em menos de 3 segundos.",
  },
  {
    icon: Shield,
    title: "100% Seguro: Sem Anúncios Falsos",
    description:
      "Sem popups suspeitos, sem redirecionamentos chatos e sem necessidade de instalar extensões ou programas.",
  },
  {
    icon: Smartphone,
    title: "Compatível com Todos os Dispositivos",
    description:
      "Funciona diretamente no Safari para iPhone e iPad, Chrome para Android, Windows, Mac e Linux.",
  },
];

const passos = [
  {
    title: "Copie o link do vídeo do YouTube",
    description:
      "Abra o YouTube, encontre o vídeo ou Short que deseja baixar e copie o link da barra de endereços ou botão Compartilhar.",
  },
  {
    title: "Cole a URL no baixador",
    description:
      "Acesse o ReelsGrab e cole o link copiado no campo de busca na parte superior desta página.",
  },
  {
    title: "Escolha a resolução do vídeo",
    description:
      "Selecione a qualidade desejada: 1080p Full HD, 720p HD, 480p ou 4K Ultra HD se disponível no vídeo original.",
  },
  {
    title: "Salve o vídeo no seu aparelho",
    description:
      "Clique em 'Baixar Vídeo'. O arquivo MP4 será salvo no seu dispositivo para assistir offline quando quiser.",
  },
];

const competitorMatrix = [
  { feature: "Anúncios Invasivos / Popups", reelsgrab: "✅ 0% (Sem Popups)", y2mate: "❌ Várias abas", savefrom: "❌ Links suspeitos", snapsave: "❌ Anúncios agressivos" },
  { feature: "Resolução Máxima", reelsgrab: "✅ 1080p / 4K (Com Áudio)", y2mate: "⚠️ 1080p mudo às vezes", savefrom: "⚠️ Requer programa para 1080p", snapsave: "⚠️ Limitado" },
  { feature: "Suporte a YouTube Shorts", reelsgrab: "✅ Suporte Total", y2mate: "✅ Suportado", savefrom: "⚠️ Instável", snapsave: "⚠️ Parcial" },
  { feature: "Download no Safari (iPhone)", reelsgrab: "✅ 1 Clique Direto", y2mate: "⚠️ Requer apps externos", savefrom: "❌ Falha no iOS", snapsave: "⚠️ Complicado" },
  { feature: "Velocidade de Download", reelsgrab: "⚡ Menos de 3 segundos", y2mate: "⏳ 10 - 20 segundos", savefrom: "⏳ 15 - 30 segundos", snapsave: "⏳ 10 - 25 segundos" },
];

const videoResolutions = [
  {
    resolution: "4K Ultra HD (2160p)",
    pixels: "3840 x 2160",
    fps: "60 fps",
    bitrate: "15.000 - 25.000 kbps",
    bestFor: "Telas 4K, Smart TVs, edição profissional",
  },
  {
    resolution: "1080p Full HD",
    pixels: "1920 x 1080",
    fps: "30 / 60 fps",
    bitrate: "4.000 - 8.000 kbps",
    bestFor: "Monitores de PC, tablets, arquivo pessoal em alta definição",
  },
  {
    resolution: "720p HD",
    pixels: "1280 x 720",
    fps: "30 fps",
    bitrate: "1.500 - 3.000 kbps",
    bestFor: "Smartphones, economia de armazenamento e internet móvel",
  },
  {
    resolution: "480p / 360p Padrão",
    pixels: "854 x 480 / 640 x 360",
    fps: "30 fps",
    bitrate: "500 - 1.000 kbps",
    bestFor: "Conexões lentas de internet, visualização rápida",
  },
];

const perguntas = [
  {
    q: "Como baixar vídeos do YouTube em MP4 de graça?",
    a: "Copie o link de qualquer vídeo ou Short do YouTube, cole no campo de busca do ReelsGrab e clique em 'Baixar Vídeo'. Escolha a resolução desejada (como 1080p Full HD) e baixe o arquivo MP4 na hora sem custos.",
  },
  {
    q: "Os vídeos em 1080p e 4K baixados incluem áudio?",
    a: "Sim! O YouTube separa o vídeo e o áudio em qualidades altas. O ReelsGrab une automaticamente as duas trilhas na nuvem para que você receba um vídeo em 1080p ou 4K com áudio estéreo sincronizado.",
  },
  {
    q: "Dá para baixar YouTube Shorts em formato MP4?",
    a: "Sim, o ReelsGrab suporta totalmente links de YouTube Shorts. Basta colar o link do Short e baixar em MP4 imediatamente.",
  },
  {
    q: "Como baixar vídeos do YouTube no iPhone ou iPad?",
    a: "Abra o Safari no seu iPhone, acesse o ReelsGrab, cole a URL do vídeo e toque em Baixar. O Safari perguntará se deseja baixar o arquivo MP4; toque em 'Baixar' para salvar no app Arquivos.",
  },
  {
    q: "Preciso instalar algum programa ou extensão?",
    a: "Não. O ReelsGrab funciona 100% online em qualquer navegador web, sem precisar de programas ou extensões que ocupem espaço no seu aparelho.",
  },
  {
    q: "Tem limite diário de downloads?",
    a: "Não há limites. Você pode baixar quantos vídeos do YouTube quiser de forma gratuita e ilimitada.",
  },
  {
    q: "É legal baixar vídeos do YouTube em MP4?",
    a: "Baixar vídeos para uso pessoal offline, fins educativos ou arquivo próprio é amplamente aceito como uso justo. Lembre-se de sempre respeitar os direitos autorais dos criadores.",
  },
];

const relatedTools = [
  { emoji: "🎵", label: "YouTube para MP3 (PT)", href: "/pt/youtube-para-mp3", description: "Converta vídeos do YouTube em MP3 320kbps" },
  { emoji: "📸", label: "Baixar Reels Instagram", href: "/pt/baixar-reels-instagram", description: "Baixe Reels do IG em 1080p" },
  { emoji: "📹", label: "Baixar Vídeo Facebook", href: "/pt/baixar-video-facebook", description: "Baixe vídeos do Facebook em HD" },
  { emoji: "🎧", label: "Reels para MP3", href: "/reels-to-mp3", description: "Extraia áudio de qualquer Reel" },
  { emoji: "🇬🇧", label: "English Version", href: "/youtube-to-mp4", description: "Download YouTube videos in 1080p HD" },
];

export default function YouTubeParaMp4Page() {
  return (
    <>
      {/* JSON-LD Schemas */}
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
          "Baixador de YouTube para MP4",
          "Baixe vídeos do YouTube em MP4 em qualidade HD 1080p e 4K com áudio grátis online.",
          `${SITE_CONFIG.url}/pt/youtube-para-mp4`,
          "4.9",
          "156200"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Como Baixar Vídeos do YouTube em MP4 em HD",
          "Guia passo a passo para baixar vídeos e shorts do YouTube em formato MP4 em alta definição.",
          passos
        )}
      />

      {/* HERO SECTION */}
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

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-medium mb-5">
            <Film size={14} /> Baixador Grátis do YouTube para MP4 – HD 1080p e 4K
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Baixar Vídeos do YouTube em MP4{" "}
            <span className="gradient-text">Vídeos HD 1080p e 4K Grátis</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Baixe vídeos e Shorts do YouTube em formato <strong className="text-white">MP4 em qualidade HD 1080p e 4K</strong> com
            áudio sincronizado. Rápido, seguro, sem programas e sem anúncios invasivos.
          </p>

          <DownloadTool
            platform="youtube"
            mode="video"
            placeholder="Cole o link do vídeo ou Short do YouTube aqui..."
            buttonLabel="Baixar Vídeo"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/pt/youtube-para-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎵 YouTube para MP3 (PT)
            </a>
            <a href="/pt/baixar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📸 Baixar Reels Instagram
            </a>
            <a href="/pt/baixar-video-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📹 Baixar Vídeo Facebook
            </a>
            <a href="/youtube-to-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🇬🇧 English Version
            </a>
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <div className="max-w-4xl mx-auto px-4 my-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Publicidade
        </div>
      </div>

      {/* FEATURES GRID */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Por Que Escolher o ReelsGrab para Baixar Vídeos do YouTube?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            A plataforma mais confiável para salvar seus vídeos preferidos do YouTube com resolução impecável e zero complicações.
          </p>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO STEPS */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Como Baixar Vídeos do YouTube em 4 Passos
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Download rápido de vídeos em MP4 em menos de 10 segundos.
          </p>
          <HowToSteps steps={passos} />
        </div>
      </section>

      {/* GUIA DE AUTORIDADE SEO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">

          {/* SEÇÃO 1: Introdução */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              O Guia Definitivo para Baixar Vídeos do YouTube em MP4 em HD
            </h2>
            <p>
              O YouTube concentra a maior variedade de conteúdos audiovisuais do mundo: tutoriais, cursos educativos,
              entrevistas, documentários, músicas e entretenimento. No entanto, assistir a vídeos no YouTube exige uma conexão
              constante com a internet e pode consumir rapidamente os dados móveis do seu celular.
            </p>
            <p>
              Com o <strong>ReelsGrab YouTube para MP4</strong>, você pode baixar qualquer vídeo ou Short em formato MP4 padrão
              em resoluções <strong>720p HD, 1080p Full HD e até 4K Ultra HD</strong>. O arquivo gerado é compatível
              com qualquer reprodutor de vídeo, Smart TV ou aplicativo de edição como Premiere ou CapCut.
            </p>
          </div>

          {/* SEÇÃO 2: Tabela comparativa */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabela Comparativa: ReelsGrab vs. Outros Baixadores do YouTube
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Recurso</th>
                    <th className="p-3.5 font-semibold text-red-400 bg-red-950/20">ReelsGrab</th>
                    <th className="p-3.5 font-semibold">Y2Mate</th>
                    <th className="p-3.5 font-semibold">SaveFrom</th>
                    <th className="p-3.5 font-semibold">SnapSave</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {competitorMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 font-semibold text-emerald-400 bg-red-950/20">{row.reelsgrab}</td>
                      <td className="p-3.5 text-slate-400">{row.y2mate}</td>
                      <td className="p-3.5 text-slate-400">{row.savefrom}</td>
                      <td className="p-3.5 text-slate-400">{row.snapsave}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEÇÃO 3: Resoluções */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Resoluções e Especificações Técnicas de Download
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Resolução</th>
                    <th className="p-3.5 font-semibold">Pixels</th>
                    <th className="p-3.5 font-semibold">FPS</th>
                    <th className="p-3.5 font-semibold">Bitrate Estimado</th>
                    <th className="p-3.5 font-semibold">Recomendado Para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {videoResolutions.map((res, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{res.resolution}</td>
                      <td className="p-3.5 text-slate-300">{res.pixels}</td>
                      <td className="p-3.5 text-slate-400">{res.fps}</td>
                      <td className="p-3.5 text-slate-400">{res.bitrate}</td>
                      <td className="p-3.5 text-slate-300">{res.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEÇÃO 4: Tutoriais por aparelho */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Como Baixar Vídeos do YouTube em MP4 em Qualquer Aparelho
            </h3>

            {/* iPhone */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Vídeos do YouTube no iPhone e iPad (iOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copie o link do vídeo do YouTube no app ou navegador.</li>
                <li>Abra o Safari e acesse <code>reelsgrab.vercel.app/pt/youtube-para-mp4</code>.</li>
                <li>Cole o link no campo de busca e toque em <strong>&quot;Baixar Vídeo&quot;</strong>.</li>
                <li>Toque em <strong>&quot;Baixar Vídeo HD&quot;</strong> e confirme o download no Safari para salvar o arquivo no app Arquivos.</li>
              </ol>
            </div>

            {/* Android */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Vídeos do YouTube no Android (Samsung, Xiaomi, Motorola)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copie o link do vídeo no app do YouTube.</li>
                <li>Abra o Chrome, entre no ReelsGrab e cole a URL no campo de busca.</li>
                <li>Toque em Baixar e o arquivo MP4 será salvo diretamente na pasta Downloads e aparecerá na sua Galeria.</li>
              </ol>
            </div>

            {/* PC e Mac */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Laptop size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Vídeos do YouTube no PC e Mac (Windows, macOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copie o link do vídeo do YouTube da barra de endereços do navegador.</li>
                <li>Cole no ReelsGrab e clique em <strong>&quot;Baixar Vídeo&quot;</strong>.</li>
                <li>Clique em Baixar HD e o arquivo MP4 será salvo na sua pasta de Downloads.</li>
              </ol>
            </div>
          </div>

          {/* SEÇÃO 5: Conclusão */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Aproveite seus Vídeos Favoritos do YouTube com o ReelsGrab
            </h3>
            <p>
              O ReelsGrab é o baixador de YouTube para MP4 mais eficiente, seguro e de maior qualidade.
              Sem programas, sem assinaturas e sem anúncios invasivos. Baixe seu primeiro vídeo agora mesmo!
            </p>
          </div>

        </article>
      </section>

      {/* RELATED TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl font-bold text-white mb-6">Ferramentas Relacionadas</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      {/* Ad Slot */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Publicidade
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Perguntas Frequentes — Baixador de YouTube para MP4
        </h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
