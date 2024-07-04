export default function Total(prop) {
  const total = prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises
  return( 
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}