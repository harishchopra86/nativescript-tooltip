import { Component, OnInit } from "@angular/core";
import { TooltipNs } from "nativescript-tooltip-ns";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    constructor(private page: Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onShow() {
        var tooltip = new TooltipNs();
        var button = this.page.getViewById("label");

        tooltip.show({
            message: "Hola mundo recuerdamen",
            view: button,
            ios: {
                hasInterval: false,
                shadow: true,
                cornerRadius: 0,
            },
            android: {
                backgroundColor: "white",
                position: "bottom",
                style: "CustomToolTipLayoutStyle",
            },
        });
    }
}
