const Card = (props) => {
  const children = props.children;

  return (
    <div className="bg-white">
      {children}
    </div>
  )
}