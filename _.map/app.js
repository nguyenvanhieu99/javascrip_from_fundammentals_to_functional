var _={}
_.each=function(list,callback){
    if(Array.isArray(list)){
        //loop through array
        for(var i=0;i<list.length;i++){
            callback(list[i],i,list);``
        }
    }
    else{
        for(let key in list ){
            callback(list[key],key,list);
        }
        // loop through obj
    }
}
var x=_.each(['hieu','thao','hien'],function(name,i,list){
    if(!list[i+1]){
        console.log(name,"la tre nhat ");
    }else{
        console.log(name,'lon hon ',list[i+1])
    }
})

var app={
    'suspects':[
        {
            name:"hieu ",
            color:"ping"
        },
        {
            name:"lan",
            color:"time"
        }
    ]
}
function createobject(name){
    return {
        name:name,
        color:name.split(' ')[1],
        speak(){
            console.log("my name is ",name);
        }
    }
};
var sub=['mai','Hoa','lan']
var up=[];
_.each(sub,function(name){
    up.push(createobject(name));
});

app['suspects'];