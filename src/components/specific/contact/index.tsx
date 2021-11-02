import styles from "./styles.module.scss";
import InputText from "components/utils/inputs/text";
import Button from "components/utils/inputs/button";
function Contact(): JSX.Element {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.form}>
          <h1>
            Get in touch <br />
            <span>We are hiring!</span>
          </h1>
          <form>
            <InputText
              name="name"
              onChange={(e: any) => console.log(e)}
              value=""
              placeholder="Name"
            />
            <InputText
              name="email"
              onChange={(e: any) => console.log(e)}
              value=""
              placeholder="Email"
            />

            <InputText
              name="name"
              onChange={(e: any) => console.log(e)}
              value=""
              placeholder="Phone"
            />

            <div className={styles.action}>
              <Button onClick={() => console.log("send")}>Send</Button>
            </div>
          </form>
        </div>
        <div className={styles.images}>
          <img src="/contact.png" alt="contact" />
        </div>
      </div>
      <div className={styles.background}></div>
    </div>
  );
}
export default Contact;
