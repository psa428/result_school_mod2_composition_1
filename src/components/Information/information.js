import { InformationLayout } from "./informationLayout";
export function Information({player, gameState, draw}) {
    console.log(`В компоненте Information`);
    console.log(`player = ${player} gameState = ${gameState} draw = ${draw}`);
    
    let message;
    if (gameState) {
        message = 'Победа ' + player;
        if (draw)
            message += '  Ничья';
    }    
    else
        message = "Играет " + player;

        console.log(`message = ${message}`);

    return (
        <div className="information" >
            <InformationLayout msg={message} />

        </div>
    )
}