import { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
//   const [message, setMessage] = useState({
//     text: 'Thanks for reaching out! I’ll be in touch soon!',
//     type: "success"
//   });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      () => {
        // console.log("✅ message sent:", result.text);
        setMessage({ text: "Thanks for reaching out! I’ll be in touch soon!", type: "success" });
        formRef.current?.reset();
      },
      () => {
        // console.error("Error sending message:", error.text);
        setMessage({
          text: "Something went wrong while sending your message. Please try again shortly. I appreciate your patience!",
          type: "error",
        });
      }
    );
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="w-full flex flex-col flex-wrap gap-3 items-center px-4 lg:px-[4.8125rem] h-full mt-20 md:mt-20">
      <h2 className="self-start font-bold text-2xl md:text-3xl text-white mb-5">
        &lt;Contact Me /&gt;
      </h2>

      {/* -------- send email input -------- */}
      <form
        action=""
        method="post"
        className="w-full lg:max-w-1/2 flex flex-col self-start justify-start items-start gap-8"
        ref={formRef}
        onSubmit={sendEmail}
      >
        {/* -------- senders name -------- */}
        <input
          type="text"
          name="name"
          id="name"
          title="name"
          placeholder="Your name"
          required
          className="w-full p-3 rounded-2xl border border-white shadow-[0px_0px_4px_0.5px_#FFF] text-white bg-black focus:outline-none focus:shadow-[0px_0px_4px_3px_#3978BD] placeholder:text-deep-grey"
        />
        {/* -------- senders email -------- */}
        <input
          type="email"
          name="email"
          id="email"
          title="email"
          autoComplete="email"
          placeholder="Your email"
          required
          className="w-full p-3 rounded-2xl border border-white shadow-[0px_0px_4px_0.5px_#FFF] text-white bg-black focus:outline-none focus:shadow-[0px_0px_4px_3px_#3978BD] placeholder:text-deep-grey"
        />
        {/* -------- senders email subject -------- */}
        <input
          type="text"
          name="subject"
          id="subject"
          title="subject"
          placeholder="Your subject"
          className="w-full p-3 rounded-2xl border border-white shadow-[0px_0px_4px_0.5px_#FFF] text-white bg-black focus:outline-none focus:shadow-[0px_0px_4px_3px_#3978BD] placeholder:text-deep-grey"
        />
        <textarea
          name="message"
          id="message"
          spellCheck="false"
          aria-label="write-label"
          placeholder="Your message"
          rows={5}
          className="w-full p-3 rounded-2xl border border-white shadow-[0px_0px_4px_0.5px_#FFF] text-white bg-black focus:outline-none focus:shadow-[0px_0px_4px_3px_#3978BD] placeholder:text-deep-grey"
        ></textarea>

        <button
          type="submit"
          className="px-4 py-2.5 border border-white text-lg text-white font-bold rounded-[10px] hover:bg-accent cursor-pointer self-end"
        >
          Send email
        </button>
      </form>

      <p className="w-full  mt-5 text-base md:text-lg text-white self-start text-justify">
        Looking for a frontend developer who values clean design and thoughtful
        user experiences? I’m currently open to new opportunities and
        collaborations — let’s talk!
      </p>

      {message && (
        <p
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 mt-4 px-4 py-2 rounded-lg text-sm md:text-base lg:text-lg font-medium transition duration-300 ${
            message.type === "success"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {message.text}
        </p>
      )}
    </section>
  );
};

export default ContactMe;
