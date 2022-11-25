import { useState } from "preact/hooks";

interface Props {
  setIsOpen: Function;
  isOpen: boolean;
}

export const MobileMenu = ({ setIsOpen, isOpen }: Props) => {
  const [active, setActive] = useState();
  const setLink = (e: any) => {
    setIsOpen(false);
    console.log(e.target.id);
    setActive(e.target.id);
    console.log("clicked");
  };
  return (
    <div
      class={`md:hidden overflow-hidden absolute opacity-1 inset-y-0 right-0 transform ${
        isOpen ? "" : "translate-x-full opacity-0"
      } animate duration-500 ease-out min-h-screen z-10 bg-primary-glass/70 w-[60vw]`}
    >
      <ul class="flex  w-full font-heading text-bold flex-col gap-16 px-4 py-4 bottom-0 h-full justify-center  items-center">
        <li
          class={`active:text-secondary focus:text-secondary ${
            active === "projectsLink" && "text-secondary"
          }`}
        >
          <a id="projectsLink" onClick={setLink} href="#projects">
            Projects
          </a>
        </li>
        <li
          class={`active:text-secondary focus:text-secondary ${
            active === "aboutLink" && "text-secondary"
          }`}
        >
          <a id="aboutLink" onClick={setLink} href="#about">
            About
          </a>
        </li>
        <li
          class={`active:text-secondary focus:text-secondary ${
            active === "contactLink" && "text-secondary"
          }`}
        >
          <a id="contactLink" onClick={setLink} href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1Lnjq7vXpCMrYnDX3M1-ckaxR1PPwMNef/view?usp=sharing"
            target="_blank"
            class="rounded-sm transition-all duration-300 text-secondary bg-transparent outline outline-2 outline-secondary px-4 py-1 hover:bg-secondary hover:bg-opacity-10"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
