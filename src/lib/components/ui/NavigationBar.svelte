<script>
  import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-svelte";
  import { page } from "$app/stores";

  $: isHome = $page.url.pathname === "/";
</script>

<header>
  <nav class="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="max-w-6xl mx-auto px-4">

      <div class="flex items-center justify-between h-16">

        <!-- LEFT -->
        <div class="flex items-center">
          <a href="/" class="text-lg font-semibold tracking-tight">
            Hasan KILICI
          </a>
        </div>

        <!-- CENTER -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href={isHome ? "#about" : "/#about"} class="text-foreground/70 hover:text-foreground transition-colors">
            Hakkımda
          </a>

          <a href={isHome ? "#projects" : "/#projects"} class="text-foreground/70 hover:text-foreground transition-colors">
            Çalışmalar
          </a>

          <a href={isHome ? "#services" : "/#services"} class="text-foreground/70 hover:text-foreground transition-colors">
            Hizmetler
          </a>

          <a href={isHome ? "#timeline" : "/#timeline"} class="text-foreground/70 hover:text-foreground transition-colors">
            Eğitim & Deneyim
          </a>

          <a href={isHome ? "#contact" : "/#contact"} class="text-foreground/70 hover:text-foreground transition-colors">
            İletişim
          </a>

        </div>

        <!-- RIGHT -->
        <div class="flex items-center gap-3">

          <a href="https://github.com/hasan-kilici" target="_blank"
            class="p-2 transition-colors">
            <GithubLogo size={20} />
          </a>

          <a href="https://instagram.com/kawethra.official" target="_blank"
            class="p-2 transition-colors">
            <InstagramLogo size={20} />
          </a>

          <a href="https://www.linkedin.com/in/hasan-kilici-143b31252/" target="_blank"
            class="p-2 transition-colors">
            <LinkedinLogo size={20} />
          </a>

        </div>

      </div>
    </div>
  </nav>
</header>