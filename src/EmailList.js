import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import Section from "./Section";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => 
          (<EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

        <EmailRow
          title="Twitch"
          subject="Hey fellow!!"
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow!! Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
          description="This is a test"
          time="1am"
        />
      </div>
    </div>
  );
}

export default EmailList;
