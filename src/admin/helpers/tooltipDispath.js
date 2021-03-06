export const good = (t, text) => {
    t.setColTooltip("green");
    t.showTooltip(text);

    setTimeout(() => {
        t.closeTooltip();
    }, 2500);
};

export const bad = (t, error) => {    
    t.setColTooltip("red");
    t.showTooltip(error);

    setTimeout(() => {
        t.closeTooltip();
    }, 3000);
};