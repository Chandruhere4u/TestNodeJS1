const msg = {
    var1: "test message1",
    var2: "test message2",
    var3: "test message3",
    var4: function(){
        return "test message4";
    }

}

console.log(msg.var4());
console.log(msg['var1']);
