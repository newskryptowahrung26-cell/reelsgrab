import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Shield,
  Music,
  Zap,
  Lock,
  Video,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  Share2,
  Film,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Baixar Reels do Instagram Grátis",
  description:
    "Baixe Reels do Instagram grátis em HD 1080p sem marca d'água e com áudio original e música. O melhor baixador de Reels do Instagram online: sem aplicativo, sem login. Funciona no iPhone, Android e PC.",
  keywords: [
    "baixar reels do instagram",
    "baixar reels instagram",
    "baixar reels sem marca d agua",
    "baixar reels instagram sem marca dagua",
    "como baixar reels do instagram",
    "baixar audio de reels instagram",
    "baixar reels instagram hd",
    "baixar reel instagram gratis",
    "baixar reels instagram iphone",
    "baixar reels instagram android",
    "salvar reels do instagram na galeria",
    "snapinsta alternativa",
    "fastdl alternativa",
    "saveinsta alternativa",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
    languages: {
      en: `${SITE_CONFIG.url}/instagram-reels-download`,
      es: `${SITE_CONFIG.url}/es/descargar-reels-instagram`,
      pt: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
      "x-default": `${SITE_CONFIG.url}/instagram-reels-download`,
    },
  },
  openGraph: {
    title: "Baixar Reels do Instagram Grátis Sem Marca d'Água HD (Com Áudio)",
    description:
      "Baixe Reels do Instagram grátis em HD 1080p sem marca d'água e com áudio original. Sem login e sem aplicativo.",
    url: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
  },
};

const features = [
  {
    icon: Shield,
    title: "100% Sem Marca d'Água",
    description:
      "Baixe vídeos MP4 totalmente limpos, sem logotipo do Instagram, sem marcas d'água e sem nomes de usuário sobrepostos.",
  },
  {
    icon: Music,
    title: "Áudio e Música Originais",
    description:
      "Diga adeus aos vídeos mudos. Nosso sistema extrai e une a trilha de áudio original, incluindo músicas com direitos autorais e áudios em alta.",
  },
  {
    icon: Video,
    title: "Qualidade HD 1080p e 4K",
    description:
      "Baixe na resolução máxima original (até 1080x1920 Full HD a 60fps), preservando cores vivas e nitidez máxima.",
  },
  {
    icon: Lock,
    title: "Sem Login ou Senha",
    description:
      "Privacidade total e anonimato garantido. Nunca solicitamos seus dados de acesso ao Instagram ou permissões pessoais.",
  },
  {
    icon: Smartphone,
    title: "iPhone, Android e PC",
    description:
      "Funciona diretamente no Safari para iPhone, Chrome para Android, Windows e Mac sem precisar instalar apps ou APKs.",
  },
  {
    icon: Zap,
    title: "Download em 3 Segundos",
    description:
      "Nossos servidores em nuvem processam o vídeo em menos de 3 segundos, sem filas de espera ou lentidão.",
  },
  {
    icon: Layers,
    title: "Carrosséis e Publicações Múltiplas",
    description:
      "Baixe vídeos individuais de publicações em formato carrossel do Instagram de forma rápida e prática.",
  },
  {
    icon: Sparkles,
    title: "Converter Reels em MP3",
    description:
      "Extraia a faixa de áudio ou música de fundo de qualquer Reel diretamente em formato MP3 de alta fidelidade a 320kbps.",
  },
];

const passos = [
  {
    title: "Copie o link do Reel",
    description:
      "Abra o app do Instagram ou o site, encontre o Reel que deseja baixar, toque no ícone de Compartilhar (o aviãozinho de papel) ou nos três pontos (···) e selecione 'Copiar link'.",
  },
  {
    title: "Cole o link no ReelsGrab",
    description:
      "Abra o ReelsGrab no seu navegador e cole a URL no campo de busca na parte superior desta página.",
  },
  {
    title: "Escolha o formato ou qualidade",
    description:
      "Escolha entre baixar o vídeo em Full HD 1080p sem marca d'água ou extrair apenas o áudio em formato MP3.",
  },
  {
    title: "Salve no seu dispositivo",
    description:
      "Clique em 'Baixar'. No iPhone Safari, toque na seta azul para salvar na Galeria/Fotos. No Android e PC, o vídeo será salvo na pasta Downloads.",
  },
];

