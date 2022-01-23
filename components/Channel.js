import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { query } from "firebase/firestore";
// import { db } from "../firebase/config";

const Channel = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([]);
  useEffect(async () => {
    if (db) {
      const q = query(collection(db, "messages"), orderBy("createdAt"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(data);
    }
  }, [db]);

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
};

export default Channel;
