import style from "./styles/BallDivider.module.css"

const BallDivider = () => {
  return (
    <div className={style.column}>
      <div className={style.columnBottom} />
      <div className={style.columnTop} />
    </div>
  )
}

export default BallDivider
