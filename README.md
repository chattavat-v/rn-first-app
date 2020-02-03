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

## NOTE
  - [Basic component](https://facebook.github.io/react-native/docs/components-and-apis) 

## TRIC
  - key board shortcut vs code
  - code -> preferences -> keyboard shortcut -> search format document -> set fn+f1 
  - select prettier

## TOOLS
  - ScrollView สามารถ slide screen ได้
  - FlatList เหมาะกับกรณีมี หลาย parameter ที่อยากจะ render item * เรื่องของ key ถ้าตั้ง key default ไม่จำเป็นต้องใส่ keyExtractor={} เพื่อระบุ key แต่ถ้าเปลี่ยน key เป็นชื่ออื่นจะต้องใส่ keyExtractor