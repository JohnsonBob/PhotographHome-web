import {Language} from '../app/app.language';

export const environment = {
  production: false,
  bit: {
    origin: 'http://johnson.data.i-sanya.com',
    namespace: '',
    static: '',
    uploads: 'main/uploads',
    language: Language.factory,
    page_limit: 20,
    withCredentials: true,
    i18n: ['zh_cn', 'en_us'],
    i18n_switch: [
      {
        i18n: 'zh_cn',
        name: {
          zh_cn: '中文',
          en_us: 'Chinese'
        }
      },
      {
        i18n: 'en_us',
        name: {
          zh_cn: '英文',
          en_us: 'English'
        }
      }
    ]
  }
};
