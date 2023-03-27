import styles from './OptionColor.module.scss';


const OptionColor = props =>{
    return(
        <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((color) => (
            <li key={color}>
              <button
                type="button"
                onClick={() => setCurrentColor(color)}
                className={clsx(
                  prepareColorClassName(color),
                  color === currentColor && styles.active
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    )
}