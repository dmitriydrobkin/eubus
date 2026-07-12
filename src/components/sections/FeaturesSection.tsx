import { Dictionary } from '@/i18n/dictionaries';

export default function FeaturesSection({ dict }: { dict: Dictionary['features'] }) {
  return (
    <section id="services" className="w-full py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-ivory-text">{dict.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-obsidian-button flex items-center justify-center mb-6 group-hover:bg-primary-container/20 transition-colors duration-300">
              <span className="material-symbols-outlined text-primary-fixed text-[32px]">airline_seat_recline_extra</span>
            </div>
            <h3 className="font-subheading text-lg text-ivory-text">{dict.f1}</h3>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-obsidian-button flex items-center justify-center mb-6 group-hover:bg-primary-container/20 transition-colors duration-300">
              <span className="material-symbols-outlined text-primary-fixed text-[32px]">wifi</span>
            </div>
            <h3 className="font-subheading text-lg text-ivory-text">{dict.f2}</h3>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-obsidian-button flex items-center justify-center mb-6 group-hover:bg-primary-container/20 transition-colors duration-300">
              <span className="material-symbols-outlined text-primary-fixed text-[32px]">ac_unit</span>
            </div>
            <h3 className="font-subheading text-lg text-ivory-text">{dict.f3}</h3>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-obsidian-button flex items-center justify-center mb-6 group-hover:bg-primary-container/20 transition-colors duration-300">
              <span className="material-symbols-outlined text-primary-fixed text-[32px]">child_care</span>
            </div>
            <h3 className="font-subheading text-lg text-ivory-text">{dict.f4}</h3>
          </div>
          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-obsidian-button flex items-center justify-center mb-6 group-hover:bg-primary-container/20 transition-colors duration-300">
              <span className="material-symbols-outlined text-primary-fixed text-[32px]">support_agent</span>
            </div>
            <h3 className="font-subheading text-lg text-ivory-text">{dict.f5}</h3>
          </div>
          {/* Feature 6 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-obsidian-button flex items-center justify-center mb-6 group-hover:bg-primary-container/20 transition-colors duration-300">
              <span className="material-symbols-outlined text-primary-fixed text-[32px]">local_cafe</span>
            </div>
            <h3 className="font-subheading text-lg text-ivory-text">{dict.f6}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
