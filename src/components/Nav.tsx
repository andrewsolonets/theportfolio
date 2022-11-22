import { useState, useEffect } from "preact/hooks";

export const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [active, setActive] = useState();
  const setLink = (e: any) => {
    console.log(e.target.id);
    setActive(e.target.id);
    console.log("clicked");
  };

  return (
    <header
      class={`transition backdrop-blur  flex sticky  z-50 justify-between py-3 drop-shadow-header bg-primary-glass/70 ${
        visible ? "top-0" : "-translate-y-48"
      } px-10`}
    >
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
