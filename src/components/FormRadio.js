function FormRadio( props ){

	return(

		<label className={`radio ${props.fields.class}`}>
			<input type="radio" name={props.fields.name} value={props.fields.value} />
			 &nbsp; &nbsp; &nbsp; <span className="label">{props.fields.labelName}</span>
		</label>

	);

}
export default FormRadio;