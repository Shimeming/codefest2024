const FunctionButton = ({
  onClick,
  children
}: {
  onClick: () => void
  children: JSX.Element
}) => {
  return (
    <button
      className="rounded-full bg-primary-500 p-1.5 text-xl text-white hover:bg-primary-600 text-center"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default FunctionButton;