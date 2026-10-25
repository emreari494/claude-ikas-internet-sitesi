import { Props } from "./types";
import BeeLink from "../../sub-components/BeeLink";
import BeeMedia from "../../sub-components/BeeMedia";

export function BeeStory(props: Props) {
  return (
    <section class="bee-sec bee-blk">
      <div class="bee-wrap">
        <div class="bee-story">
          <div class="bee-story__media">
            <BeeMedia image={props.image} alt={props.imageAlt} sizes="(min-width: 768px) 45vw, 100vw" />
          </div>
          <div>
            {props.eyebrow && <span class="bee-eyebrow">{props.eyebrow}</span>}
            {props.scriptText && <span class="bee-script bee-story__script">{props.scriptText}</span>}
            <h2 class="bee-h2 bee-story__title">{props.heading}</h2>
            {props.text1 && <p class="bee-story__text">{props.text1}</p>}
            {props.text2 && <p class="bee-story__text">{props.text2}</p>}
            <BeeLink link={props.link} class="bee-btn bee-btn--ghost bee-story__btn" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeeStory;
