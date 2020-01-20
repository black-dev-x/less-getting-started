registerPlugin({
    install: function(less, pluginManager, functions) {
        functions.add("ten", function(){
            return 10;
        })
        functions.add("avg", function(){
            let total = 0;
            for (let index = 0; index < arguments.length; index++) {
                total += arguments[index]
            }
            return total;
        })
    }
});