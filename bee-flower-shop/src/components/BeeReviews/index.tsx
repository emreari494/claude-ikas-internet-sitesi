import { Props } from "./types";
import BeeSectionHead from "../../sub-components/BeeSectionHead";

function stars(n?: number) {
  const count = Math.max(1, Math.min(5, Math.round(n ?? 5)));
  return "★".repeat(count);
}

export function BeeReviews(props: Props) {
  const showSample = props.showSample ?? true;
  const reviews = [
    { text: props.rev1Text, source: props.rev1Source, stars: props.rev1Stars },
    { text: props.rev2Text, source: props.rev2Source, stars: props.rev2Stars },
    { text: props.rev3Text, source: props.rev3Source, stars: props.rev3Stars },
  ].filter((r) => r.text);

  return (
    <section class="bee-sec bee-blk">
      <div class="bee-wrap">
        <BeeSectionHead eyebrow={props.eyebrow} heading={props.heading} />
        <div class="bee-reviews">
          {reviews.map((r, i) => (
            <figure key={i} class="bee-rev">
              {showSample && props.sampleLabel && <span class="bee-rev__sample">{props.sampleLabel}</span>}
              <span class="bee-rev__stars" aria-label={`${Math.round(r.stars ?? 5)}/5`}>{stars(r.stars)}</span>
              <blockquote class="bee-rev__text">{r.text}</blockquote>
              {r.source && <figcaption class="bee-rev__source">{r.source}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeeReviews;
