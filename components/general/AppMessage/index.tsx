import styles from './styles.module.css';

type AppMessageType = {
  Message?: string,
  backgroundColor?: string
}

const AppMessage = ({ Message, backgroundColor = "green" }: AppMessageType) => {
  return (
    <div
      className={
        Message ? styles.server_message_on : styles.server_message_under
      }
    >
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
        className={
          Message
            ? styles.server_message_child_show
            : styles.server_message_child_hide
        }
      >
        <p
          className={
            Message
              ? styles.server_message_child_para_show
              : styles.server_message_child_para_hide
          }
        >
          {Message}
        </p>
      </div>
    </div>
  );
};

export default AppMessage;
