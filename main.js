myButton.addEventListener('click', (e) =>{
    let request = new XMLHttpRequest()
    request.onreadystatechange = () =>{
       if(request.readyState === 4){
           console.log('请求响应都完毕了')
           if(request.status >= 200 && request.status <= 300){
               console.log('请求成功')
               console.log(request.responseText)
               let string = request.responseText
               // 把符合 JSON 语法的字符串
               // 转换成 JS 对应的值
               let object = window.JSON.parse(string)
               console.log(object)
               console.log(object.note)
               console.log(object.note.to)
           }else if(request.status >= 400){
               console.log('请求失败')
           }
       }
    }
    request.open('GET', 'http://jack.com:8002/xxx')  //初始化请求
    request.send()  //发送请求
    
})
