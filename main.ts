let obj = SpriteKind.create
tiles.setCurrentTilemap(tilemap`World`)

let tree = sprites.create(assets.image`treee`, SpriteKind.Player)

let mySprite = sprites.create(assets.image`Forage ma n`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)

// controller.A.onEvent(ControllerButtonEvent.Pressed, kill() {})

// function kill(): void
// {
//     sprites.destroy(tree)
// }
function generateIslandAssets(): void
{
    for (let i = 0; i < randint(3, 17); i++) {
        let randCol: number = randint(17, 30);
        let randRow: number = randint(1, 14);

        let touchGrass: boolean = tiles.tileAtLocationEquals(tiles.getTileLocation(randCol, randRow), assets.tile`islandTile4`);

        if (touchGrass == true) {
            let randChance: number = randint(0, 10);
tiles.placeOnTile(null, tiles.getTileLocation(0, 0))
            switch (randChance) {
                case 5 :
                    tiles.placeOnTile(tree, tiles.getTileLocation(randCol, randRow));
                    break;
                case 5:
                    tiles.placeOnTile(tree, tiles.getTileLocation(randCol, randRow))
                    break;
                default:
                    tiles.placeOnTile(tree, tiles.getTileLocation(randCol, randRow))
                    break;
            }
        }
    }
}


