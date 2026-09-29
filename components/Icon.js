/* Icon from the sprite in /public/assets/icons.svg ("i-*" line icons, "b-*" brand marks). */
export default function Icon({ name, className = "ic" }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`/assets/icons.svg#${name}`} />
    </svg>
  );
}