const competitorMatrix = [
  {
    feature: "Sem Marca d'Água",
    reelsgrab: "✅ 100% Limpo (Sem Logo / Usuário)",
    snapinsta: "⚠️ Às vezes deixa borda",
    fastdl: "✅ Limpo",
    saveinsta: "⚠️ Marca periódica",
    nativeApp: "❌ Logotipo grande e usuário",
  },
  {
    feature: "Áudio e Música Completa",
    reelsgrab: "✅ Áudio Completo (Músicas Licenciadas)",
    snapinsta: "⚠️ Frequentemente Mudo",
    fastdl: "⚠️ Falha em alguns áudios",
    saveinsta: "⚠️ Inconsistente",
    nativeApp: "❌ Remove música com direitos",
  },
  {
    feature: "Qualidade Máxima de Vídeo",
    reelsgrab: "✅ Até 1080p Full HD (60fps)",
    snapinsta: "⚠️ Comprime para 720p",
    fastdl: "⚠️ 720p / 1080p",
    saveinsta: "⚠️ Taxa de bits variável",
    nativeApp: "❌ Forte recompreessão",
  },
  {
    feature: "Anúncios Invasivos / Popups",
    reelsgrab: "✅ 0% (Sem Popups Enganosos)",
    snapinsta: "❌ Popunders agressivos",
    fastdl: "❌ Várias abas novas",
    saveinsta: "❌ Redirecionamentos suspeitos",
    nativeApp: "N/A",
  },
  {
    feature: "Login Obrigatório",
    reelsgrab: "✅ Não precisa de login",
    snapinsta: "✅ Não precisa",
    fastdl: "✅ Não precisa",
    saveinsta: "✅ Não precisa",
    nativeApp: "❌ Conta obrigatória",
  },
  {
    feature: "Salvar no Rolo da Câmera (iPhone)",
    reelsgrab: "✅ 1 Clique Direto no Safari",
    snapinsta: "⚠️ Processo complicado",
    fastdl: "⚠️ Armadilhas de anúncios",
    saveinsta: "⚠️ Falha no iOS",
    nativeApp: "⚠️ Apenas salvos no app",
  },
  {
    feature: "Velocidade de Download",
    reelsgrab: "⚡ Menos de 3 segundos",
    snapinsta: "⏳ 8 - 15 segundos",
    fastdl: "⏳ 10 - 20 segundos",
    saveinsta: "⏳ 12 - 25 segundos",
    nativeApp: "⚡ Rápido (apenas no app)",
  },
  {
    feature: "Segurança e Zero Malware",
    reelsgrab: "🛡️ 100% Seguro (Sem APKs ou extensões)",
    snapinsta: "⚠️ Falsos alertas de vírus",
    fastdl: "⚠️ Notificações de spam",
    saveinsta: "⚠️ Links duvidosos",
    nativeApp: "🛡️ Seguro",
  },
];

const videoResolutions = [
  {
    resolution: "1080p Full HD (1080x1920)",
    aspectRatio: "9:16 Vertical",
    fps: "30 / 60 fps",
    bitrate: "3.500 - 6.000 kbps",
    bestFor: "Republicar no TikTok, YouTube Shorts, telas 4K e arquivo pessoal",
  },
  {
    resolution: "720p HD (720x1280)",
    aspectRatio: "9:16 Vertical",
    fps: "30 fps",
    bitrate: "1.500 - 2.500 kbps",
    bestFor: "Compartilhar no WhatsApp, status e economia de dados móveis",
  },
  {
    resolution: "480p Padrão (480x854)",
    aspectRatio: "9:16 Vertical",
    fps: "30 fps",
    bitrate: "800 - 1.200 kbps",
    bestFor: "Visualização rápida em conexões lentas de internet",
  },
  {
    resolution: "Apenas Áudio (MP3 / AAC)",
    aspectRatio: "N/A (Áudio)",
    fps: "N/A",
    bitrate: "128 - 320 kbps",
    bestFor: "Extração de músicas, toques de celular e podcasts",
  },
];

