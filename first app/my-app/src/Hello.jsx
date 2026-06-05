//import './App.css'
function Hello(props) {

    const {name="Guest", age=18, city="Unknown"} = props
    return (
    <div>

    
    <h2>Hello, {props.name}</h2>
    <p>Age : {props.age}</p>
    <p>City : {props.city}</p>
     </div>
    )
}
export default Hello