<script>
  import { Book, Briefcase } from "phosphor-svelte";
</script>

<div class="relative container mx-auto py-10">

  <!-- Vertical Line -->
  <div class="absolute left-6 top-0 h-full w-px bg-border"></div>

  <!-- ITEM -->
  <div class="relative pl-20 pb-10">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
      <Book size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5">
      <h3 class="text-lg font-semibold">Selçuklu Mesleki ve Teknik Anadolu Lisesi</h3>
      <p class="text-sm text-muted-foreground">Bilişim Teknolojileri Bölümü • 2019 - 2023</p>
      <p class="mt-2 text-sm text-muted-foreground">
        Temel yazılım geliştirme, bilgisayar sistemleri ve ağ teknolojileri alanlarında eğitim alınmıştır.
      </p>
    </div>
  </div>

  <!-- ITEM -->
  <div class="relative pl-20 pb-10">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
      <Briefcase size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5">
      <h3 class="text-lg font-semibold">Doğan Çanta IT</h3>
      <p class="text-sm text-muted-foreground">Staj • 2022 – 2023</p>
      <p class="mt-2 text-sm text-muted-foreground">
        Kurumsal IT süreçlerine destek verilmiş, yazılım ve sistem yönetimi konularında pratik deneyim kazanılmıştır.
      </p>
    </div>
  </div>

  <!-- ITEM -->
  <div class="relative pl-20 pb-10">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
      <Briefcase size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5">
      <h3 class="text-lg font-semibold">Freelance</h3>
      <p class="text-sm text-muted-foreground">2023 – Devam Ediyor</p>
      <p class="mt-2 text-sm text-muted-foreground">
        Farklı müşteriler için web ve yazılım projeleri geliştirilmiş, proje yönetimi ve müşteri iletişimi konularında deneyim edinilmiştir.
      </p>
    </div>
  </div>

  <!-- ITEM -->
  <div class="relative pl-20">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
      <Book size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5">
      <h3 class="text-lg font-semibold">Selçuk Üniversitesi</h3>
      <p class="text-sm text-muted-foreground">Bilgisayar Programcılığı • 2025 – Devam Ediyor</p>
      <p class="mt-2 text-sm text-muted-foreground">
        Yazılım geliştirme, veri yapıları ve algoritmalar üzerine akademik eğitim devam etmektedir.
      </p>
    </div>
  </div>

</div>