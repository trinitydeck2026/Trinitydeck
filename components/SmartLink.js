import Link from "next/link";

/* Same-page anchors stay plain <a> (smooth-scrolled by Lenis);
   links to other pages use next/link for instant client-side navigation. */
export default function SmartLink({ href, children, ...rest }) {
  if (href && href.startsWith("/")) {
    return <Link href={href} {...rest}>{children}</Link>;
  }
  return <a href={href} {...rest}>{children}</a>;
}
