export const sendFeedback = async (title: string, message: string) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body: message,
      userId: 1,
    }),
  });

  return response.json();
};