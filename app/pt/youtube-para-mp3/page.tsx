import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Music,
  Zap,
  Shield,
  Smartphone,
  Headphones,
  FileAudio,
  CheckCircle2,
  AlertTriangle,
  Laptop,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conversor do YouTube para MP3 | Áudio em Alta Qualidade 320kbps Grátis",
  description:
    "Converta e baixe vídeos do YouTube para MP3 em alta qualidade 320kbps, 256kbps e 128kbps. O conversor de YouTube para MP3 online mais rápido e seguro: funciona no iPhone, Android, Mac e PC sem anúncios invasivos nem programas.",
  keywords: [
    "youtube para mp3",
    "conversor youtube para mp3",
    "converter youtube para mp3",
    "baixar musica do youtube",
    "youtube mp3 320kbps",
    "baixar audio do youtube",
    "conversor de video do youtube para mp3 gratis",
    "youtube para mp3 alta qualidade",
    "baixar musicas do youtube",
    "ytmp3 alternativa",
    "y2mate alternativa",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/youtube-para-mp3`,
    languages: {
      en: `${SITE_CONFIG.url}/youtube-to-mp3`,
      es: `${SITE_CONFIG.url}/es/youtube-a-mp3`,
      pt: `${SITE_CONFIG.url}/pt/youtube-para-mp3`,
      "x-default": `${SITE_CONFIG.url}/youtube-to-mp3`,
    },
  },
  openGraph: {
    title: "Conversor do YouTube para MP3 | Áudio em Alta Qualidade 320kbps Grátis",
    description:
      "Converta e baixe vídeos do YouTube para MP3 em alta qualidade 320kbps, 256kbps e 128kbps sem programas.",
    url: `${SITE_CONFIG.url}/pt/youtube-para-mp3`,
  },
};

const features = [
  {
    icon: Headphones,
    title: "Qualidade de Estúdio 320kbps",
    description:
      "Extraia áudio puro e nítido de qualquer vídeo ou música do YouTube com máxima faixa dinâmica e sem distorção.",
  },
  {
    icon: Zap,
    title: "Conversão Instantânea na Nuvem",
    description:
      "Nossos servidores dedicados processam vídeos do YouTube em tempo real em menos de 3 segundos, sem filas de espera.",
  },
  {
    icon: Shield,
    title: "100% Seguro: Sem Popups ou Vírus",
    description:
      "Ao contrário de clones duvidosos do YTMP3, o ReelsGrab não tem popunders invasivos, spam de notificações ou programas suspeitos.",
  },
  {
    icon: Smartphone,
    title: "Compatibilidade Total",
    description:
      "Converta YouTube para MP3 facilmente no iPhone (Safari), Android (Chrome), Mac, Windows e Linux sem instalar nenhum app.",
  },
];

const passos = [
  {
    title: "Copie o link do vídeo do YouTube",
    description:
      "Abra o YouTube no computador ou celular. Encontre o vídeo, música ou podcast que deseja converter e copie o link da barra de endereços ou botão Compartilhar.",
  },
  {
    title: "Cole a URL no conversor",
    description:
      "Volte ao ReelsGrab e cole o link do YouTube copiado no campo de busca na parte superior desta página.",
  },
  {
    title: "Escolha a qualidade do áudio",
    description:
      "Selecione a taxa de bits preferida: Qualidade de Estúdio (320kbps), Alta Fidelidade (256kbps) ou Padrão (128kbps).",
  },
  {
    title: "Baixe seu arquivo MP3",
    description:
      "Clique em 'Baixar MP3'. O arquivo será salvo diretamente na sua pasta Downloads ou no app Arquivos do celular.",
  },
];

const competitorMatrix = [
  { feature: "Anúncios Popunder / Redirecionamentos", reelsgrab: "✅ 0% (Sem Popups)", ytmp3: "❌ Popunders agressivos", y2mate: "❌ Alta carga de anúncios", snapsave: "❌ Várias abas" },
  { feature: "Seleção de Bitrate (128-320kbps)", reelsgrab: "✅ Sim (Todos os bitrates)", ytmp3: "⚠️ Limitado", y2mate: "⚠️ Básico", snapsave: "❌ Fixo" },
  { feature: "Suporte a YouTube Shorts", reelsgrab: "✅ Suporte Total", ytmp3: "⚠️ Falha às vezes", y2mate: "✅ Suportado", snapsave: "⚠️ Parcial" },
  { feature: "Download Direto no Safari (iPhone)", reelsgrab: "✅ 1 Clique Direto", ytmp3: "❌ Não funciona no iOS", y2mate: "⚠️ Muitos anúncios antes", snapsave: "⚠️ Complicado" },
  { feature: "Velocidade de Conversão", reelsgrab: "⚡ Menos de 3 segundos", ytmp3: "⏳ 10 - 25 segundos", y2mate: "⏳ 8 - 15 segundos", snapsave: "⏳ 10 - 20 segundos" },
  { feature: "Segurança e Risco de Malware", reelsgrab: "🛡️ Zero Risco", ytmp3: "⚠️ Notificações spam", y2mate: "⚠️ Botões falsos", snapsave: "⚠️ Links suspeitos" },
];

const bitrateComparison = [
  {
    bitrate: "320 kbps",
    quality: "Qualidade de Estúdio (Audiófilo)",
    fileSize: "~2.4 MB / min",
    frequency: "Até 20 kHz",
    recommended: "Música, apresentações ao vivo, fones de ouvido Hi-Fi",
  },
  {
    bitrate: "256 kbps",
    quality: "Alta Fidelidade",
    fileSize: "~1.9 MB / min",
    frequency: "Até 19 kHz",
    recommended: "Fones de ouvido premium, som automotivo",
  },
  {
    bitrate: "192 kbps",
    quality: "Padrão Plus",
    fileSize: "~1.4 MB / min",
    frequency: "Até 18 kHz",
    recommended: "Uso diário, toques de celular",
  },
  {
    bitrate: "128 kbps",
    quality: "Padrão (Nativo da Web)",
    fileSize: "~0.95 MB / min",
    frequency: "Até 16 kHz",
    recommended: "Podcasts, palestras, economia de espaço",
  },
  {
    bitrate: "64 kbps",
    quality: "Voz Compacta",
    fileSize: "~0.48 MB / min",
    frequency: "Até 11 kHz",
    recommended: "Audiolivros, notas de voz, baixo consumo de dados",
  },
];

const perguntas = [
  {
    q: "Como converter vídeos do YouTube para MP3 de graça?",
    a: "Copie o link de qualquer vídeo ou Short do YouTube, cole no campo de busca acima e clique em 'Converter para MP3'. Escolha a taxa de bits desejada (como 320kbps) e baixe o arquivo. É 100% grátis e sem cadastro.",
  },
  {
    q: "Qual é a qualidade máxima de áudio disponível?",
    a: "O ReelsGrab oferece áudio MP3 de até 320kbps com qualidade de estúdio. O YouTube transmite áudio em Opus (~160kbps) e AAC (~128kbps); nosso conversor preserva 100% dessa fidelidade ao empacotar no formato MP3.",
  },
  {
    q: "Posso converter YouTube Shorts em MP3?",
    a: "Sim! Nosso conversor suporta totalmente links do YouTube Shorts (youtube.com/shorts/...). Basta colar o link e extrair o áudio em segundos.",
  },
  {
    q: "Como baixar MP3 do YouTube no iPhone ou iPad?",
    a: "Abra o Safari no seu iPhone, cole o link do YouTube no ReelsGrab e toque em Baixar. O Safari exibirá uma mensagem de download; toque em 'Baixar' para salvar o arquivo no app Arquivos.",
  },
  {
    q: "Posso converter vídeos longos como podcasts ou audiolivros?",
    a: "Sim. Nosso motor na nuvem processa vídeos longos, sets de DJ, podcasts e audiolivros de até 2 horas de duração sem travamentos.",
  },
  {
    q: "Preciso instalar algum programa ou extensão?",
    a: "Não é necessário nenhum programa, extensão ou app. O ReelsGrab opera 100% online através de qualquer navegador web moderno.",
  },
  {
    q: "Qual a diferença entre 320kbps e 128kbps?",
    a: "320kbps oferece a maior resolução de áudio com frequências de até 20kHz, ideal para fones de ouvido de alta definição. 128kbps gera arquivos menores (~1MB por minuto), ideal para podcasts e para economizar memória.",
  },
  {
    q: "É legal converter vídeos do YouTube para MP3?",
    a: "A conversão é legal para uso pessoal, conteúdo de domínio público, músicas sob licença Creative Commons e vídeos de sua própria autoria. Sempre respeite os direitos autorais.",
  },
];

const relatedTools = [
  { emoji: "🎬", label: "YouTube para MP4 (PT)", href: "/pt/youtube-para-mp4", description: "Baixe vídeos do YouTube em 1080p HD" },
  { emoji: "📸", label: "Baixar Reels Instagram", href: "/pt/baixar-reels-instagram", description: "Baixe Reels do IG em 1080p" },
  { emoji: "📹", label: "Baixar Vídeo Facebook", href: "/pt/baixar-video-facebook", description: "Baixe vídeos do Facebook em HD" },
  { emoji: "🎧", label: "Reels para MP3", href: "/reels-to-mp3", description: "Extraia áudio de qualquer Reel" },
  { emoji: "🇬🇧", label: "English Version", href: "/youtube-to-mp3", description: "Convert YouTube to MP3 in 320kbps" },
];

export default function YouTubeParaMp3Page() {
  return (
    <>
      {/* JSON-LD Schemas */}
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
          "Conversor do YouTube para MP3",
          "Converta e baixe vídeos do YouTube para MP3 em alta qualidade 320kbps grátis online.",
          `${SITE_CONFIG.url}/pt/youtube-para-mp3`,
          "4.9",
          "128400"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Como Converter YouTube para MP3 em Alta Qualidade",
          "Guia passo a passo para converter e baixar vídeos e shorts do YouTube para áudio MP3.",
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
              <li className="text-slate-300">YouTube para MP3</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-medium mb-5">
            <FileAudio size={14} /> Conversor Grátis do YouTube para MP3 | 320kbps Alta Qualidade
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Conversor do YouTube para MP3{" "}
            <span className="gradient-text">Qualidade de Estúdio 320kbps</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Converta qualquer vídeo ou Short do YouTube em áudio <strong className="text-white">MP3 de alta fidelidade</strong>.
            Rápido, 100% grátis, sem cadastro e sem anúncios popunder enganosos.
          </p>

          <DownloadTool
            platform="youtube"
            mode="audio"
            placeholder="Cole o link do vídeo ou Short do YouTube aqui..."
            buttonLabel="Converter para MP3"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/pt/youtube-para-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎬 YouTube para MP4 (PT)
            </a>
            <a href="/pt/baixar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📸 Baixar Reels Instagram
            </a>
            <a href="/pt/baixar-video-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📹 Baixar Vídeo Facebook
            </a>
            <a href="/youtube-to-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
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
            Por Que o ReelsGrab é o Melhor Conversor do YouTube para MP3?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Projetado para garantir a máxima fidelidade sonora, velocidade imediata e total privacidade do usuário.
          </p>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO STEPS */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Como Converter YouTube para MP3 em 4 Passos Simples
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Extração de áudio rápida e sem complicações em menos de 10 segundos.
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
              Guia Completo: Como Converter Vídeos do YouTube para MP3 em 320kbps
            </h2>
            <p>
              O YouTube é a maior plataforma de música e vídeo da internet. Milhões de pessoas ouvem álbuns completos,
              shows ao vivo, podcasts, entrevistas e audiolivros diariamente no YouTube.
              No entanto, reproduzir vídeos com a tela apagada consome muita bateria e dados de internet móvel caso você não
              tenha uma assinatura paga.
            </p>
            <p>
              Com o <strong>ReelsGrab YouTube para MP3</strong>, você extrai a trilha sonora de qualquer vídeo ou Short do YouTube
              e a salva em formato MP3 padrão a <strong>320kbps de altíssima qualidade</strong>. Sem precisar instalar programas
              pesados, sem cadastro e sem anúncios popunder invasivos.
            </p>
          </div>

          {/* SEÇÃO 2: Tabela comparativa */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabela Comparativa: ReelsGrab vs. Outros Conversores de YouTube para MP3
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Recurso</th>
                    <th className="p-3.5 font-semibold text-purple-400 bg-purple-950/20">ReelsGrab</th>
                    <th className="p-3.5 font-semibold">YTMP3</th>
                    <th className="p-3.5 font-semibold">Y2Mate</th>
                    <th className="p-3.5 font-semibold">SnapSave</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {competitorMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 font-semibold text-emerald-400 bg-purple-950/20">{row.reelsgrab}</td>
                      <td className="p-3.5 text-slate-400">{row.ytmp3}</td>
                      <td className="p-3.5 text-slate-400">{row.y2mate}</td>
                      <td className="p-3.5 text-slate-400">{row.snapsave}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEÇÃO 3: Comparativo de Bitrate */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Comparativo de Taxa de Bits (Bitrates): Qual Escolher?
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Taxa de Bits</th>
                    <th className="p-3.5 font-semibold">Qualidade Sonora</th>
                    <th className="p-3.5 font-semibold">Tamanho Médio</th>
                    <th className="p-3.5 font-semibold">Faixa de Frequência</th>
                    <th className="p-3.5 font-semibold">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {bitrateComparison.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{item.bitrate}</td>
                      <td className="p-3.5 text-slate-300">{item.quality}</td>
                      <td className="p-3.5 text-slate-400">{item.fileSize}</td>
                      <td className="p-3.5 text-slate-400">{item.frequency}</td>
                      <td className="p-3.5 text-slate-300">{item.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEÇÃO 4: Tutoriais por aparelho */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Como Converter YouTube para MP3 em Qualquer Aparelho
            </h3>

            {/* iPhone */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar YouTube em MP3 no iPhone e iPad (iOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>No app do YouTube, copie o link do vídeo através do botão Compartilhar.</li>
                <li>Abra o Safari e acesse <code>www.reelsgrab.net/pt/youtube-para-mp3</code>.</li>
                <li>Cole o link no campo de busca e toque em <strong>&quot;Converter para MP3&quot;</strong>.</li>
                <li>Toque em <strong>&quot;Baixar MP3&quot;</strong> e confirme o download no Safari para salvar o arquivo no app Arquivos.</li>
              </ol>
            </div>

            {/* Android */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar YouTube em MP3 no Android (Samsung, Xiaomi, Motorola)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copie o link do vídeo do YouTube no app do celular.</li>
                <li>Abra o Chrome, acesse o ReelsGrab e cole a URL no conversor.</li>
                <li>Toque em Baixar MP3 e o arquivo será salvo na pasta <code>/Download/</code>, pronto para tocar offline.</li>
              </ol>
            </div>

            {/* PC e Mac */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Laptop size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Converter YouTube para MP3 no PC e Mac (Windows, macOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Copie a URL do vídeo diretamente da barra de endereços do navegador.</li>
                <li>Cole no ReelsGrab e clique em <strong>&quot;Converter para MP3&quot;</strong>.</li>
                <li>Clique em Baixar MP3 e o áudio será salvo na sua pasta de Downloads.</li>
              </ol>
            </div>
          </div>

          {/* SEÇÃO 5: Conclusão */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Aproveite suas Músicas Favoritas com o ReelsGrab
            </h3>
            <p>
              O ReelsGrab é o conversor do YouTube para MP3 mais rápido, seguro e com a melhor qualidade de áudio da internet.
              Sem programas, sem assinaturas e sem anúncios chatos. Converta seu primeiro vídeo agora mesmo!
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
          Perguntas Frequentes | Conversor do YouTube para MP3
        </h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
