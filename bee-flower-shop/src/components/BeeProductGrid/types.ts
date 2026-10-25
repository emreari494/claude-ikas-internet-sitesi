// This file is auto-generated — do not edit manually.
import type { IkasNavigationLink, IkasProductList, IkasCategoryList } from "@ikas/bp-storefront";

export interface Props {
  /** Başlığın üstündeki küçük yazı (boşsa gizlenir) */
  eyebrow?: string;
  heading: string;
  /** Başlığın altındaki kısa yazı (boşsa gizlenir) */
  lead?: string;
  /** Sağ üstteki bağlantı (boşsa gizlenir) */
  allLink?: IkasNavigationLink | null;
  /** Gösterilecek ürünler; telefonda 2, bilgisayarda 4 sütun */
  products?: IkasProductList;
  /** Kartların köşesindeki küçük etiket, örn. "Kendin yap" (boşsa gizlenir) */
  cardTag?: string;
  cardTagSage?: boolean;
  saleLabel?: string;
  soldOutLabel?: string;
  /** Ürünlerin üstünde yuvarlak kategori görselleri (boşsa gizlenir) */
  categories?: IkasCategoryList;
}
