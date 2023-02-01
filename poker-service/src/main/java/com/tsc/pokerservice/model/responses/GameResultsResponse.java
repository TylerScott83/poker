package com.tsc.pokerservice.model.responses;

public class GameResultsResponse {
  private String winner;
  private int playerPCHighestHand;
  private int playerNPCHighestHand;
  private boolean isDrawGame;

  public GameResultsResponse() {
    this.winner = "No winner.";
    this.playerPCHighestHand = 0;
    this.playerNPCHighestHand = 0;
    this.isDrawGame = false;
  }

  public String getWinner() { return this.winner; }
  public void setWinner(String winner) { this.winner = winner; }

  public int getPlayerPCHighestHand() { return this.playerPCHighestHand; }
  public void setPlayerPCHighestHand(int playerpchighest) { this.playerPCHighestHand = playerpchighest; }
  
  public int getPlayerNPCHighestHand() { return this.playerNPCHighestHand; }
  public void setPlayerNPCHighestHand(int playernpchighest) { this.playerNPCHighestHand = playernpchighest; }

  public boolean getIsDrawGame() { return this.isDrawGame; }
  public void setIsDrawGame(boolean isdraw) { this.isDrawGame = isdraw; }
}