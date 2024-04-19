import { FieldLayout } from "./fieldLayout";
import PropTypes from 'prop-types';


export function Field({field, onClickCeil }) {
    
    return (
        <div className="table-box">
            
                <FieldLayout arr={field} onClickCl={onClickCeil}/>
            
        </div>
    );
}

Field.propTypes = {
    field:  PropTypes.array,
    onClickCeil:    PropTypes.func
}
