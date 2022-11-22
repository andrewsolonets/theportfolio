import { useState } from "preact/hooks";
import { DesktopNav } from "./DesktopNav";

export const MobileMenu = () => {
  const [active, setActive] = useState();
  const setLink = (e: any) => {
    console.log(e.target.id);
    setActive(e.target.id);
    console.log("clicked");
  };
  return (
    <div class="absolute right-0  z-10 bg-primary-glass/70 bottom-0 top-0">
      <ul class="flex  w-full font-heading text-bold flex-col gap-4 px-4 py-4 bottom-0 h-full justify-between">
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
      </ul>
    </div>
  );
};
