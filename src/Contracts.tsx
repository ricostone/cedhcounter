export enum STEP {
  HOME,
  SELECT_LIFE,
  SELECT_TIMER,
  SELECT_PLAYERS_NUMBER,
  SELECT_PLAYERS_NAME,
  SELECT_BOARD,
  SELECT_PLAYERS_ORDER,
  BOARD
}

export enum DIRECTION {
  BACK,
  FORTH
}

export enum LIFE_TOTAL {
  "l20" = 20,
  "l30" = 30,
  "l40" = 40
}

export enum TIMER {
  "none" = "No timer",
  "t20" = 20,
  "t30" = 30,
  "t40" = 40,
  "t50" = 50,
  "t60" = 60
}

export enum PLAYERS {
  "p2" = 2,
  "p3" = 3,
  "p4" = 4,
  "p5" = 5,
  "p6" = 6
}

export enum BOARD_TYPE {
  Side,
  Edge
}

export interface IPlayer {
  name: string;
  color: string;
  life: number;
  poison: number;
  timer?: number;
  commander: Array<number>;
  alive: boolean;
}

export interface ISetupStep {
  toStep: (step: STEP, direction: DIRECTION) => void;
}
