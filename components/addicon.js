// import React from 'react';
// import Svg, { Rect, Path, Circle } from 'react-native-svg';

// const AddIcon = () => (
//     <Svg width="51" height="50" viewBox="0 0 51 50" fill="none">
//         <Rect x="5.5" y="5" width="40" height="40" rx="9" fill= "#00321F" />
//         <Path d="M12.5 22C12.5 12 12.5 12 22.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
//         <Path d="M22.5 38C12.5 38 12.5 38 12.5 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
//         <Path d="M38.5 28C38.5 38 38.5 38 28.5 38" stroke="white" strokeWidth="2" strokeLinecap="round" />
//         <Path d="M28.5 12C38.5 12 38.5 12 38.5 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
//         <Circle cx="25.5" cy="25" r="5" fill="white" />
//     </Svg>
// );

// export default AddIcon;

import React from 'react';
import { View } from 'react-native';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

const AddIcon = () => (
    <View style={{ paddingTop: 15 }}>
        <Svg width="51" height="50" viewBox="0 0 51 50" fill="none">
            <Rect x="5.5" y="5" width="40" height="40" rx="9" fill= "#00321F" />
            <Path d="M12.5 22C12.5 12 12.5 12 22.5 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <Path d="M22.5 38C12.5 38 12.5 38 12.5 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <Path d="M38.5 28C38.5 38 38.5 38 28.5 38" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <Path d="M28.5 12C38.5 12 38.5 12 38.5 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <Circle cx="25.5" cy="25" r="5" fill="white" />
        </Svg>
    </View>
);

export default AddIcon;