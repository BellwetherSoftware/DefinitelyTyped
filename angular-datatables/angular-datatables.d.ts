//Type definitions for angular-datatables

declare module angular.dataTables {

    // not directly implemented, but ensures that constructed class implements $get
    interface IDTDefaultOptions {

        setLanguageSource(languageSource: string): IDTDefaultOptions
        setLanguage(language:{}): IDTDefaultOptions;
        setDisplayLength(displayLength: number): IDTDefaultOptions;
        setBootstrapOptions(bootstrapOptions: {}): IDTDefaultOptions;
    }

    interface IDTOptionsBuilder{
        newOptions():IDTOptions;
        fromFnPromise(any):IDTOptions;
    }

    interface IDTOptions {

        withOption(key:string, value:any): IDTOptions;
        withSource(ajaxSource:string): IDTOptions;
        withDataProp(ajaxDataProp:string): IDTOptions;
        withFnServerData(fn:(source:string, data:any, fnCallback: () => {}, settings: any) => void): IDTOptions;
        withPaginationType(paginationType:string): IDTOptions;
        withLanguage(language:{}):IDTOptions;
        withDisplayLength(displayLength:number):IDTOptions;
        withBootstrap():IDTOptions;
        withBootstrapOptions(bootstrapOptions: {}): IDTOptions;
        withColReorder(): IDTOptions;
        reloadData(): IDTOptions;
        withTableTools(url:any): IDTOptions;
        withTableToolsButtons(url:any): IDTOptions;
    }

    interface IDTColumnBuilder {
        newColumn(data:any, label?:string):IDTColumn;
    }

    interface IDTColumn{
        withOption(key:string, value:any):IDTColumn;
        withTitle(title:string):IDTColumn;
        withClass(cssClass:string):IDTColumn;
        notVisible():IDTColumn;
        notSortable():IDTColumn;
        renderWith(render:any):IDTColumn;
    }

    interface IDTColumnDefBuilder{
        newColumnDef(targets:any):IDTColumnDef;
    }

    interface IDTColumnDef{
        withOption(key:string, value:any):IDTColumnDef;
        withTitle(title:string):IDTColumnDef;
        withClass(cssClass:string):IDTColumnDef;
        notVisible():IDTColumnDef;
        notSortable():IDTColumnDef;
        renderWith(render:any):IDTColumnDef;
    }

    interface IDTInstances{
        reloadData();
        changeData(data:any);
        rerender();
        getLast():angular.IPromise<IDTInstances>;
        getList():angular.IPromise<IDTInstancesArray>;
    }

    interface IDTInstancesArray{
        [index: string]: IDTInstances;
    }
}