
/**
 * @author @luciodarcon
 */

Java.perform(function() {

    var settingSecure = Java.use("android.provider.Settings$Secure")

    var func1 = settingSecure.getInt.overload('android.content.ContentResolver', 'java.lang.String')

    var func2 = settingSecure.getInt.overload('android.content.ContentResolver', 'java.lang.String', 'int')

    func1.implementation = function(arg01, arg02) {
        console.log("\nFunção de sobrecarga - Iniciada")
        return 0
    }

    func2.implementation = function(arg01, arg02, arg03) {
        console.log("\nFunção de sobrecarga 2 - Iniciada")
        return 0
    }

    var contentIntent = Java.use("android.content.Intent")
    var activityResolver = contentIntent.resolveActivity.overload('android.content.pm.PackageManager')

    activityResolver.implementation = function(arg0) {

        console.log("\nFunção de vizualização settings - Iniciada")
    

        var result = activityResolver.call(this, arg0).toString()

        if (result.includes("develop")) 
            return null
        
       

        return activityResolver.call(this, arg0)
    }
   
});