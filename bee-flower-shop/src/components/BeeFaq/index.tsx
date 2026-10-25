import { Props } from "./types";
import BeeSectionHead from "../../sub-components/BeeSectionHead";

export function BeeFaq(props: Props) {
  const items = [
    { q: props.q1Question, a: props.q1Answer },
    { q: props.q2Question, a: props.q2Answer },
    { q: props.q3Question, a: props.q3Answer },
    { q: props.q4Question, a: props.q4Answer },
    { q: props.q5Question, a: props.q5Answer },
    { q: props.q6Question, a: props.q6Answer },
  ].filter((item) => item.q);

  return (
    <section class="bee-sec bee-blk">
      <div class="bee-wrap">
        <BeeSectionHead eyebrow={props.eyebrow} heading={props.heading} />
        <div class="bee-faq">
          {items.map((item, i) => (
            <details key={i} class="bee-faq__item" open={i === 0}>
              <summary class="bee-faq__q bee-focus">{item.q}</summary>
              {item.a && <p class="bee-faq__a">{item.a}</p>}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeeFaq;
