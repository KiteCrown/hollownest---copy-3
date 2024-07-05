namespace SpriteKind {
    export const chose = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -240
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (face == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . b b 1 1 1 1 1 . . 
            . . . . . . . . . b b 1 1 1 1 1 
            . . . . . . . . . . . b b b 1 1 
            . . . . . . . . . . b b b 1 1 1 
            . . . . . . . . . b 1 1 1 1 1 . 
            . . . . . . . b b 1 1 1 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . b b 1 1 1 1 1 
            . . . . . . . . . . . b b b 1 1 
            . . . . . . . . . . b b b 1 1 1 
            . . . . . . . . . b 1 1 1 1 1 . 
            . . . . . . . b b 1 1 1 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . b b b 1 1 
            . . . . . . . . . . b b b 1 1 1 
            . . . . . . . . . b 1 1 1 1 1 . 
            . . . . . . . b b 1 1 1 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b b b 1 1 1 
            . . . . . . . . . b 1 1 1 1 1 . 
            . . . . . . . b b 1 1 1 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b 1 1 1 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -50, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . 1 1 1 1 1 . . . . . . 
            . . 1 1 1 1 1 b b . . . . . . . 
            1 1 1 1 1 b b . . . . . . . . . 
            1 1 b b b . . . . . . . . . . . 
            1 1 1 b b b . . . . . . . . . . 
            . 1 1 1 1 1 b . . . . . . . . . 
            . . . . 1 1 1 b b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
            1 1 1 1 1 b b . . . . . . . . . 
            1 1 b b b . . . . . . . . . . . 
            1 1 1 b b b . . . . . . . . . . 
            . 1 1 1 1 1 b . . . . . . . . . 
            . . . . 1 1 1 b b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 1 b b b . . . . . . . . . . . 
            1 1 1 b b b . . . . . . . . . . 
            . 1 1 1 1 1 b . . . . . . . . . 
            . . . . 1 1 1 b b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 1 b b b . . . . . . . . . . 
            . 1 1 1 1 1 b . . . . . . . . . 
            . . . . 1 1 1 b b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 b b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    face = 0
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . 
        . . 7 7 . . 2 . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . 1 b 1 b . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        `,img`
        . . . . . . . . 
        . . 7 7 7 7 2 . 
        . . 7 7 7 7 7 . 
        . 7 b b b b . . 
        . . 1 b 1 b . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        . . e . . . . . 
        `,img`
        . . 7 7 . . 2 . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . 1 b 1 b . . 
        . . 7 7 7 7 . . 
        . . . e e . . . 
        . . . e . . . . 
        `,img`
        . . 7 7 . . 2 . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . 1 b 1 b . . 
        . . 7 7 7 7 . . 
        . . . e e . . . 
        . . . . e . . . 
        `,img`
        . . 7 7 . . 2 . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . 1 b 1 b . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        . . . . . e . . 
        `,img`
        . . . . . . . . 
        . . 7 7 . 2 . . 
        . 7 7 7 7 7 . . 
        . . 7 7 7 7 7 . 
        . . b b b b . . 
        . . 1 b 1 b . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        `],
    50,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . . . 
        . 2 . . 7 7 . . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . b 1 b 1 . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . . . 
        . . 7 7 . . 2 . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . 1 b 1 b . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    face = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . 
        . 2 . . 7 7 . . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . b 1 b 1 . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        `,img`
        . . . . . . . . 
        . 2 7 7 7 7 . . 
        . 7 7 7 7 7 . . 
        . . b b b b 7 . 
        . . b 1 b 1 . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        . . . . . e . . 
        `,img`
        . 2 . . 7 7 . . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . b 1 b 1 . . 
        . . 7 7 7 7 . . 
        . . . e e . . . 
        . . . . e . . . 
        `,img`
        . 2 . . 7 7 . . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . b 1 b 1 . . 
        . . 7 7 7 7 . . 
        . . . e e . . . 
        . . . e . . . . 
        `,img`
        . 2 . . 7 7 . . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . . b b b b . . 
        . . b 1 b 1 . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        . . e . . . . . 
        `,img`
        . . . . . . . . 
        . . 2 . 7 7 . . 
        . . 7 7 7 7 7 . 
        . 7 7 7 7 7 . . 
        . . b b b b . . 
        . . b 1 b 1 . . 
        . . 7 7 7 7 . . 
        . . e . . e . . 
        `],
    50,
    true
    )
})
let projectile: Sprite = null
let face = 0
let mySprite: Sprite = null
tiles.loadMap(tiles.createSmallMap(tilemap`level6`))
scene.setBackgroundImage(img`
    ff99fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff99fffffffffff
    ffff69ffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffffff96fffffffffffff
    ffffff99fffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffff99fffffffffffffff
    ffffffff99ffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffff99fffffffffffffffff
    fffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffff
    ffffffffffff99ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff99fffffffffffffffffffff
    fffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ffffffffffffffffffffffff
    ffffffffffffffffff99fffffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffffffff99ffffffffffffffffffffffffff9
    ffffffffffffffffffff69ffffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffff9ffffffffffffffffff9ffffffffffffffffffffffff96ffffffffffffffffffffffff99fff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    66ffffffffffffffffffffff69ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff96ffffffffffffffffffffff66fffffffff
    ffff66fffffffffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96fffffffffffffffffffff66fffffffffffff
    ffffffff66ffffffffffffffffffff99fffffffffffffffffff9ffffffffffffff9fffffffffffffffff9ffffffffffffff9fffffffffffffffffff99ffffffffffffffffffff66fffffffffffffffff
    ffffffffff66fffffffffffffffffff99fffffffffffffffffffffffffffffffff9fffffffffffffffff9fffffffffffffffffffffffffffffffff99fffffffffffffffffff66ffffffffffffffffff6
    ffffffffffffff66ffffffffffffffffff99fffffffffffffffff9fffffffffffff9fffffffffffffff9fffffffffffff9fffffffffffffffff99ffffffffffffffffff66fffffffffffffffff666fff
    66ffffffffffffffff66ffffffffffffffff66ffffffffffffffff6fffffffffffffffffffffffffffffffffffffffff6ffffffffffffffff66ffffffffffffffff66ffffffffffffffff668ffffffff
    ff666fffffffffffffff66ffffffffffffffff66fffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffff66ffffffffffffffff66fffffffffffffff666fffffffffff
    fffffff866ffffffffffffff66ffffffffffffff86ffffffffffffff6fffffffffff6fffffffffffff6fffffffffff6ffffffffffffff68ffffffffffffff66ffffffffffffff668ffffffffff8888ff
    8888ffffffff8666ffffffffffff66fffffffffffff86fffffffffffffffffffffff6fffffffffffff6fffffffffffffffffffffff68fffffffffffff66ffffffffffff6668ffffffff8888fffffffff
    ffffff8888ffffffff666fffffffffff88ffffffffffff66fffffffffff6fffffffff6fffffffffff6fffffffff6fffffffffff66ffffffffffff88fffffffffff666ffffffff8888fffffffffff8888
    ffffffffff8888ffffff8888ffffffffff88fffffffffff86ffffffffffffffffffff6fffffffffff6ffffffffffffffffffff68fffffffffff88ffffffffff8888ffffff8888fffffffffff888888ff
    8888888888888888888888888888888888888888888888888866666666666666666666666666666666666666666666666666688888888888888888888888888888888888888888888888888888888888
    8ffffffff8888888fffffff8888ffff888ffffffff88ffffffff88ffffffff6fffffff6fffffffff6fffffff6ffffffff88ffffffff88ffffffff888ffff8888fffffff8888888ffffffff88888fffff
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ff88888fff888888fffffff888888ffff8888ff888ffffff88ffffff88ffffff8ffffff8fffffff8ffffff8ffffff88ffffff88ffffff888ff8888ffff888888fffffff888888fff88888ffff8888fff
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ff88888fff888888fffffff888888ffff8888ff888ffffff88ffffff88ffffff8ffffff8fffffff8ffffff8ffffff88ffffff88ffffff888ff8888ffff888888fffffff888888fff88888ffff8888fff
    888888ffffffff888888ffffff8888ffff888fffffff88ffffffff88fffffff6ffffff6fffffffff6ffffff6fffffff88ffffffff88fffffff888ffff8888ffffff888888ffffffff888888fffffffff
    8ffffffff8888888fffffff8888ffff888ffffffff88ffffffff88ffffffff6fffffff6fffffffff6fffffff6ffffffff88ffffffff88ffffffff888ffff8888fffffff8888888ffffffff88888fffff
    8888888888888888888888888888888888888888888888888866666666666666666666666666666666666666666666666666688888888888888888888888888888888888888888888888888888888888
    ffffffffff8888ffffff8888ffffffffff88fffffffffff86ffffffffffffffffffff6fffffffffff6ffffffffffffffffffff68fffffffffff88ffffffffff8888ffffff8888fffffffffff888888ff
    fff8888ffffffff866ffffffffffff66ffffffffffff86ffffffffffff6ffffffffff6fffffffffff6ffffffffff6ffffffffffff68ffffffffffff66ffffffffffff668ffffffff8888ffffffffffff
    8888ffffffff8666ffffffffffff66fffffffffffff86fffffffffffffffffffffff6fffffffffffff6fffffffffffffffffffffff68fffffffffffff66ffffffffffff6668ffffffff8888fffffffff
    fffffff866ffffffffffffff66ffffffffffffff86ffffffffffffff6fffffffffff6fffffffffffff6fffffffffff6ffffffffffffff68ffffffffffffff66ffffffffffffff668ffffffffff8888ff
    ff666fffffffffffffff66ffffffffffffffff66fffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffff66ffffffffffffffff66fffffffffffffff666fffffffffff
    ffffffffffffffff66fffffffffffffffff99ffffffffffffffffffffffffffffff9fffffffffffffff9ffffffffffffffffffffffffffffff99fffffffffffffffff66ffffffffffffffff6668fffff
    ffffffffffffff66ffffffffffffffffff99fffffffffffffffff9fffffffffffff9fffffffffffffff9fffffffffffff9fffffffffffffffff99ffffffffffffffffff66fffffffffffffffff666fff
    ffffffffff66fffffffffffffffffff99fffffffffffffffffffffffffffffffff9fffffffffffffffff9fffffffffffffffffffffffffffffffff99fffffffffffffffffff66ffffffffffffffffff6
    ffffff66ffffffffffffffffffff99ffffffffffffffffffff9fffffffffffffff9fffffffffffffffff9fffffffffffffff9ffffffffffffffffffff99ffffffffffffffffffff66fffffffffffffff
    ffff66fffffffffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96fffffffffffffffffffff66fffffffffffff
    66ffffffffffffffffffffff69ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff96ffffffffffffffffffffff66fffffffff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    fffffffffffffffffff69fffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff96fffffffffffffffffffffffff99f
    ffffffffffffffffff99fffffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffffffff99ffffffffffffffffffffffffff9
    fffffffffffffff69fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ffffffffffffffffffffffff
    ffffffffffff99ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff99fffffffffffffffffffff
    ffffffffff99fffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffff99fffffffffffffffffff
    ffffffff99ffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffff99fffffffffffffffff
    ffffff99fffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffff99fffffffffffffff
    fff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffff
    ff99fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff99fffffffffff
    9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffff
    ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff99fffff
    fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff99fff
    ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff96f
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff9fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
profilelife.setMaxLife(10)
info.changeLifeBy(7)
mySprite = sprites.create(img`
    . . . . . . . . 
    . 2 . . 7 7 . . 
    . . 7 7 7 7 . . 
    . 7 7 7 7 7 7 . 
    . . b b b b . . 
    . . b 1 b 1 . . 
    . . 7 7 7 7 . . 
    . . e . . e . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
effects.blizzard.startScreenEffect()
music.play(music.createSong(hex`003c000a64070107001c00020a006400f401640000040000000000000000000000000000000003e40d000006000205110c001200011119001f00011d26002c0001113200380001113e004400011b4b005100011158005e00011164006a0001197000760001117d00830001118a009000011796009c000111a200a8000111af00b5000118bc00c2000119c800ce00020511d400da000111e100e700011dee00f4000111fa000001011106010c01011b1301190101112001260101112c013201011938013e01011145014b01011152017101021711900196010205119c01a2010111a901af01011db601bc010111c201c8010111ce01d401011bdb01e1010111e801ee010111f401fa0101190002060201110d02130201111a022002011726022c0201113202380201113f02450201184c025202011958025e0202051164026a02011171027702011d7e02840201118a029002011196029c02011ba302a9020111b002b6020111bc02c2020119c802ce020111d502db020111e2020103021711200326030211052c033203011139033f03011d46034c0301115203580301115e036403011b6b037103011178037e03011184038a0301199003960301119d03a3030111aa03b0030117b603bc030111c203c8030111cf03d5030118dc03e2030119e803ee03021105f403fa03011101040704011d0e04140401111a042004011126042c04011b3304390401114004460401114c045204011958045e04011165046b04011172049104021711b004b604021105bc04c2040111c904cf04011dd604dc040111e204e8040111ee04f404011bfb040105011108050e05011114051a0501192005260501112d05330501113a054005011746054c0501115205580501115f05650501186c057205011978057e0502110584058a05011191059705011d9e05a4050111aa05b0050111b605bc05011bc305c9050111d005d6050111dc05df05012be205e5050129e905ec050128ef05f205012bf505f805012dfc05ff05012c02060506012b08060b0601280e061106012b15061806012c1b061e06012d21062406013028062b06012d2e063106012c34063706012b3a063d060128410647060205114d0653060205115a06600602111d66066c06020511730679060205117f068506020f1b8c06920602051198069e06020511a506ab06020d19b106b706020511be06c406020511ca06d006020b17d706dd06020511e306e906020511f006f606020c18fc060207020d1909070f0702051115071b070205112207280702111d2e0734070205113b07410702051147074d07020f1b54075a07020511600766070205116d077307020d1979077f0702051186078c0702051192079807040b1705119f07b807020b11ab07b1070111b807be070111c407ca070111d107d707020511dd07e307020511ea07f00702111df607fc07020511030809080205110f081508020f1b1c08220802051128082e0802051135083b08020d19410847080205114e0854080205115a086008020b1767086d080205117308790802051180088608020c188c089208020d1999089f08020511a508ab08020511b208b80802111dbe08c408020511cb08d108020511d708dd08020f1be408ea08020511f008f608020511fd080009013003090609012c09090c09012910091309012c1609190901301c091f09012c2209250901302f093209013035093809012c3c093f09013042094509012c48094b09013062096809020a166e097409020a167a09860902162287098d09020a1694099a09020a16a009ac09021420ac09b209020a16b909bf09020a16c609d20902121ed209d809020a16de09e409020a16eb09f70902101cf809fe09020a16040a0a0a020a16100a1c0a02111d1d0a290a02121e2a0a300a020a16360a3c0a020a16420a4e0a0216224f0a550a020a165c0a620a020a16680a740a021420740a7a0a020a16810a870a020a168e0a9a0a02121e9a0aa00a020a16a60aac0a020a16b30aee0a04101c0a16c00ac60a0116cc0ad20a0116d80ade0a0116e50aeb0a0116f20af80a020a16fe0a040b020a160a0b160b021622170b1d0b020a16240b2a0b020a16300b3c0b0214203c0b420b020a16490b4f0b020a16560b620b02121e620b680b020a166e0b740b020a167b0b870b02101c880b8e0b020a16940b9a0b020a16a00bac0b02111dad0bb90b02121eba0bc00b020a16c60bcc0b020a16d20bde0b021622df0be50b020a16ec0bf20b020a16f80b040c021420040c0a0c020a16110c170c020a161e0c240c0129240c2a0c01272a0c300c0125300c360c0129370c3d0c012e3d0c430c0131430c490c012e4a0c500c0129500c560c012e560c5c0c01295c0c620c0125630c690c0129690c6f0c01256f0c750c0129760c7c0c01257c0c820c0122820c880c0205118f0c950c0205119b0ca70c0311181da80cae0c020511b40cba0c020511c10ccd0c030f161bcd0cd30c020511da0ce00c020511e60cf20c030d1419f30cf90c020511ff0c050d0205110c0d180d030b1117180d1e0d020511250d2b0d020511310d3d0d030c13183e0d4a0d030d14194a0d500d020511570d5d0d020511630d6f0d0311181d700d760d0205117c0d820d020511890d950d030f161b950d9b0d020511a20da80d020511ae0dba0d030d1419bb0dc10d020511c70dcd0d020511d40d0f0e040b170511e00de60d0111ed0df30d0111f90dff0d0111060e0c0e0111120e180e0205111f0e250e0205112b0e370e0311181d380e3e0e020511440e4a0e020511510e5d0e030f161b5d0e630e0205116a0e700e020511760e820e030d1419830e890e0205118f0e950e0205119c0ea80e030b1117a80eae0e020511b50ebb0e020511c10ecd0e030c1318ce0eda0e030d1419da0ee00e020511e70eed0e020511f30eff0e0311181d000f060f0205110c0f120f020511190f250f030f161b250f2b0f020511320f380f0205113e0f4a0f030d14194b0f510f020511570f5d0f020511640f9f0f040b170511700f760f01117d0f830f0111890f8f0f0111960f9c0f0111a20fa80f020e1aaf0fb50f020e1abb0fc70f031a2126c80fce0f020e1ad40fda0f020e1ae10fed0f03181f24ed0ff30f020e1afa0f0010020e1a0610121003161d2213101910020e1a1f102510020e1a2c10381003141a2038103e10020e1a45104b10020e1a51105d1003151c215e106a1003161d226a107010020c1877107d10020c1883108f1003181f2490109610020c189c10a210020c18a910b51003161d22b510bb10020c18c210c810020c18ce10da1003141b20db10e110020c18e710ed10020b17f4102f110512181e0a160011061101160d111311011619111f11011626112c110116321138110205113f1145110205114b1157110311181d58115e1102051164116a1102051171117d11030f161b7d1183110205118a1190110205119611a211030d1419a311a911020511af11b511020511bc11c811030b1117c811ce11020511d511db11020511e111ed11030c1318ee11fa11030d1419fa11001202051107120d1202051113121f120311181d201226120205112c12321202051139124512030f161b45124b12020511521258120205115e126412012965126b12012c6b127112012471127712012078127e1201297e128412012484128a12012c8a129012012991129712012c97129d1201299d12a3120124a412aa120120aa12b0120129b012b612012cb612bc120130c312c912020511d012d6120111dc12e212011de912ef120111f512fb12011102130813011b0e13141301111b132113011127132d13011934133a1301114013461301114d135313011759135f13011166136c1301117213781301187f13851301198b13911302051198139e130111a413aa13011db113b7130111bd13c3130111ca13d013011bd613dc130111e313e9130111ef13f5130119fc130214011108140e14011115143414021711531459140205116014661401116c147214011d79147f14011185148b14011192149814011b9e14a4140111ab14b1140111b714bd140119c414ca140111d014d6140111dd14e3140117e914ef140111f614fc1401110215081501180f15151501191b15211502051128152e15011134153a15011d4115471501114d15531501115a156015011b66156c1501117315791501117f158515012b85158b1501288c159215012492159815012298159e15012e9f15a515012ba515ab150128ab15b1150125b215b8150130b815be15012ebe15c415012bc415ca150128d115d7150132d715dd150130de15e415012ee415f015020511f015fc150111fd1503160320272c0916151601111616221602051122162816051f252b05112f163b1601113b164716011148164e16051c2228051154166016011161166d1601116d167316041b2327117a1686160205118616921602051193169916041b2327119f16a516041d242911ac16b816020511b816c4160111c516cb160320272cd116dd160111de16ea16020511ea16f016051f252b0511f7160317011103170f17011110171617051d242905111c172817011129173517011135175417041a20261142174e170205114e175a170205115b17671701116717731701117417801702051180178c1701118d1793170320272c9917a5170111a617b217020511b217b817051f252b0511bf17cb170111cb17d7170111d817de17051c22280511e417f0170111f117fd170111fd170318041b2327110a1816180205111618221802051123182918041b2327112f183518041d2429113c18481802051148185418011155185b180320272c61186d1801116e187a180205117a188018051f252b051187189318011193189f180111a618ac180130ac18b218012cb318b9180129b918bf180130c618cc180130cc18d218012cd218d8180129d918df18012cdf18e5180130e518eb18012cf218f8180130f818fe18012cfe1804190129`), music.PlaybackMode.LoopingInBackground)
