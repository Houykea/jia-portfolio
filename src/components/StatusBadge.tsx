interface StatusBadgeProps {
  isOpenToWork: boolean;
}

const StatusBadge = ({ isOpenToWork }: StatusBadgeProps) => {
  const statusText = isOpenToWork ? "Open to Work" : "Busy learning"
  const statusColor = isOpenToWork ? "green" : "gray"
  return (
    <span className={statusColor}>
      {statusText}
    </span>
  )
}
export default StatusBadge;