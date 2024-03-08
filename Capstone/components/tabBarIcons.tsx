import React from "react";
import { View } from "@/components/Themed";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ color }: { color: string }) => (
  <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    fill-opacity="0"
    style={{ backgroundColor: "transparent" }}
  >
    <Path
      d="M9.91999 2.83992L4.52999 7.03992C3.62999 7.73992 2.89999 9.22992 2.89999 10.3599V17.7699C2.89999 20.0899 4.78999 21.9899 7.10999 21.9899H18.69C21.01 21.9899 22.9 20.0899 22.9 17.7799V10.4999C22.9 9.28992 22.09 7.73992 21.1 7.04992L14.92 2.71992C13.52 1.73992 11.27 1.78992 9.91999 2.83992Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.9 17.99V14.99"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const CommunitiesIcon = ({ color }: { color: string }) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    style={{ backgroundColor: "transparent" }}
  >
    <Path
      d="M5.2 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7.168 3.876a2.998 2.998 0 01.329-4.989 3 3 0 013.335.237 3 3 0 01-3.664 4.752zM17.2 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM4.45 9h4.005c-.165.47-.255.975-.255 1.5H4.45a.75.75 0 00-.75.75c0 1.226.487 2.134 1.257 2.752a4.22 4.22 0 001.258.683 3.75 3.75 0 00-.797 1.302 5.597 5.597 0 01-1.4-.815C2.89 14.265 2.2 12.924 2.2 11.25A2.25 2.25 0 014.45 9zm5.652 0a3.001 3.001 0 105.2 3 3.001 3.001 0 00-5.2-3zm2.262.038A1.504 1.504 0 0114.2 10.5a1.5 1.5 0 11-1.836-1.462zm8.079 4.964a4.22 4.22 0 01-1.259.683c.352.375.624.818.797 1.302a5.68 5.68 0 001.401-.815c1.128-.907 1.818-2.248 1.818-3.922A2.25 2.25 0 0020.95 9h-4.005c.165.47.255.975.255 1.5h3.75a.75.75 0 01.75.75c0 1.226-.488 2.134-1.257 2.752zM16.45 15a2.25 2.25 0 012.25 2.25c0 1.674-.688 3.015-1.818 3.922-1.112.893-2.603 1.328-4.182 1.328-1.58 0-3.07-.435-4.182-1.328C7.39 20.265 6.7 18.924 6.7 17.25A2.244 2.244 0 018.95 15h7.5zm0 1.5h-7.5a.75.75 0 00-.75.75c0 1.226.488 2.134 1.257 2.753.789.633 1.923.997 3.243.997 1.32 0 2.454-.364 3.243-.997.77-.619 1.257-1.527 1.257-2.753a.75.75 0 00-.75-.75z"
      fill="#837B82"
    />
  </Svg>
);

const AddIcon = ({ color }: { color: string }) => (
  <Svg width="51" height="50" viewBox="0 0 51 50" fill="none">
    <Path
      d="M25.5 3.125C19.7202 3.19513 14.1968 5.52233 10.1096 9.60958C6.02233 13.6968 3.69514 19.2202 3.62501 25C3.69514 30.7798 6.02233 36.3032 10.1096 40.3904C14.1968 44.4777 19.7202 46.8049 25.5 46.875C31.2798 46.8049 36.8032 44.4777 40.8904 40.3904C44.9777 36.3032 47.3049 30.7798 47.375 25C47.3049 19.2202 44.9777 13.6968 40.8904 9.60958C36.8032 5.52233 31.2798 3.19513 25.5 3.125ZM38 26.5625H27.0625V37.5H23.9375V26.5625H13V23.4375H23.9375V12.5H27.0625V23.4375H38V26.5625Z"
      fill={color}
    />
  </Svg>
);

const WardrobeIcon = ({ color }: { color: string }) => (
  <Svg width={25} height={24} fill="none">
    <Path
      d="M6.3 2a2 2 0 00-2 2v15c0 1.11.89 2 2 2v1h2v-1h8v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 00-2-2h-12zm0 2h5v15h-5V4zm7 0h5v15h-5V4zm-5 6v3h2v-3h-2zm6 0v3h2v-3h-2z"
      fill="#837B82"
    />
  </Svg>
);

const ProfileIcon = ({ color }: { color: string }) => (
  <Svg width={25} height={24} fill="none">
    <Path
      d="M12.1 12a5 5 0 100-10 5 5 0 000 10zM12.1 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5z"
      fill="#684440"
    />
  </Svg>
);

const TabIcon = ({ name, color }: { name: string; color: string }) => {
  const IconComponent = {
    home: HomeIcon,
    communities: CommunitiesIcon,
    add: AddIcon,
    wardrobe: WardrobeIcon,
    profile: ProfileIcon,
  }[name];

  return <View>{IconComponent ? <IconComponent color={color} /> : null}</View>;
};

export default TabIcon;
