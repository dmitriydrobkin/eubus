'use client';

import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { captureLeadAction } from '@/server/actions/leads';
import { Dictionary } from '@/i18n/dictionaries';

export default function LeadFormSection({ dict }: { dict: Dictionary['leadForm'] }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function clientAction(formData: FormData) {
    setStatus('loading');
    setErrorMessage('');
    
    // Server action call
    const res = await captureLeadAction(formData);
    
    if (res.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(res.error || dict.defaultError);
    }
  }

  return (
    <section id="contact-form" className="w-full py-12 md:py-24 bg-onyx-canvas">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="bg-graphite-card rounded-xl p-6 md:p-12 border border-outline-variant/30">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-headline-md font-bold text-ivory-text mb-4 leading-tight">{dict.title}</h2>
            <p className="font-body text-body text-ash-text">
              {dict.subtitle}
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-primary-container/20 border border-primary-container rounded-lg p-6 text-center text-ivory-text">
              <span className="material-symbols-outlined text-4xl text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <h3 className="font-subheading text-lg mb-2">{dict.successTitle}</h3>
              <p className="font-body-sm text-ash-text">{dict.successSubtitle}</p>
            </div>
          ) : (
             <form action={clientAction} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-caption text-ash-text uppercase tracking-wider">{dict.nameLabel}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="bg-onyx-canvas border border-outline-variant/50 rounded-lg px-4 py-3 text-ivory-text font-body focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                  placeholder={dict.namePlaceholder}
                />
              </div>

              {/* Contact Method */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contactMethod" className="font-caption text-ash-text uppercase tracking-wider">{dict.methodLabel}</label>
                <select 
                  id="contactMethod" 
                  name="contactMethod" 
                  className="bg-onyx-canvas border border-outline-variant/50 rounded-lg px-4 py-3 text-ivory-text font-body focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                >
                  <option value="telegram">{dict.methodTg}</option>
                  <option value="phone">{dict.methodPhone}</option>
                  <option value="email">{dict.methodEmail}</option>
                </select>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contactInfo" className="font-caption text-ash-text uppercase tracking-wider">{dict.infoLabel}</label>
                <input 
                  type="text" 
                  id="contactInfo" 
                  name="contactInfo" 
                  required 
                  className="bg-onyx-canvas border border-outline-variant/50 rounded-lg px-4 py-3 text-ivory-text font-body focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
                  placeholder={dict.infoPlaceholder}
                />
              </div>

              {/* Honeypot */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Turnstile */}
              <div className="flex justify-center mt-2">
                <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} />
              </div>

              {status === 'error' && (
                <div className="text-error text-sm text-center bg-error-container/20 border border-error/50 p-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-primary-container text-pure-white px-8 py-4 rounded-full font-body font-medium hover:bg-inverse-primary transition-colors duration-300 flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <span className="animate-pulse">{dict.btnSending}</span>
                ) : (
                  <>
                    {dict.btnSubmit}
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
