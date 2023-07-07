
tiles.setCurrentTilemap(tilemap`World`)

let mySprite = sprites.create(assets.image`Forage ma n`, SpriteKind.Player)

function generateIslandAssets(): void
{
    for (let i = 0; i < randint(3, 17); i++) {
        let randCol: number = randint(17, 30);
        let randRow: number = randint(1, 14);

//        let touchGrass: boolean = tiles.tileAtLocationEquals(tiles.getTileLocation(randCol, randRow), img`islandTile4`);

//         if (touchGrass == true) {
//             let randChance: number = randint(0, 10);
// tiles.placeOnTile(null, tiles.getTileLocation(0, 0))
//             switch (randChance) {
//                 case 5 :
//                     tiles.placeOnTile(assets.image`treee`, tiles.getTileLocation(randCol, randRow));
//                     break;
//                 case 5:
//                     tiles.placeOnTile(assets.image`tree`, tiles.getTileLocation(randCol, randRow))
//                     break;
//                 default:
//                     tiles.placeOnTile(assets.image`tree`, tiles.getTileLocation(randCol, randRow))
//                     break;
//             }
//         }
    }
}


