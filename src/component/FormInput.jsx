
function FormInput({type, name, placeholder}) {
  return (
    <div className="form-group">
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default FormInput