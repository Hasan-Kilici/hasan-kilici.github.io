<script>
  import { DeviceMobile, Lightning, Code, Rocket } from "phosphor-svelte";

  const features = [
    {
      icon: DeviceMobile,
      title: "Cross Platform Geliştirme",
      desc: "Ionic ve React Native ile tek kod tabanı üzerinden iOS ve Android uygulamaları geliştiririm."
    },
    {
      icon: Code,
      title: "Web Tabanlı Yaklaşım",
      desc: "Web teknolojilerini kullanarak hızlı geliştirme ve kolay bakım sağlarım."
    },
    {
      icon: Lightning,
      title: "Performans & Native Destek",
      desc: "Gerektiğinde Kotlin ile native modüller geliştirerek performansı artırırım."
    },
    {
      icon: Rocket,
      title: "Production Ready",
      desc: "Build, store release ve deployment süreçlerini uçtan uca yönetirim."
    }
  ];

  const steps = [
    { 
      title: "Analiz", 
      desc: "Projenin platform ihtiyacı (cross-platform vs native) belirlenir." 
    },
    { 
      title: "Mimari Tasarım", 
      desc: "Uygulama yapısı, state yönetimi ve API entegrasyonu planlanır." 
    },
    { 
      title: "Geliştirme", 
      desc: "Ionic, React Native veya Kotlin ile uygulama geliştirilir." 
    },
    { 
      title: "Test & Yayın", 
      desc: "Performans testleri yapılır ve App Store / Google Play için hazır hale getirilir." 
    }
  ];

  const tech = [
    "Ionic",
    "React Native",
    "Kotlin (Android)",
    "Capacitor",
    "REST / API Integration",
    "Firebase",
    "Push Notifications",
    "App Store / Google Play Deploy"
  ];
</script>

<div class="container mx-auto px-6 py-16 space-y-20">

  <!-- HERO -->
  <section class="grid lg:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <h1 class="text-4xl font-bold tracking-tight">
        Mobile Development
      </h1>

      <p class="text-muted-foreground text-lg">
        Web tabanlı yaklaşımı mobil dünyaya taşıyarak hızlı, sürdürülebilir ve performanslı mobil uygulamalar geliştiriyorum.
        Cross-platform çözümlerle geliştirme süresini kısaltırken, gerektiğinde native teknolojilerle desteklerim.
      </p>

      <p class="text-sm text-muted-foreground">
        Tek platforma bağlı kalmadan doğru çözümü seçerim.
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
        Cross-platform mobil geliştirme, native entegrasyon ve performans optimizasyonu üzerine çalışıyorum.
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
      Mobil Uygulamanı Geliştirelim
    </h2>

    <p class="text-muted-foreground">
      Hızlı geliştirilen, performanslı ve sürdürülebilir bir mobil uygulama istiyorsan birlikte çalışabiliriz.
    </p>

    <a href="mailto:kilicihasan42@gmail.com" class="px-8 py-3 bg-primary text-primary-foreground">
      Bana Yaz
    </a>
  </section>

</div>