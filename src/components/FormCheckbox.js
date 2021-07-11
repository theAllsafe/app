function FormCheckbox( props ){

	return(

		<label className={`checkbox ${props.fields.class}`}>
			<input type="checkbox" name={props.fields.name} value={props.fields.value} />
			 &nbsp; &nbsp; &nbsp; <span className="label">{props.fields.labelName}</span>
		</label>

	);

}
export default FormCheckbox;