"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ImageModalProps = {
  src: string;
  alt: string;
  ctaLabel?: string;
  ctaLink?: string;
};

export default function ImageModal({
  src,
  alt,
  ctaLabel,
  ctaLink,
}: ImageModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();

    const html = document.documentElement;
    const previous = {
      overflow: html.style.overflow,
      paddingRight: html.style.paddingRight,
    };

    html.style.overflow = "hidden";

    const unlock = () => {
      html.style.overflow = previous.overflow;
      html.style.paddingRight = previous.paddingRight;
    };

    dialog.addEventListener("close", unlock);
    return () => {
      dialog.removeEventListener("close", unlock);
      unlock();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="
        fixed inset-0 m-auto
        h-[90vh] max-h-[90vh]
        w-[90vw] max-w-200
        overflow-hidden rounded-lg p-0
        backdrop:bg-black/60
      "
    >
      <button
        type="button"
        onClick={() => dialogRef.current?.close()}
        aria-label="Fermer"
        className="absolute top-4 left-4 z-10 text-sm sm:text-2xl text-black bg-white/90 hover:bg-white/80 transition-colors rounded-full w-8 h-8 sm:w-12 sm:h-12 focus:outline-none"
      >
        X
      </button>
      {ctaLabel && ctaLink && (
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:text-xl w-fit z-10 absolute bottom-4 sm:bottom-16 left-[50%] translate-x-[-50%] focus:outline-0 cursor-pointer rounded-full transition block text-center bg-[#C2262E] hover:bg-[#C2262E]/90 text-white font-sans text-sm py-2 px-4 sm:py-4 sm:px-8"
        >
          {ctaLabel}
        </a>
      )}
      <div className="h-full overflow-y-auto overscroll-contain">
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
    </dialog>
  );
}
