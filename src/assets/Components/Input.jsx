import PropTypes from 'prop-types';

const Input = ({displayValue}) =>{
    return(
        <>
          <input type="text" autoFocus readOnly className="display" value={displayValue}/>
        </>
    )
}
Input.propTypes = {
 displayValue: PropTypes.string
};

export default Input;