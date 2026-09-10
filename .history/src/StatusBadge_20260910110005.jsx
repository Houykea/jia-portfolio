const StatusBadge = ({isOpenToWork}) => {
  const statusText = isOpenToWork ? "Open to Work" : "Busy learning"
  const statusColor = isOpenToWork ? "green" : "gray"
  return (
    <span className={statusColor}>
      {stau}
    </span>
  )
}
export default StatusBagde;