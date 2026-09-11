function SectionHeading(props) {
  const title = props.title;

  return (
    
      <h2 className="text-gray-900 text-xl font-semibold mb-4 p-4">
        {title}
      </h2>
    </>
  )
}

export default SectionHeading