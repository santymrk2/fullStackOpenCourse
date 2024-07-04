import Part from "./Part";

export default function Content(prop) {
  return(
    <div>
      <Part name={prop.parts[0].name} exercise={prop.parts[0].exercises}/>
      <Part name={prop.parts[1].name} exercise={prop.parts[1].exercises}/>
      <Part name={prop.parts[2].name} exercise={prop.parts[2].exercises}/>
    </div>
  )
}