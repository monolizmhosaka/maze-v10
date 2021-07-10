// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level_0":
            case "level_0":return tiles.createTilemap(hex`100010000102020c0c1201020c0202120c0202030a0e0b0b0b18090b0b0b0b0b0b0b0e11090b0b0b0b0b090b0b0b0b0e0b0b0b0d090b0b010c0c150e0b1407070f0b0b0d0a0b0b090b0b0b0b0b0d0e0b090b0b04090e0b0a0b0b0e0b0b0d190b0a0b0b04100b0b0a0b0b090e0b0d0b0e090e0b110a0b0b080f0e090b0b0d0e0b100b0b0d090b0e0b0806090b0b0d0b0b0a0b0b040a0b0b0b0e0b090e0b0d0b0b090e0b0d0a0b0b0b0b0b090b0b0d0b0b090b0b04090b0b0c0c0c150b0e0b0b0e090b0b04100b0b0b0b0b0e0b0b0b0b0b090b0b110a0b0b0b0b0b090b0b0b0b0b0a0b1704090e0b0b0b0e090b0b0e0b0b090e0b0408070713070608060713060608060705`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . 2 2 2 2 . . 2 2 2 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 . 2 . . 2 . . 2 . . 2 
2 . . . 2 2 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 2 2 . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorDark5,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
