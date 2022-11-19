export const ContactForm = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form
      onSubmit={submitHandler}
      class="flex w-1/2 flex-col gap-8"
      // action="https://getform.io/f/d384645e-fbbd-4511-bc35-a8f6094793bd"
      // method="POST"
    >
      <div className="relative w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          required
          class="placeholder-transparent outline-none rounded-lg border-none w-full  focus:ring-0 peer bg-primary-glass/70"
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
          class="placeholder-transparent outline-none rounded-lg border-none w-full  focus:ring-0 peer bg-primary-glass/70"
        />
        <label
          htmlFor="username"
          className="absolute left-3 -top-5 text-sm  transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-focus:-top-5 peer-focus:text-sm "
        >
          Email
        </label>
      </div>
      <div className="relative w-full">
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows={10}
          required
          className="w-full bg-primary-glass/70 border-none outline-none rounded-lg focus:outline-none placeholder-transparent peer "
        />
        <label
          htmlFor="message"
          className=" absolute left-3 -top-5 text-sm  transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base  peer-focus:-top-5 peer-focus:text-sm "
        >
          Message
        </label>
      </div>

      <button
        class="px-4 py-2 text-primary bg-secondary font-medium text-xl rounded-xl"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
