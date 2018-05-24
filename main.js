// window.jQuery = function(nodeOrSelector){
//     let nodes = {}
//     ndoes.addClass = function(){}
//     nodes.html = function(){}
//     return nodes
// }

// window.jQuery.ajax = function({url, method, body, successFn, failFn, headers}){

//     let request = new XMLHttpRequest()
//     request.open(method, url)  //初始化请求
//     for(let key in headers){
//         let value = headers[key]
//         request.setRequestHeader(key, value)
//     }
//     request.onreadystatechange = () =>{
//        if(request.readyState === 4){
//            if(request.status >= 200 && request.status <= 300){
//                successFn.call(undefined, request.responseText)
//            }else if(request.status >= 400){
//               failFn.call(undefined, request)
//            }
//        }
//     }
//     request.send(body)  //发送请求
// }

// window.$ = window.jQuery

myButton.addEventListener('click', (e) =>{
    $.ajax({
        url: '/xxx',
        method: 'post',
     }).then(
        (responseText)=>{
            console.log(responseText);
            return 'success'
        },
        (response)=>{
            console.log(response);
            return 'fail'
        }
     ).then(
         (上一次的结果) => {
             console.log(上一次的结果)
         },
         (上一次的结果) => {
            console.log(上一次的结果)
        }
     )
})
        



// jQuery写法
// let request = new XMLHttpRequest()    
//     request.open('GET', '/xxx')  //初始化请求
//     request.send()  //发送请求
//     request.onreadystatechange = () =>{
//            if(request.readyState === 4){       
//                if(request.status >= 200 && request.status <= 300){               
//                    let string = request.responseText             
//                    let object = window.JSON.parse(string)    //JSON.parse()浏览器提供          
//                }
//            }
//      }

//原生JS写法
// myButton.addEventListener('click', (e) =>{
//     let request = new XMLHttpRequest()
//     request.open('post', '/xxx')  //初始化请求
//     //设置请求头  第二部分
//     request.setRequestHeader('User-Agent', 'zink')
//     request.send('设置request第四部分')  //发送请求
//     request.onreadystatechange = () =>{
//        if(request.readyState === 4){
//            console.log('请求响应都完毕了')
//            if(request.status >= 200 && request.status <= 300){
//                console.log('请求成功')
//                console.log(request.responseText)
//                let string = request.responseText
//                // 把符合 JSON 语法的字符串
//                // 转换成 JS 对应的值
//                let object = window.JSON.parse(string)
//                console.log(object)
//                console.log(object.note)
//                console.log(object.note.to)
//            }else if(request.status >= 400){
//                console.log('请求失败')
//            }
//        }
//     }
// })
