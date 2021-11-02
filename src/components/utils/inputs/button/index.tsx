import styles from "../styles.module.scss";
function Button(props: {
  children: string;
  onClick: Function;
}): JSX.Element {
  const { children, onClick } = props;
  return (
    <button className={styles.button} onClick={() => onClick()}>
      {children}
    </button>
  );
}
export default Button;
