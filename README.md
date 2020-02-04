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

## INCLUDE FONT IN PROJECT AND EXPO

You can do this in two different ways and it's important to understand the difference:

1) npm install --save expo-font

2) expo install expo-font

2) is recommended - but what is the difference?

npm install installs a packages a dependency into the project - we use this command for most packages which we do install.

Some packages (typically all expo-* packages) can break the app if you install the wrong version though - because they closely work together with Expo itself.

To get the right package version for the specific version of Expo your app relies on, expo install is the right "tool". It also just executes npm install behind the scenes but it picks a specific (i.e. the correct) version of the package to be installed.

Hence for all expo-* packages, npm install can be used but expo install is the preferred command to avoid errors. Of course you could always try npm install first and only run expo install if you thereafter do face any errors.