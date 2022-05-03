DFRobotMaqueenPlus.I2CInit()
let egoera = 0
basic.forever(function () {
    if (egoera == 0) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    }
})
basic.forever(function () {
    if (input.soundLevel() > 50) {
        if (egoera == 0) {
            egoera = 1
        } else {
            egoera = 0
        }
    }
})
