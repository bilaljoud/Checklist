const button = document.querySelector('.btn')
const input = document.querySelector('#text-box')
const ul = document.querySelector('#list')
let itemNumber = 0

button.addEventListener('click', addToList)

function addToList(event) {
    event.preventDefault()
    const item = input.value
    if (item === '') {
        return
    } else {
        const node = document.createElement('li')
        node.classList.add('list-item')
        // node.attributes.add('oncheck')
        node.innerHTML = '<input type="checkbox" class="chk"  onchange="removeFromList(this)" />'
        const textNode = document.createTextNode(` ${item}`)
        node.appendChild(textNode)
        document.getElementById('list').appendChild(node)
        localStorage.setItem(itemNumber, item)
        input.value = ''

        function deleteFromList() {
            localStorage.removeItem(itemNumber)
        }
        itemNumber++

        return deleteFromList
    }
}

function removeFromList(checkbox) {
    if (checkbox.checked == true) {
        checkbox.parentElement.style.textDecoration = 'line-through'
        // checkbox.parentElement.style.opacity = '0'
        checkbox.parentElement.style.animation = 'moveRight 400ms';
        setTimeout(() => ul.removeChild(checkbox.parentElement), 390)
    
        addToList.deleteFromList();

    }
}

