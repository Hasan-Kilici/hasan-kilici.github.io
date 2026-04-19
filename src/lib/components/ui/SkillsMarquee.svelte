<script>
    import { Marquee } from "@selemondev/svelte-marquee";
    import "@selemondev/svelte-marquee/dist/style.css";

    import csharp from "$lib/assets/skills/csharp.png";
    import figma from "$lib/assets/skills/figma.png";
    import golang from "$lib/assets/skills/golang.png";
    import nodejs from "$lib/assets/skills/nodejs.png";
    import python from "$lib/assets/skills/python.png";
    import svelte from "$lib/assets/skills/svelte.png";
    import tailwind from "$lib/assets/skills/tailwind.png"
    import nuxt from "$lib/assets/skills/nuxt.png";
    import php from "$lib/assets/skills/php.png";
    import postgresql from "$lib/assets/skills/postgresql.png";
    import mysql from "$lib/assets/skills/mysql.png";
    import mongodb from "$lib/assets/skills/mongodb.png";
    import socketio from "$lib/assets/skills/socketio.png";
</script>
<div class="relative overflow-hidden container mx-auto">

    <!-- LEFT FADE -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-24 
        bg-gradient-to-r 
        from-muted 
        via-muted/40 
        to-transparent 
        z-10">
    </div>

    <!-- RIGHT FADE -->
    <div class="pointer-events-none absolute inset-y-0 right-0 w-24 
        bg-gradient-to-l 
        from-muted
        via-muted/40 
        to-transparent 
        z-10">
    </div>

    <Marquee
        class="relative z-0 py-6"
        speed={50}
        pauseOnHover={true}
        gradient={false}
    >
        <img src={csharp} alt="C#" class="h-16" />
        <img src={figma} alt="Figma" class="h-16" />
        <img src={golang} alt="Go" class="h-16" />
        <img src={nodejs} alt="Node.js" class="h-16" />
        <img src={python} alt="Python" class="h-16" />
        <img src={svelte} alt="Svelte" class="h-16" />
        <img src={tailwind} alt="Tailwind CSS" class="h-16" />
        <img src={nuxt} alt="Nuxt.js" class="h-16" />
        <img src={php} alt="PHP" class="h-16" />
        <img src={postgresql} alt="PostgreSQL" class="h-16" />
        <img src={mysql} alt="MySQL" class="h-16" />
        <img src={mongodb} alt="MongoDB" class="h-16" />
        <img src={socketio} alt="Socket.IO" class="h-16" />
    </Marquee>

</div>