module.exports.config = {
  name: "out",
  version: "1.0.0",
  permission: 2, // Only admin-level users
  prefix: true,
  credits: "Joy",
  description: "Bot leave the group",
  category: "system",
  usages: ".out",
  cooldowns: 3
};

module.exports.run = async function ({ api, event }) {
  const threadID = event.threadID;
  const senderID = event.senderID;

  // Optional confirmation message
  api.sendMessage("👋 বস আমার খুব থাকার ইচ্ছা ছিল🥹.. প্লিজ আবার এড দিয় বস😅🙏", threadID, () => {
    api.removeUserFromGroup(api.getCurrentUserID(), threadID); // Remove bot
  });
};
