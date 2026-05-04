<script>
  import { Pencil, Layout, User, CheckCircle } from "phosphor-svelte";

  const features = [
    {
      icon: Layout,
      title: "Temiz Arayüz Tasarımı",
      desc: "Minimal ve anlaşılır arayüzler oluşturarak kullanıcı deneyimini ön planda tutarım."
    },
    {
      icon: User,
      title: "Kullanıcı Odaklı Yaklaşım",
      desc: "Kullanıcının ihtiyacını ve davranışını göz önünde bulundurarak tasarım yaparım."
    },
    {
      icon: Pencil,
      title: "Wireframe & Yapı",
      desc: "Arayüzü geliştirme sürecine uygun olacak şekilde sade ve net olarak planlarım."
    },
    {
      icon: CheckCircle,
      title: "Geliştirmeye Uygun Tasarım",
      desc: "Tasarımları doğrudan koda aktarılabilir şekilde hazırlarım."
    }
  ];

  const steps = [
    { 
      title: "İhtiyaç Analizi", 
      desc: "Projenin hedef kitlesi ve kullanım amacı belirlenir." 
    },
    { 
      title: "Wireframe", 
      desc: "Sayfa yapısı ve kullanıcı akışı basit şekilde planlanır." 
    },
    { 
      title: "Tasarım", 
      desc: "Minimal ve işlevsel arayüz oluşturulur." 
    },
    { 
      title: "Geliştirme Uyum", 
      desc: "Tasarım frontend sürecine uygun hale getirilir." 
    }
  ];

  const tech = [
    "Figma",
    "Design Systems",
    "Wireframing",
    "User Flow",
    "Responsive Design",
    "Accessibility Basics"
  ];
</script>

<div class="container mx-auto px-6 py-16 space-y-20">

  <!-- HERO -->
  <section class="grid lg:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <h1 class="text-4xl font-bold tracking-tight">
        UI / UX Design
      </h1>

      <p class="text-muted-foreground text-lg">
        Kullanıcı dostu ve sade arayüzler tasarlıyorum. Tasarım sürecinde estetikten çok
        kullanılabilirlik ve geliştirme uyumu üzerine odaklanıyorum.
      </p>

      <p class="text-sm text-muted-foreground">
        Amacım karmaşık değil, anlaşılır ürünler oluşturmak.
      </p>

      <div class="flex gap-4">
        <button class="px-6 py-3 bg-primary text-primary-foreground">
          İletişime Geç
        </button>
        <button class="px-6 py-3 border border-border">
          Örnekleri Gör
        </button>
      </div>
    </div>

    <div class="border border-border p-10">
      <p class="text-sm text-muted-foreground mb-4">Kısa Özet</p>
      <p class="text-lg">
        Basit, anlaşılır ve geliştirilebilir arayüzler tasarlıyorum.
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
    <h2 class="text-2xl font-semibold">Kullandığım Araçlar</h2>

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
      Basit ve Kullanılabilir Arayüzler Oluşturalım
    </h2>

    <p class="text-muted-foreground">
      Projen için sade ve işlevsel bir arayüz tasarlamamı istersen iletişime geçebilirsin.
    </p>

    <a href="mailto:kilicihasan42@gmail.com" class="px-8 py-3 bg-primary text-primary-foreground">
      Bana Yaz
    </a>
  </section>

</div>