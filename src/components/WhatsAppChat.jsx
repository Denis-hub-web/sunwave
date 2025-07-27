const phoneNumber = "255755855909";
const message = encodeURIComponent("Hello! I'm interested in your solar solutions. Can you assist me?");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

const WhatsAppChat = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-xl p-4 flex items-center justify-center transition-colors group"
    aria-label="Chat with us on WhatsApp"
    title="Chat with us on WhatsApp"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#25D366" className="group-hover:fill-green-700 transition-colors"/>
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.432-.46-4.872-1.26l-.347-.2-4.65 1.217 1.24-4.527-.225-.353A9.96 9.96 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.145-1.71-.84-1.98-.933-.27-.093-.465-.14-.66.145-.195.29-.755.933-.925 1.125-.17.195-.34.22-.63.075-.29-.145-1.225-.45-2.335-1.435-.863-.77-1.445-1.72-1.615-2.01-.17-.29-.018-.447.127-.592.13-.13.29-.34.435-.51.145-.17.193-.29.29-.485.097-.195.048-.365-.025-.51-.073-.145-.66-1.595-.905-2.185-.24-.577-.485-.5-.66-.51-.17-.007-.365-.01-.56-.01-.195 0-.51.073-.78.365-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.185 3.01.145.195 2.05 3.13 5.01 4.27.7.3 1.25.48 1.68.615.705.225 1.345.193 1.85.117.565-.085 1.71-.7 1.95-1.38.24-.68.24-1.265.17-1.38-.07-.115-.26-.185-.55-.33z" fill="white"/>
    </svg>
    <span className="ml-3 hidden md:block text-white font-semibold text-base pr-2">Chat with us</span>
    <span className="absolute bottom-16 right-0 bg-green-600 text-white text-xs rounded-lg px-3 py-2 shadow-lg animate-bounce hidden group-hover:block md:block">Hi! How can we help you?</span>
  </a>
);

export default WhatsAppChat; 