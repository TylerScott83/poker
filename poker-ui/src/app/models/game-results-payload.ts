import { CardSimple } from "./card-simple.model";

export class GameResultsPayload {
  sessionId: string | null = null;
  pcCards: CardSimple[] | null = null;
  npcCards: CardSimple[] | null = null;
}