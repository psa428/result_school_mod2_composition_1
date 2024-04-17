import '../App.css';

export function FieldLayout(props)  {
    console.log(`В компоненте FieldLayout`);
    return (
        <table>
            {
                props.arr.map((row, i) => (
                    <tr className='table-row' key={i} id={i} onClick={event => {                                        
                        console.log(`row id= ${event.target.id}`)        
                 }}>
                        {
                            row.map((ceil, j) => (
                                <td className='table-ceil' key={j} id={j} 
                                     onClick={event => {
                                        
                                            console.log(`ceil = ${j}`)
                                            console.log(`row = ${i}`)
                                            // for (let key in event.target) 
                                            //     console.log(`key = ${key}`);

                                            
                                     }}
                                    >{ceil}</td>
                                  
                            ))
                        }
                    </tr>
                ))
            }

        </table>
        
             
        
    );
}