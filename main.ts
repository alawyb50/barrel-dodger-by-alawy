controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000202020202020202020402020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020101010101010101010101010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.tile0,sprites.builtin.forestTiles0,myTiles.tile1,sprites.castle.tileDarkGrass3,myTiles.tile2,myTiles.tile3], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 8 f . . . . 
    . . f f e e e e f 8 8 8 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 8 8 8 8 e f . . 
    . . f 8 8 8 8 f f f f e 8 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 8 8 f . . . . 
    . . . f f f e e f 8 8 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . b b b b b . . . 
        . . . . . . b b d d d d b b . . 
        . . . . . b d d d d d d d c . . 
        . . . . c d d d d d d d d c . . 
        . . . c b d d d d d d d b c c . 
        . . . c b b d d d d b c c c c . 
        . . c c d b b b c c c c c c c . 
        . . c c c d d d d c c d d d c c 
        . c d b c c b b c c d d d d d c 
        . c b d d b b b c c d d d d d c 
        . c c b b b b c b c b d d d b c 
        c b b c c c c c b b b b b c c c 
        c c b b c c c c c d d d d d b c 
        c c c c c c b b b b b c c c c c 
        c c c c c c c b b b b b c c c c 
        c c c c c c c c b b b b b c c c 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
