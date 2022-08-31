export const getAllMessages = () => {
  return fetch("/api/contact/requests", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createMessage = (userData) => {
  return fetch("api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
