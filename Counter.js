import Wings from '@b00tc4mp/wings'
import utils from './utils'

const { Component } = Wings

class Counter extends Component {
    constructor(initialCount = 0, countUp = true) {
        super()

        this.width = this.height = 50

        this.backgroundColor = 'magenta'
        this.borderColor = 'cyan'
        this.borderWidth = 5

        this.count = initialCount
        this.textHeight = 16

        this.on('MouseClick', () => countUp ? this.count++ : this.count--)
        this.on('MouseEnter', () => utils.showPointer())
        this.on('MouseLeave', () => utils.hidePointer())
    }

    paint(context) {
        super.paint(context)

        context.fillStyle = 'white'
        context.font = this.textHeight + 'px verdana'

        const width = context.measureText(this.count).width

        context.fillText(this.count, (this.width - width) / 2, (this.height + this.textHeight) / 2)
    }
}

export default Counter