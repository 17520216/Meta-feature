import CONFIG, { ENVIRONMENT_DATA } from "web.config";

export const ConfigLive = {
  /**
   * 
   * @param {true} showCredit 
   */
  consoleHandle: async (showCredit = true) => {
    if (typeof window == "undefined") return;

    const ConsoleHelper = (await import('plugins/utils/ConsoleHelper')).default;

    if (IsProd()) {
      console.clear();
      if (showCredit) ConsoleHelper.showCredit();
      ConsoleHelper.disable();
    }

    ConsoleHelper.handleError();
  },
};

export const IsDev = function () {
  return CONFIG.environment == ENVIRONMENT_DATA.DEVELOPMENT;
};

export const IsStag = function () {
  return CONFIG.environment == ENVIRONMENT_DATA.STAGING;
};

export const IsProd = function () {
  return CONFIG.environment == ENVIRONMENT_DATA.PRODUCTION;
};


export const IsCanary = function () {
  return CONFIG.environment == ENVIRONMENT_DATA.CANARY;
};

