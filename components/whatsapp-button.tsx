export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/491776907473"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp – Courts&Padel"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center
                 justify-center rounded-full bg-[#25D366] text-white
                 shadow-lg transition-transform hover:scale-105
                 focus-visible:outline-2 focus-visible:outline-offset-4
                 focus-visible:outline-[#128C7E]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2a9.86 9.86 0 0 0-8.5 14.84L2.14 22l5.28-1.38A9.88 9.88 0 1 0 12.04 2Zm0 18.08a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.32a8.22 8.22 0 1 1 6.97 3.87Zm4.5-6.16c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.13-.16.24-.64.8-.78.96-.15.16-.29.18-.54.06-.24-.12-1.04-.38-1.98-1.23a7.41 7.41 0 0 1-1.37-1.7c-.14-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05 0 1.22.88 2.39 1 2.55.13.17 1.74 2.65 4.21 3.71.59.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.57.21-1.07.15-1.17-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    </a>
  );
}