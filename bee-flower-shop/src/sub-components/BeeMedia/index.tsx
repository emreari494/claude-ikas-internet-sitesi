import { getDefaultSrc, createMediaSrcset } from "@ikas/bp-storefront";
import type { IkasImage } from "@ikas/bp-storefront";

interface Props {
  image?: IkasImage | null;
  alt?: string;
  sizes?: string;
  class?: string;
  eager?: boolean;
}

// Editor IMAGE prop or, until one is uploaded, the striped placeholder from the draft.
export default function BeeMedia({ image, alt, sizes = "100vw", class: className, eager }: Props) {
  if (!image) return <div class={`bee-ph ${className ?? ""}`} aria-hidden="true" />;
  return (
    <img
      class={`bee-img ${className ?? ""}`}
      src={getDefaultSrc(image)}
      srcSet={createMediaSrcset(image)}
      sizes={sizes}
      alt={alt ?? ""}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
