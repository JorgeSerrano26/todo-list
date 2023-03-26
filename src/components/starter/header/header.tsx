import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" title="qwik logo">
          <QwikLogo />
        </a>
      </div>
      <h1>ToDo List</h1>
    </header>
  );
});
