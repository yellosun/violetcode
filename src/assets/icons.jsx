import clsx from "clsx";

const defaultStyles = " fill-text  ";

export function MailIcon({ className = " h-4 w-4"}) {
  return (
    <div className={clsx(defaultStyles + className)}>
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

export function PersonIcon({ className = " h-4 w-4"}) {
  return (
    <div className={clsx(defaultStyles + className)}>
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

export function CopyIcon({ className = " h-4 w-4"}) {
  return (
    <div className={clsx(defaultStyles + className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 24 24"
        fill="inherit"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    </div>
  );
}

export function DownloadIcon({ className = " h-4 w-4"}) {
  return (
    <div className={clsx(defaultStyles + className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 24 24"
        fill="inherit"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z" />
        </g>
      </svg>
    </div>
  );
}
