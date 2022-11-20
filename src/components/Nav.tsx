import { useState } from "preact/hooks";

export const Nav = () => {
  const [active, setActive] = useState();
  const setLink = (e: any) => {
    console.log(e.target.id);
    setActive(e.target.id);
    console.log("clicked");
  };
  return (
    <header class="flex sticky top-0 z-50 justify-between py-3 drop-shadow-header bg-primary-glass/70 px-10">
      <h3>Andrii S.</h3>
      <nav class="w-1/3">
        <ul class="flex justify-around font-heading text-bold">
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
    </header>
  );
};
