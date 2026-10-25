import type { BeeIcon as BeeIconName } from "../../global-types";

interface Props {
  name?: BeeIconName | string;
  class?: string;
}

// Line icons from the draft's trust strip; stroke colour comes from CSS `color`.
export default function BeeIcon({ name, class: className }: Props) {
  const common = {
    class: `bee-icon ${className ?? ""}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.4",
    "aria-hidden": "true" as const,
  };
  switch (name) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "qr":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="6" height="6" />
          <rect x="14" y="4" width="6" height="6" />
          <rect x="4" y="14" width="6" height="6" />
          <path d="M14 14h2v2h-2zM18 18h2v2h-2zM14 18h2" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
          <circle cx="7" cy="17.5" r="1.6" />
          <circle cx="17" cy="17.5" r="1.6" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <rect x="4" y="9" width="16" height="11" />
          <path d="M3 9h18M12 9v11M12 9c-2-4-6-4-6-1.5S9 9 12 9Zm0 0c2-4 6-4 6-1.5S15 9 12 9Z" />
        </svg>
      );
    case "return":
      return (
        <svg {...common}>
          <path d="M9 7 5 11l4 4" />
          <path d="M5 11h9a5 5 0 0 1 0 10h-3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
        </svg>
      );
  }
}
