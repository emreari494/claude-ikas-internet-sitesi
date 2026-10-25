import { getDefaultSrc, createMediaSrcset } from "@ikas/bp-storefront";
import type { IkasNavigationLink } from "@ikas/bp-storefront";
import { Props } from "./types";

function resolveLink(link: IkasNavigationLink | null | undefined) {
  if (!link) return { href: "", label: "", openInNewTab: false };
  return {
    href: typeof link.href === "string" ? link.href.trim() : "",
    label: typeof link.label === "string" ? link.label.trim() : "",
    openInNewTab: !!link.openInNewTab,
  };
}

// Splits the heading around the first occurrence of the emphasis word so it can be styled.
function renderHeading(heading: string, emphasis?: string) {
  const word = emphasis?.trim();
  const index = word ? heading.indexOf(word) : -1;
  if (!word || index < 0) return heading;
  return (
    <>
      {heading.slice(0, index)}
      <em class="bee-hero__em">{word}</em>
      {heading.slice(index + word.length)}
    </>
  );
}

export function BeeHero({
  image,
  imageAlt,
  showSoon = true,
  soonBadge,
  soonText,
  soonLink,
  scriptText,
  heading,
  headingEmphasis,
  subtext,
  primaryLink,
  secondaryLink,
}: Props) {
  const primary = resolveLink(primaryLink);
  const secondary = resolveLink(secondaryLink);
  const soon = resolveLink(soonLink);
  const hasSoon = showSoon && !!(soonBadge || soonText);
  const SoonTag = soon.href ? "a" : "span";

  return (
    <section class="bee-hero">
      <div class="bee-hero__inner">
        <div class="bee-hero__media">
          {image ? (
            <img
              class="bee-hero__img"
              src={getDefaultSrc(image)}
              srcSet={createMediaSrcset(image)}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt={imageAlt ?? ""}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          ) : (
            <div class="bee-hero__placeholder" aria-hidden="true" />
          )}
        </div>

        <div class="bee-hero__copy">
          {hasSoon && (
            <SoonTag
              class="bee-hero__soon"
              href={soon.href || undefined}
              target={soon.openInNewTab ? "_blank" : undefined}
              rel={soon.openInNewTab ? "noopener noreferrer" : undefined}
            >
              {soonBadge && <span class="bee-hero__soon-badge">{soonBadge}</span>}
              {soonText}
            </SoonTag>
          )}
          {scriptText && <span class="bee-hero__script">{scriptText}</span>}
          <h1 class="bee-hero__heading">{renderHeading(heading ?? "", headingEmphasis)}</h1>
          {subtext && <p class="bee-hero__subtext">{subtext}</p>}
          {(primary.label || secondary.label) && (
            <div class="bee-hero__actions">
              {primary.label && (
                <a
                  class="bee-hero__btn bee-hero__btn--primary"
                  href={primary.href || "#"}
                  target={primary.openInNewTab ? "_blank" : undefined}
                  rel={primary.openInNewTab ? "noopener noreferrer" : undefined}
                >
                  {primary.label}
                </a>
              )}
              {secondary.label && (
                <a
                  class="bee-hero__btn bee-hero__btn--secondary"
                  href={secondary.href || "#"}
                  target={secondary.openInNewTab ? "_blank" : undefined}
                  rel={secondary.openInNewTab ? "noopener noreferrer" : undefined}
                >
                  {secondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BeeHero;
