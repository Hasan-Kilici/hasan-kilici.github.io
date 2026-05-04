<script>
  import { Database, HardDrive, Lightning, Gear } from "phosphor-svelte";

  const features = [
    {
      icon: HardDrive,
      title: "API & System Design",
      desc: "RESTful API'ler ve servis mimarileri tasarlar, ölçeklenebilir backend sistemleri kurarım."
    },
    {
      icon: Database,
      title: "Veritabanı Yönetimi",
      desc: "SQL (PostgreSQL, SQLite) ve veri modelleme ile performanslı veri yapıları oluştururum."
    },
    {
      icon: Lightning,
      title: "Cache & Performans",
      desc: "Redis, caching stratejileri ve optimizasyon teknikleri ile hızlı sistemler geliştiririm."
    },
    {
      icon: Gear,
      title: "Production & DevOps",
      desc: "Docker, deployment ve sistem yönetimi ile backend'i production ortamına hazırlarım."
    }
  ];

  const steps = [
    { 
      title: "Analiz", 
      desc: "Sistem ihtiyaçları, trafik beklentisi ve veri yapısı analiz edilir." 
    },
    { 
      title: "Mimari Tasarım", 
      desc: "Monolith veya microservice yapısı, veri akışı ve servis iletişimi planlanır." 
    },
    { 
      title: "Geliştirme", 
      desc: "Go veya Node.js ile performanslı ve güvenli backend sistemi geliştirilir." 
    },
    { 
      title: "Optimize & Deploy", 
      desc: "Cache, logging, monitoring ve deployment süreçleri tamamlanır." 
    }
  ];

  const tech = [
    "Go (Fiber / FastHTTP)",
    "Node.js",
    "REST API",
    "WebSocket",
    "PostgreSQL",
    "SQLite",
    "Redis",
    "Docker",
    "Nginx",
    "System Design"
  ];
</script>

<div class="container mx-auto px-6 py-16 space-y-20">

  <!-- HERO -->
  <section class="grid lg:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <h1 class="text-4xl font-bold tracking-tight">
        Backend Development
      </h1>

      <p class="text-muted-foreground text-lg">
        Yüksek performanslı, ölçeklenebilir ve güvenli backend sistemleri geliştiriyorum.
        API tasarımından sistem mimarisine kadar uçtan uca backend çözümleri sunuyorum.
      </p>

      <p class="text-sm text-muted-foreground">
        Sadece çalışan değil, uzun vadede sürdürülebilir sistemler kurarım.
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
        API geliştirme, sistem tasarımı ve performans optimizasyonu üzerine odaklanıyorum.
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
      Backend Sistemini Güçlendirelim
    </h2>

    <p class="text-muted-foreground">
      Güvenilir, hızlı ve ölçeklenebilir bir backend sistemi kurmak istiyorsan birlikte çalışabiliriz.
    </p>

    <a href="mailto:kilicihasan42@gmail.com" class="px-8 py-3 bg-primary text-primary-foreground">
      Bana Yaz
    </a>
  </section>

</div>