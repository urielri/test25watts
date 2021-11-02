import styles from "./styles.module.scss";
function Details(): JSX.Element {
  return (
    <div className={styles.details}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>More details</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            gravida felis, id tempor ex. Suspendisse congue purus eu neque
            auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,
          </p>
        </div>
        <div className={styles.targets}>
          <Target
            icon="/details/anchor.svg"
            description="Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper."
          />
             <Target
            icon="/details/anchor.svg"
            description="Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper."
          />
             <Target
            icon="/details/anchor.svg"
            description="Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper."
          />
             <Target
            icon="/details/anchor.svg"
            description="Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper."
          />
             <Target
            icon="/details/anchor.svg"
            description="Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper."
          />
        </div>
      </div>
    </div>
  );
}
function Target(props: { icon: string; description: string }): JSX.Element {
  const { icon, description } = props;
  return (
    <div className={styles.targetDetail}>
      <div className={styles.icon}>
        <img src={icon} alt="images" />
      </div>
      <p>{description}</p>
    </div>
  );
}
export default Details;
