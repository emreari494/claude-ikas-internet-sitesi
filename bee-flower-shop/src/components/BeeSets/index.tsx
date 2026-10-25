import { Props } from "./types";
import BeeLink from "../../sub-components/BeeLink";
import BeeMedia from "../../sub-components/BeeMedia";
import BeeSectionHead from "../../sub-components/BeeSectionHead";

export function BeeSets(props: Props) {
  const sets = [
    { image: props.set1Image, eyebrow: props.set1Eyebrow, title: props.set1Title, text: props.set1Text, note: props.set1Note, link: props.set1Link },
    { image: props.set2Image, eyebrow: props.set2Eyebrow, title: props.set2Title, text: props.set2Text, note: props.set2Note, link: props.set2Link },
  ].filter((s) => s.title);

  return (
    <section class="bee-sec bee-blk">
      <div class="bee-wrap">
        <BeeSectionHead eyebrow={props.eyebrow} heading={props.heading} lead={props.lead} />
        <div class="bee-sets">
          {sets.map((s, i) => (
            <div key={i} class="bee-set">
              <div class="bee-set__media">
                <BeeMedia image={s.image} alt="" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              {s.eyebrow && <span class="bee-eyebrow">{s.eyebrow}</span>}
              <h3 class="bee-h3 bee-set__title">{s.title}</h3>
              {s.text && <p class="bee-set__text">{s.text}</p>}
              {s.note && <span class="bee-set__note">{s.note}</span>}
              <BeeLink link={s.link} class="bee-btn bee-btn--primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeeSets;
