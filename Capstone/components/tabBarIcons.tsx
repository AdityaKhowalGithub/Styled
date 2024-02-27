import React from 'react';
import { View } from '@/components/Themed';
import Svg, { Path } from 'react-native-svg';
interface TabIconProps {
    name: string;
    color: string;
}

// const HomeIcon = ({ color }: { color: string }) => (
//   <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
//   <Path d="M9.91999 2.83992L4.52999 7.03992C3.62999 7.73992 2.89999 9.22992 2.89999 10.3599V17.7699C2.89999 20.0899 4.78999 21.9899 7.10999 21.9899H18.69C21.01 21.9899 22.9 20.0899 22.9 17.7799V10.4999C22.9 9.28992 22.09 7.73992 21.1 7.04992L14.92 2.71992C13.52 1.73992 11.27 1.78992 9.91999 2.83992Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//   <Path d="M12.9 17.99V14.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </Svg>

// );

const HomeIcon = ({ color }: { color: string }) => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none"  style={{ backgroundColor: 'transparent' }}>
    <Path d="M9.91999 2.83992L4.52999 7.03992C3.62999 7.73992 2.89999 9.22992 2.89999 10.3599V17.7699C2.89999 20.0899 4.78999 21.9899 7.10999 21.9899H18.69C21.01 21.9899 22.9 20.0899 22.9 17.7799V10.4999C22.9 9.28992 22.09 7.73992 21.1 7.04992L14.92 2.71992C13.52 1.73992 11.27 1.78992 9.91999 2.83992Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12.9 17.99V14.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
const CommunitiesIcon = ({ color }: { color: string }) => (
  <Svg

      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      style={{ backgroundColor: 'transparent' }}
    >
      <Path
        d="M5.2 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7.168 3.876a2.998 2.998 0 01.329-4.989 3 3 0 013.335.237 3 3 0 01-3.664 4.752zM17.2 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM4.45 9h4.005c-.165.47-.255.975-.255 1.5H4.45a.75.75 0 00-.75.75c0 1.226.487 2.134 1.257 2.752a4.22 4.22 0 001.258.683 3.75 3.75 0 00-.797 1.302 5.597 5.597 0 01-1.4-.815C2.89 14.265 2.2 12.924 2.2 11.25A2.25 2.25 0 014.45 9zm5.652 0a3.001 3.001 0 105.2 3 3.001 3.001 0 00-5.2-3zm2.262.038A1.504 1.504 0 0114.2 10.5a1.5 1.5 0 11-1.836-1.462zm8.079 4.964a4.22 4.22 0 01-1.259.683c.352.375.624.818.797 1.302a5.68 5.68 0 001.401-.815c1.128-.907 1.818-2.248 1.818-3.922A2.25 2.25 0 0020.95 9h-4.005c.165.47.255.975.255 1.5h3.75a.75.75 0 01.75.75c0 1.226-.488 2.134-1.257 2.752zM16.45 15a2.25 2.25 0 012.25 2.25c0 1.674-.688 3.015-1.818 3.922-1.112.893-2.603 1.328-4.182 1.328-1.58 0-3.07-.435-4.182-1.328C7.39 20.265 6.7 18.924 6.7 17.25A2.244 2.244 0 018.95 15h7.5zm0 1.5h-7.5a.75.75 0 00-.75.75c0 1.226.488 2.134 1.257 2.753.789.633 1.923.997 3.243.997 1.32 0 2.454-.364 3.243-.997.77-.619 1.257-1.527 1.257-2.753a.75.75 0 00-.75-.75z"
        fill="#837B82"
      />
    </Svg>
);

