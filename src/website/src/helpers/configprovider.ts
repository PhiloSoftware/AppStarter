import dotenv from 'dotenv';
dotenv.config();

export default class ConfigProvider {
  public static get CONFIG() {
    return {
      appVersion: '$VUE_APP_VERSION',
    };
  }

  public static getAppVersion() {
    return ConfigProvider.getValue(this.CONFIG.appVersion)
  }

  private static getValue(value: string): string {
    if (value.startsWith('$VUE_APP_')) {
      const envName = value.substr(1);
      const envValue = process.env[envName];
      if (envValue) {
        return envValue;
      } else {
        return ''
      }
    }

    return value;
  }
}