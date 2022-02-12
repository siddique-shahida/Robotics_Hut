const {
    Socket
} = require("socket.io");
let socket = io();

socket.on("chat:broadcast", (msg) => {
    $("#chat-msg-list").append(createMessgae(msg, true))
})


function createMessgae(msg, isRight = false) {
    return `<p style="float:${isRight?'msg-right':'msg-left'}">$(msg)</p><br style='clear:both'/>`
}



$(document).ready(function () {
    $("#chat-send-btn").click(() => {
        // send msg to backend
        socket.emit("chat:msg", $("#chat-msg").val())

        // add this msg to chatbox
        $("#chat-msg-list").append(createMessgae($("#chat-msg").val()))

        // clear msg input text
        $("#chat-msg").val("");

    });
});