const AddIcon = ({ color }: { color: string }) => (
  <Svg  width="51" height="50" viewBox="0 0 51 50" fill="none">
    <Path d="M25.5 3.125C19.7202 3.19513 14.1968 5.52233 10.1096 9.60958C6.02233 13.6968 3.69514 19.2202 3.62501 25C3.69514 30.7798 6.02233 36.3032 10.1096 40.3904C14.1968 44.4777 19.7202 46.8049 25.5 46.875C31.2798 46.8049 36.8032 44.4777 40.8904 40.3904C44.9777 36.3032 47.3049 30.7798 47.375 25C47.3049 19.2202 44.9777 13.6968 40.8904 9.60958C36.8032 5.52233 31.2798 3.19513 25.5 3.125ZM38 26.5625H27.0625V37.5H23.9375V26.5625H13V23.4375H23.9375V12.5H27.0625V23.4375H38V26.5625Z" fill={color}/>
  </Svg>
);

const WardrobeIcon = ({ color }: { color: string }) => (
  <Svg
  width={25}
  height={24}
  fill="none"

>
  <Path
    d="M6.3 2a2 2 0 00-2 2v15c0 1.11.89 2 2 2v1h2v-1h8v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 00-2-2h-12zm0 2h5v15h-5V4zm7 0h5v15h-5V4zm-5 6v3h2v-3h-2zm6 0v3h2v-3h-2z"
    fill="#837B82"
  />
</Svg>  
);

const ProfileIcon = ({ color }: { color: string }) => (
  <Svg
  width={25}
  height={24}
  fill="none"

>
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

  return (
    <View>
      {IconComponent ? <IconComponent color={color} /> : null}
    </View>
  );
};

export default TabIcon;

