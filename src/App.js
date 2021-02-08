import React from 'react';
import styles from './css.module.css';

function App() {
  return (
    <div className={styles.app}>
      <img className={styles.image} src="jain.png" alt=""/>
      <div className={styles.infos}>
        <h1 className={styles.name}>JAIN</h1>
        <h2>Zanaka</h2>
        <p>(2015)</p>
        <div className={styles.rating}>
          <p className={styles.text}>Rate this album</p>
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
      </div>
    </div>
  );
}

export default App;
