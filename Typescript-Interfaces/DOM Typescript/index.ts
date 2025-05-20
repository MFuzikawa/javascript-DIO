/* no typescript é necessario explicitar o que é cada elemento */
const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', (e) =>{
    const i = e?.currentTarget as HTMLInputElement
    console.log(i.value)
})