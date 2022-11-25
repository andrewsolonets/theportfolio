import { useState } from "preact/hooks";

export const DesktopNav = () => {
  const [active, setActive] = useState();
  const setLink = (e: any) => {
    console.log(e.target.id);
    setActive(e.target.id);
    console.log("clicked");
  };
  return (
    <nav class=" md:flex hidden ">
      <ul class="flex justify-around w-full font-heading text-bold items-center gap-16">
        <li
          class={`active:text-secondary focus:text-secondary hover:text-secondary ${
            active === "projectsLink" && "text-secondary"
          }`}
        >
          <a id="projectsLink" onClick={setLink} href="#projects">
            Projects
          </a>
        </li>
        <li
          class={`active:text-secondary focus:text-secondary hover:text-secondary ${
            active === "aboutLink" && "text-secondary"
          }`}
        >
          <a id="aboutLink" onClick={setLink} href="#about">
            About
          </a>
        </li>
        <li
          class={`active:text-secondary focus:text-secondary  hover:text-secondary ${
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
    </nav>
  );
};
