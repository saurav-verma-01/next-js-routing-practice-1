import Link from "next/link";
import styles from "./projects.module.css";

const page = () => {
  return (
    <main>
      <h1>Project List</h1>

      <ul className={styles.ul}>
        <li>
          <Link href="/project/carrent">CarRent</Link>
        </li>
        <li>
          <Link href="/project/jobit">JobIt</Link>
        </li>
        <li>
          <Link href="/project/hipnode">HipNode</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
