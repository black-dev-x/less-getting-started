registerPlugin({
    install: function(less, pluginManager, functions) {
        functions.add("ten", function(){
            return 10;
        })
    }
});