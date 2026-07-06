"use client";

import { useEffect } from "react";

// Le custom element <altcha-widget> est défini par altcha.min.js. On le déclare
// pour que TypeScript accepte la balise en JSX.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > &
        Record<string, unknown>;
    }
  }
}

// Constantes propres au webform Infomaniak (récupérées du snippet d'origine).
const WEBFORM_ID = "24957";
const SUBMIT_ACTION = `https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/${WEBFORM_ID}/submit`;
const FORM_KEY = "eyJpdiI6IlwvaWc4YVhZTW5uN0FTM2thV2RvVlB4SWJiZFZZQWtCYk82RXNjZ1ZrUlVVPSIsIm1hYyI6ImZiNDEyNTMzNzk3YzhiMDdjMTkxNjc5YWEwODkzNTE2OWJjMmQ0ZmY0YTQ5NDdjNzVlODZmNTk0NjIzMDg1NDgiLCJ2YWx1ZSI6IkVDaklHZHc0UGN1RDRlbEZYckk1K21JYWxGY1A1eVZWZm5vdFFaakZPaVU9In0=";
const ALTCHA_CHALLENGE_URL = "https://newsletter.infomaniak.com/v3/altcha-challenge";

// Scripts Infomaniak, dans l'ordre requis : altcha.min.js définit le custom
// element, altcha-index.js l'initialise, webform_index.js branche la soumission.
const SCRIPTS: { src: string; type?: string }[] = [
  {
    src: "https://newsletter.infomaniak.com/v3/static/mcaptcha/altcha.min.js?v=1783087200",
    type: "module",
  },
  {
    src: "https://newsletter.infomaniak.com/v3/static/mcaptcha/altcha-index.js?v=1783087200",
  },
  {
    src: "https://newsletter.infomaniak.com/v3/static/webform_index.js?v=1783087200",
  },
];

type NewsletterFormProps = {
  title?: string;
  description?: string;
  rgpdText?: string;
  submitLabel?: string;
  successMessage?: string;
  emailPlaceholder?: string;
  className?: string;
};

export default function NewsletterForm({
  title = "Inscription à l'évènement",
  description = "Ne manquez pas les promotions et les nouveautés que nous réservons à nos fidèles abonnés.",
  rgpdText = "Votre adresse de messagerie est uniquement utilisée pour vous envoyer notre lettre d'information ainsi que des informations concernant nos activités. Vous pouvez à tout moment utiliser le lien de désabonnement intégré dans chacun de nos mails.",
  submitLabel = "Je m'inscris",
  successMessage = "Inscription validée. Un mail de confirmation vous a été envoyé. Vérifiez votre boîte mail.",
  emailPlaceholder = "Email *",
  className = "",
}: NewsletterFormProps) {
  useEffect(() => {
    const added: HTMLScriptElement[] = [];

    SCRIPTS.forEach(({ src, type }) => {
      // Évite de recharger un script déjà présent sur la page.
      if (document.querySelector(`script[src="${src}"]`)) return;

      const script = document.createElement("script");
      script.src = src;
      if (type) script.type = type;
      script.async = false; // préserve l'ordre d'exécution des scripts injectés
      document.body.appendChild(script);
      added.push(script);
    });

    return () => {
      added.forEach((script) => script.remove());
    };
  }, []);

  return (
    <form
      method="post"
      action={SUBMIT_ACTION}
      className={`inf-form w-full ${className}`}
    >
      {/* Styles minimaux pour les états d'erreur ajoutés dynamiquement par le JS Infomaniak. */}
      <style>{`
        .inf-form .inf-input.inf-error input { border: 1px solid #cc0033; }
        .inf-form .inf-input.inf-error span.inf-message { display: block; color: #cc0033; font-size: 0.875rem; margin-top: 0.25rem; }
        .inf-form .inf-input span.inf-message { display: none; }
        .inf-form .inf-submit input.disabled { opacity: 0.4; }
      `}</style>

      {/* Honeypot anti-spam : doit rester vide, masqué aux humains. */}
      <input type="email" name="email" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="key" value={FORM_KEY} />
      <input type="hidden" name="webform_id" value={WEBFORM_ID} />

      {title && (
        <h4 className="text-white text-xl font-bold mb-3">{title}</h4>
      )}
      {description && (
        <span className="block text-gray-300 text-sm">{description}</span>
      )}

      {/* Message de succès révélé par webform_index.js (display géré en inline). */}
      <div className="inf-success" style={{ display: "none" }}>
        <h4 className="text-white text-lg font-bold mt-4">{successMessage}</h4>
        <p>
          <a href="#" className="inf-btn inline-block text-white underline">
            &laquo;
          </a>
        </p>
      </div>

      <div className="inf-content mt-4">
        <div className="inf-input inf-input-text mb-2">
          <input
            type="email"
            name="inf[1]"
            data-inf-meta="1"
            data-inf-error=""
            required
            placeholder={emailPlaceholder}
            className="w-full h-11 px-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <span className="inf-message" />
        </div>

        <div className="inf-rgpd my-4 text-xs text-gray-400">{rgpdText}</div>

        <altcha-widget
          hidelogo=""
          hidefooter=""
          floating=""
          challengeurl={ALTCHA_CHALLENGE_URL}
        />

        <div className="inf-submit mt-6 text-right">
          <input
            type="submit"
            value={submitLabel}
            className="cursor-pointer rounded bg-white px-6 py-2 font-semibold text-black transition-colors hover:bg-gray-200"
          />
        </div>
      </div>
    </form>
  );
}
