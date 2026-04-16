function checkSystemHealth(deviceName) {
    if (deviceName === "dobot") {
      return checkDobotConnection()
    }
  
    if (deviceName === "tuya") {
      return checkTuyaConnection()
    }
  
    if (deviceName === "database") {
      return checkDatabaseConnection()
    }
  
    return "Unknown device"
  }