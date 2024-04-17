import { FieldLayout } from "./fieldLayout";


export function Field(props) {
    
    console.log(`В компоненте Field`);
    return (
        <div className="table-box">
            
                <FieldLayout arr={props.field}/>
            
        </div>
    );
}