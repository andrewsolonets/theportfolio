interface Props {
  duration: number;
  offset: number;
  once: boolean;
  easing: string;
}

declare module "aos" {
  export function init({ duration, offset, once, easing }: Props): void;
}
