const StatusBadge = ({isOpenToWork}) => {
  const statusText = isOpenToWork ? "Open to Work" : "Busy learning"
  const statusColor = isOpenToWork ? "green" : "gray"
  return (
    <span className={statu}>

    </span>
  )
}
export default StatusBagde;