const isMenuOpened = (state: {menu: {isOpen: boolean, data: any}}) => {
    const { menu} = state;
    return menu.isOpen;
};