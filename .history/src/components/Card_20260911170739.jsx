const Card = (props) => {
  const children = props.children;

  return (
    <div className="bg-white p-6 rounded-lg shadow broder border-gray-200">
      {children}
    </div>
  )
}

export default 