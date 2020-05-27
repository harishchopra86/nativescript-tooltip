export interface Options {
  message: string;
  view: any;
  ios?: {
    hasInterval?: boolean;
    interval?: number;
    shadow?: boolean;
    cornerRadius?: number;
    padding: Array<any>;
    margin: Array<any>;
    color: string;
  };
  android?: {
    position?: ToolTipPosition;
    viewType?: ToolTipViewType;
    duration?: number;
    fadeDuration?: number;
    width?: number;
    delay?: number;
    hideArrow?: boolean;
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
