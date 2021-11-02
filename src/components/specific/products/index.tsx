import styles from "./styles.module.scss";

function Products(): JSX.Element {
  return (
    <div className={styles.products}>
      <div className={styles.content}>
        <div className={styles.info}>
          <span>Products</span>
          <h1>In eget tortor tempor mollis purus</h1>
        </div>
        <div className={styles.targets}>
          <div className={styles.direction}><img src="/arrow-left.svg" alt="" /></div>
          <Target
            title="Aliquam at dui lorem ipsum"
            list={[
              "- Ut mattis gravida efficitur.",
              " - Ut feugiat vehicula nibh, efficitur laoreet justo. ",
              "- Molestie id. Integer varius enim sit amet egestas. ",
              "- Ut mattis gravida efficitur.",
            ]}
          />
          <Target
            title="Aliquam at dui lorem ipsum"
            list={[
              "- Ut mattis gravida efficitur.",
              " - Ut feugiat vehicula nibh, efficitur laoreet justo. ",
              "- Molestie id. Integer varius enim sit amet egestas. ",
              "- Ut mattis gravida efficitur.",
            ]}
          />
          <Target
            title="Aliquam at dui lorem ipsum"
            list={[
              "- Ut mattis gravida efficitur.",
              " - Ut feugiat vehicula nibh, efficitur laoreet justo. ",
              "- Molestie id. Integer varius enim sit amet egestas. ",
              "- Ut mattis gravida efficitur.",
            ]}
          />
           <div className={styles.direction}><img src="/arrow-right.svg" alt="" /></div>
        </div>
      </div>
    </div>
  );
}
function Target(props: { title: string; list: string[] }): JSX.Element {
  const { title, list } = props;
  return (
    <div className={styles.targetProduct}>
      <span>{title}</span>
      <ul>
        {list.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
