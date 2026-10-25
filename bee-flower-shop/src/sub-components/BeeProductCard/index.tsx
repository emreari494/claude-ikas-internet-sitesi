import { observer } from "@ikas/component-utils";
import {
  IkasProduct,
  getSelectedProductVariant,
  getProductVariantMainImage,
  getProductVariantFormattedFinalPrice,
  getProductVariantFormattedSellPrice,
  hasProductVariantDiscount,
  hasProductVariantStock,
  getProductHref,
  getDefaultSrc,
} from "@ikas/bp-storefront";

interface Props {
  product: IkasProduct;
  tag?: string;
  tagSage?: boolean;
  saleLabel?: string;
  soldOutLabel?: string;
}

// Product card in the draft's style: 4:5 rounded photo, small tag, name, price and old price.
const BeeProductCard = observer(function BeeProductCard({ product, tag, tagSage, saleLabel, soldOutLabel }: Props) {
  if (!product) return null;
  const variant = getSelectedProductVariant(product);
  const image = getProductVariantMainImage(variant)?.image;
  const finalPrice = getProductVariantFormattedFinalPrice(variant) as unknown as string;
  const sellPrice = getProductVariantFormattedSellPrice(variant) as unknown as string;
  const hasDiscount = hasProductVariantDiscount(variant) as unknown as boolean;
  const soldOut = !(hasProductVariantStock(variant) as unknown as boolean);
  // Sold out wins; otherwise the section's own tag ("Kendin yap"), then the sale label.
  const badge = soldOut ? soldOutLabel : tag || (hasDiscount ? saleLabel : "");
  const badgeClass = soldOut
    ? "bee-card__tag bee-card__tag--dark"
    : tag && tagSage
      ? "bee-card__tag bee-card__tag--sage"
      : "bee-card__tag";

  return (
    <a class="bee-card bee-focus" href={getProductHref(product)}>
      <div class="bee-card__img">
        {image && !image.isVideo ? (
          <img class="bee-card__photo" src={getDefaultSrc(image)} alt={product.name} loading="lazy" decoding="async" />
        ) : (
          <div class="bee-ph" aria-hidden="true" />
        )}
        {badge && <span class={badgeClass}>{badge}</span>}
      </div>
      <h3 class="bee-card__name">{product.name}</h3>
      {finalPrice && (
        <div class="bee-card__row">
          <span class="bee-card__price">{finalPrice}</span>
          {hasDiscount && sellPrice && sellPrice !== finalPrice && <span class="bee-card__old">{sellPrice}</span>}
        </div>
      )}
    </a>
  );
});

export default BeeProductCard;
