import './PhoneInput.css'
const PhoneInput = ({label, placeholder}) => {
    return (
        <label class="phone-input">
            {label}
            <input type="text" placeholder={placeholder}/>
        </label>
    )
}

export default PhoneInput