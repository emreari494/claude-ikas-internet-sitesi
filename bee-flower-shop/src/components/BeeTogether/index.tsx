import { Props } from "./types";
import BeeLink from "../../sub-components/BeeLink";
import BeeMedia from "../../sub-components/BeeMedia";

export function BeeTogether(props: Props) {
  const bullets = [props.bullet1, props.bullet2, props.bullet3].filter(Boolean);

  return (
    <section class="bee-sec bee-blk">
      <div class="bee-wrap">
        <div class="bee-together">
          <div class="bee-together__media">
            <BeeMedia image={props.image} alt={props.imageAlt} sizes="(min-width: 768px) 55vw, 100vw" />
          </div>
          <div class="bee-together__text">
            {props.eyebrow && <span class="bee-eyebrow">{props.eyebrow}</span>}
            <h2 class="bee-h2 bee-together__title">
              {props.heading}
              {props.headingScript && <span class="bee-script bee-together__script"> {props.headingScript}</span>}
            </h2>
            {props.text && <p class="bee-together__desc">{props.text}</p>}
            {bullets.length > 0 && (
              <ul class="bee-together__list">
                {bullets.map((b, i) => (
                  <li key={i} class="bee-together__item">{b}</li>
                ))}
              </ul>
            )}
            <div class="bee-together__pair">
              <BeeLink link={props.primaryLink} class="bee-btn bee-btn--primary" />
              <BeeLink link={props.secondaryLink} class="bee-btn bee-btn--ghost" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeeTogether;
