import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <main>
      <h1>Your Website Title</h1>
      <article>
        <div className={styles.grid - container}>
          <section className={styles.big - element}>
            <h2>Big Element</h2>
            <p>This is the big element in the grid.</p>
          </section>
          <section className={styles.small - element}>
            <h3>Small Element 1</h3>
            <p>This is the first small element.</p>
          </section>
          <section className={styles.small - element}>
            <h3>Small Element 2</h3>
            <p>This is the second small element.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
