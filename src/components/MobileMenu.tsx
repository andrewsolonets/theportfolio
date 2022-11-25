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
      class={`opacity-1 absolute inset-y-0 right-0 transform overflow-hidden md:hidden ${
        isOpen ? "" : "translate-x-full opacity-0"
      } animate z-10 min-h-screen w-[60vw] bg-primary-glass/70 duration-500 ease-out`}
    >
      <ul class="text-bold  bottom-0 flex h-full w-full flex-col items-center justify-center gap-16 px-4 py-4  font-heading">
        <li
          class={`focus:text-secondary active:text-secondary ${
            active === "projectsLink" && "text-secondary"
          }`}
        >
          <a id="projectsLink" onClick={setLink} href="#projects">
            Projects
          </a>
        </li>
        <li
          class={`focus:text-secondary active:text-secondary ${
            active === "aboutLink" && "text-secondary"
          }`}
        >
          <a id="aboutLink" onClick={setLink} href="#about">
            About
          </a>
        </li>
        <li
          class={`focus:text-secondary active:text-secondary ${
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
            class="rounded-sm bg-transparent px-4 py-1 text-secondary outline outline-2 outline-secondary transition-all duration-300 hover:bg-secondary hover:bg-opacity-10"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
