export default function ReactLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="text-link dark:text-link-dark me-0 flex h-10 w-10 origin-center text-sm transition-all ease-in-out"
      viewBox="-10.5 -9.45 21 18.9"
    >
      <circle r={2} fill="currentColor" />
      <g stroke="currentColor">
        <ellipse rx={10} ry={4.5} />
        <ellipse rx={10} ry={4.5} transform="rotate(60)" />
        <ellipse rx={10} ry={4.5} transform="rotate(120)" />
      </g>
    </svg>
  );
}
