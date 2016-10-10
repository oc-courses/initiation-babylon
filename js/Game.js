// Page entièrement chargé, on lance le jeu
document.addEventListener("DOMContentLoaded", function () {
    new Game('renderCanvas');
}, false);

Game = function(canvasId) {
    // Canvas et engine défini ici
    var canvas = document.getElementById(canvasId);
    var engine = new BABYLON.Engine(canvas, true);
    this.engine = engine;
    var _this = this;
    _this.actualTime = Date.now();
    // On initie la scène avec une fonction associé à l'objet Game
    this.scene = this._initScene(engine);
    
    var _player = new Player(_this, canvas);

    var _arena = new Arena(_this);

    // Permet au jeu de tourner
    engine.runRenderLoop(function () {

        // Récuperet le ratio par les fps
        _this.fps = Math.round(1000/engine.getDeltaTime());

        // Checker le mouvement du joueur en lui envoyant le ratio de déplacement
        _player._checkMove((_this.fps)/60);

        _this.scene.render();
        
        // Si launchBullets est a true, on tire
        if(_player.camera.weapons.launchBullets === true){
            _player.camera.weapons.launchFire();
        }
    });

    // Ajuste la vue 3D si la fenetre est agrandi ou diminué
    window.addEventListener("resize", function () {
        if (engine) {
            engine.resize();
        }
    },false);

};


Game.prototype = {
    // Prototype d'initialisation de la scène
    _initScene : function(engine) {
        var scene = new BABYLON.Scene(engine);
        scene.clearColor=new BABYLON.Color3(0.9,0.9,0.9);
        scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
        scene.collisionsEnabled = true;
        return scene;
    }
};

// ------------------------- TRANSFO DE DEGRES/RADIANS 
function degToRad(deg)
{
   return (Math.PI*deg)/180
}
// ----------------------------------------------------

// -------------------------- TRANSFO DE DEGRES/RADIANS 
function radToDeg(rad)
{
   // return (Math.PI*deg)/180
   return (rad*180)/Math.PI
}
// ----------------------------------------------------