const perguntas = [
  {
    q: "Como baixar Reels do Instagram sem marca d'água de graça?",
    a: "Copie o link do Reel no Instagram, cole no campo de busca do ReelsGrab e clique em 'Baixar Reel'. Nosso servidor extrai o vídeo original diretamente dos servidores do Instagram, removendo marcas d'água e nomes de usuário sem recomprimir a qualidade.",
  },
  {
    q: "Por que os Reels baixados em outros sites ficam sem som?",
    a: "O Instagram usa a tecnologia DASH para transmitir mídia, separando o vídeo e o áudio em faixas diferentes. A maioria dos baixadores gratuitos pega apenas o vídeo, resultando em um arquivo mudo. O ReelsGrab une automaticamente o vídeo em HD com o áudio original, garantindo som perfeito até para músicas com direitos autorais.",
  },
  {
    q: "Como salvar Reels do Instagram na galeria de fotos do iPhone?",
    a: "Copie o link do Reel, abra o Safari e acesse o ReelsGrab. Cole o link e toque em 'Baixar Reel'. Quando o Safari perguntar se deseja baixar o arquivo, toque em 'Baixar'. Em seguida, toque no ícone azul de downloads na barra do Safari, abra o vídeo, toque no botão de compartilhar do iOS e escolha 'Salvar Vídeo'. O vídeo irá direto para seu app Fotos.",
  },
  {
    q: "Como baixar Reels do Instagram no Android?",
    a: "No app do Instagram, toque no aviãozinho de papel do Reel e selecione 'Copiar link'. Abra o Chrome, acesse o ReelsGrab, cole o link e clique em Baixar. O arquivo será salvo na pasta Downloads do seu celular e aparecerá na Galeria ou Google Fotos.",
  },
  {
    q: "Dá para baixar Reels em qualidade Full HD 1080p?",
    a: "Sim! Se o criador enviou o vídeo em resolução 1080p Full HD (1080x1920), o ReelsGrab fornecerá o arquivo original em 1080p com a melhor taxa de bits possível.",
  },
  {
    q: "Preciso instalar algum aplicativo ou extensão?",
    a: "Não. O ReelsGrab funciona 100% online no navegador. Você não precisa baixar aplicativos suspeitos, APKs ou extensões que possam comprometer a segurança do seu aparelho.",
  },
  {
    q: "Posso baixar Reels de contas privadas do Instagram?",
    a: "Por motivos de privacidade e restrições da API do Instagram, o ReelsGrab permite baixar apenas Reels e vídeos de perfis públicos.",
  },
  {
    q: "Posso baixar apenas o áudio ou música de um Reel?",
    a: "Sim! Ao colar o link no ReelsGrab, selecione a opção 'Áudio MP3' para extrair e baixar a música ou áudio em formato MP3 de alta fidelidade a 320kbps.",
  },
  {
    q: "Tem limite diário de downloads?",
    a: "Não há limites. Você pode baixar quantos Reels, vídeos e stories do Instagram desejar, totalmente grátis e sem restrições.",
  },
  {
    q: "É legal baixar Reels do Instagram?",
    a: "Baixar Reels para visualização pessoal offline, estudos ou referência criativa é amplamente aceito como uso justo. Se você pretende republicar ou usar comercialmente, é necessário obter autorização do criador e creditá-lo devidamente.",
  },
];

const relatedTools = [
  { emoji: "📹", label: "Baixar Vídeo Facebook", href: "/pt/baixar-video-facebook", description: "Baixe vídeos do Facebook em HD" },
  { emoji: "🎵", label: "YouTube para MP3 (PT)", href: "/pt/youtube-para-mp3", description: "Converta vídeos do YouTube em MP3 320kbps" },
  { emoji: "🎬", label: "YouTube para MP4 (PT)", href: "/pt/youtube-para-mp4", description: "Baixe vídeos do YouTube em 1080p HD" },
  { emoji: "🎧", label: "Reels para MP3", href: "/reels-to-mp3", description: "Extraia áudio de qualquer Reel" },
  { emoji: "🇬🇧", label: "English Version", href: "/instagram-reels-download", description: "Download Instagram Reels in HD" },
];

