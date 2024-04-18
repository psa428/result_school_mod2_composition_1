import '../App.css';

export function FieldLayout({arr, onClickCl})  {
    console.log(`В компоненте FieldLayout`);
    return (
        <table>
            {
                arr.map((row, i) => (
                    <tr className='table-row' key={i} id_row={i}>
                        {
                            row.map((ceil, j) => (
                                <td className='table-ceil' key={j} id_col={j} 
                                     onClick={() => onClickCl(i, j)}
                                    >{ceil}</td>
                                  
                            ))
                        }
                    </tr>
                ))
            }

        </table>
        
             
        
    );
}