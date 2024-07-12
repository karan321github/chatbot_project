import Header from "../components/Header";
import SideWrapper from "../components/SideWrapper";
import ChatBody from "../components/ChatBody";
import styles from "./Chat.module.css";
import { selectIsLoggedIn } from "../store/reducers/userSlice";

const Chat = () => {
  const isLoggedIn = selectIsLoggedIn;
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        {isLoggedIn && <SideWrapper />}
        <ChatBody />
      </div>
    </div>
  );
};

export default Chat;
