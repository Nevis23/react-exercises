import { useState } from "react";
import { sendFeedback } from "../services/api";

const FeedbackForm = () => {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [responseId, setResponseId] = useState<number | null>(null);

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const data = await sendFeedback(title, message);

      setResponseId(data.id);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div>
        <h2>Thank you for your feedback!</h2>
        <p>Your message was saved with ID: {responseId}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submitFeedback}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;