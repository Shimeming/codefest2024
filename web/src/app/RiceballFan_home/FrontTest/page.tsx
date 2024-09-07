// pages/index.tsx
import React from 'react';
import PageSwitcher from './components/PageSwitcher';
import Card from './components/Card';
import styles from '../styles/Home.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <PageSwitcher>
        <div className={styles.page} style={{ backgroundColor: 'lightblue' }}>Page 1</div>
        <div className={styles.page} style={{ backgroundColor: 'lightcoral' }}>Page 2</div>
        <div className={styles.page} style={{ backgroundColor: 'lightgreen' }}>Page 3</div>
        <div className={styles.page} style={{ backgroundColor: 'lightgoldenrodyellow' }}>Page 4</div>
      </PageSwitcher>
      <div className={styles.cardContainer}>
        {/* Example card data */}
        <Card data={{ id: 1, title: 'Card 1', description: 'Description 1', image: '/images/card1.jpg' }} onSwipe={(direction) => console.log(`Swiped ${direction}`)} />
        <Card data={{ id: 2, title: 'Card 2', description: 'Description 2', image: '/images/card2.jpg' }} onSwipe={(direction) => console.log(`Swiped ${direction}`)} />
      </div>
    </div>
  );
};

export default HomePage;
