<script>
    import { GithubLogo, LinkedinLogo, InstagramLogo, FilePdf } from "phosphor-svelte";

    import NavigationBar from "$lib/components/ui/NavigationBar.svelte";
    import SkillsMarquee from "$lib/components/ui/SkillsMarquee.svelte";
    import TimeLine from "$lib/components/ui/TimeLine.svelte";
    import Projects from "$lib/components/ui/Projects.svelte";
    import Footer from "$lib/components/ui/Footer.svelte";

    import avatar from "$lib/assets/avatar.png";
</script>
<svelte:head>
    <title>Hasan KILICI - Yazılım Geliştirici Portföyü</title>
    <meta name="description" content="Hasan KILICI'nın yazılım geliştirme projeleri, becerileri ve deneyimlerini içeren kişisel portföy sitesi." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="Hasan KILICI, yazılım geliştirici, portföy, projeler, beceriler, deneyim" />
    <meta name="author" content="Hasan KILICI" />
    <meta property="og:title" content="Hasan KILICI - Yazılım Geliştirici Portföyü" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hasan-kilici.github.io" />
    <meta property="og:image" content={avatar} />
    <meta property="og:site_name" content="Hasan KILICI Portföy" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:description" content="Hasan KILICI'nın yazılım geliştirme projeleri, becerileri ve deneyimlerini içeren kişisel portföy sitesi." />
</svelte:head>
<NavigationBar />
<main>
<section id="about" class="max-w-5xl mx-auto px-4 py-20">

    <div class="grid md:grid-cols-2 gap-10 items-center">

        <!-- LEFT: IMAGE -->
        <div class="flex justify-center md:justify-start">
            <img
                src={avatar}
                alt="Profil"
                class="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover border border-border"
            />
        </div>

        <!-- RIGHT: CONTENT -->
        <div>
            <h2 class="text-2xl font-semibold tracking-tight mb-4">
                Hakkımda
            </h2>

            <p class="text-muted-foreground leading-relaxed">
                Yazılım geliştirme alanında kendini sürekli geliştiren, modern teknolojilere
                ilgi duyan bir geliştiriciyim. Backend sistemler, performans odaklı mimariler
                ve kullanıcı deneyimi dengesi üzerine çalışmalar yürütmekteyim.
            </p>

            <!-- SOCIAL + CV -->
            <div class="flex flex-wrap items-center gap-3 mt-6">

                <a href="https://github.com/hasan-kilici" target="_blank"
                    aria-label="GitHub Profili"
                    title="GitHub Profili"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent hover:text-white transition-colors text-sm">
                    <GithubLogo size={18} />
                    GitHub
                </a>

                <a href="https://www.linkedin.com/in/hasan-kilici-143b31252/" target="_blank"
                    aria-label="LinkedIn Profili"
                    title="LinkedIn Profili"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent hover:text-white transition-colors text-sm">
                    <LinkedinLogo size={18} />
                    LinkedIn
                </a>

                <a href="https://instagram.com/kawethra.official" target="_blank"
                    aria-label="Instagram Profili"
                    title="Instagram Profili"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent hover:text-white transition-colors text-sm">
                    <InstagramLogo size={18} />
                    Instagram
                </a>

                <a href="/cv.pdf" target="_blank"
                    aria-label="CV'yi İndir"
                    title="CV'yi İndir"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-sm">
                    <FilePdf size={18} />
                    CV
                </a>

            </div>
        </div>
    </div>
</section>

<!-- SKILLS -->
<section class="bg-muted border-y border-border">
    <div class="max-w-6xl mx-auto">
        <SkillsMarquee />
    </div>
</section>
<!-- PROJECTS -->
<section id="projects" class="max-w-6xl mx-auto px-4 py-20">
    <h2 class="text-2xl font-semibold tracking-tight mb-10">
        Projeler
    </h2>

    <Projects />
</section>
<!-- TIMELINE -->
<div class="bg-muted border-y border-border">
    <section id="timeline" class="max-w-6xl mx-auto px-4 py-20">
        <h2 class="text-2xl font-semibold tracking-tight mb-10">
            Eğitim ve Deneyim
        </h2>
        <TimeLine />
    </section>
</div>
<section id="contact" class="max-w-6xl mx-auto px-4 py-20">
  <div class="rounded-2xl border border-border bg-card p-8 text-center">
    <h2 class="text-2xl font-semibold tracking-tight">
      İletişim
    </h2>
    <p class="text-muted-foreground mt-3">
      Bir proje, iş birliği veya sadece merhaba demek için ulaşabilirsiniz.
    </p>
    <div class="mt-6 flex justify-center">
      <a
        href="mailto:kilicihasan42@gmail.com"
        class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl
               bg-primary text-primary-foreground text-sm font-medium
               hover:opacity-90 transition"
      >
        Mail Gönder
      </a>
    </div>
  </div>
</section>
</main>
<Footer />