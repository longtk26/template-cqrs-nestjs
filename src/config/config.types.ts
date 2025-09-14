import { ConfigAppService } from './config.service';

export type TAppConfig = ReturnType<ConfigAppService['getAppConfig']>;
