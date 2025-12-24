

const { contextBridge, ipcRenderer } = require("electron");



contextBridge.exposeInMainWorld("assistantAPI", {

  
  send: (channel, data) => {
    const validChannels = ["ui-message", "log"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },

  
  receive: (channel, func) => {
    const validChannels = ["ai-response", "system"];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },

  
  platform: () => process.platform,

  
});
