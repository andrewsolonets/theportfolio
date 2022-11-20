import axios from "axios";

interface IProps {
  honeyBotFlaggedSpam: string | undefined;
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
}

export async function notifyViaTelegramBot({
  honeyBotFlaggedSpam,
  name,
  email,
  message,
}: IProps) {
  const { VITE_TELEGRAM_BOT_API_TOKEN, VITE_TELEGRAM_BOT_CHAT_ID } = import.meta
    .env;

  try {
    const data = JSON.stringify(
      {
        honeyBotFlaggedSpam,
        name,
        email,
        message,
      },
      null,
      2
    );
    const text = `Contact form message: ${data}`;
    await axios({
      url: `https://api.telegram.org/bot${VITE_TELEGRAM_BOT_API_TOKEN}/sendMessage`,
      method: "POST",
      data: {
        chat_id: VITE_TELEGRAM_BOT_CHAT_ID,
        text,
      },
    });
    return { successful: true };
  } catch (error: any) {
    let message;
    if (error.response) {
      message = `Telegram server responded with non 2xx code: ${error.response.data}`;
    } else if (error.request) {
      message = `No Telegram response received: ${error.request}`;
    } else {
      message = `Error setting up telegram response: ${error.message}`;
    }
    return { successful: false, error: message };
  }
}
