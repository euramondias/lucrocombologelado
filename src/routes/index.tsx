import { createFileRoute } from "@tanstack/react-router";
import {
  Cake, PlayCircle, Package, ClipboardList, Calculator, Megaphone,
  Sparkles, Video, TrendingUp, Wallet, Check, ShieldCheck, Star, User, Mail, MessageCircle, ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CHECKOUT_URL, PRICE, ORIGINAL_PRICE, CONTACT, LEGAL_LINKS, HAS_7_DAY_GUARANTEE, TESTIMONIALS } from "@/config/site";
import heroAsset from "@/assets/hero.jpeg.asset.json";
import r1 from "@/assets/r1.jpg";
import r2 from "@/assets/r2.jpg";
import r3 from "@/assets/r3.jpg";
import r4 from "@/assets/r4.jpg";
import r5 from "@/assets/r5.jpg";
import r6 from "@/assets/r6.jpg";
import r7 from "@/assets/r7.jpg";
import r8 from "@/assets/r8.jpg";
import r9 from "@/assets/r9.jpg";
import r10 from "@/assets/r10.jpg";
import r11 from "@/assets/r11.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucro com Bolo Gelado" },
      { name: "description", content: "Aprenda 11 receitas de bolo gelado em videoaulas passo a passo, com versões embrulhadas e na marmita. Conheça o preparo, a precificação e dicas para começar a vender." },
      { property: "og:title", content: "Lucro com Bolo Gelado" },
      { property: "og:description", content: "Aprenda 11 receitas de bolo gelado em videoaulas passo a passo, com versões embrulhadas e na marmita. Conheça o preparo, a precificação e dicas para começar a vender." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lucrocombologelado.lovable.app/" },
      { property: "og:image", content: "https://lucrocombologelado.lovable.app/__l5e/assets-v1/9302f37d-f12a-4ec3-9c8f-ade7e51a4d66/hero.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lucrocombologelado.lovable.app/__l5e/assets-v1/9302f37d-f12a-4ec3-9c8f-ade7e51a4d66/hero.jpeg" },
    ],
    links: [{ rel: "canonical", href: "https://lucrocombologelado.lovable.app/" }],
  }),
  component: Index,
});

const RECIPES = [
  { name: "Bolo Gelado Embrulhado de Coco com Abacaxi", img: r1 },
  { name: "Bolo Gelado Embrulhado de Ninho com Brigadeiro", img: r2 },
  { name: "Bolo Gelado de Prestígio", img: r3 },
  { name: "Bolo Gelado Embrulhado de Olho de Sogra", img: r4 },
  { name: "Bolo Gelado de Leite Ninho na Marmita", img: r5 },
  { name: "Bolo Gelado de Coco na Marmita", img: r6 },
  { name: "Bolo Gelado de Brigadeiro com Calda Cremosa na Marmita", img: r7 },
  { name: "Bolo Gelado de Limão na Marmita", img: r8 },
  { name: "Bolo Gelado de Leite Ninho", img: r9 },
  { name: "Bolo Gelado Prestígio Bem Molhadinho e Suculento", img: r10 },
  { name: "Bolo Gelado Embrulhado de Coco Super Molhadinho e Suculento", img: r11 },
];

const LEARN = [
  { icon: Cake, t: "Receitas de bolo gelado", d: "Aprenda diferentes sabores e combinações." },
  { icon: PlayCircle, t: "Preparo passo a passo", d: "Acompanhe as demonstrações em videoaulas." },
  { icon: Package, t: "Diferentes apresentações", d: "Conheça versões embrulhadas e na marmita." },
  { icon: ClipboardList, t: "Organização da produção", d: "Planeje ingredientes e quantidades." },
  { icon: Calculator, t: "Precificação", d: "Aprenda a considerar ingredientes, embalagens e outros custos." },
  { icon: Megaphone, t: "Estratégias de venda", d: "Conheça ideias para divulgar seus produtos e atender clientes." },
];

const WHY = [
  { icon: Sparkles, t: "Receitas variadas", d: "Conheça diferentes sabores para ampliar seu repertório." },
  { icon: Video, t: "Aprendizado prático", d: "Acompanhe as receitas em videoaulas." },
  { icon: TrendingUp, t: "Planejamento de vendas", d: "Entenda a importância de organizar custos e preços." },
  { icon: Wallet, t: "Possibilidade de renda extra", d: "Utilize o conhecimento para planejar seu próprio negócio." },
];

