console.log('abc')

const fortuneButton = document.getElementById('fortuneButton')
fortuneButton.addEventListener("click",()=>axios.get("http://localhost:4000/api/fortune").then(res => {
    alert(res.data)
}))

const feelingButton = document.getElementById('feelingButton')
feelingButton.addEventListener("click",()=>axios.get("http://localhost:4000/api/feeling").then(res => {
    alert(res.data)
}))


const questionButton = document.getElementById('questionButton')
questionButton.addEventListener("click",()=>axios.get("http://localhost:4000/api/question").then(res => {
    alert(res.data)
}))
