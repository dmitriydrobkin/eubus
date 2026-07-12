export default function VipTransferSection() {
  return (
    <section id="vip" className="w-full py-section-gap bg-onyx-canvas">
      <div className="max-w-container-max mx-auto px-8">
        {/* Main Surface: Graphite Card */}
        <div className="bg-[#1e1e2a] rounded-[12px] p-10 lg:p-16 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* LEFT COLUMN (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs text-ash-text tracking-[0.2em] uppercase mb-6 block font-medium">ПРЕМІУМ ПОСЛУГА</span>
              <h2 className="text-4xl lg:text-5xl text-ivory-text leading-[1.15] font-medium mb-6 font-display">
                VIP Трансфер: Безкомпромісний комфорт.
              </h2>
              <p className="text-lg text-ash-text leading-relaxed mb-10 max-w-xl font-body">
                Ідеальний вибір для ділових поїздок та найвимогливіших клієнтів. Абсолютна приватність, власний графік та жодних очікуваний.
              </p>
              <ul className="flex flex-col gap-5 mb-12">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}>check_circle</span>
                  <span className="text-base text-ivory-text font-body">Подача авто за вашою адресою у зручний для вас час.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}>check_circle</span>
                  <span className="text-base text-ivory-text font-body">Автомобілі представницького класу (Mercedes V-Class).</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}>check_circle</span>
                  <span className="text-base text-ivory-text font-body">Індивідуальний маршрут та пріоритетне проходження кордону.</span>
                </li>
              </ul>
              <div>
                <button className="border border-mist-border text-ivory-text rounded-full px-8 py-4 text-base font-body hover:bg-obsidian-button transition-colors duration-300">
                  ЗАМОВИТИ VIP-ТРАНСФЕР
                </button>
              </div>
            </div>
            {/* RIGHT COLUMN (5 cols) */}
            <div className="lg:col-span-5 relative h-full min-h-[400px]">
              {/* Image Area */}
              <div className="aspect-[4/5] w-full relative overflow-hidden rounded-[12px] bg-surface-container-high">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAREeFaZnVpEiPiYX5N9cMcFHZdprKxfw5k9WEczpjfQa6RAwCFf2ggvKi2iImwPrHjbVsG0iEs_N0-zBnVcXFJ28ovln0P5Q-l0wmPTb_OB5CccrJi7E1L4YAC6OJU_Isqj4yGoc-I8VZPisJ7ZkFQZuvtawOKo68k7TrPjGCAkxbAukSQ0C0cYpFyimzZXr4f8B-WWQRAEiDY8fMMk1vkuydkZpa7W27KszTQj1_dEqn1EF3ugbP-xKZ4Bo8fvXDJK_5xSeoN8E3aNw')" }}
                />
                <div className="absolute inset-0 bg-onyx-canvas/30" />
              </div>
              {/* Floating Price Tag */}
              <div className="absolute bottom-6 -left-6 lg:left-[-24px] bg-onyx-canvas/90 backdrop-blur-md border border-white/10 p-6 rounded-[12px]">
                <p className="text-sm text-ash-text font-body mb-1">Фіксована вартість</p>
                <p className="text-3xl text-ivory-text font-medium font-headline-md">40 000 ₴</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
