import { StyleProp, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { styles } from "../styles";

 interface Props {
    children: any;
    localStyles?: StyleProp<ViewStyle>;
}
const RowCompo = (props: Props) => {
    const {children, localStyles} = props;
return(
<View style={[

    localStyles,
    {
        borderRadius:200,
    },

    styles.wer,
    {
        
        flexDirection:'row',
        paddingHorizontal:4,
        paddingVertical:6,
        borderRadius:300,
        bottom:-2,
        marginLeft:-3
    },
    
]}>
    {children}
</View>
 );
};

export default RowCompo;