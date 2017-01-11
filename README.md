# React Native CodePush Example

## Download
[coba2.apk](https://github.com/dwicao/react-native-codepush-example/releases/download/v1.0/coba2.apk)

## Install at local
Open Terminal, then type command:  
> git clone https://github.com/dwicao/react-native-codepush-example.git

Go to project folder :
> cd react-native-codepush-example

Type following command :  
> npm install  

You must have ANDROID_HOME environtment variable, to check if you already have, type in your terminal :  
> echo $ANDROID_HOME  

If blank, you can read at [HERE](https://goo.gl/XSBmwE)  

Make sure you have already installed React Native globally by running this command :  
> sudo npm install -g react-native-cli

In your terminal type this to make sure react-native know each addons modules in this app :  
> react-native link

To get CODEPUSH_KEY  you must create a CodePush account, read instruction [HERE](https://microsoft.github.io/code-push/)

Register the app with the CodePush service:
> code-push app add coba2

Create new file at `react-native-codepush-example/android/gradle.properties` and fill with this lines of code :  

```
android.useDeprecatedNdk = true
CODEPUSH_DEBUG_KEY = "insert_your_code_here"
CODEPUSH_RELEASE_KEY = "insert_your_code_here"
```   

At this point, you should be able to run the project.
To run your project on your device/emulator at Debug configuration, type :
> npm run android-dev  

Or if you want to run at iOS simulator, run:  
> react-native run-ios
 
If you have error message like `Execution failed for task ':app:dexDebug'.` run this on your terminal :  
> npm run android-clean

To build .apk file just type :  
> npm run android-release  

You must sign .apk with keystore, to do this just type in your terminal :  
> npm run android-signer

The .apk file is located at `react-native-codepush-example/android/app/build/outputs/apk/app-release-unsigned.apk`

To push changes Over The Air via CodePush:
> npm run android-codepush-production

For another command, please read at table below:


##  Available Command  

| npm run ... | Description |
| --- | --- |
| adb-reverse | Reset port ADB to tcp:8081 |
| ios-bundle | Bundle with entry file index.ios.js |
| ios-build  | Run ios project with “Release” configuration |
| ios-codepush-staging | Push changes your bundle to CodePush Staging environtment |
| ios-codepush-production | Push changes your bundle to CodePush Production environtment |
| android-clean | Fix building android if preDexDebug error |
| android-build-debug | Build android .apk with “Debug” configuration |
| android-release  | Build android .apk with “Release” configuration  |
| android-signkey  | Generate keystore android  |
| android-signer | To sign app-release-unsigned.apk with random keystore |
| android-dev | Run android development-mode on simulator |
| android-bundle | Bundle with entry file index.android.js |
| codepush-key | View your staging and development key at CodePush |
| android-codepush-staging | Push changes your bundle to CodePush Staging environtment |
| android-codepush-production | Push changes your bundle to CodePush Production environtment |
 
 
## License
**MIT**  


