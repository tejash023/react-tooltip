import styles from "../css/tooltip.module.css";

function Tooltip() {
  const handleHover = () => {
    console.log("Hello");
  };
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipText} onMouseEnter={handleHover}>
        Hover over me!
      </p>
    </div>
  );
}

export default Tooltip;