const INCLUDED = [
  "Aulas em vídeo com as receitas incluídas no curso",
  "11 receitas de bolo gelado",
  "Versões embrulhadas e preparadas na marmita",
  "Conteúdo demonstrativo de diferentes sabores",
  "Orientações de organização e planejamento de vendas",
];

// Respostas marcadas com [EDITAR] dependem da configuração real do curso.
const FAQ = [
  { q: "Preciso ter experiência com confeitaria?", a: "Não. As receitas são demonstradas passo a passo em vídeo, para que você possa acompanhar mesmo começando agora." },
  { q: "Como funcionam as videoaulas?", a: "Cada receita é apresentada em vídeo, mostrando o preparo e a montagem. Você assiste quando quiser e pode rever quantas vezes precisar." },
  { q: "Quais receitas estão incluídas?", a: "São 11 receitas de bolo gelado, entre versões embrulhadas e na marmita — como coco, Prestígio, Leite Ninho, brigadeiro, limão e olho de sogra. Veja a lista completa na seção de receitas." },
  { q: "Como posso começar a vender bolos gelados?", a: "O curso traz orientações sobre organização da produção, precificação e ideias de divulgação. Os resultados dependem da sua dedicação, região e outros fatores." },
  { q: "Como recebo o acesso ao curso?", a: "Após a confirmação do pagamento, as instruções de acesso são enviadas pela plataforma de checkout para o e-mail informado na compra." },
  { q: "Por quanto tempo terei acesso?", a: "O período de acesso é informado na página de checkout. Consulte as condições antes de concluir a compra." },
  { q: "Posso assistir às aulas pelo celular?", a: "Sim. As aulas podem ser assistidas pelo celular, tablet ou computador com acesso à internet." },
  { q: "Como funciona a política de reembolso?", a: "As condições de reembolso seguem a política da plataforma de pagamento e são apresentadas no checkout." },
];

