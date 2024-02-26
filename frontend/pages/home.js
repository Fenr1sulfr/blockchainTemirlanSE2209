import React, { useState } from 'react';
import styles from "../styles/Home.module.css";

const VotingPage = () => {
  const [currentVote, setCurrentVote] = useState(null);
  const [allVotes, setAllVotes] = useState([]);
  const [wallet, setWallet] = useState('Ваш кошелек');

  const vote = (option) => {
    setCurrentVote(option);
  };

  const loadAllVotes = () => {
    const dummyVotes = [
      { id: 1, question: 'Вопрос 1', options: ['Вариант 1', 'Вариант 2'], results: [10, 15] },
      { id: 2, question: 'Вопрос 2', options: ['Вариант 1', 'Вариант 2', 'Вариант 3'], results: [5, 8, 12] },
    ];

    setAllVotes(dummyVotes);
  };

  return (
    <div className={styles.blackpage}>
      <div className={styles.main}>
       <h1 className={styles.center}>Голосование</h1>

      {currentVote && (
        <div className={styles.center}>
          <h2>{currentVote.question}</h2>
          <ul>
            {currentVote.options.map((option, index) => (
              <li key={index}>
                {option} - {currentVote.results[index]} голосов
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={loadAllVotes}>Загрузить все голосования</button>

      {allVotes.length > 0 && (
        <div className="all-votes">
          <h2>Все голосования</h2>
          <ul>
            {allVotes.map((vote) => (
              <li key={vote.id}>
                {vote.question} - {vote.options.length} вариантов
              </li>
            ))}
          </ul>
        </div>
      )}

      <div >
        <h2>Ваш кошелек</h2>
        <p>{wallet}</p>
      </div>
    </div>
    </div>
  );
};

export default VotingPage;
