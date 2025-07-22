const HeroSection = () => (
  <section
    className="relative bg-cover bg-center py-32 px-6 text-center text-white"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1585842606016-7029f054b0d6?auto=format&fit=crop&w=1400&q=80')",
    }}
  >
    <div className="absolute inset-0 bg-emerald-800 bg-opacity-60"></div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
        Kehidupan Berbangsa dan Bernegara
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
        Menyatu dalam keberagaman, berlandaskan Pancasila dan semangat kebangsaan Indonesia
      </p>
    </div>
  </section>
);
