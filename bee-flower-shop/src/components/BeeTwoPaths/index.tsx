import { Props } from "./types";
import BeeLink from "../../sub-components/BeeLink";
import BeeMedia from "../../sub-components/BeeMedia";
import BeeSectionHead from "../../sub-components/BeeSectionHead";

export function BeeTwoPaths(props: Props) {
  const paths = [
    { image: props.path1Image, alt: props.path1ImageAlt, kicker: props.path1Kicker, title: props.path1Title, text: props.path1Text, link: props.path1Link },
    { image: props.path2Image, alt: props.path2ImageAlt, kicker: props.path2Kicker, title: props.path2Title, text: props.path2Text, link: props.path2Link },
  ].filter((p) => p.title);

  return (
    <section class="bee-sec bee-blk">
      <div class="bee-wrap">
        <BeeSectionHead eyebrow={props.eyebrow} heading={props.heading} />
        <div class="bee-paths">
          {paths.map((p, i) => (
            <BeeLink key={i} link={p.link} class="bee-path bee-focus" fallbackTag="div">
              <BeeMedia image={p.image} alt={p.alt} class="bee-path__img" sizes="(min-width: 768px) 50vw, 100vw" />
              <div class="bee-path__text">
                {p.kicker && <span class="bee-path__kicker">{p.kicker}</span>}
                <h3 class="bee-h3 bee-path__title">{p.title}</h3>
                {p.text && <p class="bee-path__desc">{p.text}</p>}
              </div>
            </BeeLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeeTwoPaths;
