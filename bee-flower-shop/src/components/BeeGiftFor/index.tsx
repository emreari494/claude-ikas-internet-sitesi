import { Props } from "./types";
import BeeLink from "../../sub-components/BeeLink";
import BeeMedia from "../../sub-components/BeeMedia";
import BeeSectionHead from "../../sub-components/BeeSectionHead";
import BeeProductCard from "../../sub-components/BeeProductCard";

export function BeeGiftFor(props: Props) {
  const chips = props.chips?.links ?? [];
  const items = props.products?.data ?? [];
  const occasions = [
    { image: props.occ1Image, title: props.occ1Title, text: props.occ1Text, link: props.occ1Link },
    { image: props.occ2Image, title: props.occ2Title, text: props.occ2Text, link: props.occ2Link },
    { image: props.occ3Image, title: props.occ3Title, text: props.occ3Text, link: props.occ3Link },
  ].filter((o) => o.title);

  return (
    <section class="bee-sec bee-blk">
      <div class="bee-wrap">
        <BeeSectionHead eyebrow={props.eyebrow} heading={props.heading} />
        {chips.length > 0 && (
          <div class="bee-chips">
            {chips.map((chip, i) => (
              <BeeLink key={i} link={chip} class={i === 0 ? "bee-chip bee-chip--on bee-focus" : "bee-chip bee-focus"} fallbackTag="span" />
            ))}
          </div>
        )}
        {items.length > 0 && (
          <div class="bee-rail bee-gift__rail">
            {items.map((product) => (
              <BeeProductCard key={product.id} product={product} saleLabel={props.saleLabel} soldOutLabel={props.soldOutLabel} />
            ))}
          </div>
        )}
        {occasions.length > 0 && (
          <div class="bee-occ">
            {occasions.map((o, i) => (
              <BeeLink key={i} link={o.link} class="bee-occ__item bee-focus" fallbackTag="div">
                <div class="bee-occ__media">
                  <BeeMedia image={o.image} alt="" sizes="84px" />
                </div>
                <span>
                  <b class="bee-occ__title">{o.title}</b>
                  {o.text && <small class="bee-occ__text">{o.text}</small>}
                </span>
              </BeeLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BeeGiftFor;
