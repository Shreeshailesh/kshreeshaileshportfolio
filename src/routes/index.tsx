import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mountain, Bike, Waves, Compass, Users, MapPin, Instagram,
  ArrowRight, ArrowUpRight, Calendar, Camera, Heart, Sparkles
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import heroAsset from "@/assets/hero-shailesh.png.asset.json";
const heroImg = heroAsset.url;
import portraitAsset from "@/assets/portrait-shailesh-v2.jpg.asset.json";
const portraitImg = portraitAsset.url;
import expMotoAsset from "@/assets/exp-motorcycle-shailesh.jpg.asset.json";
const expMoto = expMotoAsset.url;
import expAdventureAsset from "@/assets/exp-adventure-shailesh.jpg.asset.json";
const expAdventure = expAdventureAsset.url;
import expSoloAsset from "@/assets/exp-solo-shailesh-v2.jpg.asset.json";
const expSolo = expSoloAsset.url;
import expGroupAsset from "@/assets/exp-group-shailesh-v3.jpg.asset.json";
const expGroup = expGroupAsset.url;
import galOoty from "@/assets/gal-ooty.jpg";
import galGokarna from "@/assets/gal-gokarna.jpg";
import galHostel from "@/assets/gal-hostel.jpg";
import galMountains from "@/assets/gal-mountains.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K Shree Shailesh — Trip Captain & Adventure Traveler" },
      { name: "description", content: "Adventure traveler, rider and future trip captain from Bengaluru. Creating experiences that people remember for life." },
      { property: "og:title", content: "K Shree Shailesh — Trip Captain" },
      { property: "og:description", content: "Adventure traveler, rider and future trip captain from Bengaluru." },
    ],
  }),
  component: Home,
});

const skills = [
  "Trip Planning", "Travel Logistics", "Community Building", "Group Management",
  "Budget Planning", "Storytelling", "Content Creation", "Photography",
  "Problem Solving", "Leadership",
];

const experiences = [
  { icon: Bike, title: "Motorcycle Touring", img: expMoto, tag: "Royal Enfield Himalayan 411",
    points: ["Long-distance touring", "Route planning", "Budget management", "Trip logistics"], imagePosition: "object-center" },
  { icon: Mountain, title: "Adventure & Exploration", img: expAdventure, tag: "Mountains, viewpoints, road trips, nature",
    points: ["Mountain exploration", "Scenic viewpoints", "Road trip adventures", "Nature immersion", "Hidden destinations", "Outdoor experiences", "Forest and coastal routes", "Travel storytelling"], imagePosition: "object-center" },
  { icon: Compass, title: "Solo Travel", img: expSolo, tag: "Independent journeys",
    points: ["Hostel culture", "Local exploration", "Storytelling", "Self-discovery"], imagePosition: "object-center" },
  { icon: Users, title: "Group Travel", img: expGroup, tag: "Coordinating friends & groups",
    points: ["Managing schedules", "Handling logistics", "Memorable experiences", "Group dynamics"], imagePosition: "object-[center_24%]" },
];

const gallery = [
  { src: galOoty, title: "Ooty Motorcycle Ride", meta: "Tea hills · Western Ghats" },
  { src: galGokarna, title: "Gokarna Coast", meta: "Beach trek · Sunset" },
  { src: galMountains, title: "Mountain Explorations", meta: "Himalayan rides" },
  { src: galHostel, title: "Community Gatherings", meta: "Hostel rooftops · Bengaluru" },
  { src: expAdventure, title: "Mountain Exploration", meta: "Western Ghats · Karnataka" },
  { src: expGroup, title: "Bonfire Nights", meta: "Stories & strangers" },
];

const itinerary = [
  { day: "Day 01", title: "Bangalore → Gokarna",
    body: "Overnight journey, hostel check-in, sunset session on Kudle Beach." },
  { day: "Day 02", title: "Beach trek & bonfire",
    body: "Half Moon and Paradise trail, local thalis, bonfire and storytelling under the stars." },
  { day: "Day 03", title: "Sunrise & return",
    body: "Quiet sunrise at Om Beach, slow breakfast, and the journey back to Bangalore." },
];

