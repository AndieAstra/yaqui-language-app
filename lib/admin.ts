export // Placeholder for custom authentication logic

const mockAuth = () => {
  // TODO: Replace with your own auth mechanism to get the user's ID
  return { userId: "mockUserId123" }; // Example userId
};

export const getIsAdmin = () => {
  const { userId } = mockAuth(); // Replace with custom auth logic
  const adminIds = ["adminUserId1", "adminUserId2"]; // TODO: Replace with your own admin ID logic

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
