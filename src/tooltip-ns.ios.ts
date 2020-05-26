import { Options } from "./tooltip-ns.common";
import { Frame } from "tns-core-modules/ui/frame";

declare const UIEdgeInsetsMake;

export class TooltipNs {
  tooltip: SexyTooltip;

  public show(options: Options) {
    let self = Frame.topmost().ios.controller;
    let nsAttributed = NSAttributedString.alloc().initWithString(
      options.message
    );

    this.tooltip = SexyTooltip.alloc().initWithAttributedStringSizedToViewWithPaddingAndMargin(
      nsAttributed,
      self.view,
      UIEdgeInsetsMake(10, 5, 10, 5),
      UIEdgeInsetsMake(10, 10, 10, 10)
    );

    if (options.ios.shadow) {
      this.tooltip.hasShadow = true;
    }

    this.tooltip.cornerRadius = options.ios.cornerRadius;

    this.tooltip.presentFromViewInViewWithMarginAnimated(
      options.view.ios,
      self.view,
      10,
      true
    );

    if (options.ios.hasInterval) {
      this.tooltip.dismissInTimeInterval(options.ios.interval);
    }
  }

  public dismiss() {
    this.tooltip.dismiss();
  }
}
