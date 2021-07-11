
function CustomButton( props ){

	return(
		<button type={props.btn.type} name={props.btn.name} className={props.btn.class}>{props.btn.btnText}</button>
	);

}
export default CustomButton;