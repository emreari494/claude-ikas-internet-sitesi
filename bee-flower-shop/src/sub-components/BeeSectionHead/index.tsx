import type { IkasNavigationLink } from "@ikas/bp-storefront";
import BeeLink from "../BeeLink";

interface Props {
  eyebrow?: string;
  heading?: string;
  lead?: string;
  link?: IkasNavigationLink | null;
}

// Eyebrow + heading (+ lead) on the left, optional "Tümü →" link on the right.
export default function BeeSectionHead({ eyebrow, heading, lead, link }: Props) {
  if (!eyebrow && !heading && !lead) return null;
  return (
    <div class="bee-head">
      <div>
        {eyebrow && <span class="bee-eyebrow">{eyebrow}</span>}
        {heading && <h2 class="bee-h2">{heading}</h2>}
        {lead && <p class="bee-lead">{lead}</p>}
      </div>
      <BeeLink link={link} class="bee-head__link bee-focus" />
    </div>
  );
}
