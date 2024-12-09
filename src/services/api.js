export const simulateApiCall = (response, delay = 500) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), delay);
    });
  };
  