import { Dictionary } from '@/i18n/dictionaries';

export default function ReviewsSection({ dict }: { dict: Dictionary['reviews'] }) {
  return (
    <section className="w-full py-12 md:py-24 bg-onyx-canvas">
      <div className="max-w-container-max mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-6">
          <h2 className="font-display text-3xl md:text-headline-md font-bold text-ivory-text max-w-2xl leading-tight">
            {dict.title}
          </h2>
          <a className="text-primary-container font-body text-body hover:text-primary transition-colors flex items-center gap-2 group" href="#">
            {dict.moreBtn}
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="bg-graphite-card rounded-xl p-6 md:p-8 border border-outline-variant/30 flex flex-col h-full">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body text-body text-ash-text mb-8 flex-grow">
              "{dict.r1Text}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-white/5">
                <span className="font-subheading text-body-sm text-ivory-text">{dict.r1Initials}</span>
              </div>
              <span className="font-subheading text-body text-ivory-text">{dict.r1Author}</span>
            </div>
          </div>
          {/* Review Card 2 */}
          <div className="bg-graphite-card rounded-xl p-6 md:p-8 border border-outline-variant/30 flex flex-col h-full">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body text-body text-ash-text mb-8 flex-grow">
              "{dict.r2Text}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-white/5">
                <span className="font-subheading text-body-sm text-ivory-text">{dict.r2Initials}</span>
              </div>
              <span className="font-subheading text-body text-ivory-text">{dict.r2Author}</span>
            </div>
          </div>
          {/* Review Card 3 */}
          <div className="bg-graphite-card rounded-xl p-6 md:p-8 border border-outline-variant/30 flex flex-col h-full">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-ivory-text" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body text-body text-ash-text mb-8 flex-grow">
              "{dict.r3Text}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-white/5">
                <span className="font-subheading text-body-sm text-ivory-text">{dict.r3Initials}</span>
              </div>
              <span className="font-subheading text-body text-ivory-text">{dict.r3Author}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
