import { ApplyThemeScript } from '@/components/theme-toggle';
import WelcomeDynamic from '@/components/welcome-dynamic';
import Script from 'next/script';

export default function Page() {
  return (
    <div className="bg-background">
      <ApplyThemeScript />
      <WelcomeDynamic />

      {/* VIRA Lead Capture Form — GHL Embed */}
      <section className="w-full py-16 px-4 flex flex-col items-center bg-background">
        <h2 className="text-2xl font-bold mb-2 text-center">Get Started with VIRA</h2>
        <p className="text-muted-foreground mb-8 text-center">Fill out the form below and we'll be in touch!</p>
        <div className="w-full max-w-xl">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/NM7iop6BCJhMcjDPLXlz"
            style={{ width: '100%', height: '700px', border: 'none', borderRadius: '8px' }}
            id="inline-NM7iop6BCJhMcjDPLXlz"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="VIRA Lead Capture — aix-io.com"
            data-height="700"
            data-layout-iframe-id="inline-NM7iop6BCJhMcjDPLXlz"
            data-form-id="NM7iop6BCJhMcjDPLXlz"
            title="VIRA Lead Capture — aix-io.com"
          />
        </div>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </section>
    </div>
  );
}
