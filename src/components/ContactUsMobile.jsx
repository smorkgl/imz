import email from "../img/email.svg";
import phone from "../img/phone.svg";
import { useRef } from "react";

export default function ContactUsMobile() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a6z0367", "template_63iyekb", form.current, {
        publicKey: "kifTa7VFekqtXUeFz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="p-2 pt-10 ">
      <form
        ref={form}
        class=" shadow-2xl p-10 mt-10 rounded-lg "
        onSubmit={sendEmail}
        id="contact-form"
      >
        <div className="mb-10">
          <h1 className="text-lg font-medium">Связаться с нами</h1>
          <p className="pt-2">Заполните форму, и мы свяжемся с вами!</p>
          <p>Контакты для связи:</p>
          <div className="pt-4 flex gap-1 cursor-pointer hover:underline hover:text-blue-800 contact-hover transition-all">
            <img src={phone} className="contact-img w-5 transition-transform" />
            <p>+7(863)-333-31-34</p>
          </div>
          <div className="pt-1 flex gap-1 cursor-pointer hover:underline hover:text-blue-800 contact2-hover transition-all">
            <img
              src={email}
              className="contact2-img w-5 transition-transform"
            />
            <p>imz@i-m-z.ru</p>
          </div>
        </div>
        <div class="mb-3">
          <label
            for="name"
            class="text-black block mb-2 text-sm font-medium text-gray-900 text-black"
          >
            Ваше имя *
          </label>
          <input
            id="name"
            class="!border-2 border-black shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dbg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            required
            type="text"
            name="user_name"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="text-black  block mb-2 text-sm font-medium text-gray-900 text-black"
          >
            Ваш E-mail *
          </label>
          <input
            type="email"
            id="email"
            class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            placeholder="name@i-m-z.ru"
            required
            name="email"
          />
        </div>
        <div class="mb-5">
          <label
            for="phone"
            class="text-black block mb-2 text-sm font-medium text-gray-900 text-black"
          >
            Ваш номер телефона *
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            required
          />
        </div>
        <label
          for="message"
          class="text-black block mb-2 text-sm font-medium text-gray-900 text-black"
        >
          Ваше сообщение *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 :focus:border-blue-500"
          placeholder="Оставьте сообщение..."
        ></textarea>
        <button
          type="submit"
          value="Send"
          class="mt-5 text-white   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}
