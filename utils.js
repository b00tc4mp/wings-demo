const utils = {
    showPointer() {
        const cursorStyle = document.createElement('style')
        cursorStyle.innerHTML = '* {cursor: pointer!important}'
        cursorStyle.id = 'cursor-style'
        document.head.appendChild(cursorStyle)
    },

    hidePointer() {
        document.getElementById('cursor-style').remove()
    }
}

export default utils