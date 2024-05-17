[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#welcome-to-your-expo-app-)

# ➤ Welcome to Your Expo App 🎉👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). This project serves as a foundation for developing cross-platform applications with ease and efficiency. 🚀

## ➤ Table of Contents 📚
- [Get Started](#-get-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup .env File](#setup-env-file)
  - [Running the App](#running-the-app)
- [Project Structure](#-project-structure)
- [Development Workflow](#-development-workflow)
  - [Using the Development Build](#using-the-development-build)
  - [Using Emulators and Simulators](#using-emulators-and-simulators)
  - [Using Expo Go](#using-expo-go)
- [Resetting the Project](#-resetting-the-project)
- [Learn More](#-learn-more)
- [Join the Community](#-join-the-community)
- [Contributing](#-contributing)
- [License](#-license)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#get-started)

## ➤ Get Started 🚀

To start working on this project, follow these steps:

### Prerequisites 🛠️

Ensure you have the following installed on your development machine:

- Node.js (>= 12.x.x) 🌳
- npm (comes with Node.js) or Yarn 📦
- Expo CLI: Install it globally using `npm install -g expo-cli` 🏗️

### Installation 💻

1. Clone the repository 🐙

   ```bash
   git clone https://github.com/AdityaKhowalGithub/Styled.git
   cd Styled
   ```

2. Install dependencies 📦

   ```bash
   npm install
   ```
### Setup .env File 🗂️

To set up your environment variables, follow these steps:

1. Create a `.env` file in the root directory of your project. 📄
2. Copy the contents from `.env.example` and paste them into your newly created `.env` file. 📋
3. Replace the placeholder values with your actual configuration values. 🔧

Here is an example of how your `.env` file should look:

```plaintext
EXPO_PUBLIC_API_KEY="your-firebase-api-key"
EXPO_PUBLIC_AUTH_DOMAIN="your-firebase-auth-domain"
EXPO_PUBLIC_PROJECT_ID="your-firebase-project-id"
EXPO_PUBLIC_STORAGE_BUCKET="your-firebase-storage-bucket"
EXPO_PUBLIC_MESSAGING_SENDER_ID="your-firebase-messaging-sender-id"
EXPO_PUBLIC_APP_ID="your-firebase-app-id"
EXPO_PUBLIC_MEASUREMENT_ID="your-firebase-measurement-id"
EXPO_PUBLIC_WEB_CLIENT_ID="your-web-client-id"
EXPO_PUBLIC_WEB_CLIENT_SECRET="your-web-client-secret"
EXPO_PUBLIC_BG_API_KEY="your-removebg-api-key"
```

Replace the placeholder values with your actual Firebase and RemoveBG API credentials. **Do not expose or share your API keys publicly.** 🚨

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#development-workflow)

### Running the App 🏃‍♂️

To start the app, run:

```bash
npx expo start
```

This command will launch the Expo development tools in your browser. In the output, you'll find options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/) 🛠️
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/) 🤖
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/) 🍏
- [Expo Go](https://expo.dev/go) 📱, a limited sandbox for trying out app development with Expo

Start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction). 🗺️

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#project-structure)

## ➤ Project Structure 🗂️

Here's a detailed overview of the project's structure:

```
Styled/
├── .expo/
├── app/
│   ├── (auth)/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── add.tsx
│   │   ├── Communities.tsx
│   │   ├── index.tsx
│   │   ├── profile.tsx
│   │   └── Wardrobe.tsx
│   ├── _layout.tsx
│   ├── +html.tsx
│   └── +not-found.tsx
├── assets/
│   ├── images/
│   └── fonts/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ...
├── constants/
│   └── colors.ts
├── context/
│   └── auth.tsx
├── hooks/
├── node_modules/
├── scripts/
├── services/
│   └── firebaseconfig.ts
├── .env
├── .gitignore
├── app.json
├── blueprint.md
├── eas.json
├── expo-env.d.ts
├── package-lock.json
├── package.json
├── README.md
├── store.tsx
└── tsconfig.json
```

- **.expo/**: Expo-specific files.
- **app/**: Main application files, including authentication and tab navigation.
- **assets/**: Contains static assets like images and fonts.
- **components/**: Reusable UI components.
- **constants/**: Application-wide constants.
- **context/**: Context for global state management. Currently used for an auth provider that wraps the entire application.
- **hooks/**: Custom hooks.
- **scripts/**: Custom scripts.
- **services/**: Services like Firebase configuration.
- **.env**: Environment variables.
- **.gitignore**: Specifies files to be ignored by Git.
- **app.json**: Expo configuration.
- **blueprint.md**: Project blueprint.
- **eas.json**: Expo Application Services configuration.
- **expo-env.d.ts**: TypeScript definitions for Expo.
- **package-lock.json**: Dependency tree lock file.
- **package.json**: Project dependencies and scripts.
- **README.md**: Project documentation.
- **store.tsx**: Redux or other state management store.
- **tsconfig.json**: TypeScript configuration. Things like import * from "@/.." that is where the @ is defined.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#setup-env-file)


## ➤ Development Workflow 🔄

### Using the Development Build 🛠️

The development build provides a near-production version of your app for testing purposes. To create and use a development build, refer to the [Expo documentation](https://docs.expo.dev/develop/development-builds/introduction/).

### Using Emulators and Simulators 📱

For testing on Android and iOS, you can use emulators and simulators:

- **Android Emulator**: Follow the [setup guide](https://docs.expo.dev/workflow/android-studio-emulator/) to configure the Android emulator.
- **iOS Simulator**: Follow the [setup guide](https://docs.expo.dev/workflow/ios-simulator/) to configure the iOS simulator.

### Using Expo Go 🌐

Expo Go allows you to run your app on a physical device without compiling native code. Install the Expo Go app from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) or [Apple App Store](https://apps.apple.com/app/expo-go/id982107779).

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#resetting-the-project)

## ➤ Resetting the Project 🔄

When you're ready to start fresh, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#learn-more)

## ➤ Learn More 📘

To learn more about developing your project with Expo, explore the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or delve into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial to create a project that runs on Android, iOS, and the web.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#join-the-community)

## ➤ Join the Community 🌍

Join our community of developers creating universal apps:

- [Expo on GitHub](https://github.com

/expo/expo): View our open-source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributing)

## ➤ Contributing 🤝

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

