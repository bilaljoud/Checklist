// const xhr = new XMLHttpRequest();
const url = 'http://localhost:5000'

const button = document.querySelector('.btn')
const input = document.querySelector('#text-box')
const ul = document.querySelector('#list')
let taskNumber = 0
let date = new Date()

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
        // localStorage.setItem(itemNumber, item)

        const task = makeDataIntoObject(item);
        giveDataToServer('http://localhost:5000', task);

        input.value = ''
    }
}

function removeFromList(checkbox) {
    if (checkbox.checked == true) {
        checkbox.parentElement.style.textDecoration = 'line-through'
        // checkbox.parentElement.style.opacity = '0'
        checkbox.parentElement.style.animation = 'moveRight 400ms';
        setTimeout(() => ul.removeChild(checkbox.parentElement), 390)
    
    }
}

// async function getServerData(data) {
//     const get = await fetch('http://localhost:5000', {
//         method: 'GET'
//     });
//     console.log(await get.json());
// }

async function giveDataToServer(url, data) {
    const push = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    });
    console.log(await push.json());
}

function makeDataIntoObject(item) {
    const task = {
        taskNum: taskNumber,
        dateTime: date,
        task: item
    }
    taskNumber++

    return task
}