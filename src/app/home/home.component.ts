import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { PropertyEditor } from "nativescript-ui-dataform";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { android as androidApplication } from "tns-core-modules/application";

class TestForm {
    test: any
    test2: any

    constructor(test: any, test2: any) {
        this.test = test
        this.test2 = test2
    }
}

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    form = new TestForm([1], {arr: []})

    constructor() {
    }

    ngOnInit(): void {
    }

    public editorNeedsView(args) {
        if (androidApplication) {
            const androidEditorView = new android.widget.Button(args.context);
            args.view = androidEditorView;
        } else {
            const iosEditorView = UIButton.buttonWithType(UIButtonType.System);
            args.view = iosEditorView;
        }
    }

    public editorHasToApplyValue(args) {
        console.log('[test] apply value', args.value, typeof args.value, Array.isArray(args.value))
        try {
            console.log('[test]', args.value.indexOf(1))
        }
        catch (e){
            console.error('[test] failed', e)
        }
    }

    public editorHasToApplyValue2(args) {
        console.log('[test2] apply value', args.value, typeof args.value)
        try {
            console.log('[test2]', args.value.arr.indexOf(1))
        }
        catch (e){
            console.error('[test2] failed', e)
        }
    }

    public editorNeedsValue(args) {
    }

    public updateEditorValue(editorView, value) {
    }
}
