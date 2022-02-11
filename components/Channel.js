import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { query } from "firebase/firestore";
import { limit } from "firebase/firestore";
import ChatMessage from "../components/ChatMessage";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
// import { db } from "../firebase/config";

const Channel = ({ user = null, db = null }) => {
  //   const [messages, messagesLoading, messagesError] = useCollection(
  const [messages, messagesLoading, messagesError] = useCollectionData(
    query(collection(db, "messages"), orderBy("createdAt"), limit(25)),
    {}
  );
  return (
    <div>
      <h1>Loaded</h1>
      {messagesError && <strong>Error: {JSON.stringify(messagesError)}</strong>}
      {messagesLoading && <span>Loading...</span>}
      <ul>
        {messages &&
          messages.map((message) => (
            // <React.Fragment key={message.id}>
            //   {JSON.stringify(message.data())},{" "}
            // </React.Fragment>
            <ChatMessage key={message.id} id={message.id} text={message.text} />
          ))}
      </ul>
    </div>
  );
};

export default Channel;
