<script>
  import { page } from "$app/stores";
  import { GithubLogo, LinkedinLogo, InstagramLogo } from "phosphor-svelte";
  $: isHome = $page.url.pathname === "/";
</script>

<footer class="border-t border-border bg-background">
  <div class="max-w-6xl mx-auto px-4 py-10">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- LEFT -->
      <div class="text-sm text-foreground/70">
        © {new Date().getFullYear()} Hasan KILICI Tüm hakları saklıdır.
      </div>

      <!-- CENTER (optional short nav) -->
      <div class="flex gap-6 text-sm text-foreground/70">
        <a href={isHome ? "#about" : "/#about"} class="hover:text-foreground transition">Hakkımda</a>
        <a href={isHome ? "#projects" : "/#projects"} class="hover:text-foreground transition">Projeler</a>
        <a href={isHome ? "#timeline" : "/#timeline"} class="hover:text-foreground transition">Eğitim ve Deneyim</a>
        <a href={isHome ? "#contact" : "/#contact"} class="hover:text-foreground transition">İletişim</a>
      </div>

      <!-- RIGHT SOCIALS -->
      <div class="flex items-center gap-3">

        <a href="https://github.com/hasan-kilici" target="_blank"
            aria-label="GitHub Profili"
            title="GitHub Profili"
            class="p-2 rounded-lg border border-border hover:bg-accent hover:text-white transition">
            <GithubLogo size={18} />
        </a>

        <a href="https://www.linkedin.com/in/hasan-kilici-143b31252/" target="_blank"
          aria-label="LinkedIn Profili"
          title="LinkedIn Profili"  
          class="p-2 rounded-lg border border-border hover:bg-accent hover:text-white transition">
          <LinkedinLogo size={18} />
        </a>

        <a href="https://instagram.com/kawethra_official" target="_blank"
            aria-label="Instagram Profili"
            title="Instagram Profili"
            class="p-2 rounded-lg border border-border hover:bg-accent hover:text-white transition">
            <InstagramLogo size={18} />
        </a>
      </div>
    </div>
  </div>
</footer>