import Spinner from 'react-bootstrap/Spinner';

import "./Spinner.css"

const SpinnerRendering = () => {
    return(
        <div className='separador'>
                    <Spinner className='spinner' animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
        </div>
    )
}
export default SpinnerRendering