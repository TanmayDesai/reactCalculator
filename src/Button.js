
function Button(props){
    return(
        <button className={props.class} onClick={()=> props.handleClick(props.value)}>{props.value}</button>
    )
}

export default Button;