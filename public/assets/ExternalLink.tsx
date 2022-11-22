import * as React from "preact";

function ExternalLinkIcon(props: any) {
  return (
    <svg
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.183 7.292H6.869c-.564 0-1.105.22-1.503.61-.4.39-.623.92-.623 1.473v9.375c0 .552.224 1.082.623 1.473.398.39.939.61 1.503.61h9.565c.564 0 1.105-.22 1.503-.61.4-.39.623-.92.623-1.473v-5.208m-7.44 1.041L21.75 4.167m-5.315 0h5.315v5.208"
        stroke="#fff"
        className="group-hover:stroke-secondary"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ExternalLinkIcon;
