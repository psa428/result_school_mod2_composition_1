import { InformationLayout } from "./informationLayout";
import PropTypes from 'prop-types';
export function Information({player, gameState, draw}) {
    // console.log(`В компоненте Information`);
    // console.log(`player = ${player} gameState = ${gameState} draw = ${draw}`);
    
    let message;
    if (draw)
            message = 'Ничья';
    else if (gameState) 
        message = 'Победа ' + player;   
        
    else
        message = "Играет " + player;

        // console.log(`message = ${message}`);

    return (
        <div className="information" >
            <InformationLayout msg={message} />

        </div>
    )
};

Information.propTypes = {
    player:     PropTypes.string,
    gameState:  PropTypes.bool,
    draw:       PropTypes.bool
}