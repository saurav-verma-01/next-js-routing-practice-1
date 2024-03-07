import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <p>Next.js</p>

        <ul className={styles.links}>
          <li>
            <Link href="/">Home 🏠</Link>{" "}
          </li>
          <li>
            <Link href="/about">About 👈</Link>{" "}
          </li>
          <li>
            <Link href="/contact">Contact 📞</Link>{" "}
          </li>
          <li>
            <Link href="/signin">Sign In 🔐</Link>{" "}
          </li>
          <li>
            <Link href="/signup">Sign Up 📖</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
