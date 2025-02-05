console.log("Hello")

// let's say this is the data we obtained from some API
const dataArray = [
    "Frankenstein",
    "Dracula",
    "Vampire",
    "Chucky",
    "T-Rex",
    "Voldemort",
    "Wednesday"
]

const costumesContainer = document.getElementById("costumesContainer")

console.log(costumesContainer)

renderData()

function renderData() {
    const costumesContainerList = document.createElement("ul")

    dataArray.forEach((costume) => {
        // let's see what we are dealing with
        console.log(costume)

        // create list items
        const newCostumeEntry = document.createElement("li")
        newCostumeEntry.innerText = costume

        // Create and append a remove button
        const removeButton = document.createElement("button")
        removeButton.innerText = `Remove ${costume}`

        // Add the functionality to the remove button 
        removeButton.addEventListener("click", () => {
            removeCostumeFromList(costumesContainerList, newCostumeEntry)
        })

        newCostumeEntry.appendChild(removeButton)

        costumesContainerList.appendChild(newCostumeEntry)
    })

    costumesContainer.appendChild(costumesContainerList)
}

function removeCostumeFromList(list, entry) {
    list.removeChild(entry)
}