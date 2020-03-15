import React, { useCallback } from "react";
import PlayerReorderCard from "./PlayerReorderCard";
import update from "immutability-helper";
import { ISetupStep, IPlayer } from "../Contracts";

const style = {
  width: 400
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

interface Props extends ISetupStep {
  players: Array<IPlayer>;
  setPlayers: (players: Array<IPlayer>) => void;
}

const PlayerReorder: React.FC<Props> = ({ players, setPlayers }: Props) => {
    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = players[dragIndex];
        setPlayers(
          update(players, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard]
            ]
          })
        );
      },
      [players, setPlayers]
    );

    const renderCard = (card: IPlayer, index: number) => {
      return (
        <PlayerReorderCard
          key={index}
          index={index}
          id={card.name}
          text={card.name}
          moveCard={moveCard}
        />
      );
    };

    return (
      <>
        <div style={style}>
          {players.map((player, i) => renderCard(player, i))}
        </div>
      </>
    );
};

export default PlayerReorder;
