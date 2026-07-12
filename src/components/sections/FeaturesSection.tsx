export default function FeaturesSection() {
  return (
    <section id="services" className="w-full pt-32 pb-section-gap">
      <div className="max-w-container-max mx-auto px-8">
        <div className="mb-section-gap text-center">
          <h1 className="font-headline-lg text-headline-lg text-ivory-text">Стандарти нашого сервісу</h1>
        </div>
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {/* Feature 1: Recliner seats */}
          <div className="flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-ivory-text text-[48px] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>
              chair
            </span>
            <h3 className="font-subheading text-subheading text-ivory-text">Крісла-реклайнери</h3>
          </div>
          {/* Feature 2: Wi-Fi */}
          <div className="flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-ivory-text text-[48px] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>
              wifi
            </span>
            <h3 className="font-subheading text-subheading text-ivory-text">Wi-Fi на борту</h3>
          </div>
          {/* Feature 3: Climate control */}
          <div className="flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-ivory-text text-[48px] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>
              ac_unit
            </span>
            <h3 className="font-subheading text-subheading text-ivory-text">Клімат-контроль</h3>
          </div>
          {/* Feature 4: Kids Friendly */}
          <div className="flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-ivory-text text-[48px] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>
              child_care
            </span>
            <h3 className="font-subheading text-subheading text-ivory-text">Kids Friendly</h3>
          </div>
          {/* Feature 5: Border assistance */}
          <div className="flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-ivory-text text-[48px] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>
              approval
            </span>
            <h3 className="font-subheading text-subheading text-ivory-text">Допомога на кордоні</h3>
          </div>
          {/* Feature 6: Sanitary stops */}
          <div className="flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-ivory-text text-[48px] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>
              wc
            </span>
            <h3 className="font-subheading text-subheading text-ivory-text">Санітарні зупинки</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
