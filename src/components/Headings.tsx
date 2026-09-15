interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className="text-gray-700 text-xl font-semibold mb-4 p-4">
      {title}
    </h2>
  )
}

export default SectionHeading