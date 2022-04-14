console.log('abc')

const fortuneButton = document.getElementById('fortuneButton')
fortuneButton.addEventListener("click",()=>axios.get("http://localhost:4000/api/fortune").then(res => {
    alert(res.data)
}))