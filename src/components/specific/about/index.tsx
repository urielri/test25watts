import styles from "./styles.module.scss";
import Button from "components/utils/inputs/button";
function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src="/about.png" alt="image" />
        </div>
        <div className={styles.info}>
          <h1>
            About us <br /> <span>We Help Businesses</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat.
          </p>
          <div className={styles.action}>
            <Button onClick={() => console.log("read more")}>Read more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
