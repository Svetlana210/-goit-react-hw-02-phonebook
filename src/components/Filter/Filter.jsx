import styles from './filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <span className={styles.span}>Find contacts by name</span>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};
export default Filter;
