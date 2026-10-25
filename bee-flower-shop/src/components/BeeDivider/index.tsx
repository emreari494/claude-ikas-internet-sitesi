import { Props } from "./types";
import BeeMark from "../../sub-components/BeeArt";

export function BeeDivider({ showBee = true }: Props) {
  return (
    <section class="bee-sec">
      <div class="bee-divider" aria-hidden="true">
        <i class="bee-divider__wave" />
        {showBee && <BeeMark />}
        <i class="bee-divider__wave" />
      </div>
    </section>
  );
}

export default BeeDivider;
