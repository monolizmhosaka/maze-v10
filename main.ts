namespace SpriteKind {
    export const darkness = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.stopCountdown()
    StopBgm = 1
    controller.moveSprite(mySprite, 0, 0)
    tiles.replaceAllTiles(sprites.dungeon.chestClosed, sprites.dungeon.chestOpen)
    effects.confetti.startScreenEffect()
    mySprite.say("きょうとう　せんせいの　パンツの中を　しらべろ", 20000)
    timer.after(20000, function () {
        game.reset()
    })
    pause(100)
    music.magicWand.play()
})
/**
 * これ以下は没プログラム
 */
// 処理落ちしてリアルタイムは無理だったから没。
function initDarkness () {
    picture = image.create(30, 30)
    picture.fill(15)
    picture.fillRect(mySprite.x - scene.cameraProperty(CameraProperty.X) + 55, mySprite.y - scene.cameraProperty(CameraProperty.Y) + 35, 50, 50, 0)
    mySprite2 = sprites.create(picture, SpriteKind.darkness)
    mySprite2.setStayInScreen(true)
}
function InitTileMap () {
    tiles.setTilemap(tilemap`level_0`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    scene.cameraFollowSprite(mySprite)
}
function InitCharcter () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 50, 50)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    200,
    true
    )
}
let mySprite2: Sprite = null
let picture: Image = null
let mySprite: Sprite = null
let StopBgm = 0
StopBgm = 0
InitCharcter()
InitTileMap()
game.splash("青小サタデー", "ゲームをクリアしろ！")
music.baDing.play()
game.showLongText("30びょう で\\nたからばこ を\\nみつけだせ！\\n", DialogLayout.Center)
info.startCountdown(30)
forever(function () {
    for (let カウンター = 0; カウンター <= 10; カウンター++) {
        music.playMelody("E D G F B A C5 B ", 80 + 50 * カウンター)
        if (StopBgm == 1) {
            music.stopAllSounds()
            break;
        }
    }
})
