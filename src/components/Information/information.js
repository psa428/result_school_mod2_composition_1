import { InformationLayout } from "./informationLayout";
export function Information(props) {
    console.log(`props = ${props.player}`);
    let message;
    if (props.gameState) {
        message = 'Игра окончена.';
        if (props.draw)
            message += '  Ничья';
    }    
    else
        message = "Играет " + props.player;

    return (
        <div className="information" >
            <InformationLayout msg={message} />

        </div>
    )
}