
const colorInput = document.getElementById('color-input')
const button = document.getElementById('button')
const schemeNameSelector = document.getElementById('scheme-selection')
const colorSection = document.getElementById('color-section')
const hexCodeSection = document.getElementById('hex-code-section')

// This event listener will add the colors onto the elements
button.addEventListener('click', function() {
    const colorValue = colorInput.value.substring(1)
    const selectedScheme = schemeNameSelector.value.toLowerCase()
    hexCodeSection.innerHTML = ' '
    getColorScheme(colorValue, selectedScheme)
})

// This function gets the specific color scheme using the hex and

function getColorScheme(hex, scheme) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${scheme}&count=5`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res =>  res.json())
    .then(data => {
        colorSection.innerHTML = ''
        data.colors.map(color => {
                colorSection.innerHTML += `<div class = "color" style = "background-color: ${color.hex.value}"></div>` //Renders the colors on the screens
                hexCodeSection.innerHTML += `<div class = "hex-code">${color.hex.value}</div>` //Renders the color hex values
        })
    })

}
