"use client";
import NewsletterForm from "./newsletter-form";

export default function AmplitudeOpusII() {
  return (
    <div className="relative bg-black px-8 md:px-16 lg:px-32 xl:px-48 pt-52 md:pt-64 lg:pt-48 xl:pt-64 pb-52 md:pb-48 xl:pb-64 flex flex-col items-center justify-center">
      <div className="max-w-xl">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Amplitude Opus II
        </h1>
        <NewsletterForm />
      </div>
    </div>
  );
}
