export interface BoxOption {
    title?: string;
    subtitle?: string;
    text?: string;
    actions?: Action[];
    avatar?: Avatar;
    class?: string;
    bodyClass?: string;
    actionClass?: string;
    titleClass?: string;
    subtitleClass?: string;
    textClass?: string;
}



export interface Action {
    url?: string;
    title?: string;
    icon?: string;
    class?: string;
}

export interface Avatar {
    class?: string;
    image?: string;
    icon?: string;
    iconSize?: string;
}
