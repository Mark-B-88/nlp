const handleSubmit = (e) => {
    e.preventDefault()

    const formText = document.getElementById('name').value
    convertData(formText)
}

const convertData = (formText) => {
    fetch('/userData', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formText })
    })
    .then(res => res.json())
    .then((res) => {
        let el = document.getElementById('results')
        Client.changeUI(el, res)
    })
}

export { handleSubmit }
export { convertData }