export default function BaixarReelsInstagramPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Baixar Reels do Instagram", url: "/pt/baixar-reels-instagram" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Baixar Reels do Instagram",
          "Baixe Reels do Instagram grátis em HD 1080p sem marca d'água e com áudio original online.",
          `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
          "4.9",
          "164200"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Como Baixar Reels do Instagram Sem Marca d'Água",
          "Guia passo a passo para baixar Reels do Instagram em qualidade HD 1080p com áudio no iPhone, Android e PC.",
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
              <li className="text-slate-300">Baixar Reels do Instagram</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-medium mb-5">
            <Film size={14} /> Baixar Reels do Instagram | HD 1080p Sem Marca d&apos;Água
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Baixar Reels do Instagram{" "}
            <span className="gradient-text">Sem Marca d&apos;Água (Com Áudio)</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Baixe Reels do Instagram em <strong className="text-white">HD 1080p</strong> sem marca d&apos;água,
            com áudio e música originais completos. Rápido, 100% grátis, sem login. Funciona no iPhone, Android e PC.
          </p>

          <DownloadTool
            platform="instagram"
            placeholder="Cole o link do Reel do Instagram aqui... (instagram.com/reel/...)"
            buttonLabel="Baixar Reel"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/pt/youtube-para-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎵 YouTube para MP3 (PT)
            </a>
            <a href="/pt/youtube-para-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎬 YouTube para MP4 (PT)
            </a>
            <a href="/pt/baixar-video-facebook" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📹 Baixar Vídeo Facebook
            </a>
            <a href="/instagram-reels-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
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
            Por Que o ReelsGrab é o Melhor Baixador de Reels do Instagram?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Projetado para eliminar todas as falhas de baixadores antigos: sem marcas d&apos;água irritantes, áudio completo e sem anúncios fraudulentos.
          </p>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO STEPS */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Como Baixar Reels do Instagram em 4 Passos Simples
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Salve qualquer Reel público do Instagram no seu celular ou computador em poucos segundos.
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
              O Guia Definitivo para Baixar Reels do Instagram Sem Marca d&apos;Água
            </h2>
            <p>
              Os <strong>Instagram Reels</strong> conquistaram bilhões de usuários no mundo todo, trazendo vídeos rápidos
              de comédia, tutoriais de culinária, rotinas de exercícios, dicas profissionais e entretenimento envolvente.
              Contudo, o Instagram não permite que você salve ou exporte esses vídeos de maneira limpa para a memória do seu aparelho.
            </p>
            <p>
              Ao usar a opção &quot;Salvar&quot; dentro do app do Instagram, o vídeo é apenas marcado como favorito dentro da sua conta.
              Você não consegue assisti-lo sem internet, não pode compartilhá-lo no WhatsApp ou Telegram, e se o autor excluir a postagem,
              você perde o acesso. Já a função de baixar pelos Stories adiciona uma enorme marca d&apos;água saltitante e, frequentemente,
              <strong>remove as músicas protegidas por direitos autorais</strong>, gerando um vídeo mudo.
            </p>
            <p>
              O <strong>ReelsGrab</strong> resolve isso com perfeição. É uma ferramenta online e gratuita que permite baixar qualquer Reel
              público em <strong>resolução original Full HD 1080p</strong>, totalmente <strong>livre de marcas d&apos;água</strong> e com o{" "}
              <strong>áudio e música 100% preservados</strong>.
            </p>
          </div>

          {/* SEÇÃO 2: O mistério do áudio */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                <Music size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Por Que os Vídeos Baixados em Outros Sites Ficam Sem Som?
              </h3>
            </div>
            <p>
              Muitos usuários se deparam com vídeos baixados que não têm áudio. Isso acontece porque o Instagram utiliza a tecnologia
              <strong>DASH (Dynamic Adaptive Streaming over HTTP)</strong>, armazenando o arquivo de vídeo e o arquivo de áudio
              em servidores separados.
            </p>
            <p>
              Ferramentas simples da internet capturam apenas o link do vídeo, ignorando o áudio.
              No <strong>ReelsGrab</strong>, nossos servidores em nuvem combinam e sincronizam a faixa de vídeo em alta resolução com a faixa
              de áudio AAC original em tempo real, assegurando que seu download sempre tenha som nítido e de alta qualidade.
            </p>
          </div>

          {/* SEÇÃO 3: Tabela comparativa */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabela Comparativa: ReelsGrab vs. Outros Baixadores de Reels
            </h3>
            <p className="mb-6">
              Veja a comparação detalhada do ReelsGrab com sites como SnapInsta, FastDL, SaveInsta e o aplicativo nativo:
            </p>

            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Recurso Principal</th>
                    <th className="p-3.5 font-semibold text-pink-400 bg-pink-950/20">ReelsGrab</th>
                    <th className="p-3.5 font-semibold">SnapInsta</th>
                    <th className="p-3.5 font-semibold">FastDL</th>
                    <th className="p-3.5 font-semibold">SaveInsta</th>
                    <th className="p-3.5 font-semibold">App Nativo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {competitorMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 font-semibold text-emerald-400 bg-pink-950/20">{row.reelsgrab}</td>
                      <td className="p-3.5 text-slate-400">{row.snapinsta}</td>
                      <td className="p-3.5 text-slate-400">{row.fastdl}</td>
                      <td className="p-3.5 text-slate-400">{row.saveinsta}</td>
                      <td className="p-3.5 text-slate-400">{row.nativeApp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEÇÃO 4: Tutoriais por aparelho */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Como Baixar Reels do Instagram em Qualquer Aparelho
            </h3>

            {/* iPhone */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Reels do Instagram no iPhone e iPad (iOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>No app do Instagram, acesse o Reel desejado. Toque no botão Compartilhar e escolha <strong>&quot;Copiar link&quot;</strong>.</li>
                <li>Abra o Safari e acesse <code>www.reelsgrab.net/pt/baixar-reels-instagram</code>.</li>
                <li>Cole o link no campo de busca e toque em <strong>&quot;Baixar Reel&quot;</strong>.</li>
                <li>Toque em <strong>&quot;Baixar Vídeo HD&quot;</strong>. O Safari perguntará se deseja baixar o arquivo; toque em <strong>Baixar</strong>.</li>
                <li>Toque na seta azul de downloads no Safari, abra o vídeo, toque no botão de compartilhar do iOS e selecione <strong>&quot;Salvar Vídeo&quot;</strong> para enviar o arquivo para a Galeria do iPhone.</li>
              </ol>
            </div>

            {/* Android */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Reels do Instagram no Android (Samsung, Xiaomi, Motorola)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>No Instagram, toque nos três pontos ou no aviãozinho no Reel e selecione <strong>&quot;Copiar link&quot;</strong>.</li>
                <li>Abra o Chrome ou navegador padrão e entre no ReelsGrab. Cole o link e clique em <strong>&quot;Baixar Reel&quot;</strong>.</li>
                <li>Escolha a qualidade 1080p e toque em Baixar. O arquivo será salvo na pasta <code>/Download/</code> e estará visível na sua Galeria.</li>
              </ol>
            </div>

            {/* PC e Mac */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Laptop size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Reels do Instagram no PC e Mac (Windows, macOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Acesse <code>instagram.com</code> no navegador do seu computador e encontre o Reel.</li>
                <li>Copie a URL da barra de endereços do navegador.</li>
                <li>Cole no ReelsGrab e clique em <strong>&quot;Baixar Reel&quot;</strong>.</li>
                <li>Clique em Baixar HD e o arquivo MP4 será salvo na sua pasta de Downloads, pronto para ser usado no CapCut, Premiere ou DaVinci.</li>
              </ol>
            </div>
          </div>

          {/* SEÇÃO 5: Resoluções */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Especificações Técnicas: Resoluções e Qualidade de Vídeo
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Perfil de Resolução</th>
                    <th className="p-3.5 font-semibold">Proporção</th>
                    <th className="p-3.5 font-semibold">Quadros (FPS)</th>
                    <th className="p-3.5 font-semibold">Taxa de Bits</th>
                    <th className="p-3.5 font-semibold">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {videoResolutions.map((res, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{res.resolution}</td>
                      <td className="p-3.5 text-slate-400">{res.aspectRatio}</td>
                      <td className="p-3.5 text-slate-400">{res.fps}</td>
                      <td className="p-3.5 text-slate-400">{res.bitrate}</td>
                      <td className="p-3.5 text-slate-300">{res.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEÇÃO 6: Conclusão */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Comece a Baixar Reels do Instagram com o ReelsGrab
            </h3>
            <p>
              O ReelsGrab oferece a maneira mais rápida, segura e prática de baixar Reels do Instagram sem marcas d&apos;água e com
              áudio original. Salve esta página nos seus favoritos e baixe seus conteúdos preferidos agora mesmo!
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
          Perguntas Frequentes | Baixar Reels do Instagram
        </h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
