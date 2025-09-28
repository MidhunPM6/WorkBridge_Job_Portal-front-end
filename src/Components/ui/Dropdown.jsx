import SelectDrop from 'react-select'


const Dropdown = ({ name, options, value, handleChange, placeholder }) => {
  return (
    <>
      <SelectDrop
        name={name}
        options={options}
        value={value}
        onChange={handleChange}
        isClearable
        placeholder={placeholder}
      />
    </>
  )
}

export default Dropdown
