<script>
  import { Code, Layout, Lightning, Rocket } from "phosphor-svelte";

  const features = [
    {
      icon: Code,
      title: "Framework Bağımsız Geliştirme",
      desc: "React, Vue ve Svelte ile proje ihtiyacına uygun teknoloji seçimi yaparım."
    },
    {
      icon: Layout,
      title: "Modern UI/UX",
      desc: "Minimal, kullanıcı odaklı ve performanslı arayüzler geliştiririm."
    },
    {
      icon: Lightning,
      title: "SSR & Performans",
      desc: "Next.js, Nuxt ve SvelteKit ile SEO ve hız odaklı SSR çözümleri kurarım."
    },
    {
      icon: Rocket,
      title: "Production Ready",
      desc: "Deploy, responsive yapı ve ölçeklenebilir mimari ile eksiksiz teslim."
    }
  ];

  const steps = [
    { 
      title: "Analiz", 
      desc: "Proje ihtiyaçlarına göre React, Vue veya Svelte ve uygun mimari (SPA / SSR) belirlenir." 
    },
    { 
      title: "Mimari Tasarım", 
      desc: "Component yapısı, state yönetimi ve veri akışı planlanır." 
    },
    { 
      title: "Geliştirme", 
      desc: "Seçilen teknoloji ile performanslı ve sürdürülebilir frontend geliştirilir." 
    },
    { 
      title: "Optimize & Deploy", 
      desc: "SSR, caching, SEO ve performans optimizasyonları yapılarak yayına alınır." 
    }
  ];

  const tech = [
    "React",
    "Vue",
    "Svelte / SvelteKit",
    "Next.js",
    "Nuxt",
    "SSR / SPA Architectures",
    "TailwindCSS",
    "Shadcn UI",
    "TypeScript",
    "Vite",
    "REST / API Integration"
  ];
</script>

<div class="container mx-auto px-6 py-16 space-y-20">

  <!-- HERO -->
  <section class="grid lg:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <h1 class="text-4xl font-bold tracking-tight">
        Frontend Development
      </h1>

      <p class="text-muted-foreground text-lg">
        React, Vue ve Svelte ekosistemlerinde modern frontend uygulamaları geliştiriyorum.
        Proje ihtiyaçlarına göre SSR veya SPA mimarileri kurarak performans, SEO ve ölçeklenebilirlik odaklı çözümler sunuyorum.
      </p>

      <p class="text-sm text-muted-foreground">
        Doğru teknoloji seçimi ile gereksiz complexity’den kaçınırım.
      </p>

      <div class="flex gap-4">
        <button class="px-6 py-3 bg-primary text-primary-foreground">
          İletişime Geç
        </button>
        <a href="/projects" class="px-6 py-3 border border-border">
          Projeleri Gör
        </a>
      </div>
    </div>

    <div class="border border-border p-10">
      <p class="text-sm text-muted-foreground mb-4">Kısa Özet</p>
      <p class="text-lg">
        Multi-framework frontend geliştirme, SSR mimarisi ve performans optimizasyonu üzerine odaklanıyorum.
      </p>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="space-y-10">
    <h2 class="text-2xl font-semibold">Neler Sunuyorum</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each features as f}
        <div class="border border-border p-6 space-y-4 hover:bg-muted transition">
          <svelte:component this={f.icon} size={28} />
          <h3 class="font-medium">{f.title}</h3>
          <p class="text-sm text-muted-foreground">{f.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- PROCESS -->
  <section class="space-y-10">
    <h2 class="text-2xl font-semibold">Çalışma Sürecim</h2>

    <div class="grid md:grid-cols-4 gap-6">
      {#each steps as step, i}
        <div class="border border-border p-6 space-y-3">
          <div class="text-sm text-muted-foreground">
            0{i + 1}
          </div>
          <h3 class="font-medium">{step.title}</h3>
          <p class="text-sm text-muted-foreground">{step.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- TECH STACK -->
  <section class="space-y-10">
    <h2 class="text-2xl font-semibold">Kullandığım Teknolojiler</h2>

    <div class="flex flex-wrap gap-3">
      {#each tech as t}
        <span class="border border-border px-4 py-2 text-sm">
          {t}
        </span>
      {/each}
    </div>
  </section>

  <!-- CTA -->
  <section class="border border-border p-10 text-center space-y-6">
    <h2 class="text-2xl font-semibold">
      Projeni Birlikte Geliştirelim
    </h2>

    <p class="text-muted-foreground">
      Modern, performanslı ve doğru mimari ile geliştirilmiş bir frontend istiyorsan iletişime geç.
    </p>

    <a href="mailto:kilicihasan42@gmail.com" class="px-8 py-3 bg-primary text-primary-foreground">
      Bana Yaz
    </a>
  </section>

</div>