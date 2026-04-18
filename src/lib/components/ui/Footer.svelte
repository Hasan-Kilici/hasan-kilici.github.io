<script>
  import { GithubLogo, LinkedinLogo, InstagramLogo } from "phosphor-svelte";
</script>

<footer class="border-t border-border bg-muted">

  <div class="max-w-6xl mx-auto px-4 py-10">

    <div class="flex flex-col md:flex-row items-center justify-between gap-6">

      <!-- LEFT -->
      <div class="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Hasan KILICI Tüm hakları saklıdır.
      </div>

      <!-- CENTER (optional short nav) -->
      <div class="flex gap-6 text-sm text-muted-foreground">
        <a href="#about" class="hover:text-foreground transition">Hakkımda</a>
        <a href="#projects" class="hover:text-foreground transition">Projeler</a>
        <a href="#timeline" class="hover:text-foreground transition">Eğitim ve Deneyim</a>
        <a href="#contact" class="hover:text-foreground transition">İletişim</a>
      </div>

      <!-- RIGHT SOCIALS -->
      <div class="flex items-center gap-3">

        <a href="https://github.com/hasan-kilici" target="_blank"
          class="p-2 rounded-lg border border-border hover:bg-accent hover:text-white transition">
          <GithubLogo size={18} />
        </a>

        <a href="https://www.linkedin.com/in/hasan-kilici-143b31252/" target="_blank"
          class="p-2 rounded-lg border border-border hover:bg-accent hover:text-white transition">
          <LinkedinLogo size={18} />
        </a>

        <a href="https://instagram.com/kawethra_official" target="_blank"
          class="p-2 rounded-lg border border-border hover:bg-accent hover:text-white transition">
          <InstagramLogo size={18} />
        </a>

      </div>

    </div>

  </div>

</footer>