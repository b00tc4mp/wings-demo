import Wings from '@b00tc4mp/wings'
import Counter from './counter'

const { View } = Wings

const view = new View(document.getElementById('view'))

// counter
const counter = new Counter(0)

counter.x = view.width - counter.width * 2
counter.y = counter.height

view.add(counter)

// counter 2
const counter2 = new Counter(0, false)

counter2.x = counter2.width
counter2.y = view.height - counter2.height * 2

view.add(counter2)

