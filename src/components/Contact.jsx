import React, { useRef } from "react";
import { TEInput, TETextarea, TERipple } from "tw-elements-react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Successfully sended!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("FAILED: " + error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className=" max-w-2xl w-full bg-stone-950/40 rounded-lg  p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
      >
        <form ref={form} onSubmit={sendEmail}>
          {/* <!--Name input--> */}
          <TEInput
            type="text"
            label="Your name"
            className="mb-6"
            name="user_name"
            required
          ></TEInput>
          {/* <!--E-mail input--> */}
          <TEInput
            type="email"
            className="mb-6"
            label="Your email address"
            name="user_email"
            required
          ></TEInput>
          {/* <!--Subject input--> */}
          <TEInput
            type="text"
            label="Subject"
            className="mb-6"
            name="subject"
            required
          ></TEInput>
          {/* <!--Message textarea--> */}
          <div className="relative mb-6">
            <TETextarea
              name="message"
              label="Message"
              rows={3}
              className="mb-6"
              required
            />
          </div>

          {/* <!--Submit button--> */}
          <TERipple rippleColor="light" className="w-full">
            <button
              type="submit"
              className="inline-block rounded w-full bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-stone-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Send
            </button>
          </TERipple>
        </form>
      </motion.div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
