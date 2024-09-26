import { notifyViaTelegramBot } from "../helpers/helpers";

export const ContactForm = () => {
  // TODO: Success message/screen/toast notification
  const submitCallback = async (e: any) => {
    console.log(e.target);
    e.preventDefault();
    const values = {
      honeyBotFlaggedSpam: e.target.elements.botfield.value,
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };

    await notifyViaTelegramBot(values);
    e.target.reset();
  };

  return (
    <form
      onSubmit={submitCallback}
      class="flex w-full flex-col gap-8 lg:w-1/2"
      // action="https://getform.io/f/d384645e-fbbd-4511-bc35-a8f6094793bd"
      // method="POST"
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
          htmlFor="username"
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
  );
};
