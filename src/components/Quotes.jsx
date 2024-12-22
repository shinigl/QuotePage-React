import styles from './Quotes.module.css'



const Quotes = ({quotes}) => {
  return (
    <div className={styles.quoteContainer}>
      {quotes.map((quote, index) => {
        return (
          <div key={index} className={styles.quoteItem}>
            <blockquote className={styles.quoteText}>"{quote.quote}"</blockquote>
            <p className={styles.author}>- {quote.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Quotes;
