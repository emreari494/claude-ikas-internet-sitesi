interface Props {
  class?: string;
}

// The little bee mark used across the draft (dividers, honey box, game band).
export function BeeMark({ class: className }: Props) {
  return (
    <svg class={`bee-mark ${className ?? ""}`} viewBox="0 0 32 24" aria-hidden="true">
      <ellipse cx="13" cy="7" rx="5" ry="4" transform="rotate(-20 13 7)" fill="#FFFDF9" stroke="#8C846A" stroke-width="1.2" />
      <ellipse cx="19" cy="7" rx="5" ry="4" transform="rotate(20 19 7)" fill="#FFFDF9" stroke="#8C846A" stroke-width="1.2" />
      <ellipse cx="16" cy="15" rx="9" ry="6.5" fill="#EAC26C" />
      <path d="M13 10v10M18 9.5v11" stroke="#0E0C0B" stroke-width="2" />
      <circle cx="23" cy="13.5" r="1" fill="#0E0C0B" />
    </svg>
  );
}

export default BeeMark;
