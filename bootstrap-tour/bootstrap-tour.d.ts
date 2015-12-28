declare class Tour{
    constructor(tourOptions: ITourOptions);
    addSteps(steps:Array<any>);
    addStep(step:{});
    init();
    start(start?:boolean);
    restart();
    end();
    next();
    prev();
    goTo(i:number);
    pause();
    resume();
    ended();
    getStep(i:number);
    getCurrentStep();
    getCurrentStep();
}

interface ITourOptions{
    name?:string,
    steps?:Array<any>,
    container?:string,
    keyboard?: boolean,
    storage?: any,
    debug?: boolean,
    backdrop?: boolean,
    backdropContainer?:string,
    backdropPadding?:number,
    redirect?: any,
    orphan?: boolean,
    duration?: boolean,
    delay?: boolean,
    basePath?: string,
    template?: string,
    afterGetState?: (key, value) => {},
    afterSetState?: (key, value)  => {},
    afterRemoveState?: (key, value)  => {},
    onStart?: (tour)  => any,
    onEnd?: (tour)  => any,
    onShow?: (tour)  => any,
    onShown?: (tour)  => any,
    onHide?: (tour)  => any,
    onHidden?: (tour)  => any,
    onNext?: (tour)  => any,
    onPrev?: (tour)  => any,
    onPause?: (tour, duration)  => any,
    onResume?: (tour, duration)  => any,
    onRedirectError?: (tour)  => any
}
