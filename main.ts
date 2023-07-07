tiles.setCurrentTilemap(tilemap`World`)



function generateIslandAssets(): void
{
    for (let i = 0; i < 10; i++) {
        let randCol: number = randint(17, 30);
        let randRow: number = randint(17, 30);

        let touchGrass: boolean = tiles.tileAtLocationEquals(tiles.getTileLocation(randCol, randRow), img`grass`);

        if (touchGrass == true) {
            let randChance: number = randint(0, 10);

            switch (randChance) {
                case 5 :
                    tiles.placeOnTile(assets.image`tree`, tiles.getTileLocation(randCol, randRow))
                    break;
                case 5:
                    tiles.placeOnTile(assets.image`tree`, tiles.getTileLocation(randCol, randRow))
                    break;
                default:
                    tiles.placeOnTile(assets.image`tree`, tiles.getTileLocation(randCol, randRow))
                    break;
            }
        }
    }
}


