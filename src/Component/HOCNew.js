

function NewHoc(props){
    console.log(props)
    return(
        <>
         <h3 style={{backgroundColor:"red"}}>{<props.value/>}</h3>
         <h3 style={{backgroundColor:"blue"}}>{<props.value/>}</h3>
        
        </>
    )
}
export default NewHoc;