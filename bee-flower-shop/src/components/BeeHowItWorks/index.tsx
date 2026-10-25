import { Props } from "./types";
import BeeLink from "../../sub-components/BeeLink";
import BeeMedia from "../../sub-components/BeeMedia";
import BeeMark from "../../sub-components/BeeArt";
import BeeSectionHead from "../../sub-components/BeeSectionHead";

export function BeeHowItWorks(props: Props) {
  const steps = [
    { image: props.step1Image, title: props.step1Title, text: props.step1Text },
    { image: props.step2Image, title: props.step2Title, text: props.step2Text },
    { image: props.step3Image, title: props.step3Title, text: props.step3Text },
    { image: props.step4Image, title: props.step4Title, text: props.step4Text },
  ].filter((s) => s.title);
  const showGame = props.showGame ?? true;

  return (
    <section class="bee-sec bee-how">
      <div class="bee-wrap">
        <BeeSectionHead eyebrow={props.eyebrow} heading={props.heading} />
        <ol class="bee-how__steps" style={{ "--bee-how-cols": String(Math.max(steps.length, 1)) }}>
          {steps.map((s, i) => (
            <li key={i} class="bee-how__step">
              <BeeMedia image={s.image} alt="" class="bee-how__img" sizes="180px" />
              <div>
                <h3 class="bee-how__title">
                  <span class="bee-how__num">{i + 1}. </span>
                  {s.title}
                </h3>
                {s.text && <p class="bee-how__text">{s.text}</p>}
              </div>
            </li>
          ))}
        </ol>
        {showGame && props.gameTitle && (
          <div class="bee-game">
            <BeeMark />
            {props.gameEyebrow && <span class="bee-eyebrow">{props.gameEyebrow}</span>}
            <h2 class="bee-h2 bee-game__title">{props.gameTitle}</h2>
            {props.gameText && <p class="bee-game__text">{props.gameText}</p>}
            <BeeLink link={props.gameLink} class="bee-btn bee-btn--ghost bee-game__btn" />
          </div>
        )}
      </div>
    </section>
  );
}

export default BeeHowItWorks;
