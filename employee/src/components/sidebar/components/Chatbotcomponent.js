import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Hey Geek!",
    trigger: "1",
  },
  {
    id: "1",
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, how can I help you?",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: 1, label: "View Courses", trigger: "viewCourses" },
      { value: 2, label: "Read Articles", trigger: "readArticles" },
    ],
  },
  {
    id: "viewCourses",
    message: "Great! What topic are you interested in learning?",
    trigger: "viewCoursesOptions",
  },
  {
    id: "viewCoursesOptions",
    user: true,
    trigger: "viewCoursesRecommendation",
  },
  {
    id: "viewCoursesRecommendation",
    message: "Here are some recommended courses for {previousValue}: [Course 1, Course 2]",
    end: true,
  },
  {
    id: "readArticles",
    message: "Sure! What specific topic do you want to read about?",
    trigger: "readArticlesOptions",
  },
  {
    id: "readArticlesOptions",
    user: true,
    trigger: "readArticlesRecommendation",
  },
  {
    id: "readArticlesRecommendation",
    message: "Here are some recommended articles for {previousValue}: [Article 1, Article 2]",
    end: true,
  },
];

const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",

};

const config = {
  botAvatar: "img.png",
  floating: true,
  floatingStyle: {
    right: "10px", // Adjust the right property as needed
    bottom: "10px", // Adjust the bottom property as needed
  },

};

function Chatbotcomponent() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="GeekBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbotcomponent;
