const Card = (props) => {
  const children = props.children;

  return (
    <div className="bg-white p-6 ">
      {children}
    </div>
  )
}