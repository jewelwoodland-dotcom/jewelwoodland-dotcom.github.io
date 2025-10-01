$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 600, 500, 25, "purple");
    createPlatform(450, 500, 300, 25, "blue");
    createPlatform(400, 300, 255, 25, "red");
    createPlatform(750, 400, 300, 25, "black");
    createPlatform(200, 200, 300, 25, "orange");
    createPlatform(600, 150, 300, 25, "yellow");
    // TODO 3 - Create Collectables
    createCollectable("database", 800, 100, 0.25, 1);
    createCollectable("database", 900, 350, 0.25, 1);
    createCollectable("database", 200, 150, 0.25, 0.85);

    
    // TODO 4 - Create Cannons
    createCannon("bottom", 700, 1250);
    createCannon("left", 600, 1650);
    createCannon("left", 150, 1550);
    createCannon("top", 500, 1800);
    createCannon("top", 900, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
