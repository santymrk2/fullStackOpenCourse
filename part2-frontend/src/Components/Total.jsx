export default function Total(prop) {
  return( 
    <>
      <p>Number of exercises {prop.parts.reduce((sum, part)=>sum + part.exercises, 0)}</p>
    </>
  )
}