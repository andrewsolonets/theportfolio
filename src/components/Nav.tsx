import { useState, useEffect } from "preact/hooks";
import { DesktopNav } from "./DesktopNav";
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "./MobileMenu";

export const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header
      class={`fixed left-0 right-0 z-50 flex items-center justify-between bg-primary-glass/70 py-4 drop-shadow-header backdrop-blur transition duration-300 ${
        visible ? "top-0" : "-translate-y-48"
      } px-10 `}
    >
      <h3>Andrii S.</h3>
      <DesktopNav />
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
