const FormInput = (props) => {

    const {
        name,
        type,
        value,
        onchange,
        onselect,
        isnotreadable,
        options,
        valuename
    } = props;

    return (

        <div>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onchange}
                disabled={isnotreadable}
                readOnly={isnotreadable}
            />
            <select name={name} value={valuename}  onChange={onselect}>
                <option value=""/>
                    {options && Object.keys(options).map((item, id) => (
                        <option
                            key={item}
                            data-key={id}
                            value={item}>
                            {item}
                        </option>
                    ))}
            </select>
        </div>

    );
}

FormInput.defaultProps = {
    isnotreadable: false,
    onselect: null,
}

export default FormInput;