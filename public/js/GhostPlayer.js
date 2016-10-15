GhostPlayer = function(game,ghostData,idRoom) {
    // On dis que game est acessible dans l'objet
    this.game = game;
	var fakePlayer = {};

	var positionSpawn = new BABYLON.Vector3(ghostData.position.x,
	    ghostData.position.y,
	    ghostData.position.z);

	var rotationSpawn = new BABYLON.Vector3(ghostData.rotation.x,
	    ghostData.rotation.y,
	    ghostData.rotation.z);

	fakePlayer.playerBox = BABYLON.Mesh.CreateBox(ghostData.id, 5, this.game.scene);
	fakePlayer.playerBox.scaling = new BABYLON.Vector3(0.5,1.2,0.5)
	fakePlayer.playerBox.position = positionSpawn;
	fakePlayer.playerBox.isPlayer = true;
	fakePlayer.playerBox.isPickable = true;

	fakePlayer.playerBox.material = new BABYLON.StandardMaterial("textureGhost", this.game.scene);
	fakePlayer.playerBox.material.alpha = 0;

	fakePlayer.playerBox.checkCollisions = true;
	fakePlayer.playerBox.applyGravity = true;
	fakePlayer.playerBox.ellipsoid = new BABYLON.Vector3(1.5, 1, 1.5);

	fakePlayer.head = BABYLON.Mesh.CreateBox('headGhost', 2.2, this.game.scene);
	fakePlayer.head.parent = fakePlayer.playerBox;
	fakePlayer.head.scaling = new BABYLON.Vector3(2,0.8,2)
	fakePlayer.head.position.y+=1.6;
	fakePlayer.head.isPickable = false;

	fakePlayer.bodyChar = BABYLON.Mesh.CreateBox('bodyGhost', 2.2, this.game.scene);
	fakePlayer.bodyChar.parent = fakePlayer.playerBox;
	fakePlayer.bodyChar.scaling = new BABYLON.Vector3(2,0.8,2)
	fakePlayer.bodyChar.position.y-=0.6;
	fakePlayer.bodyChar.isPickable = false;

	// Les datas de vie et d'armure du joueur
	fakePlayer.health = ghostData.life;
	fakePlayer.armor  = ghostData.armor;

	// Une variable en prévision de la fonction de saut
	fakePlayer.jumpNeed = false;

	// La place du joueur dans le tableau des joueurs, géré par le serveur
	fakePlayer.idRoom = idRoom;

	// L'axe de mouvement. C'est lui qui recevra les informations de touche préssés envoyé par le jeu
	fakePlayer.axisMovement = ghostData.axisMovement;

	// Le nom réel du joueur
	fakePlayer.namePlayer = ghostData.name;

	// A nouveau l'id du joueur
	fakePlayer.uniqueId = ghostData.uniqueId;

	// La rotation. Comme pour le joueur, elle sert a déterminer le sens de déplacement
	fakePlayer.rotation = rotationSpawn;

	// Les materials qui définissent la couleur du joueur
	fakePlayer.head.material = new BABYLON.StandardMaterial("textureGhost", this.game.scene);
	fakePlayer.head.material.diffuseColor = new BABYLON.Color3(0, 1, 1);

	fakePlayer.bodyChar.material = new BABYLON.StandardMaterial("textureGhost", this.game.scene);
	fakePlayer.bodyChar.material.diffuseColor = new BABYLON.Color3(0, 0.6, 0.6);

	return fakePlayer;
}
deleteGameGhost = function(game,deletedIndex){
    ghostPlayers = game._PlayerData.ghostPlayers;
    for (var i = 0; i < ghostPlayers.length; i++) {
        if(ghostPlayers[i].idRoom === deletedIndex){
            ghostPlayers[i].playerBox.dispose();
            ghostPlayers[i].head.dispose();
            ghostPlayers[i].bodyChar.dispose();
            ghostPlayers[i] = false;

            ghostPlayers.splice(i,1);
            break;
        }
        
    }
}