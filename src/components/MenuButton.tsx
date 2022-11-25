interface MenuProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const MenuButton = ({ isOpen, setIsOpen }: MenuProps) => {
  return (
    <div class="z-20 flex h-fit w-fit md:hidden">
      <button class="group relative" onClick={() => setIsOpen(!isOpen)}>
        <div class="relative flex h-[30px] w-[30px] transform items-center justify-center overflow-hidden rounded-full transition-all   duration-200 ">
          <div class="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
            <div
              class={`h-[2px] w-7 origin-left transform bg-secondary transition-all duration-300 ${
                isOpen ? "rotate-[42deg]" : ""
              }`}
            ></div>
            <div
              class={`h-[2px] w-1/2 transform rounded bg-secondary transition-all duration-300 ${
                isOpen ? "-translate-x-10" : ""
              }`}
            ></div>
            <div
              class={`h-[2px] w-7 origin-left transform bg-secondary transition-all duration-300 ${
                isOpen ? "-rotate-[42deg]" : ""
              }`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};
