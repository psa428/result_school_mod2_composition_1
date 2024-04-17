import '../App.css';
export function Tr(props)  {
    console.log(`В компоненте Tr`);
    return (
        
        <tr className="table-row" id="1" key={0}>
        {
            props.arr[1].map((str, i) => (
                <td className="table-ceil" key={i}>ceil {str} </td>
            ))
        }    
        </tr>    
       
    ) ; 
};          