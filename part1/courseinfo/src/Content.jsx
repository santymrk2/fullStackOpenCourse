export default function Content(prop) {
  return(
    prop.parts.map((part, i) => (
      <p key={i}>{part.name} {part.exercises}</p>
    ))
  )
}