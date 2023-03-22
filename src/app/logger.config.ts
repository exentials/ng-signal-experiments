import { CustomAppender } from "./domains/shared/util-common/custom-appender";
import { DefaultLogAppender, defaultLogFormatFn, LoggerConfig, LogLevel } from "./domains/shared/util-logger";

export const loggerConfig: Partial<LoggerConfig> = {
    level: LogLevel.DEBUG,
    appenders: [CustomAppender, DefaultLogAppender],
    formatter: defaultLogFormatFn,
};
