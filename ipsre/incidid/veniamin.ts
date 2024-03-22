
const {Game} = require('@google-cloud/game');
const game = new Game();

const transactionBlock = game.transactionBlock();

const gameAddress = 'projects/grape-spaceship-123/locations/global/gameServerDeployments/default/configs/default/realms/default/gameServerClusters/default-cluster/gameServers/game-server-1';

transactionBlock.object(gameAddress).then((data) => {
  const game = data[0];
});