function BuyButton({ children, href = CHECKOUT_URL, className = "" }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-analytics="cta-checkout"
      className={`inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-extrabold tracking-wide text-accent-foreground shadow-gold transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHead({ title, sub, light = false }: { title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function IconCard({ icon: Icon, t, d }: { icon: typeof Cake; t: string; d: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-secondary">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-primary">{t}</h3>
      <p className="mt-2 text-muted-foreground">{d}</p>
    </div>
  );
}

function Index() {
  return (
    <div className="overflow-x-hidden">
      <main id="topo">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-[1.1] text-primary sm:text-5xl">
              Aprenda a fazer <span className="text-accent italic">bolos gelados</span> irresistíveis e descubra como começar a <span className="underline decoration-accent decoration-4 underline-offset-8">vender</span>!
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Aprenda receitas cremosas e deliciosas, conheça diferentes apresentações e dê os primeiros passos para transformar sua produção em uma oportunidade de renda extra.
            </p>
            <ul className="mt-6 space-y-2">
              {["Videoaulas passo a passo.", "Receitas de diferentes sabores.", "Aprenda no seu ritmo."].map((b) => (
                <li key={b} className="flex items-center gap-3 font-semibold text-foreground">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check className="h-4 w-4" aria-hidden /></span>
                  {b}
                </li>
              ))}
            </ul>
            <BuyButton href="#oferta" className="mt-8 w-full sm:w-auto">QUERO APRENDER AGORA</BuyButton>
          </div>
          <div className="relative">
            <img src={heroAsset.url} alt="Fatia de bolo gelado de coco suspensa em uma espátula, retirada de uma assadeira de alumínio coberta com coco ralado" width={1255} height={1673} className="aspect-[6/7] w-full rounded-3xl object-cover shadow-soft" />
          </div>
        </section>

        {/* APRENDER */}
        <section className="bg-muted/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="O que você vai aprender no curso?" sub="Conheça receitas deliciosas e aprenda diferentes formas de preparar e apresentar seus bolos gelados." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LEARN.map((c) => <IconCard key={c.t} {...c} />)}
            </div>
          </div>
        </section>

        {/* RECEITAS */}
        <section id="receitas" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="Receitas deliciosas para você aprender!" sub="Descubra os sabores que fazem parte do curso Lucro com Bolo Gelado." />
            <ul className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 lg:grid-cols-4">
              {RECIPES.map((r, i) => (
                <li key={r.name} className="group overflow-hidden rounded-2xl bg-card shadow-soft">
                  <div className="overflow-hidden">
                    <img src={r.img} alt={r.name} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-accent">RECEITA {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-1 font-sans text-base font-bold leading-snug text-primary">{r.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* POR QUE */}
        <section className="bg-muted/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="Comece a aprender no seu ritmo!" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((c) => <IconCard key={c.t} {...c} />)}
            </div>
          </div>
        </section>

        {/* RECEBE */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead title="Tudo para começar a aprender!" />
            <ul className="space-y-4">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-accent"><Check className="h-5 w-5" aria-hidden /></span>
                  <span className="font-semibold text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="scroll-mt-16 bg-offer-bg py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="Comece hoje sua jornada no mundo dos bolos gelados!" sub="Tenha acesso às receitas do curso Lucro com Bolo Gelado e aprenda no seu ritmo." />
            <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-card shadow-soft">
              <span className="offer-top-bar block h-2" aria-hidden />
              <div className="px-6 py-9 text-center sm:px-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs font-extrabold text-primary">
                  <span aria-hidden>🔥</span> Acesso promocional por tempo limitado
                </span>
                <h3 className="mt-6 font-sans text-3xl font-extrabold leading-tight text-primary sm:text-4xl">Garanta seu acesso hoje</h3>
                <div className="mt-7">
                  <p className="text-sm font-semibold text-muted-foreground"><span className="line-through">De R$ {ORIGINAL_PRICE}</span></p>
                  <p className="mt-3 font-display leading-none text-primary">
                    <span className="align-top text-2xl font-bold">R$</span>{" "}
                    <span className="text-7xl font-bold">{PRICE.split(",")[0]}</span>
                    <span className="text-3xl font-bold">,{PRICE.split(",")[1]}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Pagamento único • Acesso vitalício</p>
                </div>
                <BuyButton className="mt-8 w-full">Quero Começar Agora <ArrowRight className="ml-2 h-5 w-5" aria-hidden /></BuyButton>
                <p className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  Compra 100% segura • Garantia de 7 dias
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="Experiências de quem aprende e empreende" sub="Confira os relatos de quem aprendeu com o curso e colocou as receitas em prática." />
            <div className="grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <figure key={i} className="relative rounded-2xl border border-dashed border-border bg-card p-7 shadow-soft">
                  {t.isExample && <span className="absolute right-4 top-4 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">Exemplo</span>}
                  <div className="flex gap-1 text-accent" aria-label={`${t.rating} de 5 estrelas`}>
                    {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" aria-hidden />)}
                  </div>
                  <blockquote className="mt-4 text-muted-foreground">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    {t.photo ? (
                      <img src={t.photo} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    ) : (
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground"><User className="h-6 w-6" aria-hidden /></span>
                    )}
                    <span>
                      <span className="block font-bold text-primary">{t.name}</span>
                      <span className="block text-sm text-muted-foreground">{t.location}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-5">
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-muted/60 p-8 text-center sm:flex-row sm:text-left">
              <span className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-accent"><ShieldCheck className="h-10 w-10" aria-hidden /></span>
              <div>
                <h2 className="text-2xl font-bold text-primary">Compre com tranquilidade</h2>
                <p className="mt-2 text-muted-foreground">
                  {HAS_7_DAY_GUARANTEE
                    ? "Você conta com garantia de 7 dias, conforme as condições informadas no checkout."
                    : "As condições de acesso e de reembolso são apresentadas na página de checkout. Consulte-as antes de concluir sua compra."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/60 py-20">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead title="Perguntas frequentes" />
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((f, i) => (
                <AccordionItem key={f.q} value={`f${i}`} className="rounded-2xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-12 text-primary-foreground">
        <p className="px-5 text-center text-sm text-primary-foreground/80">© {new Date().getFullYear()} Lucro com Bolo Gelado — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
