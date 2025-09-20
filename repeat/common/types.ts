import { RepeatMode, RepeatConfig, RepeatEndMode } from 'francis-types-repeat';

export interface Repeat {
  /** 重复开始日期 */
  repeatStartDate: string;

  /** 重复模式 */
  repeatMode: RepeatMode;

  /** 重复配置 */
  repeatConfig?: RepeatConfig;

  /** 重复结束模式 */
  repeatEndMode: RepeatEndMode;

  /** 重复结束日期 */
  repeatEndDate?: string;

  /** 重复次数 */
  repeatTimes?: number;
}
