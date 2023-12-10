const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'A bad day does not equal a bad life. Not all thoughts are true. The only way out is through. Be gentle with yourself. You can do it!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
