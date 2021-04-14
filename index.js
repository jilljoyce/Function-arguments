function paintingWall() {
    console.log("The wall has been paint red");
}

paintingWall();

function paintingWallColor(color) {
    console.log("The wall has been paint", color);
}

paintingWallColor("blue");
paintingWallColor("green");

function paintingColorAndWall(wall, color) {
    console.log("The", wall,"wall has been painted", color);
}

paintingColorAndWall("north", "orange");
paintingColorAndWall("south-east", "grey");

paintingColorAndWall(color = "purple", wall = "west");