export default function ReviewsSection() {
  return (
    <section className="w-full pt-32 pb-section-gap px-8 md:px-0 bg-onyx-canvas">
      <div className="max-w-container-max mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="font-headline-md text-headline-md text-ivory-text max-w-2xl">
            Відгуки наших пасажирів
          </h2>
          <a className="text-primary-container font-body text-body hover:text-primary transition-colors flex items-center gap-2 group" href="#">
            Більше відгуків у нашому Instagram
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="bg-[#1e1e2a] rounded-[12px] p-8 border border-white/5 flex flex-col h-full">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body text-body text-ash-text mb-8 flex-grow">
              "Дуже вдячні за швидку доставку посилки Київ-Варшава-Київ та майже цілодобову оперативну підтримку."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-obsidian-button flex items-center justify-center border border-white/5">
                <span className="font-subheading text-body-sm text-ivory-text">ОМ</span>
              </div>
              <span className="font-subheading text-body text-ivory-text">Олена М.</span>
            </div>
          </div>
          {/* Review Card 2 */}
          <div className="bg-[#1e1e2a] rounded-[12px] p-8 border border-white/5 flex flex-col h-full">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body text-body text-ash-text mb-8 flex-grow">
              "Вчора вранці приїхали із Варшави до Києва. Поїздка була максимально комфортною та швидкою. Дякую Вам."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-obsidian-button flex items-center justify-center border border-white/5">
                <span className="font-subheading text-body-sm text-ivory-text">МК</span>
              </div>
              <span className="font-subheading text-body text-ivory-text">Марія К.</span>
            </div>
          </div>
          {/* Review Card 3 */}
          <div className="bg-[#1e1e2a] rounded-[12px] p-8 border border-white/5 flex flex-col h-full">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body text-body text-ash-text mb-8 flex-grow">
              "Всім привіт) хочу написати відгук. Дякую велике за роботу, завжди на зв'язку, швидко відповідають. Я пробувала через різних перевізників, і ви кращі."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-obsidian-button flex items-center justify-center border border-white/5">
                <span className="font-subheading text-body-sm text-ivory-text">АВ</span>
              </div>
              <span className="font-subheading text-body text-ivory-text">Анна В.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
