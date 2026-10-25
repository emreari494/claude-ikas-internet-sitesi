// This file is auto-generated — do not edit manually.
import type { IkasImage, IkasNavigationLink } from "@ikas/bp-storefront";

export interface Props {
  /** Hero fotoğrafı (dikey, 4:5 oranı ideal) */
  image?: IkasImage | null;
  /** Görme engelliler ve Google için fotoğrafın kısa tarifi */
  imageAlt?: string;
  showSoon?: boolean;
  soonBadge?: string;
  soonText?: string;
  /** Boşsa tıklanmaz */
  soonLink?: IkasNavigationLink | null;
  /** Başlığın üstündeki el yazısı satır (boşsa gizlenir) */
  scriptText?: string;
  heading: string;
  /** Başlıkta italik ve gül rengi yazılacak kelime (boşsa vurgu yok) */
  headingEmphasis?: string;
  subtext?: string;
  /** Gül renkli buton (kitler) */
  primaryLink?: IkasNavigationLink | null;
  /** Çerçeveli buton (hazır çiçekler) */
  secondaryLink?: IkasNavigationLink | null;
}
