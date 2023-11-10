function Ornaments(props){
    return (
        <img src="images/ornament.png" className={props.location + " w-25 ornaments " + props.position}/>
    );
}

export default Ornaments;