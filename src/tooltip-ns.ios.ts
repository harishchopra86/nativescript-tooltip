import { Options } from "./tooltip-ns.common";
import { Frame } from "tns-core-modules/ui/frame";
import { Color } from "tns-core-modules/color";

declare const UIEdgeInsetsMake;

export class TooltipNs {
  backgroundColorDefault = "white";
  tooltip: SexyTooltip;

  public show(options: Options) {
    let self = Frame.topmost().ios.controller;
    let nsAttributed = NSAttributedString.alloc().initWithString(
      options.message
    );

    this.tooltip = SexyTooltip.alloc().initWithAttributedStringSizedToViewWithPaddingAndMargin(
      nsAttributed,
      self.view,
      UIEdgeInsetsMake(
        options.ios.padding[0],
        options.ios.padding[1],
        options.ios.padding[2],
        options.ios.padding[3]
      ),
      UIEdgeInsetsMake(
        options.ios.margin[0],
        options.ios.margin[1],
        options.ios.margin[2],
        options.ios.margin[3]
      )
    );

    if (options.ios.shadow) {
      this.tooltip.hasShadow = true;
    }

    this.tooltip.color = new Color(options.ios.color).ios;
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
    if (this.tooltip != undefined) {
      this.tooltip.dismiss();
    }
  }
}
