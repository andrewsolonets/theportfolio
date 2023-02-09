import { useState } from "preact/hooks";
import { resume } from "../content/projects.json";

export const DesktopNav = () => {
  const [active, setActive] = useState();
  const setLink = (e: any) => {
    console.log(e.target.id);
    setActive(e.target.id);
    console.log("clicked");
  };
  return (
    <nav class=" hidden md:flex ">
      <ul class="text-bold flex w-full items-center justify-around gap-16 font-heading">
        <li
          class={`hover:text-secondary focus:text-secondary active:text-secondary ${
            active === "projectsLink" && "text-secondary"
          }`}
        >
          <a id="projectsLink" onClick={setLink} href="#projects">
            Projects
          </a>
        </li>
        <li
          class={`hover:text-secondary focus:text-secondary active:text-secondary ${
            active === "aboutLink" && "text-secondary"
          }`}
        >
          <a id="aboutLink" onClick={setLink} href="#about">
            About
          </a>
        </li>
        <li
          class={`hover:text-secondary focus:text-secondary  active:text-secondary ${
            active === "contactLink" && "text-secondary"
          }`}
        >
          <a id="contactLink" onClick={setLink} href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a
            href={resume[0]}
            target="_blank"
            class="rounded-sm bg-transparent px-4 py-1 text-secondary outline outline-2 outline-secondary transition-all duration-300 hover:bg-secondary hover:bg-opacity-10"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
