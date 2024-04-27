import PropTypes from 'prop-types';


const ButtonsContainer = ({handleButton}) =>{

    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.',]

    const getButtonClass = (buttonText) => {
      if (buttonText === 'C') {
        return 'button clear'; // Apply a different style for the clear button
      } else if (buttonText === '=') {
        return 'button equals'; // Apply a different style for the equals button
      } else if (['+', '-', '*', '/'].includes(buttonText)) {
        return 'button operator'; // Apply a style for operator buttons
      } else {
        return 'button'; // Default style for numeric and decimal point buttons
      }
    };

    return(
        <>
       <div className="buttons-container">
          {buttonNames.map((currentItem, index)=>{
   
            return <button key={index} className={getButtonClass(currentItem)} onClick={()=>{
              return handleButton(currentItem);
            }}>{currentItem}</button>;

          })}
      </div>
        </>
    )

}
ButtonsContainer.propTypes = {
  handleButton: PropTypes.func.isRequired
};

export default ButtonsContainer;