// const icons: { [key: string]: string } = {
//     home: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//     <path d="M9.91999 2.83992L4.52999 7.03992C3.62999 7.73992 2.89999 9.22992 2.89999 10.3599V17.7699C2.89999 20.0899 4.78999 21.9899 7.10999 21.9899H18.69C21.01 21.9899 22.9 20.0899 22.9 17.7799V10.4999C22.9 9.28992 22.09 7.73992 21.1 7.04992L14.92 2.71992C13.52 1.73992 11.27 1.78992 9.91999 2.83992Z" stroke="#837B82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M12.9 17.99V14.99" stroke="#837B82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>`,
//     communities: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//     <path d="M5.2 4.50002C5.2 3.70437 5.51607 2.94131 6.07868 2.3787C6.64129 1.81609 7.40436 1.50002 8.2 1.50002C8.99565 1.50002 9.75872 1.81609 10.3213 2.3787C10.8839 2.94131 11.2 3.70437 11.2 4.50002C11.2 5.29567 10.8839 6.05873 10.3213 6.62134C9.75872 7.18395 8.99565 7.50002 8.2 7.50002C7.40436 7.50002 6.64129 7.18395 6.07868 6.62134C5.51607 6.05873 5.2 5.29567 5.2 4.50002ZM8.2 3.00002C7.80218 3.00002 7.42065 3.15805 7.13934 3.43936C6.85804 3.72066 6.7 4.10219 6.7 4.50002C6.7 4.89784 6.85804 5.27937 7.13934 5.56068C7.42065 5.84198 7.80218 6.00002 8.2 6.00002C8.59783 6.00002 8.97936 5.84198 9.26066 5.56068C9.54197 5.27937 9.7 4.89784 9.7 4.50002C9.7 4.10219 9.54197 3.72066 9.26066 3.43936C8.97936 3.15805 8.59783 3.00002 8.2 3.00002ZM15.3685 6.87602C15.0542 6.63631 14.7904 6.33686 14.5923 5.99488C14.3941 5.65291 14.2655 5.27514 14.2137 4.88329C14.162 4.49145 14.1882 4.09324 14.2909 3.71156C14.3936 3.32987 14.5706 2.97224 14.8119 2.6592C15.0532 2.34616 15.354 2.08389 15.697 1.88745C16.04 1.69102 16.4184 1.5643 16.8105 1.51457C17.2026 1.46483 17.6006 1.49307 17.9818 1.59766C18.363 1.70225 18.7197 1.88113 19.0315 2.12402C19.6454 2.61512 20.0421 3.32761 20.136 4.10817C20.23 4.88873 20.0138 5.67499 19.5339 6.29776C19.0541 6.92053 18.3489 7.33005 17.5702 7.43819C16.7915 7.54633 15.9999 7.34446 15.3685 6.87602ZM17.2 3.00002C16.8022 3.00002 16.4206 3.15805 16.1393 3.43936C15.858 3.72066 15.7 4.10219 15.7 4.50002C15.7 4.89784 15.858 5.27937 16.1393 5.56068C16.4206 5.84198 16.8022 6.00002 17.2 6.00002C17.5978 6.00002 17.9794 5.84198 18.2607 5.56068C18.542 5.27937 18.7 4.89784 18.7 4.50002C18.7 4.10219 18.542 3.72066 18.2607 3.43936C17.9794 3.15805 17.5978 3.00002 17.2 3.00002ZM4.45 9.00002H8.455C8.29 9.46952 8.2 9.97502 8.2 10.5H4.45C4.25109 10.5 4.06033 10.579 3.91967 10.7197C3.77902 10.8603 3.7 11.0511 3.7 11.25C3.7 12.4755 4.1875 13.3845 4.957 14.0025C5.311 14.2875 5.7355 14.517 6.2155 14.685C5.86302 15.0597 5.59139 15.5029 5.4175 15.987C4.91401 15.7848 4.44258 15.5104 4.018 15.1725C2.89 14.265 2.2 12.924 2.2 11.25C2.2 10.6533 2.43706 10.081 2.85901 9.65903C3.28097 9.23707 3.85327 9.00002 4.45 9.00002ZM10.102 9.00002C9.70418 9.68945 9.59652 10.5087 9.80272 11.2775C10.0089 12.0463 10.5121 12.7017 11.2015 13.0995C11.8909 13.4973 12.7102 13.605 13.479 13.3988C14.2478 13.1926 14.9032 12.6894 15.301 12C15.6988 11.3106 15.8065 10.4914 15.6003 9.72255C15.3941 8.95375 14.8909 8.29834 14.2015 7.90052C13.5121 7.50269 12.6928 7.39504 11.924 7.60123C11.1552 7.80743 10.4998 8.31059 10.102 9.00002ZM12.364 9.03752C12.5838 8.98787 12.8119 8.98822 13.0315 9.03854C13.2512 9.08886 13.4567 9.18787 13.6329 9.32825C13.8091 9.46864 13.9516 9.64681 14.0497 9.84962C14.1479 10.0524 14.1993 10.2747 14.2 10.5C14.1999 10.7822 14.1202 11.0587 13.97 11.2977C13.8198 11.5366 13.6052 11.7283 13.3509 11.8508C13.0967 11.9733 12.813 12.0215 12.5325 11.99C12.2521 11.9585 11.9862 11.8485 11.7654 11.6727C11.5447 11.4968 11.378 11.2623 11.2846 10.9959C11.1911 10.7296 11.1748 10.4424 11.2373 10.1671C11.2998 9.89191 11.4387 9.63992 11.638 9.44009C11.8373 9.24027 12.0889 9.10074 12.364 9.03752ZM20.443 14.0025C20.089 14.2875 19.6645 14.517 19.1845 14.685C19.5365 15.0598 19.8076 15.503 19.981 15.987C20.491 15.7785 20.9635 15.507 21.382 15.1725C22.51 14.265 23.2 12.924 23.2 11.25C23.2 10.6533 22.963 10.081 22.541 9.65903C22.119 9.23707 21.5467 9.00002 20.95 9.00002H16.945C17.11 9.46952 17.2 9.97502 17.2 10.5H20.95C21.1489 10.5 21.3397 10.579 21.4803 10.7197C21.621 10.8603 21.7 11.0511 21.7 11.25C21.7 12.4755 21.2125 13.3845 20.443 14.0025ZM16.45 15C17.0467 15 17.619 15.2371 18.041 15.659C18.463 16.081 18.7 16.6533 18.7 17.25C18.7 18.924 18.0115 20.265 16.882 21.1725C15.7705 22.065 14.2795 22.5 12.7 22.5C11.1205 22.5 9.6295 22.065 8.518 21.1725C7.39 20.265 6.7 18.924 6.7 17.25C6.69921 16.9543 6.75687 16.6614 6.86966 16.388C6.98246 16.1147 7.14816 15.8664 7.35725 15.6573C7.56634 15.4482 7.81469 15.2825 8.08803 15.1697C8.36137 15.0569 8.65431 14.9992 8.95 15H16.45ZM16.45 16.5H8.95C8.75109 16.5 8.56033 16.579 8.41967 16.7197C8.27902 16.8603 8.2 17.0511 8.2 17.25C8.2 18.4755 8.6875 19.3845 9.457 20.0025C10.246 20.6355 11.38 21 12.7 21C14.02 21 15.154 20.6355 15.943 20.0025C16.7125 19.3845 17.2 18.4755 17.2 17.25C17.2 17.0511 17.121 16.8603 16.9803 16.7197C16.8397 16.579 16.6489 16.5 16.45 16.5Z" fill="#837B82"/>
//   </svg>`,
//     add: `<svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
//     <path d="M25.5 3.125C19.7202 3.19513 14.1968 5.52233 10.1096 9.60958C6.02233 13.6968 3.69514 19.2202 3.62501 25C3.69514 30.7798 6.02233 36.3032 10.1096 40.3904C14.1968 44.4777 19.7202 46.8049 25.5 46.875C31.2798 46.8049 36.8032 44.4777 40.8904 40.3904C44.9777 36.3032 47.3049 30.7798 47.375 25C47.3049 19.2202 44.9777 13.6968 40.8904 9.60958C36.8032 5.52233 31.2798 3.19513 25.5 3.125ZM38 26.5625H27.0625V37.5H23.9375V26.5625H13V23.4375H23.9375V12.5H27.0625V23.4375H38V26.5625Z" fill="#684440"/>
//   </svg>`,
//     wardrobe: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//     <path d="M6.30001 2C5.76958 2 5.26087 2.21071 4.8858 2.58579C4.51072 2.96086 4.30001 3.46957 4.30001 4V19C4.30001 20.11 5.19001 21 6.30001 21V22H8.30001V21H16.3V22H18.3V21C19.41 21 20.3 20.11 20.3 19V4C20.3 3.46957 20.0893 2.96086 19.7142 2.58579C19.3392 2.21071 18.8304 2 18.3 2H6.30001ZM6.30001 4H11.3V19H6.30001V4ZM13.3 4H18.3V19H13.3V4ZM8.30001 10V13H10.3V10H8.30001ZM14.3 10V13H16.3V10H14.3Z" fill="#837B82"/>
//   </svg>`,
//     profile: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//     <path d="M12.1 12C14.8614 12 17.1 9.76142 17.1 7C17.1 4.23858 14.8614 2 12.1 2C9.33859 2 7.10001 4.23858 7.10001 7C7.10001 9.76142 9.33859 12 12.1 12Z" fill="#684440"/>
//     <path d="M12.1 14.5C7.09002 14.5 3.01002 17.86 3.01002 22C3.01002 22.28 3.23002 22.5 3.51002 22.5H20.69C20.97 22.5 21.19 22.28 21.19 22C21.19 17.86 17.11 14.5 12.1 14.5Z" fill="#684440"/>
//   </svg>`
// };


// export default function TabIcon({ name, color }: TabIconProps) {
//     const iconMarkup = icons[name] ? icons[name].replace('fill="#837B82"', `fill="${color}"`) : '';

//     return (
//         <View>
//           <Div dangerouslySetInnerHTML={{ __html: iconMarkup }} />
//         </View>
//     );
// }

