import { useState, useEffect, useRef } from "react";
import { useResize, useGetScroll } from "hooks";
import Link from "./link";
import styles from "./styles.module.scss";
function Header(): JSX.Element {
  const headerRef = useRef(null);
  const [header, setHeader] = useState({
    styles: { active: styles.scroll, class: styles.header },
  });
  const device = useResize();
  const getScroll = useGetScroll(headerRef, header, styles);
  useEffect(() => {
    console.log(getScroll);
  }, [getScroll]);
  return (
    <div className={`${header.styles.class}`} ref={getScroll}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/logo_25w.png" alt="25 watts" />
        </div>
        <div className={styles.menu}>
          <Link href="#" label="Home" line={true} />
          <Link href="#" label="About us" />
          <Link href="#" label="Services" />
          <Link href="#" label="Products" />
          <Link href="#" label="Details" />
          <Link href="#" label="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Header;
