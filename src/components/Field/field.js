import { FieldLayout } from "./fieldLayout";


export function Field({field, onClickCeil }) {
    
    return (
        <div className="table-box">
            
                <FieldLayout arr={field} onClickCl={onClickCeil}/>
            
        </div>
    );
}