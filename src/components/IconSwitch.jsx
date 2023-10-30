// только иконка

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div>
      <button onClick={ () => { onSwitch(icon) } }>
        <span className="material-icons"> { icon } </span>
      </button>
    </div>
  )
}