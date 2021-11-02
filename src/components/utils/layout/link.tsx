import styles from "./styles.module.scss";
function Link(props: {
  href: string;
  label: string;
  line?: boolean;
}): JSX.Element {
  const { href, label, line } = props;
  return (
    <div className={styles.link}>
      <a href={href}>
        <span>{label}</span>
      </a>
      {line && <hr />}
    </div>
  );
}
export default Link;
