/**
 * SkipLink — renders as the very first focusable element on the page.
 * Hidden until focused via keyboard Tab. Styled in globals.css.
 */
export default function SkipLink() {
  return (
    <a className="skip-link" href="#main-content">
      Skip to main content
    </a>
  );
}
