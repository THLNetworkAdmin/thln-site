import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">Tar Heel Lax Network</div>
      <div className="footer-tag">NC High School Boys Lacrosse</div>
      <ul className="footer-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/game-reviews">Game Reviews</Link></li>
        <li><Link href="/standings">Standings</Link></li>
        <li><Link href="/rankings">Rankings</Link></li>
      </ul>
      <div className="copyright">© 2026 Tar Heel Lax Network. Not affiliated with the NCHSAA or MaxPreps.</div>
    </footer>
  );
}
