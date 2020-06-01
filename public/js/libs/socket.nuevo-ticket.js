//Comando para establecer la conexión
var socket = io();


var label= $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log("Conectado al servidor");
});

socket.on('disconnect', function(){
    console.log("Desconectado del servidor!")
});

socket.on('estadoActual',(res)=>{
    console.log("estadoActual",res)
    label.text(res.actual);

})

$('button').on('click',function(){
    console.log("Click");

    socket.emit('siguienteTicket',null, function(siguienteTicket){
        label.text(siguienteTicket);
    });
})