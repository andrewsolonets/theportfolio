import { useState } from "react"; // React-style hooks for state management in Astro
import { notifyViaTelegramBot } from "../helpers/helpers";
import Modal from "./Modal";

export const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const submitCallback = async (e: any) => {
    e.preventDefault();
    const values = {
      honeyBotFlaggedSpam: e.target.elements.botfield.value,
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };

    await notifyViaTelegramBot(values);
    e.target.reset();
    setIsModalOpen(true); // Open the modal after successful submission
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when the user clicks the button
  };

  return (
    <>
      <form
        onSubmit={submitCallback}
        class="flex w-full flex-col gap-8 lg:w-1/2"
      >
        <input aria-hidden="true" type="hidden" name="botfield" />
        <div className="relative w-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            required
            class="peer w-full rounded-lg border-none bg-primary-glass/70  placeholder-transparent outline-none focus:ring-0"
          />
          <label
            htmlFor="name"
            className="absolute left-3 -top-5 text-sm  transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-focus:-top-5 peer-focus:text-sm "
          >
            Name
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            id="email"
            class="peer w-full rounded-lg border-none bg-primary-glass/70  placeholder-transparent outline-none focus:ring-0"
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-5 text-sm  transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-focus:-top-5 peer-focus:text-sm "
          >
            Email
          </label>
        </div>
        <div className="relative w-full">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={10}
            required
            className="peer w-full rounded-lg border-none bg-primary-glass/70 placeholder-transparent outline-none focus:outline-none "
          />
          <label
            htmlFor="message"
            className=" absolute left-3 -top-5 text-sm  transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-focus:-top-5 peer-focus:text-sm "
          >
            Message
          </label>
        </div>

        <button
          class="rounded-xl bg-secondary px-4 py-2 text-xl font-medium text-primary"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
