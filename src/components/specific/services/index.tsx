import styles from "./styles.module.scss";
function Services(): JSX.Element {
  return (
    <div className={styles.services}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            gravida felis, id tempor ex. Suspendisse congue purus eu neque
            auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,
          </p>
        </div>
        <div className={styles.targets}>
          <Target
            icon="/services/cloud.svg"
            title="Stet clita kasd gubergren"
          />
          <Target
            icon="/services/earth.svg"
            title="Stet clita kasd gubergren"
          />
          <Target
            icon="/services/friends.svg"
            title="Stet clita kasd gubergren"
          />
          <Target
            icon="/services/friends.svg"
            title="Stet clita kasd gubergren"
          />
        </div>
      </div>
    </div>
  );
}
function Target(props: { icon: string; title: string }): JSX.Element {
  const { icon, title } = props;
  return (
    <div className={styles.targetService}>
      <div className={styles.icon}>
        <img src={icon} alt="icon" />
      </div>
      <span>{title}</span>
    </div>
  );
}
export default Services;
