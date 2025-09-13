namespace SpriteKind {
    export const Rubble = SpriteKind.create()
    export const Pink_Enemy = SpriteKind.create()
    export const Truck = SpriteKind.create()
    export const Red_Enemy1 = SpriteKind.create()
    export const Noclip = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    timer.debounce("action", 100, function () {
        Hallway += 1
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Platformer == 1) {
        mySprite.vy += 250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Red_Enemy1, function (sprite, otherSprite) {
    blockSettings.writeNumber("Die", 4)
    game.gameOver(false)
})
function Seventh_Death () {
    mySprite = Render.getRenderSpriteVariable()
    tiles.setCurrentTilemap(tilemap`level8`)
    Render.setViewMode(ViewMode.raycastingView)
    for (let index = 0; index < 21; index++) {
        Rubbles = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . 2 2 2 . . . . . . . . 
            . . . . . f 8 f . . . . . . . . 
            . . . . . 8 8 8 . . . . . . . . 
            . . . . . 8 f 8 . . . . . . . . 
            . . . . 8 8 8 8 8 . . . . . . . 
            5 4 5 4 5 4 5 4 5 . . . f . . . 
            4 5 4 5 e e e e 4 5 . f f f . . 
            5 f f f . . e e e 4 . . f . . . 
            f 1 f 1 f e e e e e . . f . . . 
            f f b f f e e e e e 3 2 2 3 . . 
            f 1 f 1 f e e e e 3 3 2 3 3 2 . 
            . f f f . . e e 3 2 2 2 3 2 5 2 
            `, SpriteKind.Rubble)
        tiles.placeOnRandomTile(Rubbles, assets.tile`Rubble_spawn`)
    }
    for (let index = 0; index < 4; index++) {
        Noclip = sprites.create(img`
            d b b d b b d b b d b b d b b d 
            d d d d d d d d d d d d d d d d 
            d b b d b b d b b d b b d b b d 
            d b b d b b d b b d b b d b b d 
            d b b d b b d b b d b b d b b d 
            d d d d d d d d d d d d d d d d 
            d b b d b b d b b d b b d b b d 
            d b b d b b d b b d b b d b b d 
            d b b d b b d b b d b b d b b d 
            d d d d d d d d d d d d d d d d 
            d b b d b b d b b d b b d b b d 
            d b b d b b d b b d b b d b b d 
            d b b d b b d b b d b b d b b d 
            d d d d d d d d d d d d d d d d 
            d b b d b b d b b d b b d b b d 
            d b b d b b d b b d b b d b b d 
            `, SpriteKind.Noclip)
        tiles.placeOnRandomTile(Noclip, assets.tile`Noclip_spawn`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (blockSettings.readNumber("Die") == 4) {
        blockSettings.writeNumber("Die", 5)
    } else {
        blockSettings.writeNumber("Die", 1)
    }
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles6, function (sprite, location) {
    blockSettings.writeNumber("Die", 3)
    game.gameOver(false)
})
function Fourth_death () {
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f 1 d d 1 f f . . . . 
        . . . . f d d f f d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    story.startCutscene(function () {
        story.printCharacterText("What is 1+1? hahah!", "quiz master")
        story.showPlayerChoices("2", "3", "11", "3 people", "3-1")
        if (story.checkLastAnswer("2")) {
            story.printCharacterText("uh, what's 67+2?", "quiz master")
            story.showPlayerChoices("67", "69", "420", "69420", "672")
            if (story.checkLastAnswer("69")) {
                story.printCharacterText("... wha- what's the uh square root of... 15129?", "quiz master")
                story.showPlayerChoices("123", "321", "same as 879-789", "what's a square root?", "you mean carrot?")
                if (story.checkLastAnswer("123")) {
                    story.printCharacterText("WHAT IS &/(_&/?", "quiz master")
                    story.showPlayerChoices("&=(", "&)%", "???", "&!!")
                    if (story.checkLastAnswer("&!!")) {
                        story.printCharacterText("...", "quiz master")
                        mySprite4 = sprites.create(img`
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                            f 2 2 f f f 2 2 2 2 f f f 2 2 f 
                            2 f 2 f f f 2 2 2 2 f f f 2 f 2 
                            2 f 2 2 2 2 2 2 2 2 2 2 2 2 f 2 
                            2 f 2 2 2 2 2 2 2 2 2 2 2 2 f 2 
                            2 2 f 2 2 2 2 2 2 2 2 2 2 f 2 2 
                            2 2 2 f 2 2 2 2 2 2 2 2 f 2 2 2 
                            2 2 2 2 f 2 2 2 2 2 2 f 2 2 2 2 
                            2 2 2 2 2 f f f f f f 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            `, SpriteKind.Red_Enemy1)
                        mySprite4.setPosition(1000, 1000)
                        mySprite4.follow(mySprite)
                        controller.moveSprite(mySprite)
                    } else if (story.checkLastAnswer("&)%")) {
                        mySprite3 = sprites.create(img`
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                            f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                            2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                            2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                            3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                            3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                            3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                            3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                            3 3 3 3 3 f f f f f f 3 3 3 3 3 
                            3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                            `, SpriteKind.Pink_Enemy)
                        mySprite3.follow(mySprite)
                        mySprite3.setPosition(1000, 1000)
                        story.printCharacterText("He is coming...", "quiz master")
                        controller.moveSprite(mySprite)
                    } else if (story.checkLastAnswer("???")) {
                        mySprite3 = sprites.create(img`
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                            f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                            2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                            2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                            3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                            3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                            3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                            3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                            3 3 3 3 3 f f f f f f 3 3 3 3 3 
                            3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                            `, SpriteKind.Pink_Enemy)
                        mySprite3.follow(mySprite)
                        mySprite3.setPosition(1000, 1000)
                        story.printCharacterText("He is coming...", "quiz master")
                        controller.moveSprite(mySprite)
                    } else if (story.checkLastAnswer("&%¤")) {
                        mySprite3 = sprites.create(img`
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                            f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                            2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                            2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                            3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                            3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                            3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                            3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                            3 3 3 3 3 f f f f f f 3 3 3 3 3 
                            3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                            `, SpriteKind.Pink_Enemy)
                        mySprite3.follow(mySprite)
                        mySprite3.setPosition(1000, 1000)
                        story.printCharacterText("He is coming...", "quiz master")
                        controller.moveSprite(mySprite)
                    } else if (story.checkLastAnswer("&=(")) {
                        mySprite3 = sprites.create(img`
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                            f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                            f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                            2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                            2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                            3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                            3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                            3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                            3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                            3 3 3 3 3 f f f f f f 3 3 3 3 3 
                            3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                            `, SpriteKind.Pink_Enemy)
                        mySprite3.follow(mySprite)
                        mySprite3.setPosition(1000, 1000)
                        story.printCharacterText("He is coming...", "quiz master")
                        controller.moveSprite(mySprite)
                    }
                } else if (story.checkLastAnswer("same as 879-789")) {
                    mySprite3 = sprites.create(img`
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                        f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                        2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                        2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                        3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                        3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                        3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                        3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                        3 3 3 3 3 f f f f f f 3 3 3 3 3 
                        3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                        `, SpriteKind.Pink_Enemy)
                    mySprite3.follow(mySprite)
                    mySprite3.setPosition(1000, 1000)
                    story.printCharacterText("He is coming...", "quiz master")
                    controller.moveSprite(mySprite)
                } else if (story.checkLastAnswer("what's a square root?")) {
                    mySprite3 = sprites.create(img`
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                        f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                        2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                        2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                        3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                        3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                        3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                        3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                        3 3 3 3 3 f f f f f f 3 3 3 3 3 
                        3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                        `, SpriteKind.Pink_Enemy)
                    mySprite3.follow(mySprite)
                    mySprite3.setPosition(1000, 1000)
                    story.printCharacterText("He is coming...", "quiz master")
                    controller.moveSprite(mySprite)
                } else if (story.checkLastAnswer("you mean carrot?")) {
                    mySprite3 = sprites.create(img`
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                        f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                        2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                        2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                        3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                        3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                        3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                        3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                        3 3 3 3 3 f f f f f f 3 3 3 3 3 
                        3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                        `, SpriteKind.Pink_Enemy)
                    mySprite3.follow(mySprite)
                    mySprite3.setPosition(1000, 1000)
                    story.printCharacterText("He is coming...", "quiz master")
                    controller.moveSprite(mySprite)
                } else if (story.checkLastAnswer("321")) {
                    mySprite3 = sprites.create(img`
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                        f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                        f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                        2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                        2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                        3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                        3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                        3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                        3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                        3 3 3 3 3 f f f f f f 3 3 3 3 3 
                        3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                        `, SpriteKind.Pink_Enemy)
                    mySprite3.follow(mySprite)
                    mySprite3.setPosition(1000, 1000)
                    story.printCharacterText("He is coming...", "quiz master")
                    controller.moveSprite(mySprite)
                }
            } else if (story.checkLastAnswer("67")) {
                mySprite3 = sprites.create(img`
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                    f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                    2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                    2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                    3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                    3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                    3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                    3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                    3 3 3 3 3 f f f f f f 3 3 3 3 3 
                    3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                    `, SpriteKind.Pink_Enemy)
                mySprite3.follow(mySprite)
                mySprite3.setPosition(1000, 1000)
                story.printCharacterText("He is coming...", "quiz master")
                controller.moveSprite(mySprite)
            } else if (story.checkLastAnswer("420")) {
                mySprite3 = sprites.create(img`
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                    f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                    2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                    2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                    3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                    3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                    3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                    3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                    3 3 3 3 3 f f f f f f 3 3 3 3 3 
                    3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                    `, SpriteKind.Pink_Enemy)
                mySprite3.follow(mySprite)
                mySprite3.setPosition(1000, 1000)
                story.printCharacterText("He is coming...", "quiz master")
                controller.moveSprite(mySprite)
            } else if (story.checkLastAnswer("69420")) {
                mySprite3 = sprites.create(img`
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                    f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                    2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                    2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                    3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                    3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                    3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                    3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                    3 3 3 3 3 f f f f f f 3 3 3 3 3 
                    3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                    `, SpriteKind.Pink_Enemy)
                mySprite3.follow(mySprite)
                mySprite3.setPosition(1000, 1000)
                story.printCharacterText("He is coming...", "quiz master")
                controller.moveSprite(mySprite)
            } else if (story.checkLastAnswer("672")) {
                mySprite3 = sprites.create(img`
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                    f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                    f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                    2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                    2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                    3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                    3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                    3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                    3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                    3 3 3 3 3 f f f f f f 3 3 3 3 3 
                    3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                    `, SpriteKind.Pink_Enemy)
                mySprite3.follow(mySprite)
                mySprite3.setPosition(1000, 1000)
                story.printCharacterText("He is coming...", "quiz master")
                controller.moveSprite(mySprite)
            }
        } else if (story.checkLastAnswer("3")) {
            mySprite3 = sprites.create(img`
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                3 3 3 3 3 f f f f f f 3 3 3 3 3 
                3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                `, SpriteKind.Pink_Enemy)
            mySprite3.follow(mySprite)
            mySprite3.setPosition(1000, 1000)
            story.printCharacterText("He is coming...", "quiz master")
            controller.moveSprite(mySprite)
        } else if (story.checkLastAnswer("11")) {
            mySprite3 = sprites.create(img`
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                3 3 3 3 3 f f f f f f 3 3 3 3 3 
                3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                `, SpriteKind.Pink_Enemy)
            mySprite3.follow(mySprite)
            mySprite3.setPosition(1000, 1000)
            story.printCharacterText("He is coming...", "quiz master")
            controller.moveSprite(mySprite)
        } else if (story.checkLastAnswer("3 people")) {
            mySprite3 = sprites.create(img`
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                3 3 3 3 3 f f f f f f 3 3 3 3 3 
                3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                `, SpriteKind.Pink_Enemy)
            mySprite3.follow(mySprite)
            mySprite3.setPosition(1000, 1000)
            story.printCharacterText("He is coming...", "quiz master")
            controller.moveSprite(mySprite)
        } else if (story.checkLastAnswer("3-1")) {
            mySprite3 = sprites.create(img`
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                f 3 3 f f f 3 3 3 3 f f f 3 2 f 
                f 3 3 f 1 f 3 3 3 3 f 1 f 3 3 f 
                2 f 3 f f f 3 3 3 3 f f f 3 f 2 
                2 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                3 f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 
                3 3 f 2 3 3 3 3 3 3 3 3 3 f 2 3 
                3 3 3 f 2 3 3 3 3 3 3 3 f 3 3 3 
                3 3 3 3 f 3 3 3 2 2 2 f 3 3 3 3 
                3 3 3 3 3 f f f f f f 3 3 3 3 3 
                3 3 3 3 3 2 2 3 3 3 3 3 3 3 3 3 
                `, SpriteKind.Pink_Enemy)
            mySprite3.follow(mySprite)
            mySprite3.setPosition(1000, 1000)
            story.printCharacterText("He is coming...", "quiz master")
            controller.moveSprite(mySprite)
        }
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Painting_wall0`, function (sprite, location) {
    blockSettings.writeNumber("Die", 6)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Noclip0`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Rubble)
    sprites.destroyAllSpritesOfKind(SpriteKind.Noclip)
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(mySprite, assets.tile`Backrooms_spawn_player`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Painting_wall1`, function (sprite, location) {
    game.setGameOverMessage(false, "Evade the pink ones")
    info.changeLifeBy(-1)
    blockSettings.writeNumber("Health", info.life())
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pink_Enemy, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "evade the pink ones")
    info.changeLifeBy(-1)
    blockSettings.writeNumber("Health", info.life())
    game.gameOver(false)
})
function SecondDeath () {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f 1 d d 1 f f . . . . 
        . . . . f d d f f d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    mySprite.setPosition(26, 25)
    scene.cameraFollowSprite(mySprite)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . . c c c c c c c . 
        . c c c c c c c c c c c c c c . 
        . c b b b b b b c c c c c c c . 
        . c b b b b b b c 1 1 1 1 c c . 
        . c b b b b b b c 1 1 1 1 c c . 
        . c c c c c c c c c c c c c 5 . 
        . c f f f c c c c f f f c c c . 
        . . f 1 f . . . . f 1 f . . . . 
        . . f f f . . . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Truck)
    mySprite2.setPosition(400, 340)
    mySprite2.follow(mySprite, 70)
    music.play(music.createSong(hex`0078000408110206001c00010a006400f401640000040000000000000000000000000000000002af0104000800012008000c0001200c001000012410001400012014001800012220002400012424002800011e2a002c0001203000320001223400380001244400480001204c005000012454005800012260006200012464006600011e69006a0001207000720001277400780001248400880001248c0090000125940098000127a000a4000127a400a8000122ac00b0000124b400b8000125b800bc000127c400c8000127ca00cc000129ce00d0000129d400d6000127d800da000125dc00e0000124ec00ee000124f000f40001220001040101200401080101200c011001012410011401012014011801012220012401012426012801011e2a012c01012034013601012238014001012448014c01012050015401012458015c01012268016c0101246c017001012074017801012078017c0101227c018001012780018801012494019801012298019c0101229c01a0010124a001a4010125a401a8010129ac01b0010129b001b4010124b801bc010125c001c4010127c801cc01012ad401d801012adc01e001012ce001e401012ce801ec010129ec01f0010127f401f8010125040208020c191b1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001800040005000102140015000102200021000102340035000102`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundColor(7)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (blockSettings.readNumber("Die") == 4) {
        blockSettings.writeNumber("Die", 5)
    } else {
        blockSettings.writeNumber("Die", 1)
    }
    game.gameOver(false)
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Platformer == 1 && (mySprite.isHittingTile(CollisionDirection.Bottom) || (mySprite.tileKindAt(TileDirection.Left, sprites.dungeon.floorLight1) || mySprite.tileKindAt(TileDirection.Right, sprites.dungeon.floorLight1)))) {
        mySprite.vy = -85
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Truck, function (sprite, otherSprite) {
    blockSettings.writeNumber("Die", 2)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Rubble, SpriteKind.Rubble, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`Rubble_spawn`)
})
function First_Death () {
    tiles.setCurrentTilemap(tilemap`level1`)
    mySprite = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f 1 d d 1 f f . . . . 
        . . . . f d d f f d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(26, 25)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
sprites.onOverlap(SpriteKind.Noclip, SpriteKind.Noclip, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`Noclip_spawn`)
})
function Third_Death () {
    tiles.setCurrentTilemap(tilemap`level3`)
    mySprite = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f 1 d d 1 f f . . . . 
        . . . . f d d f f d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(26, 25)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
function Sixth_Death () {
    Hallway_active = 1
    mySprite = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f 1 d d 1 f f . . . . 
        . . . . f d d f f d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`level7`)
    scene.cameraFollowSprite(mySprite)
}
function Fifth_Death () {
    Ground = 1
    Platformer = 1
    mySprite = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . f f 1 d d 1 f f . . . . 
        . . . . f d d f f d d f . . . . 
        . . . . f d d d d d d f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . f f . f 5 5 5 5 5 5 f . f f . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level5`)
    controller.moveSprite(mySprite, 50, 0)
    scene.cameraFollowSprite(mySprite)
    mySprite.setPosition(32, 792)
}
let Ground = 0
let Hallway_active = 0
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let Noclip: Sprite = null
let Rubbles: Sprite = null
let Platformer = 0
let Hallway = 0
let mySprite: Sprite = null
if (blockSettings.readNumber("Health") > 0) {
    info.setLife(blockSettings.readNumber("Health"))
} else {
    info.setLife(10)
    blockSettings.writeNumber("Health", 10)
}
game.setGameOverMessage(false, "You died")
game.setGameOverMessage(true, "Somehow you didn't die... neat!")
game.showLongText("Die", DialogLayout.Bottom)
if (0 < blockSettings.readNumber("Die")) {
    if (blockSettings.readNumber("Die") == 1) {
        SecondDeath()
    } else if (blockSettings.readNumber("Die") == 2) {
        Third_Death()
    } else if (blockSettings.readNumber("Die") == 3) {
        Fourth_death()
    } else if (blockSettings.readNumber("Die") == 4) {
        Fifth_Death()
    } else if (blockSettings.readNumber("Die") == 5) {
        Sixth_Death()
    } else if (blockSettings.readNumber("Die") == 6) {
        Seventh_Death()
    } else {
        blockSettings.writeNumber("Die", blockSettings.readNumber("Die") - 1)
    }
} else {
    First_Death()
}
forever(function () {
    if (Platformer == 1) {
        mySprite.vy += 2.1
    }
})
forever(function () {
    if (Hallway_active == 1) {
        if (Hallway == 3) {
            tiles.setTileAt(tiles.getTileLocation(120, 0), assets.tile`Painting_wall0`)
            tiles.setWallAt(tiles.getTileLocation(120, 0), false)
        } else if (Hallway == 2) {
            tiles.setTileAt(tiles.getTileLocation(6, 0), assets.tile`Painting_wall7`)
        } else if (Hallway == 1) {
            tiles.setTileAt(tiles.getTileLocation(60, 0), assets.tile`Painting_wall7`)
        }
    }
})
forever(function () {
    if (mySprite.vx > 0 || mySprite.vy > 0 || (mySprite.vx < 0 || mySprite.vx < 0)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . f f f f . 
            f f f f 5 5 5 5 5 5 f d d f d f 
            . . . f 5 5 5 5 5 5 f d d 1 d f 
            . . . f 5 5 5 5 5 5 f d f d d f 
            . . . f 5 5 5 5 5 5 f d f d d f 
            . . . f 5 5 5 5 5 5 f d d 1 d f 
            f f f f 5 5 5 5 5 5 f d d f d f 
            . . . . f f f f f f . f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f . . . . f . . . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . f f . f 5 5 5 5 5 5 f . f f . 
            . f f . f 5 5 5 5 5 5 f . f f . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f d d d d d d f . . . . 
            . . . . f d d f f d d f . . . . 
            . . . . f f 1 d d 1 f f . . . . 
            . . . . f d d d d d d f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f . f f f f f f . . . . 
            f d f d d f 5 5 5 5 5 5 f f f f 
            f d 1 d d f 5 5 5 5 5 5 f . . . 
            f d d f d f 5 5 5 5 5 5 f . . . 
            f d d f d f 5 5 5 5 5 5 f . . . 
            f d 1 d d f 5 5 5 5 5 5 f . . . 
            f d f d d f 5 5 5 5 5 5 f f f f 
            . f f f f . f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f d d d d d d f . . . . 
            . . . . f f 1 d d 1 f f . . . . 
            . . . . f d d f f d d f . . . . 
            . . . . f d d d d d d f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . f f . f 5 5 5 5 5 5 f . f f . 
            . f f . f 5 5 5 5 5 5 f . f f . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . f . . . . f . . . . . 
            `],
        200,
        false
        )
        pause(780)
    }
})
