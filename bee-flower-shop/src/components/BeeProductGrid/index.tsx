import { getIkasCategoryHref, getDefaultSrc } from "@ikas/bp-storefront";
import { Props } from "./types";
import BeeSectionHead from "../../sub-components/BeeSectionHead";
import BeeProductCard from "../../sub-components/BeeProductCard";

export function BeeProductGrid({
  eyebrow,
  heading,
  lead,
  allLink,
  products,
  cardTag,
  cardTagSage = true,
  saleLabel,
  soldOutLabel,
  categories,
}: Props) {
  const items = products?.data ?? [];
  const cats = categories?.data ?? [];

  return (
    <section class="bee-sec bee-blk">
      <div class="bee-wrap">
        <BeeSectionHead eyebrow={eyebrow} heading={heading} lead={lead} link={allLink} />
        {cats.length > 0 && (
          <div class="bee-cats">
            {cats.map((cat) => (
              <a key={cat.id} class="bee-cat bee-focus" href={getIkasCategoryHref(cat)}>
                {cat.image ? (
                  <img class="bee-cat__img" src={getDefaultSrc(cat.image)} alt="" loading="lazy" decoding="async" />
                ) : (
                  <span class="bee-ph bee-cat__img" aria-hidden="true" />
                )}
                <span class="bee-cat__name">{cat.name}</span>
              </a>
            ))}
          </div>
        )}
        {items.length > 0 ? (
          <div class="bee-grid">
            {items.map((product) => (
              <BeeProductCard
                key={product.id}
                product={product}
                tag={cardTag}
                tagSage={cardTagSage}
                saleLabel={saleLabel}
                soldOutLabel={soldOutLabel}
              />
            ))}
          </div>
        ) : (
          <div class="bee-grid" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} class="bee-grid__empty bee-ph" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BeeProductGrid;
