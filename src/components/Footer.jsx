import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Footer = () => {
  const form = useRef();
  const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
  const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
  const publicKey = import.meta.env.PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.current.user_email.value === "" ||
      form.current.user_name.value === "" ||
      form.current.user_message.value === ""
    ) {
      console.log("debe escribir en todos");
    } else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          form.current.user_email.value = "";
          form.current.user_name.value = "";
          form.current.user_message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  return (
    <footer className="bg-[#431273] w-full h-[700px] flex flex-col justify-center align-middle items-center" id="contacto">
      <form
        className="flex flex-col w-full px-10 md:w-1/2 gap-y-14"
        ref={form}
        onSubmit={sendEmail}
      >
        <label className="text-[#D95276] flex flex-col font-barlow-semi">
          Tu nombre
          <input
            type="text"
            name="user_name"
            autocomplete="off"
            className=" border-b-2 border-[#D95276] bg-transparent active:bg-[#431273] visited:bg-[#431273] focus:bg-[#431273] focus:outline-none text-white text-xl"
          />
        </label>
        <label className="text-[#D95276] flex flex-col font-barlow-semi">
          Correo
          <input
            type="email"
            name="user_email"
            className=" border-b-2 border-[#D95276] bg-transparent focus:outline-none text-white text-xl"
          />
        </label>
        <label className="text-[#D95276] flex flex-col font-barlow-semi">
          Mensaje
          <input
            type="text"
            name="user_message"
            autocomplete="off"
            className=" border-b-2 border-[#D95276] bg-transparent focus:outline-none text-white text-xl"
          />
        </label>
        <button className="font-barlow-semi bg-[#D95276] text-white px-6 py-2 rounded-md hover:bg-[#e8839e]">
          Enviar
        </button>
      </form>
      <div></div>
    </footer>
  );
};
