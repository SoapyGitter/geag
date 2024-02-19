list = [];

function importValues() {
    const nameInputElement = document.getElementById("nameInput");
    const dateInputElement = document.getElementById("dateInput");
    const selectedInputElement = document.getElementById("selected");


    let obj = {
        name: nameInputElement.value,
        date: dateInputElement.value,
        status: selectedInputElement.value
    };

    list.push(obj)

    drawList()
}


function drawList() {
    const listElement = document.getElementById("list");
    if(listElement)
        listElement.remove();

    const mainElement = document.getElementById("main");
    const listCreated = document.createElement("div");
    listCreated.classList.add('list')
    listCreated.id = "list";



    list.forEach((element, i) => {
        let statusColor = "blue";
        if (element.status == "closed") {
            statusColor = 'green';
        }
        listCreated.insertAdjacentHTML('beforeend',
            `
            <div class="item">
                <p>
                    ${element.name}
                </p>
                <p>
                    ${element.date}
                </p>
                <select class="status">
                    ${element.status}
                    <option  value="open">open</option>
                    <option  value="closed">closed</option>

                </select>
                <div class="delete-button-container">
                <button onclick=deleteItem(${i}) class="center button2" >
                    
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff3d3d" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                </button>
                
            </div>
                
                
                
            </div>
            `
        )
    });



    mainElement.appendChild(listCreated);
}

function deleteItem(i) {
    list.splice(i, 1);
    drawList()
}


