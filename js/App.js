/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import FixedLabel from "./components/form/fixedLabel";
import InlineLabel from "./components/form/inlineLabel";
import FloatingLabel from "./components/form/floatingLabel";
import PlaceholderLabel from "./components/form/placeholder";
import StackedLabel from "./components/form/stacked";
import BasicListSwipe from "./components/listSwipe/basic-list-swipe";
import MultiListSwipe from "./components/listSwipe/multi-list-swipe";
import NHBasicList from "./components/list/basic-list";
import NHListDivider from "./components/list/list-divider";
import NHListSeparator from "./components/list/list-separator";
import NHListHeader from "./components/list/list-headers";
import NHListIcon from "./components/list/list-icon";
import NHListAvatar from "./components/list/list-avatar";
import NHListThumbnail from "./components/list/list-thumbnail";
import BasicTab from "./components/tab/basicTab";
import ConfigTab from "./components/tab/configTab";
import ScrollableTab from "./components/tab/scrollableTab";
import BasicSegment from "./components/segment/SegmentHeader";
import AdvSegment from "./components/segment/segmentTab";


const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        FixedLabel: { screen: FixedLabel },
        InlineLabel: { screen: InlineLabel },
        FloatingLabel: { screen: FloatingLabel },
        PlaceholderLabel: { screen: PlaceholderLabel },
        StackedLabel: { screen: StackedLabel },
        


        NHBasicList: { screen: NHBasicList },
        NHListDivider: { screen: NHListDivider },
        NHListSeparator: { screen: NHListSeparator },
        NHListHeader: { screen: NHListHeader },
        NHListIcon: { screen: NHListIcon },
        NHListAvatar: { screen: NHListAvatar },
        NHListThumbnail: { screen: NHListThumbnail },

        BasicListSwipe: { screen: BasicListSwipe },
        MultiListSwipe: { screen: MultiListSwipe },

        
        BasicTab: { screen: BasicTab },
        ConfigTab: { screen: ConfigTab },
        ScrollableTab: { screen: ScrollableTab },

        BasicSegment: { screen: BasicSegment },
        AdvSegment: { screen: AdvSegment },

        
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
