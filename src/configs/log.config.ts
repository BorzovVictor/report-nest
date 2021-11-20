type LevelType = 'debug' | 'warning' | 'error';

export class LogConfig {
  path: string;
  level: LevelType;
}
