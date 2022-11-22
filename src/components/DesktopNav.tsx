import { useState } from "preact/hooks";

export const DesktopNav = () => {
  const [active, setActive] = useState();
  const setLink = (e: any) => {
    console.log(e.target.id);
    setActive(e.target.id);
    console.log("clicked");
  };
  return (
    <nav class="w-1/3 md:flex hidden ">
      <ul class="flex justify-around w-full font-heading text-bold">
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
    </nav>
  );
};
