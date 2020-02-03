## Install Expo 
  - npm install expo-cli --global
  - ref. [EXPO](https://expo.io/learn)

## Create Project 
  - expo init `project name`
  - cd folder project
  - expo start
  - Hint` if error watchman 
    - please install [watchman](https://facebook.github.io/watchman/docs/install.html)
    - after installed run command `watchman`

## simulator IOS
  - check your mac has xcode ?
  - if not has app, please install xcode and download from app store
  - restart mac book

## simulator ANDRIOD
  - download android sdk
  - set path 
    - open command sudo vi ~/.bash_profile
    - key i for edit 
    - export ANDROID_SDK=/Users/myuser/Library/Android/sdk
    - export PATH=/Users/myuser/Library/Android/sdk/platform-tools:$PATH
    - ref. [Reference](https://docs.expo.io/versions/v36.0.0/workflow/android-studio-emulator)
    - restart mac book

## How To Debug REACT-NATIVE
  - console.log();
  - reloading cmd + r
  - IOS
    - cmd + d 
    - debug Remote JS
    - open link http://localhost:19002/debugger-ui
    - if stop debugger cmd + d Stop Remote JS Debugging

  - ANDROID
    - cmd + m
    - debug JS Remotely 
    - open link http://localhost:19002/debugger-ui
    - if stop debugger cmd + m Stop Remote JS Debugging

  - react native debugger 
    - can use with developer include redux in project
    - open react native debugger 
    - cmd + t
    - input port 19002
    - and oprn debug remote js in IOS or Android
