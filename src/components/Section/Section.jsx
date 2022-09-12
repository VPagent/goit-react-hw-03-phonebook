import s from 'components/Section/Section.module.css'
import PropTypes from 'prop-types'
function Section ({title, children}){
    return(
        <section className={s.section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}