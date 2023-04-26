const num = document.querySelector('.donate-now__cart--para')
const copyBtn = document.querySelector('.donate-now__cart--copy')
const coppiedBox = document.querySelector('.coppied__box')
let numsArr = []


function changeNums(){
    
    const data = num.textContent.replace(/(.{4})/g, '$1 ')
    
    num.textContent = data

    
    
}


changeNums()



copyBtn.addEventListener('click',function(e){
    e.preventDefault()
    navigator.clipboard.writeText(num.textContent)

    if(navigator.clipboard.writeText){
        coppiedBox.classList.remove('dis-none')

        setTimeout(()=>{
            coppiedBox.classList.add('dis-none')
        },1000)

    }
})


















