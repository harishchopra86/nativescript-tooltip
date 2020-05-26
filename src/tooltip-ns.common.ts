export interface Options {
  message: string;
  view: any;
  ios?: {
    hasInterval?: boolean;
    interval?: number;
    shadow?: boolean;
    cornerRadius?: number;
  };
  android?: {
    position?: ToolTipPosition;
    viewType?: ToolTipViewType;
    duration?: number;
    fadeDuration?: number;
    width?: number;
    delay?: number;
    hideArrow?: boolean;
    backgroundColor?: string;
    textColor?: string;
    style?: string;
  };
}

export declare type ToolTipPosition =
  | "left"
  | "up"
  | "right"
  | "down"
  | "top"
  | "bottom";
export declare type ToolTipViewType = "native";
