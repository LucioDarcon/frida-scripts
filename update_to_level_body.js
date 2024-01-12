/**
 * @author @luciodarcon
 */
Java.perform(function() {
    var HttpLoggingInterceptor = Java.use('okhttp3.logging.HttpLoggingInterceptor');

     var level = Java.use('okhttp3.logging.HttpLoggingInterceptor$Level');

    var logginInterceptorOverload = HttpLoggingInterceptor.setLevel.overload('okhttp3.logging.HttpLoggingInterceptor$Level')

    logginInterceptorOverload.implementation = function(arg01) {
        return logginInterceptorOverload.call(this, level.BODY.value)
    }

});