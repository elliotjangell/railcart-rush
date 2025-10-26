function titleToNew () {
    if (blockSettings.exists("hasSaveData")) {
        message("Note: This will delete your existing save data. Press A (Space) to confirm or Reset Game (Backspace) to cancel.")
    }
    tiles.setCurrentTilemap(tilemap`world1`)
}
function mouseMove (x: number, y: number) {
    mouseOffset.setPosition(x, y)
    if (mouseOffset.overlapsWith(newButton)) {
        if (!(browserEvents.MouseLeft.isPressed())) {
            newButton.setImage(img`
                ccccccccccccccccccccccc.
                cdddddddddddddddddddddcf
                cdbbbbbbbbbbbbbbbbbbbbcf
                cdbbbbbbbbbbbbbbbbbbbbcf
                cdbbfbbfbbbbbbbbbbbbbbcf
                cdbbffbfcbbbbbbbbbbbbbcf
                cdbbfcffcbffbbfbfbfbbbcf
                cdbbfccfcfbcfbfcfcfcbbcf
                cdbbfcbfcfffbcfcfcfcbbcf
                cdbbfcbfcfcccbfcfcfcbbcf
                cdbbfcbfcbfffbbfbfbcbbcf
                cdbbbcbbcbbcccbbcbcbbbcf
                cdbbbbbbbbbbbbbbbbbbbbcf
                cdbbbbbbbbbbbbbbbbbbbbcf
                cccccccccccccccccccccccf
                .fffffffffffffffffffffff
                `)
        }
    } else {
        newButtonPressed = false
        newButton.setImage(img`
            bbbbbbbbbbbbbbbbbbbbbbb.
            b111111111111111111111bc
            b1ddddddddddddddddddddbc
            b1ddddddddddddddddddddbc
            b1ddcddcddddddddddddddbc
            b1ddccdcbdddddddddddddbc
            b1ddcbccbdccddcdcdcdddbc
            b1ddcbbcbcdbcdcbcbcbddbc
            b1ddcbdcbcccdbcbcbcbddbc
            b1ddcbdcbcbbbdcbcbcbddbc
            b1ddcbdcbdcccddcdcdbddbc
            b1dddbddbddbbbddbdbdddbc
            b1ddddddddddddddddddddbc
            b1ddddddddddddddddddddbc
            bbbbbbbbbbbbbbbbbbbbbbbc
            .ccccccccccccccccccccccc
            `)
    }
    if (mouseOffset.overlapsWith(loadButton)) {
        if (!(browserEvents.MouseLeft.isPressed())) {
            loadButton.setImage(img`
                ccccccccccccccccccccccccccccc.
                cdddddddddddddddddddddddddddcf
                cdbbbbbbbbbbbbbbbbbbbbbbbbbbcf
                cdbbbbbbbbbbbbbbbbbbbbbbbbbbcf
                cdbbfbbbbbbbbbbbbbbbbbbbfbbbcf
                cdbbfcbbbbbbbbbbbbbbbbbbfcbbcf
                cdbbfcbbbfffbbbffffbbffffcbbcf
                cdbbfcbbfbccfbfbccfcfbccfcbbcf
                cdbbfcbbfcbbfcfcbbfcfcbbfcbbcf
                cdbbfcbbfcbbfcfcbbfcfcbbfcbbcf
                cdbbfffbbfffbcbffffcbffffcbbcf
                cdbbbccbbbcccbbbccccbbccccbbcf
                cdbbbbbbbbbbbbbbbbbbbbbbbbbbcf
                cdbbbbbbbbbbbbbbbbbbbbbbbbbbcf
                cccccccccccccccccccccccccccccf
                .fffffffffffffffffffffffffffff
                `)
        }
    } else {
        LoadButtonPressed = false
        loadButton.setImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
            b111111111111111111111111111bc
            b1ddddddddddddddddddddddddddbc
            b1ddddddddddddddddddddddddddbc
            b1ddcdddddddddddddddddddcdddbc
            b1ddcbddddddddddddddddddcbddbc
            b1ddcbdddcccdddccccddccccbddbc
            b1ddcbddcdbbcdcdbbcbcdbbcbddbc
            b1ddcbddcbddcbcbddcbcbddcbddbc
            b1ddcbddcbddcbcbddcbcbddcbddbc
            b1ddcccddcccdbdccccbdccccbddbc
            b1dddbbdddbbbdddbbbbddbbbbddbc
            b1ddddddddddddddddddddddddddbc
            b1ddddddddddddddddddddddddddbc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
            .ccccccccccccccccccccccccccccc
            `)
    }
    if (mouseOffset.overlapsWith(settingsButton)) {
        if (!(browserEvents.MouseLeft.isPressed())) {
            settingsButton.setImage(img`
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . 1 1 b b b b b b 1 1 . . . 
                . . 1 b b b f b b f b b b 1 . . 
                . 1 b f f b f b b f b f f b 1 . 
                . 1 b f f f f f f f f f f b 1 . 
                1 b b b f f f f f f f f b b b 1 
                1 b f f f f f b b f f f f f b 1 
                1 b b b f f b b b b f f b b b 1 
                1 b b b f f b b b b f f b b b 1 
                1 b f f f f f b b f f f f f b 1 
                1 b b b f f f f f f f f b b b 1 
                . 1 b f f f f f f f f f f b 1 . 
                . 1 b f f b b f b f b f f b 1 . 
                . . 1 b b b b f b f b b b 1 . . 
                . . . 1 1 b b b b b b 1 1 . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                `)
        }
    } else {
        settingsButtonPressed = false
        settingsButton.setImage(img`
            . . . . . d d d d d d . . . . . 
            . . . d d b b b b b b d d . . . 
            . . d b b b f b b f b b b d . . 
            . d b f f b f b b f b f f b d . 
            . d b f f f f f f f f f f b b . 
            d b b b f f f f f f f f b b b d 
            d b f f f f f b b f f f f f b c 
            d b b b f f b b b b f f b b b c 
            d b b b f f b b b b f f b b b c 
            d b f f f f f b b f f f f f b c 
            d b b b f f f f f f f f b b b c 
            . d b f f f f f f f f f f b c . 
            . d b f f b b f b f b f f b c . 
            . . d b b b b f b f b b b c . . 
            . . . d b b b b b b b b c . . . 
            . . . . . d b b b b c . . . . . 
            `)
    }
    if (settingsOpen) {
        if (mouseOffset.overlapsWith(settingSoundFXToggle)) {
            if (!(browserEvents.MouseLeft.isPressed())) {
                if (!(settingSoundFXTogglePressed)) {
                    settingSoundFXTogglePressed = true
                    if (settingSoundFX) {
                        animation.runImageAnimation(
                        settingSoundFXToggle,
                        [img`
                            1 1 1 1 1 1 1 1 7 6 
                            1 f f f f f 7 7 6 6 
                            1 f f f f 7 6 6 . . 
                            1 7 7 f 7 6 f 1 . . 
                            1 6 7 7 6 f f 1 . . 
                            1 f 6 6 f f f 1 . . 
                            1 f f f f f f 1 . . 
                            1 1 1 1 1 1 1 1 . . 
                            `,img`
                            1 1 1 1 1 1 1 1 . . 
                            1 f f f f f f 1 7 6 
                            1 f f f f f 7 7 6 6 
                            1 f f f f 7 6 6 . . 
                            1 7 7 f 7 6 f 1 . . 
                            1 6 7 7 6 f f 1 . . 
                            1 f 6 6 f f f 1 . . 
                            1 1 1 1 1 1 1 1 . . 
                            `],
                        200,
                        true
                        )
                    } else {
                        animation.stopAnimation(animation.AnimationTypes.All, settingSoundFXToggle)
                        settingSoundFXToggle.setImage(img`
                            1 1 1 1 1 1 1 1 . . 
                            1 f f f f f f 1 . . 
                            1 f f f f f f 1 . . 
                            1 f f f f f f 1 . . 
                            1 f f f f f f 1 . . 
                            1 f f f f f f 1 . . 
                            1 f f f f f f 1 . . 
                            1 1 1 1 1 1 1 1 . . 
                            `)
                    }
                }
            }
        } else {
            settingSoundFXTogglePressed = false
            if (settingSoundFX) {
                animation.stopAnimation(animation.AnimationTypes.All, settingSoundFXToggle)
                settingSoundFXToggle.setImage(img`
                    c c c c c c c c 7 6 
                    c f f f f f 7 7 6 6 
                    c f f f f 7 6 6 . . 
                    c 7 7 f 7 6 f c . . 
                    c 6 7 7 6 f f c . . 
                    c f 6 6 f f f c . . 
                    c f f f f f f c . . 
                    c c c c c c c c . . 
                    `)
            } else {
                animation.stopAnimation(animation.AnimationTypes.All, settingSoundFXToggle)
                settingSoundFXToggle.setImage(img`
                    c c c c c c c c . . 
                    c f f f f f f c . . 
                    c f f f f f f c . . 
                    c f f f f f f c . . 
                    c f f f f f f c . . 
                    c f f f f f f c . . 
                    c f f f f f f c . . 
                    c c c c c c c c . . 
                    `)
            }
        }
    }
}
function buttonPressDown () {
    if (mouseOffset.overlapsWith(newButton)) {
        newButtonPressed = true
        newButton.setImage(img`
            ........................
            .ccccccccccccccccccccccc
            .cdddddddddddddddddddddc
            .cdbbbbbbbbbbbbbbbbbbbbc
            .cdbbbbbbbbbbbbbbbbbbbbc
            .cdbbfbbfbbbbbbbbbbbbbbc
            .cdbbffbfcbbbbbbbbbbbbbc
            .cdbbfcffcbffbbfbfbfbbbc
            .cdbbfccfcfbcfbfcfcfcbbc
            .cdbbfcbfcfffbcfcfcfcbbc
            .cdbbfcbfcfcccbfcfcfcbbc
            .cdbbfcbfcbfffbbfbfbcbbc
            .cdbbbcbbcbbcccbbcbcbbbc
            .cdbbbbbbbbbbbbbbbbbbbbc
            .cdbbbbbbbbbbbbbbbbbbbbc
            .ccccccccccccccccccccccc
            `)
    }
    if (mouseOffset.overlapsWith(loadButton)) {
        LoadButtonPressed = true
        loadButton.setImage(img`
            ..............................
            .ccccccccccccccccccccccccccccc
            .cdddddddddddddddddddddddddddc
            .cdbbbbbbbbbbbbbbbbbbbbbbbbbbc
            .cdbbbbbbbbbbbbbbbbbbbbbbbbbbc
            .cdbbfbbbbbbbbbbbbbbbbbbbfbbbc
            .cdbbfcbbbbbbbbbbbbbbbbbbfcbbc
            .cdbbfcbbbfffbbbffffbbffffcbbc
            .cdbbfcbbfbccfbfbccfcfbccfcbbc
            .cdbbfcbbfcbbfcfcbbfcfcbbfcbbc
            .cdbbfcbbfcbbfcfcbbfcfcbbfcbbc
            .cdbbfffbbfffbcbffffcbffffcbbc
            .cdbbbccbbbcccbbbccccbbccccbbc
            .cdbbbbbbbbbbbbbbbbbbbbbbbbbbc
            .cdbbbbbbbbbbbbbbbbbbbbbbbbbbc
            .ccccccccccccccccccccccccccccc
            `)
    }
    if (mouseOffset.overlapsWith(settingsButton)) {
        settingsButtonPressed = true
        settingsButton.setImage(img`
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . 1 1 c c c c c c 1 1 . . . 
            . . 1 c c c f c c f c c c 1 . . 
            . 1 c f f c f c c f c f f c 1 . 
            . 1 c f f f f f f f f f f c 1 . 
            1 c c c f f f f f f f f c c c 1 
            1 c f f f f f c c f f f f f c 1 
            1 c c c f f c c c c f f c c c 1 
            1 c c c f f c c c c f f c c c 1 
            1 c f f f f f c c f f f f f c 1 
            1 c c c f f f f f f f f c c c 1 
            . 1 c f f f f f f f f f f c 1 . 
            . 1 c f f c c f c f c f f c 1 . 
            . . 1 c c c c f c f c c c 1 . . 
            . . . 1 1 c c c c c c 1 1 . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            `)
    }
}
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Released, function (x, y) {
    buttonReleaseTriggered()
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    mouseMove(x, y)
    buttonPressDown()
})
browserEvents.onMouseMove(function (x, y) {
    mouseMove(x, y)
})
function titleTransition () {
    for (let value of sprites.allOfKind(0)) {
        value.ay = 800
        value.vy = -100
        value.setFlag(SpriteFlag.AutoDestroy, true)
        value.setFlag(SpriteFlag.Ghost, true)
    }
    pause(500)
    color.startFadeFromCurrent(color.Black, 500)
}
function buttonReleaseTriggered () {
    if (mouseOffset.overlapsWith(newButton)) {
        if (newButtonPressed) {
            newButton.setImage(img`
                ccccccccccccccccccccccc.
                cdddddddddddddddddddddcf
                cdbbbbbbbbbbbbbbbbbbbbcf
                cdbbbbbbbbbbbbbbbbbbbbcf
                cdbbfbbfbbbbbbbbbbbbbbcf
                cdbbffbfcbbbbbbbbbbbbbcf
                cdbbfcffcbffbbfbfbfbbbcf
                cdbbfccfcfbcfbfcfcfcbbcf
                cdbbfcbfcfffbcfcfcfcbbcf
                cdbbfcbfcfcccbfcfcfcbbcf
                cdbbfcbfcbfffbbfbfbcbbcf
                cdbbbcbbcbbcccbbcbcbbbcf
                cdbbbbbbbbbbbbbbbbbbbbcf
                cdbbbbbbbbbbbbbbbbbbbbcf
                cccccccccccccccccccccccf
                .fffffffffffffffffffffff
                `)
            titleTransition()
            titleToNew()
        }
    }
    if (mouseOffset.overlapsWith(loadButton)) {
        if (LoadButtonPressed) {
            loadButton.setImage(img`
                ccccccccccccccccccccccccccccc.
                cdddddddddddddddddddddddddddcf
                cdbbbbbbbbbbbbbbbbbbbbbbbbbbcf
                cdbbbbbbbbbbbbbbbbbbbbbbbbbbcf
                cdbbfbbbbbbbbbbbbbbbbbbbfbbbcf
                cdbbfcbbbbbbbbbbbbbbbbbbfcbbcf
                cdbbfcbbbfffbbbffffbbffffcbbcf
                cdbbfcbbfbccfbfbccfcfbccfcbbcf
                cdbbfcbbfcbbfcfcbbfcfcbbfcbbcf
                cdbbfcbbfcbbfcfcbbfcfcbbfcbbcf
                cdbbfffbbfffbcbffffcbffffcbbcf
                cdbbbccbbbcccbbbccccbbccccbbcf
                cdbbbbbbbbbbbbbbbbbbbbbbbbbbcf
                cdbbbbbbbbbbbbbbbbbbbbbbbbbbcf
                cccccccccccccccccccccccccccccf
                .fffffffffffffffffffffffffffff
                `)
            if (blockSettings.exists("hasSaveData")) {
                titleTransition()
            } else {
                message("No save data. Please create a new game to continue")
            }
        }
    }
    if (mouseOffset.overlapsWith(settingsButton)) {
        if (settingsButtonPressed) {
            settingsButton.setImage(img`
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . 1 1 b b b b b b 1 1 . . . 
                . . 1 b b b f b b f b b b 1 . . 
                . 1 b f f b f b b f b f f b 1 . 
                . 1 b f f f f f f f f f f b 1 . 
                1 b b b f f f f f f f f b b b 1 
                1 b f f f f f b b f f f f f b 1 
                1 b b b f f b b b b f f b b b 1 
                1 b b b f f b b b b f f b b b 1 
                1 b f f f f f b b f f f f f b 1 
                1 b b b f f f f f f f f b b b 1 
                . 1 b f f f f f f f f f f b 1 . 
                . 1 b f f b b f b f b f f b 1 . 
                . . 1 b b b b f b f b b b 1 . . 
                . . . 1 1 b b b b b b 1 1 . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                `)
            for (let value of sprites.allOfKind(0)) {
                value.setFlag(SpriteFlag.Ghost, true)
            }
            settingsMenu = sprites.create(img`
                .cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcc
                cfccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccfc
                cfccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfc
                cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
                cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfc
                cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
                cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
                cfccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfc
                cfccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccfc
                ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcc
                .cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.
                `, 1)
            settingsHeader = textsprite.create("Settings")
            settingsHeader.scale = 2
            settingsHeader.top = settingsMenu.top + 5
            settingsHeader.left = settingsMenu.left + 5
            settingSoundFXToggle = sprites.create(img`
                c c c c c c c c 7 6 
                c f f f f f 7 7 6 6 
                c f f f f 7 6 6 . . 
                c 7 7 f 7 6 f c . . 
                c 6 7 7 6 f f c . . 
                c f 6 6 f f f c . . 
                c f f f f f f c . . 
                c c c c c c c c . . 
                `, 1)
            settingSoundFXToggle.top = settingsHeader.bottom + 10
            settingSoundFXToggle.left = settingsMenu.left + 5
            settingSoundFXLabel = textsprite.create("Sound Effects")
            settingSoundFXLabel.y = settingSoundFXToggle.y
            settingSoundFXLabel.left = settingSoundFXToggle.right + 2
            settingsOpen = true
        }
    }
}
function message (text: string) {
    game.setDialogFrame(img`
        d d d d d d d d d d d d d d e 
        d 4 4 4 4 4 4 4 4 4 4 4 4 d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 1 1 1 1 1 1 1 1 1 1 b d e 
        d 4 b b b b b b b b b b b d e 
        d d d d d d d d d d d d d d e 
        e e e e e e e e e e e e e e e 
        `)
    game.setDialogCursor(img`
        .cccccccccccccccccc......f.....fffff....
        cc11cccccccccccccccc.....f....f99999f...
        c1ccccccccccccccc11c....f....f999f999f..
        cc1cc11ccc11c11c111c....f....f99f9f99f..
        ccc1c1c1c1c1c1cc1ccc...f.....f99fff99f..
        c11cc11ccc11c11cc11c...f.....f69f9f96f..
        ccccc1cccccccccccccc..f.......f66666f...
        .cccccccccccccccccc...f........fffff....
        `)
    game.showLongText(text, DialogLayout.Center)
}
let settingSoundFXLabel: TextSprite = null
let settingsHeader: TextSprite = null
let settingsMenu: Sprite = null
let settingSoundFXTogglePressed = false
let settingSoundFXToggle: Sprite = null
let settingsOpen = false
let settingsButtonPressed = false
let settingSoundFX = false
let settingsButton: Sprite = null
let LoadButtonPressed = false
let newButtonPressed = false
let mouseOffset: Sprite = null
let loadButton: Sprite = null
let newButton: Sprite = null
scene.setBackgroundColor(9)
let titleScreen = sprites.create(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111119999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111199999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111119999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999999
    9999999999999999999999999999999999999999999999999999999999999999111111111999999999999999999999999999999999999999999999999991111111111111111111111111111199999999
    9999999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999911111111111111111111111111111119999999
    9999999999999999999999999999999999999999999999999999999999999111111111111111999999999999999999999999999999999999999999999911111111111111111111111111111119999999
    9999999999999999999999999999999999999999999999999999999999991111111111111111199999911111111199999999999999999999999999999911111111111111111111111111111119999999
    9999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111119999999999999999999999999999911111111111111111111111111111119999999
    9999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111999999999999999999999999999911111111111111111111111111111119999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111199999999999999999999999999911111111111111111111111111111119999999
    999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111999999999999999999999999991111111111111111111111111111dd19999999
    99999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111199999999999999999999999991111111111111111111111111111dd199999999
    9999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111119999999999999999999999991111111111111111111111111111dd1999999999
    99999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111199999999999999999999999911111111111111111111111111dddd9999999999
    99999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111199999999999999999999999911111111111111111111111111ddd99999999999
    999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111999999999999999999999999111111111111111111111111ddddd99999999999
    999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111999999999999999999999999111111111111111111111111ddd9999999999999
    9999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111119999999999999999999999991111dddd1111111111111111d199999999999999
    999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111d119999999999999999999999991dddddd111111111111111199999999999999999
    99999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111dd1999999999999999999999999991dddd11111111111111d1199999999999999999
    999999999999999999999999999999999999999999999999991111111111111111111111111111111111111d11ddd1999999999999999999999999999911111111111111111dd1199999999999999999
    999999999999999999999999999999999999999999999999991111111111111111111111111111111111111dd1dd19999999999999999999999999999999999111111111dddd11999999999999999999
    99999999999999999999999999999999999999999999999999911111111111111111111111111111111111dddd1199999999999999999999999999999999999911dddddddd1119999999999999999999
    999999999999999999999999999999999999999999999999999111111111111111111111111111111111ddd11999999999999999999999999999999999999999911ddddd111199999999999999999999
    999999999999999999999999999999999999999999999999999911111111111111111111111111111ddddd11999999999999999999999999999999999999999999111111111999999999999999999999
    9999111111199999999999999999999999999999999999999999991111111111111111111111111dddddd119999999999999999999999999999999999999999999999999999999999999999999999999
    9991111111119999999999999999999999999999999999999999999999111111111111111111111ddddd1199999999999999999999999999999999999999999999999999999999999999999999999999
    119111111111119999999999999999999999999999999999999999999991111111111111dddd1d1111119999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111119999999999999999999999999999999999999999999991dddddddddddddddd11999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111999999999999999999999999999999999999999999999dddddddddddddd1119999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111199999999999999999999999999999999999999999999911111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111119999999999999999999999999999999999999999999999
    1111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111999999999999999999999999999999999999999999999
    1111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111199999999999999999999999999999999999999999999
    1111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111119999999999999999999999999999999999999999999
    1111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999
    1111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111999999999999999999999999999999999999999999
    1dddd11111111111ddd1999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111d1999999999999999999999999999999999999999999
    1dd1111111111ddddd1999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999999999999999999999999999999999999999
    9999111111dddddd1199999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111d1999999999999999999999999999999999999999999
    9999911ddddddd111999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111d1999999999999999999999999999999999999999999
    99999911dd11199999999999999999999999999999999999999999999999999999999999999999999999999999911111d1111111111111111111d1999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911ddd1111111111111111111d11999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999951111999999999999999999999999999999999999999999dddddd11111111111111111dd11999999999999999999999999999999999999999999
    999999999999999999999999999999951119999999515555155999999999999999999999999999999999999999991dd111111111111111111dd119999999999999999999999999999999999999999999
    99999999999999999999999999999911115555999511555555519999999999999999999999999999999999999999999911111111111111111dd199999999999999999999999999999999999999999999
    9999999999999999999999111115995155555555515555545551111159999999999999999999999999999999999999991111111111111111dddd99999999999999999999999999999999999999999999
    999999999999999999999115445444545544545554555454455555554599999999999999999999999999999999999999111111111111ddddddd999999999999999999999999999999999999999999999
    99999999999999999999954454444eeeeeeee444444544eee454455445999999999999999999999999999999999999991111111111dd11ddd11999999999999999999999999999999999999999999999
    9999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999911dddddddd11ddd111999999999999999999999999999999999999999999999
    9999999999999999999ebbbdddddddddddbbbbbbbbeeeeeeeeebbbbbbbbbe999999999999999999999999999999999999911dddd11199dd1119999999999999999999999999999999999999999999999
    9999999999999999999edddddbbbbbbbbdddddddddddddddddddbddddbbee999999999999999999999999999999999999991111111999999999999999999999999999999999999999999999999999999
    999999999999999999999edbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbe99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999ebbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbe99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999eeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999eddddddddeeeeebbbbeeeeeeeeeeeeeeddde999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999ebbdddddddddddddbbdddddbbeeebdddbbbe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999eddbbbbbbbbbbbbbbbbbbbdddddddbbbbe9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ebddbbeeeeeeeeeeeeeeddddddddddbe99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ebddddddddbbbdddbbddbbbbbbddde999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999eeeeebbbbbddddbbbbbbbbbbeebbee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999cccccbbbbbbbbbbbeeeebbbeeccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999cccccceeeeeeeeeeeeeeeeeecccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ccdddccccccccccccccccccccccdddcc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999777bbb777999999999999cdcbcbccccccccccccccccccccdcbcbc99999999999999999999999999999977777777777999999999999999999999999999997777777799999bbbbbb999999999999999
    bbbbbbbbbbbbccccccccccbbcdbdbbcbbbbbbbbbccccbbbbbcdbdbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    7ddbbbcccccc77777777bbbbcdcbcbcbb7777777777777777cdcbcbcbbbcccc77777777777777bbcccccccccbbbbbbb777777777777bbbbbbccccc77777777777bbbbbbbbccccccccc77777777777bbb
    111111111111111111111111ccbbbcc111111111111111111ccbbbcc11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ddd1dddddddddddddddddddddcccccddddddddddddd6ddddddcccccdddddddddddddddddddddd1dddddddddddddddddddddddddddddd1ddddddddddddddddddddddd1dddddddddddddddddddddddd1dd
    777bbbbbb77777777777bbbbbbbbb6bbb777777777667777777bbbbbbbbbbbb777777777777777bbbbbbbbbbbbb77777777777777777bbbbbbbbbb777657777557776bbbbbbbbbbbb77766777677777b
    77777777777776577777777777777767777777777667777777bbbbbbb77777777665577757777777777777777777777777777777777777777bbbbbbb765577777777777777bbbbbbb777677776577777
    7777777577777757777775777777776777577777767777777777777776677767777757777577777777777777775777777777777777777777777777777765777557777775557777755775677776557777
    7677777667777767777757777777777677577777777777777777757776777765777755777577777777777777775777777777577777777775577777777767777777776667757777757756777777657777
    7777777766777777777766777777777777577777777755577777557756777765577777777776777777777556675777777777655777777777577777777777777777777665775677777775577777677777
    7777777777777777777757777777777777777777766677577777577567777776577755777776777777775577777577775777677577777775777777757777777775577775777767777757777777777777
    eeeeee777777eeee777777777567777777777777776657756777777755777776777777777776575777777777777577775777677777777765777777777777776667757777757756777777777777777777
    eeeeeeeeeeeeeeeee77777777767777777777777777757777677777577777777777777777777777777777777777577775777777777777775777777777777777665775677777775577777777777777777
    eeeeeeeeeeeeeeeeee77777777777777eeee777777777677777777577777777eeeeeeeeeeeee777777777777777777777777777777777777777777777777777775777767777757777777777777777777
    eeeeeeeeeeeeeeeeeee777777eeeeeeeeeeeeee777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777eeee7777777776777777775777eeeeeeeeeeeeeeeee
    eeeeeeeeeeeecceeeee7eee77eeeeeeeeeeeeeeee777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeee777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eecceeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeee777eeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeecccee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeceeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeccceeeeeeeeeecce
    eeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeceeeeeeceeeeeeeeceeeeeeeeeeeeeeeeeccceeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeecceeeeeeeeeeeeeceeeeeeeeeeeeeeeceeeceeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeceeeeeeeeeecceeeeeeeeeeeeeeeecceeeeeeeeeeeeeecccceeeeeee
    eeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeecceeeeeeeeeeeeeeeeeceeeeeeeeeeeceeeeeeeeeeccccceeeeeeeeeeeeeeeeeeeeeceeeeeeeecccceeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeceeeeeeeeeeceeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeecceeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeceeeeeeceeeeeeeeeeeeeeeeeeeeeeeee
    `, 0)
let title = sprites.create(img`
    ..cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ..ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc.
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeee44444444444444444444444444444444444444eeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeeee444444444444444444444444444444444444eeeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eedddddddddee4444444444444444444444444444444444eeedddddbee4444444444444444444444444444444444444444eeeeeec
    cee44444eedddddddddbe4444444444444444444444444444444444eeddddddbeee444444444444444444444444444444444444444eeeeecc
    ceeeeeeeeedddbeeedddbee4eeddddddeeeeeddddddeedddbee444eeddddebdddbee4ddddddbeeeddddddddbeeedddddddddddbeeeeeeec..
    ceeeee44eedddbeeedddbeeeeeddddddbeeeeddddddeedddbee444eeddddeedddbee4ddddddbeeedddddddddbeedddddddddddbee4eeeec..
    ..cee444eedddbeeedddbeeeddddddddddeeeddddddeedddbee444eeddddeeeeeeebdddddddddeeddddeedddbeedddddddddddbee4444bc..
    ..cee444eedddbeebdddbeeeddddeeddddeeebddddbeedddbee444eeddddeeeeeeebdddeeddddeeddddeeddbbeebbbdddddbbbeee4444ecc.
    ..cee444eedddbedddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddeeddeeeeeeebdddbeeeeee4444eeec
    ..cee444eeddddbdddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddbbddeeeeeeebdddbeeeee44444eeec
    .ccee444eedddddddddbeeeeddddbeddddeeeeeddeeeedddbee444eeddddee444eebdddbeddddeeddddddddee4444ebdddbee44444444eeec
    ceee4444eeddddbbbdddbeeeddddddddddeeeeeddeeeedddbee444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddddddddeeeeeddbeeedddbe4444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddbbddddeeebdddddeedddddddddeeddddebdddbebdddbbddddeeddddbbdddbee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeddddebdddbebdddeeddddeeddddeedddbee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeeddddddbeeebdddeeddddeeddddeedddbee44ebdddbee4444444eecc.
    ceeeeeeeeedddbeeebddbeeebddbeebddbeeebdddddeedddddddddeeeedddddbeeebddbeebddbeebddbeedddbee44eebddeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cee4444444444444444444444444eedddddddddbee44444444444444444444444444444444444444444444444444444444444444eeeeeec..
    ceee444444444444444444444444eedddddddddbbeee4444eee4444eeee444444444ee4444eee44444e4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeeeddddddddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeebbddbbbbddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeddddeeeeddeeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444eeeeeeeee444eeddddeeeddddbeeddddeeebdddeeddddeeeebbeeeddddeeebdddbe4444444444444444eeeeeee44eec..
    ..cee4444444444eeeeeeeeee444eeddddbeeddddbeeddddeeebdddeeddddbeeeeeeeeddddeeebdddbe444444444444444eeeeeeeee4eec..
    ..ceee4444444444444444444444eedddddddddbeeeeddddeeebdddeeebdddddbeeeeedddddddddddbeeeeeeeeeeeeeeeeeeeeeee444eec..
    ..ceeee444444444444444444444eedddddddddbeeeeddddeeebdddeeeeddddddbeeeedddddddddddbeeeeeeeee4444444444444444eecc..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeddddbeeddddbeeddddeeebdddeeeeeeebddddeeedddddddddddbe444444444444444444444eeeecc...
    ..cceeeeeeeeeeeeeeeee4444444eeddddeeeddddbeeddddbbbddddeeebbeeeddddeeedddddddddddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeedddddddddddeeddddeeddddeeeddddeeebdddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeebdddddddddbeeddddbbddddeeeddddeeebdddbe44444444eeeeeeeeee444eeeecc...
    ..cee44444444444444444444444eeddddeeebdddbeeeedddddddeeeeddddddddbeeeeddddeeebdddbe44444444eeeeeee4444444444eec..
    ..cee44444444444444444444444eebbbbeeebbbbeeeeebdddddbeeeebbbbbbbbeeeeebbbbeeeebbbee444eeeeeeeeeee44444444444eec..
    ..cee44444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee44444444eeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee4eeee44444444eeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    ...cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc..
    ....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    `, 0)
animation.runImageAnimation(
title,
[img`
    .................................................................................................................
    ..cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ..ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc.
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeee44444444444444444444444444444444444444eeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeeee444444444444444444444444444444444444eeeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eedddddddddee4444444444444444444444444444444444eeedddddbee4444444444444444444444444444444444444444eeeeeec
    cee44444eedddddddddbe4444444444444444444444444444444444eeddddddbeee444444444444444444444444444444444444444eeeeecc
    ceeeeeeeeedddbeeedddbee4eeddddddeeeeeddddddeedddbee444eeddddebdddbee4ddddddbeeeddddddddbeeedddddddddddbeeeeeeec..
    ceeeee44eedddbeeedddbeeeeeddddddbeeeeddddddeedddbee444eeddddeedddbee4ddddddbeeedddddddddbeedddddddddddbee4eeeec..
    ..cee444eedddbeeedddbeeeddddddddddeeeddddddeedddbee444eeddddeeeeeeebdddddddddeeddddeedddbeedddddddddddbee4444bc..
    ..cee444eedddbeebdddbeeeddddeeddddeeebddddbeedddbee444eeddddeeeeeeebdddeeddddeeddddeeddbbeebbbdddddbbbeee4444ecc.
    ..cee444eedddbedddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddeeddeeeeeeebdddbeeeeee4444eeec
    ..cee444eeddddbdddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddbbddeeeeeeebdddbeeeee44444eeec
    .ccee444eedddddddddbeeeeddddbeddddeeeeeddeeeedddbee444eeddddee444eebdddbeddddeeddddddddee4444ebdddbee44444444eeec
    ceee4444eeddddbbbdddbeeeddddddddddeeeeeddeeeedddbee444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddddddddeeeeeddbeeedddbe4444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddbbddddeeebdddddeedddddddddeeddddebdddbebdddbbddddeeddddbbdddbee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeddddebdddbebdddeeddddeeddddeedddbee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeeddddddbeeebdddeeddddeeddddeedddbee44ebdddbee4444444eecc.
    ceeeeeeeeedddbeeebddbeeebddbeebddbeeebdddddeedddddddddeeeedddddbeeebddbeebddbeebddbeedddbee44eebddeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cee4444444444444444444444444eedddddddddbee44444444444444444444444444444444444444444444444444444444444444eeeeeec..
    ceee444444444444444444444444eedddddddddbbeee4444eee4444eeee444444444ee4444eee44444e4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeeeddddddddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeebbddbbbbddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeddddeeeeddeeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444eeeeeeeee444eeddddeeeddddbeeddddeeebdddeeddddeeeebbeeeddddeeebdddbe4444444444444444eeeeeee44eec..
    ..cee4444444444eeeeeeeeee444eeddddbeeddddbeeddddeeebdddeeddddbeeeeeeeeddddeeebdddbe444444444444444eeeeeeeee4eec..
    ..ceee4444444444444444444444eedddddddddbeeeeddddeeebdddeeebdddddbeeeeedddddddddddbeeeeeeeeeeeeeeeeeeeeeee444eec..
    ..ceeee444444444444444444444eedddddddddbeeeeddddeeebdddeeeeddddddbeeeedddddddddddbeeeeeeeee4444444444444444eecc..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeddddbeeddddbeeddddeeebdddeeeeeeebddddeeedddddddddddbe444444444444444444444eeeecc...
    ..cceeeeeeeeeeeeeeeee4444444eeddddeeeddddbeeddddbbbddddeeebbeeeddddeeedddddddddddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeedddddddddddeeddddeeddddeeeddddeeebdddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeebdddddddddbeeddddbbddddeeeddddeeebdddbe44444444eeeeeeeeee444eeeecc...
    ..cee44444444444444444444444eeddddeeebdddbeeeedddddddeeeeddddddddbeeeeddddeeebdddbe44444444eeeeeee4444444444eec..
    ..cee44444444444444444444444eebbbbeeebbbbeeeeebdddddbeeeebbbbbbbbeeeeebbbbeeeebbbee444eeeeeeeeeee44444444444eec..
    ..cee44444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee44444444eeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee4eeee44444444eeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    ...cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc..
    ....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    .................................................................................................................
    `,img`
    ..cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ..ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc.
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeee44444444444444444444444444444444444444eeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeeee444444444444444444444444444444444444eeeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eedddddddddee4444444444444444444444444444444444eeedddddbee4444444444444444444444444444444444444444eeeeeec
    cee44444eedddddddddbe4444444444444444444444444444444444eeddddddbeee444444444444444444444444444444444444444eeeeecc
    ceeeeeeeeedddbeeedddbee4eeddddddeeeeeddddddeedddbee444eeddddebdddbee4ddddddbeeeddddddddbeeedddddddddddbeeeeeeec..
    ceeeee44eedddbeeedddbeeeeeddddddbeeeeddddddeedddbee444eeddddeedddbee4ddddddbeeedddddddddbeedddddddddddbee4eeeec..
    ..cee444eedddbeeedddbeeeddddddddddeeeddddddeedddbee444eeddddeeeeeeebdddddddddeeddddeedddbeedddddddddddbee4444bc..
    ..cee444eedddbeebdddbeeeddddeeddddeeebddddbeedddbee444eeddddeeeeeeebdddeeddddeeddddeeddbbeebbbdddddbbbeee4444ecc.
    ..cee444eedddbedddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddeeddeeeeeeebdddbeeeeee4444eeec
    ..cee444eeddddbdddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddbbddeeeeeeebdddbeeeee44444eeec
    .ccee444eedddddddddbeeeeddddbeddddeeeeeddeeeedddbee444eeddddee444eebdddbeddddeeddddddddee4444ebdddbee44444444eeec
    ceee4444eeddddbbbdddbeeeddddddddddeeeeeddeeeedddbee444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddddddddeeeeeddbeeedddbe4444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddbbddddeeebdddddeedddddddddeeddddebdddbebdddbbddddeeddddbbdddbee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeddddebdddbebdddeeddddeeddddeedddbee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeeddddddbeeebdddeeddddeeddddeedddbee44ebdddbee4444444eecc.
    ceeeeeeeeedddbeeebddbeeebddbeebddbeeebdddddeedddddddddeeeedddddbeeebddbeebddbeebddbeedddbee44eebddeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cee4444444444444444444444444eedddddddddbee44444444444444444444444444444444444444444444444444444444444444eeeeeec..
    ceee444444444444444444444444eedddddddddbbeee4444eee4444eeee444444444ee4444eee44444e4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeeeddddddddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeebbddbbbbddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeddddeeeeddeeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444eeeeeeeee444eeddddeeeddddbeeddddeeebdddeeddddeeeebbeeeddddeeebdddbe4444444444444444eeeeeee44eec..
    ..cee4444444444eeeeeeeeee444eeddddbeeddddbeeddddeeebdddeeddddbeeeeeeeeddddeeebdddbe444444444444444eeeeeeeee4eec..
    ..ceee4444444444444444444444eedddddddddbeeeeddddeeebdddeeebdddddbeeeeedddddddddddbeeeeeeeeeeeeeeeeeeeeeee444eec..
    ..ceeee444444444444444444444eedddddddddbeeeeddddeeebdddeeeeddddddbeeeedddddddddddbeeeeeeeee4444444444444444eecc..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeddddbeeddddbeeddddeeebdddeeeeeeebddddeeedddddddddddbe444444444444444444444eeeecc...
    ..cceeeeeeeeeeeeeeeee4444444eeddddeeeddddbeeddddbbbddddeeebbeeeddddeeedddddddddddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeedddddddddddeeddddeeddddeeeddddeeebdddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeebdddddddddbeeddddbbddddeeeddddeeebdddbe44444444eeeeeeeeee444eeeecc...
    ..cee44444444444444444444444eeddddeeebdddbeeeedddddddeeeeddddddddbeeeeddddeeebdddbe44444444eeeeeee4444444444eec..
    ..cee44444444444444444444444eebbbbeeebbbbeeeeebdddddbeeeebbbbbbbbeeeeebbbbeeeebbbee444eeeeeeeeeee44444444444eec..
    ..cee44444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee44444444eeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee4eeee44444444eeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    ...cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc..
    ....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    .................................................................................................................
    .................................................................................................................
    `,img`
    ..cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ..ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc.
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeee44444444444444444444444444444444444444eeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeeee444444444444444444444444444444444444eeeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eedddddddddee4444444444444444444444444444444444eeedddddbee4444444444444444444444444444444444444444eeeeeec
    cee44444eedddddddddbe4444444444444444444444444444444444eeddddddbeee444444444444444444444444444444444444444eeeeecc
    ceeeeeeeeedddbeeedddbee4eeddddddeeeeeddddddeedddbee444eeddddebdddbee4ddddddbeeeddddddddbeeedddddddddddbeeeeeeec..
    ceeeee44eedddbeeedddbeeeeeddddddbeeeeddddddeedddbee444eeddddeedddbee4ddddddbeeedddddddddbeedddddddddddbee4eeeec..
    ..cee444eedddbeeedddbeeeddddddddddeeeddddddeedddbee444eeddddeeeeeeebdddddddddeeddddeedddbeedddddddddddbee4444bc..
    ..cee444eedddbeebdddbeeeddddeeddddeeebddddbeedddbee444eeddddeeeeeeebdddeeddddeeddddeeddbbeebbbdddddbbbeee4444ecc.
    ..cee444eedddbedddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddeeddeeeeeeebdddbeeeeee4444eeec
    ..cee444eeddddbdddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddbbddeeeeeeebdddbeeeee44444eeec
    .ccee444eedddddddddbeeeeddddbeddddeeeeeddeeeedddbee444eeddddee444eebdddbeddddeeddddddddee4444ebdddbee44444444eeec
    ceee4444eeddddbbbdddbeeeddddddddddeeeeeddeeeedddbee444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddddddddeeeeeddbeeedddbe4444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddbbddddeeebdddddeedddddddddeeddddebdddbebdddbbddddeeddddbbdddbee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeddddebdddbebdddeeddddeeddddeedddbee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeeddddddbeeebdddeeddddeeddddeedddbee44ebdddbee4444444eecc.
    ceeeeeeeeedddbeeebddbeeebddbeebddbeeebdddddeedddddddddeeeedddddbeeebddbeebddbeebddbeedddbee44eebddeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cee4444444444444444444444444eedddddddddbee44444444444444444444444444444444444444444444444444444444444444eeeeeec..
    ceee444444444444444444444444eedddddddddbbeee4444eee4444eeee444444444ee4444eee44444e4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeeeddddddddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeebbddbbbbddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeddddeeeeddeeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444eeeeeeeee444eeddddeeeddddbeeddddeeebdddeeddddeeeebbeeeddddeeebdddbe4444444444444444eeeeeee44eec..
    ..cee4444444444eeeeeeeeee444eeddddbeeddddbeeddddeeebdddeeddddbeeeeeeeeddddeeebdddbe444444444444444eeeeeeeee4eec..
    ..ceee4444444444444444444444eedddddddddbeeeeddddeeebdddeeebdddddbeeeeedddddddddddbeeeeeeeeeeeeeeeeeeeeeee444eec..
    ..ceeee444444444444444444444eedddddddddbeeeeddddeeebdddeeeeddddddbeeeedddddddddddbeeeeeeeee4444444444444444eecc..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeddddbeeddddbeeddddeeebdddeeeeeeebddddeeedddddddddddbe444444444444444444444eeeecc...
    ..cceeeeeeeeeeeeeeeee4444444eeddddeeeddddbeeddddbbbddddeeebbeeeddddeeedddddddddddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeedddddddddddeeddddeeddddeeeddddeeebdddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeebdddddddddbeeddddbbddddeeeddddeeebdddbe44444444eeeeeeeeee444eeeecc...
    ..cee44444444444444444444444eeddddeeebdddbeeeedddddddeeeeddddddddbeeeeddddeeebdddbe44444444eeeeeee4444444444eec..
    ..cee44444444444444444444444eebbbbeeebbbbeeeeebdddddbeeeebbbbbbbbeeeeebbbbeeeebbbee444eeeeeeeeeee44444444444eec..
    ..cee44444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee44444444eeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee4eeee44444444eeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    ...cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc..
    ....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    .................................................................................................................
    .................................................................................................................
    `,img`
    .................................................................................................................
    ..cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ..ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc.
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeee44444444444444444444444444444444444444eeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeeee444444444444444444444444444444444444eeeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eedddddddddee4444444444444444444444444444444444eeedddddbee4444444444444444444444444444444444444444eeeeeec
    cee44444eedddddddddbe4444444444444444444444444444444444eeddddddbeee444444444444444444444444444444444444444eeeeecc
    ceeeeeeeeedddbeeedddbee4eeddddddeeeeeddddddeedddbee444eeddddebdddbee4ddddddbeeeddddddddbeeedddddddddddbeeeeeeec..
    ceeeee44eedddbeeedddbeeeeeddddddbeeeeddddddeedddbee444eeddddeedddbee4ddddddbeeedddddddddbeedddddddddddbee4eeeec..
    ..cee444eedddbeeedddbeeeddddddddddeeeddddddeedddbee444eeddddeeeeeeebdddddddddeeddddeedddbeedddddddddddbee4444bc..
    ..cee444eedddbeebdddbeeeddddeeddddeeebddddbeedddbee444eeddddeeeeeeebdddeeddddeeddddeeddbbeebbbdddddbbbeee4444ecc.
    ..cee444eedddbedddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddeeddeeeeeeebdddbeeeeee4444eeec
    ..cee444eeddddbdddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddbbddeeeeeeebdddbeeeee44444eeec
    .ccee444eedddddddddbeeeeddddbeddddeeeeeddeeeedddbee444eeddddee444eebdddbeddddeeddddddddee4444ebdddbee44444444eeec
    ceee4444eeddddbbbdddbeeeddddddddddeeeeeddeeeedddbee444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddddddddeeeeeddbeeedddbe4444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddbbddddeeebdddddeedddddddddeeddddebdddbebdddbbddddeeddddbbdddbee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeddddebdddbebdddeeddddeeddddeedddbee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeeddddddbeeebdddeeddddeeddddeedddbee44ebdddbee4444444eecc.
    ceeeeeeeeedddbeeebddbeeebddbeebddbeeebdddddeedddddddddeeeedddddbeeebddbeebddbeebddbeedddbee44eebddeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cee4444444444444444444444444eedddddddddbee44444444444444444444444444444444444444444444444444444444444444eeeeeec..
    ceee444444444444444444444444eedddddddddbbeee4444eee4444eeee444444444ee4444eee44444e4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeeeddddddddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeebbddbbbbddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeddddeeeeddeeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444eeeeeeeee444eeddddeeeddddbeeddddeeebdddeeddddeeeebbeeeddddeeebdddbe4444444444444444eeeeeee44eec..
    ..cee4444444444eeeeeeeeee444eeddddbeeddddbeeddddeeebdddeeddddbeeeeeeeeddddeeebdddbe444444444444444eeeeeeeee4eec..
    ..ceee4444444444444444444444eedddddddddbeeeeddddeeebdddeeebdddddbeeeeedddddddddddbeeeeeeeeeeeeeeeeeeeeeee444eec..
    ..ceeee444444444444444444444eedddddddddbeeeeddddeeebdddeeeeddddddbeeeedddddddddddbeeeeeeeee4444444444444444eecc..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeddddbeeddddbeeddddeeebdddeeeeeeebddddeeedddddddddddbe444444444444444444444eeeecc...
    ..cceeeeeeeeeeeeeeeee4444444eeddddeeeddddbeeddddbbbddddeeebbeeeddddeeedddddddddddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeedddddddddddeeddddeeddddeeeddddeeebdddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeebdddddddddbeeddddbbddddeeeddddeeebdddbe44444444eeeeeeeeee444eeeecc...
    ..cee44444444444444444444444eeddddeeebdddbeeeedddddddeeeeddddddddbeeeeddddeeebdddbe44444444eeeeeee4444444444eec..
    ..cee44444444444444444444444eebbbbeeebbbbeeeeebdddddbeeeebbbbbbbbeeeeebbbbeeeebbbee444eeeeeeeeeee44444444444eec..
    ..cee44444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee44444444eeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee4eeee44444444eeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    ...cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc..
    ....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    .................................................................................................................
    `,img`
    .................................................................................................................
    .................................................................................................................
    ..cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ..ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc.
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeee44444444444444444444444444444444444444eeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeeee444444444444444444444444444444444444eeeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eedddddddddee4444444444444444444444444444444444eeedddddbee4444444444444444444444444444444444444444eeeeeec
    cee44444eedddddddddbe4444444444444444444444444444444444eeddddddbeee444444444444444444444444444444444444444eeeeecc
    ceeeeeeeeedddbeeedddbee4eeddddddeeeeeddddddeedddbee444eeddddebdddbee4ddddddbeeeddddddddbeeedddddddddddbeeeeeeec..
    ceeeee44eedddbeeedddbeeeeeddddddbeeeeddddddeedddbee444eeddddeedddbee4ddddddbeeedddddddddbeedddddddddddbee4eeeec..
    ..cee444eedddbeeedddbeeeddddddddddeeeddddddeedddbee444eeddddeeeeeeebdddddddddeeddddeedddbeedddddddddddbee4444bc..
    ..cee444eedddbeebdddbeeeddddeeddddeeebddddbeedddbee444eeddddeeeeeeebdddeeddddeeddddeeddbbeebbbdddddbbbeee4444ecc.
    ..cee444eedddbedddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddeeddeeeeeeebdddbeeeeee4444eeec
    ..cee444eeddddbdddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddbbddeeeeeeebdddbeeeee44444eeec
    .ccee444eedddddddddbeeeeddddbeddddeeeeeddeeeedddbee444eeddddee444eebdddbeddddeeddddddddee4444ebdddbee44444444eeec
    ceee4444eeddddbbbdddbeeeddddddddddeeeeeddeeeedddbee444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddddddddeeeeeddbeeedddbe4444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddbbddddeeebdddddeedddddddddeeddddebdddbebdddbbddddeeddddbbdddbee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeddddebdddbebdddeeddddeeddddeedddbee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeeddddddbeeebdddeeddddeeddddeedddbee44ebdddbee4444444eecc.
    ceeeeeeeeedddbeeebddbeeebddbeebddbeeebdddddeedddddddddeeeedddddbeeebddbeebddbeebddbeedddbee44eebddeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cee4444444444444444444444444eedddddddddbee44444444444444444444444444444444444444444444444444444444444444eeeeeec..
    ceee444444444444444444444444eedddddddddbbeee4444eee4444eeee444444444ee4444eee44444e4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeeeddddddddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeebbddbbbbddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeddddeeeeddeeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444eeeeeeeee444eeddddeeeddddbeeddddeeebdddeeddddeeeebbeeeddddeeebdddbe4444444444444444eeeeeee44eec..
    ..cee4444444444eeeeeeeeee444eeddddbeeddddbeeddddeeebdddeeddddbeeeeeeeeddddeeebdddbe444444444444444eeeeeeeee4eec..
    ..ceee4444444444444444444444eedddddddddbeeeeddddeeebdddeeebdddddbeeeeedddddddddddbeeeeeeeeeeeeeeeeeeeeeee444eec..
    ..ceeee444444444444444444444eedddddddddbeeeeddddeeebdddeeeeddddddbeeeedddddddddddbeeeeeeeee4444444444444444eecc..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeddddbeeddddbeeddddeeebdddeeeeeeebddddeeedddddddddddbe444444444444444444444eeeecc...
    ..cceeeeeeeeeeeeeeeee4444444eeddddeeeddddbeeddddbbbddddeeebbeeeddddeeedddddddddddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeedddddddddddeeddddeeddddeeeddddeeebdddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeebdddddddddbeeddddbbddddeeeddddeeebdddbe44444444eeeeeeeeee444eeeecc...
    ..cee44444444444444444444444eeddddeeebdddbeeeedddddddeeeeddddddddbeeeeddddeeebdddbe44444444eeeeeee4444444444eec..
    ..cee44444444444444444444444eebbbbeeebbbbeeeeebdddddbeeeebbbbbbbbeeeeebbbbeeeebbbee444eeeeeeeeeee44444444444eec..
    ..cee44444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee44444444eeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee4eeee44444444eeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    ...cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc..
    ....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    `,img`
    .................................................................................................................
    .................................................................................................................
    ..cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    ..ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc.
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeee44444444444444444444444444444444444444eeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eeeeeeeeeeee444444444444444444444444444444444444eeeeeeee444444444444444444444444444444444444444444444eeec
    cee44444eedddddddddee4444444444444444444444444444444444eeedddddbee4444444444444444444444444444444444444444eeeeeec
    cee44444eedddddddddbe4444444444444444444444444444444444eeddddddbeee444444444444444444444444444444444444444eeeeecc
    ceeeeeeeeedddbeeedddbee4eeddddddeeeeeddddddeedddbee444eeddddebdddbee4ddddddbeeeddddddddbeeedddddddddddbeeeeeeec..
    ceeeee44eedddbeeedddbeeeeeddddddbeeeeddddddeedddbee444eeddddeedddbee4ddddddbeeedddddddddbeedddddddddddbee4eeeec..
    ..cee444eedddbeeedddbeeeddddddddddeeeddddddeedddbee444eeddddeeeeeeebdddddddddeeddddeedddbeedddddddddddbee4444bc..
    ..cee444eedddbeebdddbeeeddddeeddddeeebddddbeedddbee444eeddddeeeeeeebdddeeddddeeddddeeddbbeebbbdddddbbbeee4444ecc.
    ..cee444eedddbedddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddeeddeeeeeeebdddbeeeeee4444eeec
    ..cee444eeddddbdddddbeeeddddeeddddeeeeeddeeeedddbee444eeddddee444eebdddeeddddeeddddbbddeeeeeeebdddbeeeee44444eeec
    .ccee444eedddddddddbeeeeddddbeddddeeeeeddeeeedddbee444eeddddee444eebdddbeddddeeddddddddee4444ebdddbee44444444eeec
    ceee4444eeddddbbbdddbeeeddddddddddeeeeeddeeeedddbee444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddddddddeeeeeddbeeedddbe4444eeddddee444eebdddddddddeeddddddddeeee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddbbddddeeebdddddeedddddddddeeddddebdddbebdddbbddddeeddddbbdddbee44ebdddbee44444444eeec
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeddddebdddbebdddeeddddeeddddeedddbee44ebdddbee44444444eecc
    cee44444eedddbeeedddbeeeddddeeddddeeeddddddeedddddddddeeeddddddbeeebdddeeddddeeddddeedddbee44ebdddbee4444444eecc.
    ceeeeeeeeedddbeeebddbeeebddbeebddbeeebdddddeedddddddddeeeedddddbeeebddbeebddbeebddbeedddbee44eebddeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeee4444444eec..
    ceeeee44eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    cee4444444444444444444444444eedddddddddbee44444444444444444444444444444444444444444444444444444444444444eeeeeec..
    ceee444444444444444444444444eedddddddddbbeee4444eee4444eeee444444444ee4444eee44444e4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeeeddddddddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeebbddbbbbddbeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444444444444444eeddddeeeddddbeeddddeeebdddeeddddeeeeddeeeddddeeebdddbe4444444444444444444444444eec..
    ..cee44444444444eeeeeeeee444eeddddeeeddddbeeddddeeebdddeeddddeeeebbeeeddddeeebdddbe4444444444444444eeeeeee44eec..
    ..cee4444444444eeeeeeeeee444eeddddbeeddddbeeddddeeebdddeeddddbeeeeeeeeddddeeebdddbe444444444444444eeeeeeeee4eec..
    ..ceee4444444444444444444444eedddddddddbeeeeddddeeebdddeeebdddddbeeeeedddddddddddbeeeeeeeeeeeeeeeeeeeeeee444eec..
    ..ceeee444444444444444444444eedddddddddbeeeeddddeeebdddeeeeddddddbeeeedddddddddddbeeeeeeeee4444444444444444eecc..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeddddbeeddddbeeddddeeebdddeeeeeeebddddeeedddddddddddbe444444444444444444444eeeecc...
    ..cceeeeeeeeeeeeeeeee4444444eeddddeeeddddbeeddddbbbddddeeebbeeeddddeeedddddddddddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeedddddddddddeeddddeeddddeeeddddeeebdddbe444444444444444444444eeeec....
    ..cee44444444444444444444444eeddddeeebdddbeebdddddddddbeeddddbbddddeeeddddeeebdddbe44444444eeeeeeeeee444eeeecc...
    ..cee44444444444444444444444eeddddeeebdddbeeeedddddddeeeeddddddddbeeeeddddeeebdddbe44444444eeeeeee4444444444eec..
    ..cee44444444444444444444444eebbbbeeebbbbeeeeebdddddbeeeebbbbbbbbeeeeebbbbeeeebbbee444eeeeeeeeeee44444444444eec..
    ..cee44444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444eec..
    ..cee4eeee44444444eeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee4eeee44444444eeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444eec..
    ..cee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeec..
    ..cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec..
    ...cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc..
    ....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    `],
500,
true
)
title.y = 35
newButton = sprites.create(img`
    bbbbbbbbbbbbbbbbbbbbbbb.
    b111111111111111111111bc
    b1ddddddddddddddddddddbc
    b1ddddddddddddddddddddbc
    b1ddcddcddddddddddddddbc
    b1ddccdcbdddddddddddddbc
    b1ddcbccbdccddcdcdcdddbc
    b1ddcbbcbcdbcdcbcbcbddbc
    b1ddcbdcbcccdbcbcbcbddbc
    b1ddcbdcbcbbbdcbcbcbddbc
    b1ddcbdcbdcccddcdcdbddbc
    b1dddbddbddbbbddbdbdddbc
    b1ddddddddddddddddddddbc
    b1ddddddddddddddddddddbc
    bbbbbbbbbbbbbbbbbbbbbbbc
    .ccccccccccccccccccccccc
    `, 0)
newButton.y = 80
loadButton = sprites.create(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    b111111111111111111111111111bc
    b1ddddddddddddddddddddddddddbc
    b1ddddddddddddddddddddddddddbc
    b1ddcdddddddddddddddddddcdddbc
    b1ddcbddddddddddddddddddcbddbc
    b1ddcbdddcccdddccccddccccbddbc
    b1ddcbddcdbbcdcdbbcbcdbbcbddbc
    b1ddcbddcbddcbcbddcbcbddcbddbc
    b1ddcbddcbddcbcbddcbcbddcbddbc
    b1ddcccddcccdbdccccbdccccbddbc
    b1dddbbdddbbbdddbbbbddbbbbddbc
    b1ddddddddddddddddddddddddddbc
    b1ddddddddddddddddddddddddddbc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    .ccccccccccccccccccccccccccccc
    `, 0)
loadButton.setPosition(115, 80)
let gameVersion = textsprite.create("v1.0", 0, 15)
gameVersion.bottom = 120
gameVersion.left = 0
let devName = textsprite.create("By Elliot A.", 0, 15)
devName.right = 160
devName.bottom = 120
mouseOffset = sprites.create(img`
    f 
    `, 2)
mouseOffset.setFlag(SpriteFlag.Invisible, true)
newButtonPressed = false
LoadButtonPressed = false
for (let value of sprites.allOfKind(SpriteKind.Text)) {
    value.setKind(0)
}
settingsButton = sprites.create(img`
    . . . . . d d d d d d . . . . . 
    . . . d d b b b b b b d d . . . 
    . . d b b b f b b f b b b d . . 
    . d b f f b f b b f b f f b d . 
    . d b f f f f f f f f f f b b . 
    d b b b f f f f f f f f b b b d 
    d b f f f f f b b f f f f f b c 
    d b b b f f b b b b f f b b b c 
    d b b b f f b b b b f f b b b c 
    d b f f f f f b b f f f f f b c 
    d b b b f f f f f f f f b b b c 
    . d b f f f f f f f f f f b c . 
    . d b f f b b f b f b f f b c . 
    . . d b b b b f b f b b b c . . 
    . . . d b b b b b b b b c . . . 
    . . . . . d b b b b c . . . . . 
    `, 0)
settingsButton.top = 5
settingsButton.right = 155
settingSoundFX = true
