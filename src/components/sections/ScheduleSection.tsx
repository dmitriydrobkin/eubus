export default function ScheduleSection() {
  return (
    <section id="schedule" className="max-w-container-max mx-auto py-section-gap px-8">
      <div className="text-center mb-16">
        <h1 className="font-display text-headline-lg text-ivory-text mb-4">Розклад та вартість</h1>
        <p className="font-body-lg text-body-lg text-ash-text max-w-2xl mx-auto">
          Оберіть зручний для вас напрямок. Ми гарантуємо комфорт та безпеку під час кожної поїздки.
        </p>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card 1 */}
        <article className="bg-[#1e1e2a] rounded-[12px] p-card-padding flex flex-col justify-between h-full border border-outline-variant/30 transition-transform duration-300 hover:-translate-y-1">
          <header className="flex justify-between items-start mb-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-ivory-text mb-2 flex items-center gap-3">
                Київ
                <span className="material-symbols-outlined text-ash-text" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                Варшава
              </h2>
              <p className="font-body text-body text-ash-text">Щоденне відправлення</p>
            </div>
            <div className="text-right">
              <span className="block font-headline-md text-headline-md text-primary-container">5 000 ₴</span>
              <span className="font-caption text-caption text-ash-text">в один бік</span>
            </div>
          </header>
          <div className="space-y-6 mb-8 flex-grow">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-mist-border mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div>
                <p className="font-subheading text-subheading text-ivory-text">Відправлення: 08:00</p>
                <p className="font-body-sm text-body-sm text-ash-text">м. Київ, Центральний автовокзал</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-mist-border mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
              <div>
                <p className="font-subheading text-subheading text-ivory-text">Прибуття: 22:00</p>
                <p className="font-body-sm text-body-sm text-ash-text">м. Варшава, Автовокзал Заходня</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-mist-border mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
              <div>
                <p className="font-subheading text-subheading text-ivory-text">Час у дорозі: ~14 годин</p>
                <p className="font-body-sm text-body-sm text-ash-text">Залежить від перетину кордону</p>
              </div>
            </div>
          </div>
          <footer>
            <button className="w-full bg-transparent border border-mist-border text-ivory-text rounded-full py-3 font-body text-body hover:bg-obsidian-button transition-colors duration-300">
              Бронювати місце
            </button>
          </footer>
        </article>

        {/* Card 2 */}
        <article className="bg-[#1e1e2a] rounded-[12px] p-card-padding flex flex-col justify-between h-full border border-outline-variant/30 transition-transform duration-300 hover:-translate-y-1">
          <header className="flex justify-between items-start mb-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-ivory-text mb-2 flex items-center gap-3">
                Варшава
                <span className="material-symbols-outlined text-ash-text" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                Київ
              </h2>
              <p className="font-body text-body text-ash-text">Щоденне відправлення</p>
            </div>
            <div className="text-right">
              <span className="block font-headline-md text-headline-md text-primary-container">5 000 ₴</span>
              <span className="font-caption text-caption text-ash-text">в один бік</span>
            </div>
          </header>
          <div className="space-y-6 mb-8 flex-grow">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-mist-border mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div>
                <p className="font-subheading text-subheading text-ivory-text">Відправлення: 10:00</p>
                <p className="font-body-sm text-body-sm text-ash-text">м. Варшава, Автовокзал Заходня</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-mist-border mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
              <div>
                <p className="font-subheading text-subheading text-ivory-text">Прибуття: 00:00</p>
                <p className="font-body-sm text-body-sm text-ash-text">м. Київ, Центральний автовокзал</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-mist-border mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span>
              <div>
                <p className="font-subheading text-subheading text-ivory-text">Час у дорозі: ~14 годин</p>
                <p className="font-body-sm text-body-sm text-ash-text">Залежить від перетину кордону</p>
              </div>
            </div>
          </div>
          <footer>
            <button className="w-full bg-transparent border border-mist-border text-ivory-text rounded-full py-3 font-body text-body hover:bg-obsidian-button transition-colors duration-300">
              Бронювати місце
            </button>
          </footer>
        </article>
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="font-caption text-caption text-ash-text bg-surface-container-low inline-block px-6 py-3 rounded-full border border-outline-variant/30">
          <span className="material-symbols-outlined align-middle mr-2 text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
          Фіксована ціна. Оплата при посадці
        </p>
      </div>
    </section>
  );
}
