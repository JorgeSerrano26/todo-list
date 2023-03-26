import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  function formatedDate(): string {
    const date = new Date(serverTime.value.date);
    const weekday = new Date().toLocaleString('default', { weekday: 'long' });
    const dateFormated = date.toLocaleString('default');

    return `${weekday} ${dateFormated}`;
  }

  return (
    <footer>
      <a href="https://github.com/JorgeSerrano26" target="_blank" class={styles.anchor}>
        Made with ♡ by Jorge Serrano
        <span class={styles.spacer}>|</span>
        <span class={styles.date}>{formatedDate()}</span>
      </a>
    </footer>
  );
});
