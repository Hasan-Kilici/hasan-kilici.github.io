<script>
  import { Book, Briefcase, CaretDown, CaretUp } from "phosphor-svelte";

  let open = {
    freelance: false,
    openanime: false,
    uni: false,
    kapsul: false,
    staj: false,
    lise: false
  };
</script>

<div class="relative container mx-auto py-10">

  <!-- Vertical Line -->
  <div class="absolute left-6 top-0 h-full w-px bg-border"></div>

  <!-- ================= FREELANCE ================= -->
  <div class="relative pl-20 pb-10">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
      <Briefcase size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start w-full">
      <img src="/logos/freelance.png" class="w-12 h-12 rounded-lg object-contain border bg-white p-1" />

      <div class="w-full">
        <h3 class="text-lg font-semibold">Freelance</h3>
        <p class="text-sm text-muted-foreground">2023 – Devam Ediyor</p>

        <p class="mt-2 text-sm text-muted-foreground">
          Farklı müşteriler için web ve yazılım projeleri geliştirilmiş...
        </p>

        <button
          class="mt-3 text-sm flex items-center gap-1 text-primary hover:underline"
          on:click={() => open.freelance = !open.freelance}
        >
          {open.freelance ? "Kapat" : "Devamını Gör"}

          {#if open.freelance}
            <CaretUp size={16} />
          {:else}
            <CaretDown size={16} />
          {/if}
        </button>

        {#if open.freelance}
          <div class="mt-3 rounded-xl text-sm text-black space-y-1">
            <div class="flex gap-3 items-start">
              <img src="/techs/go.png" alt="Golang" class="h-8 border-border border-1">
              <div>
                  <p class="font-semibold">Go ile backend/network hizmetleri</p>
                  <ul class="block text-muted-foreground">
                    <li>• Gofiber / Gin-gonic ile microservis/monolith yapı geliştirme</li>
                    <li>• TCP/UDP temelli ağ protokolü geliştirme ve mevcut protokolün güvenliği ile alakalı çalışmalar</li>
                    <li>• Vibe Coding Proje Optimizasyonu ve Clean Arch Kurma</li>
                    <li>• Gorilla/Websocket ile Online Servis geliştirme</li>
                    <li>• Wails ile Masaüstü uygulama geliştirme</li>
                    <li>• Cobra ile CLI geliştirme</li>
                  </ul>
                </div>
            </div>
            <div class="flex gap-3 items-start">
              <img src="/techs/nodejs.png" alt="Node.js" class="h-8 border-border border-1">
              <div>
                  <p class="font-semibold">Node.js ile Backend hizmetleri</p>
                  <ul class="block text-muted-foreground">
                    <li>• Shopify API ile Custom E-Ticaret servisleri geliştirme</li>
                    <li>• Express / Fastify ile microservis/monolith yapı geliştirme</li>
                    <li>• Socket.io ile online servis geliştirme</li>
                    <li>• Electron ile Masaüstü uygulama geliştirme</li>
                  </ul>
                </div>
            </div>
            <div class="flex gap-3 items-start">
              <img src="/techs/svelte.png" alt="Svelte" class="h-8 border-border border-1">
              <div>
                  <p class="font-semibold">Svelte ile Modern arayüz geliştirme</p>
                  <ul class="block text-muted-foreground">
                    <li>• Tailwind ile Modern arayüzler geliştirme</li>
                    <li>• Geist, Material gibi tasarım disiplinleri ile okunur arayüz geliştirme</li>
                  </ul>
                </div>
            </div>
            <div class="flex gap-3 items-center">
              <img src="/techs/opencart.png" alt="Opencart" class="h-8 border-border border-1">
              <p>OpenCart Entegrasyonu ve Plugin geliştirme</p>
            </div>
            <div class="flex gap-3 items-center">
              <img src="/techs/wordpress.png" alt="Wordpress" class="h-8 border-border border-1">
              <p>Wordpress Tema/Plugin geliştirme</p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- ================= OPENANIME ================= -->
  <div class="relative pl-20 pb-10">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
      <Briefcase size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start w-full">
      <img src="/logos/openanime.png" class="w-12 h-12 rounded-lg object-contain border bg-white p-1" />

      <div class="w-full">
        <h3 class="text-lg font-semibold">OpenAni.me</h3>
        <p class="text-sm text-muted-foreground">Backend Developer • 2022 – 2024</p>

        <p class="mt-2 text-sm text-muted-foreground">
          Golang backend ve FFMPEG encoding sistemleri.
        </p>

        <button
          class="mt-3 text-sm flex items-center gap-1 text-primary hover:underline"
          on:click={() => open.openanime = !open.openanime}
        >
          {open.openanime ? "Kapat" : "Devamını Gör"}

          {#if open.openanime}
            <CaretUp size={16} />
          {:else}
            <CaretDown size={16} />
          {/if}
        </button>

        {#if open.openanime}
          <div class="mt-3 rounded-xl text-sm text-black space-y-1">
            <div class="flex gap-3 items-start">
              <img src="/techs/go.png" alt="Golang" class="h-8 border-border border-1">
              <div>
                  <p class="font-semibold">Go ile Encoding servisi geliştirme</p>
                  <ul class="block text-muted-foreground">
                    <li>• Gin-gonic ile monolith yapı geliştirme</li>
                    <li>• Rest API geliştirme</li>
                  </ul>
                </div>
            </div>
            <div class="flex gap-3 items-start">
              <img src="/techs/ffmpeg.png" alt="FFMPEG" class="h-8 border-border border-1">
              <div>
                  <p class="font-semibold">FFMPEG Encoding</p>
                  <ul class="block text-muted-foreground">
                    <li>• HLS Encoding Hizmeti</li>
                    <li>• Basit command işlevleri</li>
                  </ul>
                </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- ================= UNIVERSITY ================= -->
  <div class="relative pl-20 pb-10">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
      <Book size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start w-full">
      <img src="/logos/selcuk.png" class="w-12 h-12 rounded-lg object-contain border bg-white p-1" />

      <div class="w-full">
        <h3 class="text-lg font-semibold">Selçuk Üniversitesi</h3>
        <p class="text-sm text-muted-foreground">2025 – Devam Ediyor</p>

        <p class="mt-2 text-sm text-muted-foreground">
          Yazılım geliştirme, Web geliştirme ve Algoritmalar
        </p>

        <button
          class="mt-3 text-sm flex items-center gap-1 text-primary hover:underline"
          on:click={() => open.uni = !open.uni}
        >
          {open.uni ? "Kapat" : "Devamını Gör"}

          {#if open.uni}
            <CaretUp size={16} />
          {:else}
            <CaretDown size={16} />
          {/if}
        </button>

        {#if open.uni}
          <div class="mt-3 rounded-xl text-sm text-black space-y-1">
            <div class="flex gap-3 items-start">
              <img src="/techs/java.png" alt="Java" class="h-8 border-border border-1">
              <div>
                  <p class="font-semibold">Java - Programlama</p>
                  <ul class="block text-muted-foreground">
                    <li>• Java Temelleri</li>
                    <li>• Veri yapıları ve algoritmalar</li>
                    <li>• Swing ile Arayüz geliştirme</li>
                    <li>• Hata analizi ve Optimizasyon</li>
                  </ul>
                </div>
            </div>
            <div class="flex gap-3 items-start">
              <img src="/techs/csharp.png" alt="C#" class="h-8 border-border border-1">
              <div>
                  <p class="font-semibold">C# - Programlama</p>
                  <ul class="block text-muted-foreground">
                    <li>• C# Temelleri</li>
                    <li>• Veri yapıları ve algoritmalar</li>
                    <li>• WFA ile Uygulama geliştirme</li>
                    <li>• MSSQL/SQLITE Bağlantısı ve temel SQL fonksiyonları</li>
                  </ul>
                </div>
            </div>
            <div class="flex gap-3 items-start">
              <img src="/techs/javascript.png" alt="Javascript" class="h-8 border-border border-1">
              <div>
                  <p class="font-semibold">Web Geliştirme</p>
                  <ul class="block text-muted-foreground">
                    <li>• HTML,CSS,Javascript temelleri</li>
                    <li>• Temel UI-UX Geliştirme</li>
                    <li>• Website optimizasyonu (Compressing,layz load, skeleton base,...)</li>
                  </ul>
                </div>
            </div>
            <div class="flex gap-3 items-center">
              <img src="/techs/network.png" alt="Network" class="h-8 border-border border-1">
              <p>Ağ temelleri (TCP/UDP, HTTP, DNS, IP)</p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- ================= KAPSÜL ================= -->
  <div class="relative pl-20 pb-10">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
      <Book size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start w-full">
      <img src="/logos/kapsul.png" class="w-12 h-12 rounded-lg object-contain border bg-white p-1" />

      <div class="w-full">
        <h3 class="text-lg font-semibold">Kapsül Teknoloji</h3>
        <p class="text-sm text-muted-foreground">2022 - 2022</p>

        <p class="mt-2 text-sm text-muted-foreground">
          Teknofest eğitim platformu.
        </p>

        <button
          class="mt-3 text-sm flex items-center gap-1 text-primary hover:underline"
          on:click={() => open.kapsul = !open.kapsul}
        >
          {open.kapsul ? "Kapat" : "Devamını Gör"}

          {#if open.kapsul}
            <CaretUp size={16} />
          {:else}
            <CaretDown size={16} />
          {/if}
        </button>

        {#if open.kapsul}
          <div class="mt-3 rounded-xl text-sm text-black space-y-1">

            <div class="flex gap-3 items-start">
              <img src="/techs/management.png" alt="Management" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">Proje Yönetimi & Mentorluk</p>
                <ul class="text-muted-foreground">
                  <li>• Agile çalışma mantığı</li>
                  <li>• Takım içi görev dağılımı</li>
                  <li>• Ürün geliştirme süreçleri</li>
                </ul>
              </div>
            </div>

          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- ================= STAJ ================= -->
  <div class="relative pl-20 pb-10">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
      <Briefcase size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start w-full">
      <img src="/logos/dogan.png" class="w-12 h-12 rounded-lg object-contain border bg-white p-1" />

      <div class="w-full">
        <h3 class="text-lg font-semibold">Doğan Çanta IT</h3>
        <p class="text-sm text-muted-foreground">Staj • 2022 – 2023</p>

        <p class="mt-2 text-sm text-muted-foreground">
          IT süreçleri.
        </p>

        <button
          class="mt-3 text-sm flex items-center gap-1 text-primary hover:underline"
          on:click={() => open.staj = !open.staj}
        >
          {open.staj ? "Kapat" : "Devamını Gör"}

          {#if open.staj}
            <CaretUp size={16} />
          {:else}
            <CaretDown size={16} />
          {/if}
        </button>

        {#if open.staj}
          <div class="mt-3 rounded-xl text-sm text-black space-y-1">

            <div class="flex gap-3 items-start">
              <img src="/techs/go.png" alt="Go" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">Backend & Web Development</p>
                <ul class="text-muted-foreground">
                  <li>• Go ile e-ticaret platformu geliştirme (ürün, sipariş yönetimi)</li>
                  <li>• OpenCart entegrasyonu ve custom geliştirmeler</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3 items-start">
              <img src="/techs/electron.png" alt="Electron" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">Masaüstü Uygulama Geliştirme</p>
                <ul class="text-muted-foreground">
                  <li>• Electron ile web sistemlerini masaüstüne taşıma</li>
                  <li>• Performans ve dağıtım süreçleri optimizasyonu</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3 items-start">
              <img src="/techs/automation.png" alt="Automation" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">Otomasyon & Veri İşleme</p>
                <ul class="text-muted-foreground">
                  <li>• PDF indirme ve işleme otomasyonu</li>
                  <li>• Excel → ürün kataloğu dönüşüm aracı</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3 items-start">
              <img src="/techs/tools.png" alt="Tools" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">Araçlar & İç Sistemler</p>
                <ul class="text-muted-foreground">
                  <li>• EAN / QR kod entegrasyonu</li>
                  <li>• NVİ API entegrasyonları</li>
                  <li>• Canvas tabanlı etiket tasarım aracı</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3 items-start">
              <img src="/techs/hardware.png" alt="Hardware" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">Teknik Destek & Donanım</p>
                <ul class="text-muted-foreground">
                  <li>• Donanım bakım ve onarım süreçleri</li>
                  <li>• IT destek ve sistem yönetimi</li>
                </ul>
              </div>
            </div>

          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- ================= LİSE ================= -->
  <div class="relative pl-20">
    <div class="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
      <Book size={32} />
    </div>

    <div class="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start w-full">
      <img src="/logos/mtal.png" class="w-12 h-12 rounded-lg object-contain border bg-white p-1" />

      <div class="w-full">
        <h3 class="text-lg font-semibold">Selçuklu MTAL</h3>
        <p class="text-sm text-muted-foreground">2019 – 2023</p>

        <p class="mt-2 text-sm text-muted-foreground">
          Bilişim teknolojileri.
        </p>

        <button
          class="mt-3 text-sm flex items-center gap-1 text-primary hover:underline"
          on:click={() => open.lise = !open.lise}
        >
          {open.lise ? "Kapat" : "Devamını Gör"}

          {#if open.lise}
            <CaretUp size={16} />
          {:else}
            <CaretDown size={16} />
          {/if}
        </button>

        {#if open.lise}
           <div class="mt-3 rounded-xl text-sm text-black space-y-1">
            <div class="flex gap-3 items-start">
              <img src="/techs/php.png" alt="PHP" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">PHP & MySQL</p>
                <ul class="text-muted-foreground">
                  <li>• Dinamik web uygulamaları geliştirme</li>
                  <li>• CRUD işlemleri ve veritabanı yönetimi</li>
                  <li>• Form işleme ve backend mantığı</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3 items-start">
              <img src="/techs/csharp.png" alt="C#" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">C# - Console Programlama</p>
                <ul class="text-muted-foreground">
                  <li>• Temel programlama mantığı</li>
                  <li>• Algoritma geliştirme</li>
                  <li>• Dosya işlemleri</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3 items-start">
              <img src="/techs/javascript.png" alt="Web" class="h-8 border-border border-1">
              <div>
                <p class="font-semibold">Web Tasarım</p>
                <ul class="text-muted-foreground">
                  <li>• HTML, CSS, JavaScript temelleri</li>
                  <li>• Responsive tasarım mantığı</li>
                  <li>• Temel UI/UX prensipleri</li>
                </ul>
              </div>
            </div>

          </div>
        {/if}
      </div>
    </div>
  </div>

</div>