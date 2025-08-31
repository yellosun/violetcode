import clsx from "clsx";

const defaultStyles = " fill-text h-4 w-4";

export function MailIcon({ className = "" }) {
  return (
    <div className={clsx(className + defaultStyles)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 24 24"
        fill="inherit"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
    </div>
  );
}

export function PersonIcon({ className = "" }) {
  return (
    <div className={clsx(className + defaultStyles)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 24 24"
        fill="inherit"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
}
