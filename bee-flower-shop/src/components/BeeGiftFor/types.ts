// This file is auto-generated — do not edit manually.
import type { IkasNavigationLinkList, IkasProductList, IkasImage, IkasNavigationLink } from "@ikas/bp-storefront";

export interface Props {
  /** Başlığın üstündeki küçük yazı (boşsa gizlenir) */
  eyebrow?: string;
  heading: string;
  /** Başlığın altındaki yuvarlak düğmeler (Sevgiliye, Anneye…); her biri bir kategoriye bağlanabilir */
  chips?: IkasNavigationLinkList;
  /** Telefonda yana kayan, bilgisayarda 4 sütun */
  products?: IkasProductList;
  saleLabel?: string;
  soldOutLabel?: string;
  occ1Image?: IkasImage | null;
  /** Boşsa bu kart gizlenir */
  occ1Title?: string;
  occ1Text?: string;
  occ1Link?: IkasNavigationLink | null;
  occ2Image?: IkasImage | null;
  /** Boşsa bu kart gizlenir */
  occ2Title?: string;
  occ2Text?: string;
  occ2Link?: IkasNavigationLink | null;
  occ3Image?: IkasImage | null;
  /** Boşsa bu kart gizlenir */
  occ3Title?: string;
  occ3Text?: string;
  occ3Link?: IkasNavigationLink | null;
}
