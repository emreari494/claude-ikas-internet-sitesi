import type { ComponentChildren } from "preact";
import type { IkasNavigationLink } from "@ikas/bp-storefront";

export function resolveLink(link: IkasNavigationLink | null | undefined) {
  if (!link) return { href: "", label: "", openInNewTab: false };
  return {
    href: typeof link.href === "string" ? link.href.trim() : "",
    label: typeof link.label === "string" ? link.label.trim() : "",
    openInNewTab: !!link.openInNewTab,
  };
}

interface Props {
  link: IkasNavigationLink | null | undefined;
  class?: string;
  /** Rendered instead of the link label when given (e.g. a whole card). */
  children?: ComponentChildren;
  /** Render the content without a link when the editor left the address empty. */
  fallbackTag?: "div" | "span";
}

// Renders an editor LINK prop as <a>; without an address it degrades to a plain element.
export default function BeeLink({ link, class: className, children, fallbackTag }: Props) {
  const { href, label, openInNewTab } = resolveLink(link);
  const content = children ?? label;
  if (!href) {
    if (!fallbackTag) return null;
    const Tag = fallbackTag;
    return <Tag class={className}>{content}</Tag>;
  }
  return (
    <a
      class={className}
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
