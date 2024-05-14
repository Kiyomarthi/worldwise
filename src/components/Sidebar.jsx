import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>list</p>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} By WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
