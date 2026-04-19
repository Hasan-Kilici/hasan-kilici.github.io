<script>
  import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-svelte";
</script>
<header>
  <nav class="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="max-w-6xl mx-auto px-4">

      <div class="flex items-center justify-between h-16">

        <!-- LEFT: Logo -->
        <div class="flex items-center">
          <a href="/" class="text-lg font-semibold tracking-tight">
            Hasan KILICI
          </a>
        </div>

        <!-- CENTER: Navigation -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" class="text-stone-500 hover:text-foreground transition-colors">
            Hakkımda
          </a>
          <a href="#projects" class="text-foreground/70 hover:text-foreground transition-colors">
            Çalışmalar
          </a>
          <a href="#timeline" class="text-foreground/70 hover:text-foreground transition-colors">
            Eğitim ve Deneyim
          </a>
          <a href="#contact" class="text-foreground/70 hover:text-foreground transition-colors">
            İletişim
          </a>
        </div>

        <!-- RIGHT: Social -->
        <div class="flex items-center gap-3">

          <a href="https://github.com/hasan-kilici" target="_blank"
            aria-label="GitHub Profili"
            title="GitHub Profili"
            class="p-2 rounded-lg transition-colors">
            <GithubLogo size={20} />
          </a>

          <a href="https://instagram.com/kawethra.official" target="_blank"
            aria-label="Instagram Profili"
            title="Instagram Profili"
            class="p-2 rounded-lg transition-colors">
            <InstagramLogo size={20} />
          </a>

          <a href="https://www.linkedin.com/in/hasan-kilici-143b31252/" target="_blank"
            aria-label="LinkedIn Profili"
            title="LinkedIn Profili"
            class="p-2 rounded-lg transition-colors">
            <LinkedinLogo size={20} />
          </a>

        </div>

      </div>
    </div>
  </nav>
</header>