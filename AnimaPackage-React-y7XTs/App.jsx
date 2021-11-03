
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./components/Splash";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Journal from "./components/Journal";
import Login from "./components/Login";
import Inbox from "./components/Inbox";
import Community from "./components/Community";
import Onboarding1 from "./components/Onboarding1";
import JournalEntries from "./components/JournalEntries";
import Onboarding3 from "./components/Onboarding3";
import FriendList from "./components/FriendList";
import DailyCheckUp from "./components/DailyCheckUp";
import Onboarding2 from "./components/Onboarding2";
import HealthIndex from "./components/HealthIndex";
import SettingsV1 from "./components/SettingsV1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|splash)">
          <Splash
            untitledDrawing31="/img/untitled-drawing--3--1@1x.png"
            titleLinesProps={splashData.titleLinesProps}
            styleTypeFillProps={splashData.styleTypeFillProps}
            styleTypeOutlineProps={splashData.styleTypeOutlineProps}
          />
        </Route>
        <Route path="/sign-up">
          <SignUp
            lifesaversBust2="/img/lifesavers---bust-2@2x.png"
            titleLines2Props={signUpData.titleLines2Props}
            inputTypeTextBoxStateDefaultProps={signUpData.inputTypeTextBoxStateDefaultProps}
            inputTypeTextBoxStateDefault2Props={signUpData.inputTypeTextBoxStateDefault2Props}
            styleTypeFillProps={signUpData.styleTypeFillProps}
            bottomLinkProps={signUpData.bottomLinkProps}
          />
        </Route>
        <Route path="/home">
          <Home
            hiKristin="Hi, Kristin!"
            lifesaversAvatar="/img/lifesavers-avatar@2x.png"
            horizontalCardProps={homeData.horizontalCardProps}
            horizontalCard2Props={homeData.horizontalCard2Props}
            horizontalCard3Props={homeData.horizontalCard3Props}
            horizontalCard4Props={homeData.horizontalCard4Props}
          />
        </Route>
        <Route path="/journal">
          <Journal
            journal="Journal"
            screenShot20211017At5211="/img/screen-shot-2021-10-17-at-5-21-1@2x.png"
            notificationCardProps={journalData.notificationCardProps}
            navbarSimpleProps={journalData.navbarSimpleProps}
          />
        </Route>
        <Route path="/login">
          <Login
            lifesaversBust2="/img/lifesavers---bust-2@2x.png"
            titleLines2Props={loginData.titleLines2Props}
            inputTypeTextBoxStateDefaultProps={loginData.inputTypeTextBoxStateDefaultProps}
            styleTypeFillProps={loginData.styleTypeFillProps}
            bottomLinkProps={loginData.bottomLinkProps}
          />
        </Route>
        <Route path="/inbox">
          <Inbox
            inbox="Inbox"
            screenShot20211017At5212="/img/screen-shot-2021-10-17-at-5-21-1@2x.png"
            inputType="text"
            inputPlaceholder="Search"
            cardListProps={inboxData.cardListProps}
            navbarSimpleProps={inboxData.navbarSimpleProps}
          />
        </Route>
        <Route path="/community">
          <Community
            feedFromCommunity="Feed from Community"
            inputType="text"
            inputPlaceholder="Search"
            cardListProps={communityData.cardListProps}
            navbarSimpleProps={communityData.navbarSimpleProps}
          />
        </Route>
        <Route path="/onboarding-1">
          <Onboarding1
            lifesaversOnline1="/img/lifesavers---online-1@2x.png"
            askAndShare="Ask and share"
            text12="With the community tab, you can ask questions anonymously or unanonymously to our diverse and open-minded community, as well as join conversations to share your own thoughts."
            skipTour="Skip Tour"
          />
        </Route>
        <Route path="/journal-entries">
          <JournalEntries
            pastEntries="Past Entries"
            image4="/img/image-4@2x.png"
            notificationCard2Props={journalEntriesData.notificationCard2Props}
            notificationCard22Props={journalEntriesData.notificationCard22Props}
            notificationCard23Props={journalEntriesData.notificationCard23Props}
            notificationCard24Props={journalEntriesData.notificationCard24Props}
            notificationCard25Props={journalEntriesData.notificationCard25Props}
          />
        </Route>
        <Route path="/onboarding-3">
          <Onboarding3
            lifesaversVideocall1="/img/lifesavers---videocall-1@2x.png"
            messageAndConnect="Message and connect"
            text18="With the inbox tab, you can draw or write letters of reassurance to your loved ones, as well as see how they’re doing with their statuses and journal entries if they choose to share any of them."
            skipTour="Skip Tour"
            indicatorsProps={onboarding3Data.indicatorsProps}
          />
        </Route>
        <Route path="/friend-list">
          <FriendList
            friendList="Friend List"
            image4="/img/image-4@2x.png"
            notificationCard3Props={friendListData.notificationCard3Props}
            notificationCard32Props={friendListData.notificationCard32Props}
            notificationCard33Props={friendListData.notificationCard33Props}
            notificationCard34Props={friendListData.notificationCard34Props}
            notificationCard35Props={friendListData.notificationCard35Props}
          />
        </Route>
        <Route path="/daily-check-up">
          <DailyCheckUp
            today="How are you feeling today?"
            screenShot20211017At4501="/img/screen-shot-2021-10-17-at-4-50-1@2x.png"
            horizontalCardProps={dailyCheckUpData.horizontalCardProps}
            noteCardProps={dailyCheckUpData.noteCardProps}
            noteCard2Props={dailyCheckUpData.noteCard2Props}
          />
        </Route>
        <Route path="/onboarding-2">
          <Onboarding2
            lifesaversSitting1="/img/lifesavers---sitting-1@2x.png"
            text24="Express your feelings"
            text25="With the journal tab, you can write about your day or whatever you want to express your feelings. With this, we can provide you with your  mental health index and a way for self-reflection."
            skipTour="Skip Tour"
            indicatorsProps={onboarding2Data.indicatorsProps}
          />
        </Route>
        <Route path="/health-index">
          <HealthIndex
            today="Daily"
            image1="/img/image-1@2x.png"
            horizontalCardProps={healthIndexData.horizontalCardProps}
            noteCardProps={healthIndexData.noteCardProps}
            noteCard2Props={healthIndexData.noteCard2Props}
            noteCard3Props={healthIndexData.noteCard3Props}
          />
        </Route>
        <Route path="/settings-v1">
          <SettingsV1 {...settingsV1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const titleLinesData = {
    welcomeBack: "",
    login: "",
};

const styleTypeFillData = {
    children: "Sign Up",
};

const styleTypeOutlineData = {
    children: "Sign In",
};

const splashData = {
    titleLinesProps: titleLinesData,
    styleTypeFillProps: styleTypeFillData,
    styleTypeOutlineProps: styleTypeOutlineData,
};

const titleLines2Data = {
    children: "Sign Up",
};

const inputTypeTextBoxStateDefaultData = {
    inputType: "text",
    inputPlaceholder: "Full Name",
};

const inputTypeTextBoxStateDefault2Data = {
    inputType: "email",
    inputPlaceholder: "Email",
    className: "email-text-box",
};

const styleTypeFill2Data = {
    children: "Sign Up",
    className: "x831492",
};

const bottomLinkData = {
    dontHaveAnAccoun: "Already have an account?",
    signUp: "Sign In",
};

const signUpData = {
    titleLines2Props: titleLines2Data,
    inputTypeTextBoxStateDefaultProps: inputTypeTextBoxStateDefaultData,
    inputTypeTextBoxStateDefault2Props: inputTypeTextBoxStateDefault2Data,
    styleTypeFillProps: styleTypeFill2Data,
    bottomLinkProps: bottomLinkData,
};

const horizontalCardData = {
    yourDietChart: "Daily Check-Up",
    lifesaversSerumBag: "/img/lifesavers-serum-bag@2x.png",
};

const horizontalCard2Data = {
    yourDietChart: "Health Index",
    lifesaversSerumBag: "/img/lifesavers-electrocardiogram@2x.png",
};

const horizontalCard3Data = {
    yourDietChart: "Mediation",
    lifesaversSerumBag: "/img/lifesavers-bust@2x.png",
    className: "horizontal-card-2",
};

const horizontalCard4Data = {
    yourDietChart: "Resources",
    lifesaversSerumBag: "/img/lifesavers-stethoscope@2x.png",
    className: "horizontal-card-3",
};

const homeData = {
    horizontalCardProps: horizontalCardData,
    horizontalCard2Props: horizontalCard2Data,
    horizontalCard3Props: horizontalCard3Data,
    horizontalCard4Props: horizontalCard4Data,
};

const notificationCardData = {
    inputType: "text",
    inputPlaceholder: "Start writing here...",
};

const navbarSimple2Data = {
    className: "navbar-simple-1",
};

const journalData = {
    notificationCardProps: notificationCardData,
    navbarSimpleProps: navbarSimple2Data,
};

const titleLines22Data = {
    children: "Sign In",
};

const inputTypeTextBoxStateDefault3Data = {
    inputType: "email",
    inputPlaceholder: "Email",
};

const styleTypeFill3Data = {
    children: "Sign In",
    className: "x831413",
};

const bottomLink2Data = {
    dontHaveAnAccoun: "Don’t have an account?",
    signUp: "Sign Up",
    className: "bottom-link-1",
};

const loginData = {
    titleLines2Props: titleLines22Data,
    inputTypeTextBoxStateDefaultProps: inputTypeTextBoxStateDefault3Data,
    styleTypeFillProps: styleTypeFill3Data,
    bottomLinkProps: bottomLink2Data,
};

const notificationCard2Data = {
    notificationTitle: "Letter #1",
};

const notificationCard22Data = {
    notificationTitle: "Letter #2",
    className: "notification-card-2",
};

const notificationCard23Data = {
    notificationTitle: "Letter #3",
    className: "notification-card-3",
};

const notificationCard24Data = {
    notificationTitle: "Letter #4",
    className: "notification-card-4",
};

const cardListData = {
    notificationCard2Props: notificationCard2Data,
    notificationCard22Props: notificationCard22Data,
    notificationCard23Props: notificationCard23Data,
    notificationCard24Props: notificationCard24Data,
};

const navbarSimple3Data = {
    className: "navbar-simple-2",
};

const inboxData = {
    cardListProps: cardListData,
    navbarSimpleProps: navbarSimple3Data,
};

const notificationCard25Data = {
    notificationTitle: "Question #1",
};

const notificationCard26Data = {
    notificationTitle: "Question #2",
    className: "notification-card-6",
};

const notificationCard27Data = {
    notificationTitle: "Question #3",
    className: "notification-card-7",
};

const notificationCard28Data = {
    notificationTitle: "Question #4",
    className: "notification-card-8",
};

const cardList2Data = {
    className: "card-list-2",
    notificationCard2Props: notificationCard25Data,
    notificationCard22Props: notificationCard26Data,
    notificationCard23Props: notificationCard27Data,
    notificationCard24Props: notificationCard28Data,
};

const navbarSimple4Data = {
    className: "navbar-simple-3",
};

const communityData = {
    cardListProps: cardList2Data,
    navbarSimpleProps: navbarSimple4Data,
};

const notificationCard29Data = {
    notificationTitle: "Journal Entry #1",
    className: "notification-card-9",
};

const notificationCard210Data = {
    notificationTitle: "Journal Entry #2",
    className: "notification-card-10",
};

const notificationCard211Data = {
    notificationTitle: "Journal Entry #3",
    className: "notification-card-11",
};

const notificationCard212Data = {
    notificationTitle: "Journal Entry #4",
    className: "notification-card-12",
};

const notificationCard213Data = {
    notificationTitle: "Journal Entry #5",
    className: "notification-card-13",
};

const journalEntriesData = {
    pastEntries: "Past Entries",
    image4: "/img/image-4@2x.png",
    notificationCard2Props: notificationCard29Data,
    notificationCard22Props: notificationCard210Data,
    notificationCard23Props: notificationCard211Data,
    notificationCard24Props: notificationCard212Data,
    notificationCard25Props: notificationCard213Data,
};

const indicators2Data = {
    className: "indicators-1",
};

const onboarding3Data = {
    indicatorsProps: indicators2Data,
};

const notificationCard3Data = {
    notificationTitle: "Friend #1",
};

const notificationCard32Data = {
    notificationTitle: "Friend #2",
    className: "notification-card-15",
};

const notificationCard33Data = {
    notificationTitle: "Friend #3",
    className: "notification-card-16",
};

const notificationCard34Data = {
    notificationTitle: "Friend #4",
    className: "notification-card-17",
};

const notificationCard35Data = {
    notificationTitle: "Friend #5",
    className: "notification-card-18",
};

const friendListData = {
    friendList: "Friend List",
    image4: "/img/image-4@2x.png",
    notificationCard3Props: notificationCard3Data,
    notificationCard32Props: notificationCard32Data,
    notificationCard33Props: notificationCard33Data,
    notificationCard34Props: notificationCard34Data,
    notificationCard35Props: notificationCard35Data,
};

const horizontalCard5Data = {
    yourDietChart: "Daily Check-Up",
    lifesaversSerumBag: "/img/lifesavers-serum-bag-1@2x.png",
    className: "horizontal-card-4",
};

const noteCardData = {
    children: "Take a survey",
};

const noteCard2Data = {
    children: "Write a journal entry",
};

const dailyCheckUpData = {
    horizontalCardProps: horizontalCard5Data,
    noteCardProps: noteCardData,
    noteCard2Props: noteCard2Data,
};

const indicators3Data = {
    className: "indicators-2",
};

const onboarding2Data = {
    indicatorsProps: indicators3Data,
};

const horizontalCard6Data = {
    yourDietChart: "Health Index",
    lifesaversSerumBag: "/img/lifesavers-electrocardiogram-1@2x.png",
    className: "horizontal-card-5",
};

const noteCard3Data = {
    children: "Weekly",
};

const noteCard4Data = {
    children: "Monthly",
};

const noteCard5Data = {
    children: "Yearly",
};

const healthIndexData = {
    horizontalCardProps: horizontalCard6Data,
    noteCardProps: noteCard3Data,
    noteCard2Props: noteCard4Data,
    noteCard3Props: noteCard5Data,
};

const settingRowData = {
    account: "Account",
};

const settingRow2Data = {
    account: "Notification",
    className: "setting-row-1",
};

const settingRow3Data = {
    account: "Appearance",
    className: "setting-row-2",
};

const settingRow4Data = {
    account: "Privacy & Security",
    className: "setting-row-3",
};

const settingRow5Data = {
    account: "Sound",
    className: "setting-row-4",
};

const settingRow6Data = {
    account: "Language",
    className: "setting-row-5",
};

const navbarSimple5Data = {
    className: "navbar-simple-4",
};

const settingsV1Data = {
    settings: "Settings",
    lifesaversAvatar: "/img/lifesavers-avatar-1@2x.png",
    name: "Kristin Hennessy",
    text26: "kristin.hennessy@mail.com",
    settingRowProps: settingRowData,
    settingRow2Props: settingRow2Data,
    settingRow3Props: settingRow3Data,
    settingRow4Props: settingRow4Data,
    settingRow5Props: settingRow5Data,
    settingRow6Props: settingRow6Data,
    navbarSimpleProps: navbarSimple5Data,
};

