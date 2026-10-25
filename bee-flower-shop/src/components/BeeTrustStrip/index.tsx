import { Props } from "./types";
import BeeIcon from "../../sub-components/BeeIcon";

export function BeeTrustStrip(props: Props) {
  const items = [
    { icon: props.item1Icon, title: props.item1Title, text: props.item1Text },
    { icon: props.item2Icon, title: props.item2Title, text: props.item2Text },
    { icon: props.item3Icon, title: props.item3Title, text: props.item3Text },
    { icon: props.item4Icon, title: props.item4Title, text: props.item4Text },
  ].filter((item) => item.title);
  if (!items.length) return null;

  return (
    <section class="bee-sec bee-trust">
      <ul class="bee-trust__list" style={{ "--bee-trust-cols": String(Math.min(items.length, 4)) }}>
        {items.map((item, i) => (
          <li key={i} class="bee-trust__item">
            <BeeIcon name={item.icon} class="bee-trust__icon" />
            <span>
              <b class="bee-trust__title">{item.title}</b>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BeeTrustStrip;
