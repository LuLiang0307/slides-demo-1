let n
初始化()

var timer = setInterval(() => {
   makeLeave(getImage(n))
        .one('transitionend',(e)=>{
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n += 1
},2000)

$(document).on('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(() => {//再次记下计时器，方便下次使用
            makeLeave(getImage(n))
                 .one('transitionend',(e)=>{
                     makeEnter($(e.currentTarget))
                 })
             makeCurrent(getImage(n+1))
             n += 1
         },2000) 
    }
})






function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n = 3    
        }
    }
    return n
}
function 初始化(){
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}
function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeEnter($node){
    return $node.removeClass('current leave').addClass('enter')
}
function makeLeave($node){
    return $node.removeClass('enter current').addClass('leave')
}
function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}