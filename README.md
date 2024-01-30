# styled 
😎
To run the project, navigate to the directory and run one of the following yarn commands.

- cd Capstone
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios
- yarn web

# Common Errors:
try doing npm install/ yarn add lolmao
use npx expo --- not just expo install

# Rules
## Branches:

main: This branch is protected and requires merge request. Stand as where production code will live and will be use for deployment only. DO NOT PUSH TO THIS BRANCH

staging: This branch is protected and requires merge request. Stand as where development code will live. DO NOT PUSH TO THIS BRANCH

hotfix: You know that this is. Time crunch

name-docs: Documentation update

name-<issue>-<description>: Personal branch for any contributors to open up for merge request. The code need to pass all the test on CI/CD before requesting review.

<issue>: issue number of the branch. If this a feature/bug/anything, open an issue and write out a description as well as spec for the branch. This can potentially be empty then the name should be name-<description>
<description>: Make it short
