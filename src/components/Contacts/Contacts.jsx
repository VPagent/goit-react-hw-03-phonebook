import {nanoid }from 'nanoid'
import PropTypes from 'prop-types'
import s from 'components/Contacts/Contacts.module.css'

function Contacts ({options, onChangeInput, onHandle}){

    return(
        <>
        <label className={s.contactForm}>
            Find contacts by name
            <input className={s.contactInput} type="text" name="filter" onChange={onChangeInput} />
        </label>
        <ul className={s.contactList}>
            {options.map(({id, userName, tel}) => (
                <li key={id} className={s.contactItem} onClick={onHandle}>
                    name:{userName} tel:{tel}
                    <button key={nanoid(2)} type="button" name={userName} >Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Contacts

Contacts.propTypes = {
    options: PropTypes.array.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    onHandle: PropTypes.func.isRequired
}