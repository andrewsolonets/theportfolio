interface MenuProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const MenuButton = ({ isOpen, setIsOpen }: MenuProps) => {
  return (
    <div class="md:hidden flex w-fit h-fit z-20">
      <button class="relative group" onClick={() => setIsOpen(!isOpen)}>
        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all   duration-200 ">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              class={`bg-secondary h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isOpen ? "rotate-[42deg]" : ""
              }`}
            ></div>
            <div
              class={`bg-secondary h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                isOpen ? "-translate-x-10" : ""
              }`}
            ></div>
            <div
              class={`bg-secondary h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isOpen ? "-rotate-[42deg]" : ""
              }`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};
