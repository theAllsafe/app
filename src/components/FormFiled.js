function FormFiled( props ){

	return(
		<>
			<label className="fieldContailer">
				<span>{props.fields.labelName?props.fields.labelName:null}</span>
				<input type={props.fields.type} name={props.fields.name} value={props.fields.value} placeholder={props.fields.placeholder} />
			</label>
		</>

	);

}
export default FormFiled;