const whyhire = [
  { icon: Heart, t: "Passionate Traveler", d: "Travel is not a hobby, it's the lens I live through." },
  { icon: Bike, t: "Experienced Rider", d: "Long-haul touring on the Himalayan 411 across South India." },
  { icon: Users, t: "Community-Focused", d: "I build groups where strangers leave as friends." },
  { icon: Compass, t: "Logistics Mindset", d: "Routes, stays, budgets, contingencies — handled." },
  { icon: Mountain, t: "Adventure Enthusiast", d: "Mountains, coasts, hostels — the harder the better." },
  { icon: Sparkles, t: "Experience Creator", d: "I design moments, not just itineraries." },
];

function Home() {
  useReveal();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full gradient-ember" />
            <span className="text-mono">KSS · 001</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#adventures" className="hover:text-foreground transition">Adventures</a>
            <a href="#itinerary" className="hover:text-foreground transition">Trip Sample</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a href="#contact"
            className="text-xs uppercase tracking-[0.2em] border border-border px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition">
            Let's Travel
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <div
          className="absolute inset-0 ken-burns"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img src={heroImg} alt="Himalayan mountain pass at sunrise"
            className="w-full h-full object-cover" width={1920} height={1280} />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grain" />

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 reveal">
            <span className="w-8 h-px bg-ember" />
            <span>Bengaluru · Karnataka · India</span>
          </div>
          <h1 className="text-display text-5xl sm:text-7xl lg:text-[8rem] leading-[0.95] max-w-5xl reveal">
            Creating experiences <em className="not-italic gradient-text-ember">that people remember</em> for life.
          </h1>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground tracking-wide reveal">
            Adventure Traveler · Rider · Future Trip Captain
          </p>
          <div className="mt-10 flex flex-wrap gap-4 reveal">
            <a href="#adventures"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition">
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact"
              className="group inline-flex items-center gap-3 border border-border px-7 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-background/40 transition">
              Let's Travel
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 inset-x-0 flex justify-center">
          <div className="text-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-pulse">
            Scroll · 12° 58′ N — 77° 35′ E
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden bg-card">
        <div className="flex whitespace-nowrap marquee text-display text-3xl md:text-5xl text-muted-foreground/60">
          {[..."Mountains · Road Trips · Surf · Hostels · Bonfires · Sunrises · Strangers · Stories · ".repeat(2)]}
          {Array(2).fill(null).map((_, i) => (
            <span key={i} className="px-8">Mountains · Road Trips · Surf · Hostels · Bonfires · Sunrises · Strangers · Stories ·</span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 reveal">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={portraitImg} alt="K Shree Shailesh portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                loading="lazy" width={1024} height={1280} />
            </div>
            <div className="mt-4 text-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">
              K Shree Shailesh · est. Bengaluru
            </div>
          </div>
          <div className="lg:col-span-8 lg:pl-12">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6 reveal">— About</div>
            <h2 className="text-display text-4xl md:text-6xl leading-tight mb-10 reveal">
              I plan routes, manage logistics, and build the moments in between.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl reveal">
              <p>
                I'm an adventure-driven traveler, rider, and community builder from Bengaluru.
                My journeys are built around mountains, road trips, surfing, hostels, and meaningful
                human connections.
              </p>
              <p>
                I enjoy planning routes, managing logistics, and creating experiences that people
                remember long after the trip ends — the kind that come back to you in conversations
                years later.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl reveal">
              {[{n:"15+", l:"Long rides"},{n:"50+", l:"Travelers led"},{n:"∞", l:"Sunrises"}].map((s) => (
                <div key={s.l} className="border-t border-border pt-4">
                  <div className="text-display text-3xl md:text-4xl gradient-text-ember">{s.n}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6 lg:px-10 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">— Experience</div>
              <h2 className="text-display text-4xl md:text-6xl leading-tight max-w-2xl">
                Four ways I move through the world.
              </h2>
            </div>
            <div className="text-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              01 / 04
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((e, i) => (
              <article key={e.title} className="group relative overflow-hidden rounded-sm bg-background reveal">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={e.img} alt={e.title}
                    className={`w-full h-full object-cover ${e.imagePosition} group-hover:scale-105 transition duration-1000`}
                    loading="lazy" width={1024} height={1280} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-mono text-xs text-muted-foreground">0{i+1}</span>
                    <e.icon className="w-5 h-5 text-ember" />
                  </div>
                  <h3 className="text-display text-3xl md:text-4xl mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{e.tag}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground/80">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-ember" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-40 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={galMountains} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-8 reveal">— Travel philosophy</div>
          <blockquote className="text-display text-3xl md:text-6xl leading-tight reveal">
            "Travel is not about luxury. It's about <em className="not-italic gradient-text-ember">stories, roads, strangers, conversations, sunrises</em> — and moments that change you."
          </blockquote>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">— Toolkit</div>
            <h2 className="text-display text-4xl md:text-5xl leading-tight">
              What I bring to every trip.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-3 reveal">
              {skills.map((s, i) => (
                <span key={s}
                  className="px-5 py-3 border border-border rounded-full text-sm tracking-wide hover:border-ember hover:text-ember transition cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="adventures" className="py-32 px-6 lg:px-10 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">— Featured adventures</div>
              <h2 className="text-display text-4xl md:text-6xl leading-tight">From the field.</h2>
            </div>
            <Camera className="w-6 h-6 text-muted-foreground" />
          </div>

          <div className="grid grid-cols-12 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {gallery.map((g, i) => {
              const layouts = [
                "col-span-12 md:col-span-8 row-span-2",
                "col-span-6 md:col-span-4 row-span-1",
                "col-span-6 md:col-span-4 row-span-1",
                "col-span-12 md:col-span-5 row-span-2",
                "col-span-6 md:col-span-4 row-span-1",
                "col-span-6 md:col-span-3 row-span-1",
              ];
              return (
                <figure key={g.title}
                  className={`${layouts[i]} group relative overflow-hidden rounded-sm reveal`}>
                  <img src={g.src} alt={g.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  <figcaption className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="text-mono text-[10px] uppercase tracking-[0.3em] text-ember mb-1">{g.meta}</div>
                    <div className="text-display text-xl md:text-2xl">{g.title}</div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section id="itinerary" className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="reveal mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">— Sample curated experience</div>
          <h2 className="text-display text-4xl md:text-6xl leading-tight max-w-3xl">
            Weekend Backpacking · Bangalore → Gokarna
          </h2>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-ember" />
            <span className="text-mono text-xs uppercase tracking-[0.2em]">3 days · 2 nights · 12 travelers max</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {itinerary.map((it, i) => (
            <div key={it.day}
              className={`relative mb-12 reveal grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="text-mono text-xs uppercase tracking-[0.3em] text-ember mb-3">{it.day}</div>
                <h3 className="text-display text-3xl md:text-4xl mb-3">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full gradient-ember ring-4 ring-background" />
            </div>
          ))}
        </div>
      </section>

      {/* WHY HIRE */}
      <section className="py-32 px-6 lg:px-10 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">— Why work with me</div>
            <h2 className="text-display text-4xl md:text-6xl leading-tight max-w-3xl">
              Six reasons your trip will be different.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {whyhire.map((w, i) => (
              <div key={w.t} className="bg-card p-10 reveal hover:bg-background transition group">
                <div className="flex items-start justify-between mb-6">
                  <w.icon className="w-7 h-7 text-ember group-hover:scale-110 transition" />
                  <span className="text-mono text-xs text-muted-foreground">0{i+1}</span>
                </div>
                <h3 className="text-display text-2xl mb-3">{w.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-40 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6 reveal">— Plan your next adventure</div>
          <h2 className="text-display text-5xl md:text-7xl leading-tight mb-10 reveal">
            The road is open. <em className="not-italic gradient-text-ember">Let's ride.</em>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal">
            <a href="https://www.instagram.com/_shailesh_katharki/" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition">
              <Instagram className="w-4 h-4" />
              @_shailesh_katharki
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-ember" />
              Bengaluru, Karnataka
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <blockquote className="text-display text-3xl md:text-5xl leading-tight text-center max-w-3xl mx-auto mb-16">
            "We don't remember days. <em className="not-italic gradient-text-ember">We remember moments.</em>"
          </blockquote>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <div className="text-mono">© 2026 · K Shree Shailesh</div>
            <div className="text-mono">Trip Captain · Bengaluru</div>
            <a href="https://instagram.com/_shailesh_katharki" target="_blank" rel="noopener noreferrer"
              className="text-mono hover:text-foreground transition inline-flex items-center gap-2">
              <Instagram className="w-3 h-3" /> Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
