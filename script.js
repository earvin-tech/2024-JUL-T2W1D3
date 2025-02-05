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

        costumesContainerList.appendChild(newCostumeEntry)
    })

    costumesContainer.appendChild(costumesContainerList)
}