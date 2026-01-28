import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Wheat, Timer, Heart, ArrowRight, Instagram, Twitter, Mail } from 'lucide-react';
import heroImg from './assets/hero_bread.png';
import gridImg from './assets/bread_grid.png';

const Navbar = () => (
  <nav className="glass fixed top-0 w-full z-50">
    <div className="container py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Wheat className="text-gold" size={32} />
        <span className="serif text-2xl tracking-tight">Bread.com</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest leading-none">
        <a href="#home">Home</a>
        <a href="#gallery">Collection</a>
        <a href="#process">Process</a>
        <a href="#philosophy">Philosophy</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
    <div className="container grid md:grid-cols-2 gap-12 items-center z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gold font-medium uppercase tracking-[0.3em] mb-4 block">The Art of Fermentation</span>
        <h1 className="text-6xl md:text-8xl mb-6 leading-tight">
          Golden Crust, <br />
          <span className="text-gold italic">Soulful</span> Crumb.
        </h1>
        <p className="text-lg text-earth/70 mb-8 max-w-md">
          Bread.com is a tribute to the ancient alchemy of flour, water, and time. Discover the symphony of artisanal baking.
        </p>
        <div className="flex gap-4">
          <a href="#gallery" className="bg-crust text-flour px-8 py-4 flex items-center gap-2 hover:bg-gold transition-colors">
            Explore Collection <ArrowRight size={20} />
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-4 border-2 border-gold/20 -z-10 translate-x-8 translate-y-8"></div>
        <img 
          src={heroImg} 
          alt="Artisanal Sourdough" 
          className="w-full h-auto shadow-2xl rounded-sm"
        />
      </motion.div>
    </div>
    <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gold/5 -z-20"></div>
  </section>
);

const Features = () => (
  <section className="bg-flour section-padding">
    <div className="container grid md:grid-cols-4 gap-8">
      {[
        { icon: Timer, title: "72h Proof", desc: "Long, cold fermentation for depth of flavor." },
        { icon: Wheat, title: "Organics", desc: "Single-origin, heritage stone-ground grains." },
        { icon: ChefHat, title: "Handmade", desc: "Crafted by masters of the wood-fired oven." },
        { icon: Heart, title: "Pure Nature", desc: "No additives. Just wild yeast and sea salt." }
      ].map((f, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="text-center p-6"
        >
          <f.icon className="mx-auto text-gold mb-4" size={40} />
          <h3 className="mb-2 text-xl">{f.title}</h3>
          <p className="text-sm text-earth/60">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="section-padding bg-crumb">
    <div className="container flex flex-col items-center">
      <div className="max-w-2xl text-center mb-16">
        <h2 className="text-5xl mb-4">Our Daily <span className="italic text-gold">Offerings</span></h2>
        <p className="text-earth/60">From the airy pockets of a rustic ciabatta to the rich, buttery braids of brioche.</p>
      </div>
      <div className="relative w-full max-w-5xl group overflow-hidden shadow-2xl">
        <img 
          src={gridImg} 
          alt="Bread Collection" 
          className="w-full"
        />
        <div className="absolute inset-0 bg-crust/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <p className="text-flour text-2xl serif tracking-widest italic">The Artisan Grid</p>
        </div>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section id="philosophy" className="section-padding glass-dark text-flour overflow-hidden relative">
    <div className="container relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-flour text-5xl mb-8 leading-tight">
            Bread is the <br /> 
            <span className="text-gold italic underline decoration-1 underline-offset-8">Universal Language</span>
          </h2>
          <p className="text-flour/70 text-lg mb-8 italic">
            "Good bread is the most fundamentally satisfying of all foods; and good bread with fresh butter, the greatest of feasts."
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0 w-8 h-[1px] bg-gold"></div>
              <p>We believe in the slow way. The way that honors the grain and the earth it came from.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0 w-8 h-[1px] bg-gold"></div>
              <p>Every loaf is a story of heat, water, and human patience.</p>
            </div>
          </div>
        </div>
        <div className="aspect-[4/5] bg-flour/5 border border-flour/10 flex items-center justify-center p-12 text-center">
          <div>
            <Wheat className="text-gold mx-auto mb-6" size={60} />
            <span className="text-4xl block mb-4 serif italic">100% Sourdough</span>
            <p className="text-sm uppercase tracking-widest text-gold">Wild Yeast Culture No. 12</p>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-[100px]"></div>
  </section>
);

const Footer = () => (
  <footer className="bg-flour pt-20 pb-10 border-t border-crumb">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Wheat className="text-gold" size={32} />
            <span className="serif text-2xl">Bread.com</span>
          </div>
          <p className="text-earth/60 max-w-md">
            Dedicated to the pursuit of the perfect crust and the most ethereal crumb. Join our journey into the heart of baking.
          </p>
        </div>
        {[
          { title: "Sitemap", links: ["Home", "Collection", "Process", "Journal"] },
          { title: "Connect", links: ["Instagram", "Twitter", "Newsletter"] }
        ].map((col, i) => (
          <div key={i}>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">{col.title}</h4>
            <ul className="space-y-4">
              {col.links.map(l => (
                <li key={l}><a href="#" className="text-earth/50 hover:text-gold">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-10 border-t border-crumb flex flex-col md:row items-center justify-between text-xs text-earth/30 uppercase tracking-[0.2em]">
        <p>&copy; 2026 Bread.com. All Rights Reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Philosophy />
      <Footer />
    </div>
  );
};

export default App;
