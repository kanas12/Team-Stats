const team = {
    _players: [
      {
        firstName: 'Daniel',
        lastName: 'Kofi',
        age: 25
      },
      {
        firstName: 'Atoo',
        lastName: 'Aidoo',
        age: 20
      },
      {
        firstName: 'Prah',
        lastName: 'Sarah',
        age: 26
      }
    ],
    _games: [
      {
        opponent: 'Frimpong',
        teamPoints: 30,
        opponentPoints: 55
      },
      {
        opponent: 'Anastasia',
        teamPoints: 22,
        opponentPoints: 50
      },
      {
        opponent: 'William',
        teamPoints: 45,
        opponentPoints: 30
      }
    ],
  
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      }
      this.players.push(player);
    },
  
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this._games.push(game);
    },
  };
  
  team.addPlayer('Ronaldo', 'Bruno', 30);
  team.addPlayer('Pogba', 'Marcus', 25);
  team.addPlayer('Mason', 'Anthony', 21);
  
  console.log(team.players);
  
  team.addGame('Fifa21', 25, 40);
  team.addGame('NBA 2K21', 20, 30);
  team.addGame('Rebel Racing', 20, 35);
  
  console.log();
  console.log(team.games);