import * as React from "react";
import { Avatar, Button, makeStyles } from "@fluentui/react-components";
import { Chat, ChatMessage, ChatMyMessage } from "@fluentui-contrib/react-chat";

export const useChatMyMessageStyles = makeStyles({
  root: {
    gridTemplateColumns: "1fr auto",
    gridTemplateAreas: `
        ". actions"
        "body body"
      `,
    gridGap: "0",
    columnGap: "0",
    paddingTop: "0",
    marginLeft: "0",
  },
});

export const ChatList: React.FC = () => {
  const myMessageStyles = useChatMyMessageStyles();
  return (
    <div>
      <button> start here</button>

      <Chat>
        <ChatMessage
          avatar={
            <Avatar name="Ashley McCarthy" badge={{ status: "available" }} />
          }
        >
          Hello I am Ashley
        </ChatMessage>
        <ChatMyMessage
          actions={<Button>Actions Menu</Button>}
          root={{ className: myMessageStyles.root }}
        >
          This is <a href="#">my homepage</a>. Some text goes here to
          demonstrate reading of longer runs of texts. Now follows{" "}
          <a href="#">another link</a> which is also a dummy link.
        </ChatMyMessage>
        <ChatMessage
          avatar={
            <Avatar name="Ashley McCarthy" badge={{ status: "available" }} />
          }
        >
          Hello I am Ashley
        </ChatMessage>
        <ChatMyMessage
          actions={<Button>Actions Menu</Button>}
          root={{ className: myMessageStyles.root }}
        >
          This is <a href="#">my homepage</a>. Some text goes here to
          demonstrate reading of longer runs of texts. Now follows{" "}
          <a href="#">another link</a> which is also a dummy link.
        </ChatMyMessage>
      </Chat>
    </div>
  );
};

export const Default = () => <ChatList />;
