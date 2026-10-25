import { Props } from "./types";
import BeeLink from "../../sub-components/BeeLink";
import BeeMark from "../../sub-components/BeeArt";

export function BeeDesignSoon({ badge, heading, text, buttonLink, showBee = true }: Props) {
  return (
    <section class="bee-sec bee-blk bee-design-sec">
      <div class="bee-wrap">
        <div class="bee-design">
          {showBee && <BeeMark class="bee-design__bee" />}
          {badge && <span class="bee-design__badge">{badge}</span>}
          <h2 class="bee-h2 bee-design__title">{heading}</h2>
          {text && <p class="bee-design__text">{text}</p>}
          <BeeLink link={buttonLink} class="bee-btn bee-btn--dark bee-design__btn" />
        </div>
      </div>
    </section>
  );
}

export default BeeDesignSoon;
