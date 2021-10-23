function configureScript(codeId, linkId, keysContainer) {

    let defaults = {
        back: 'Digit1',
        enableDisable: 'Comma',
        lists: {
            up: 'ArrowUp',
            down: 'ArrowDown',
            prev: 'ArrowLeft',
            next: 'ArrowRight',
        },
        search: {
            resetBid: 'Backquote',
            decMinBid: 'ArrowLeft',
            incMinBid: 'ArrowRight',
            decMaxBid: 'End',
            incMaxBid: 'Home',
            decMinBuy: 'Delete',
            incMinBuy: 'PageDown',
            decMaxBuy: 'ArrowDown',
            incMaxBuy: 'ArrowUp',
            search: 'Digit2',
            botModeMinBid: 'BracketRight',
            botModeMinBuy: 'BracketLeft',
            enableBotMode: false
        },
        results: {
            bid: 'Digit4',
            buy: 'Digit3',
            transfer: 'KeyR',
            club: 'KeyC',
            pressEnter: true,
            autoBuy: false,
            preventBack: false,
            sell: 'KeyQ',
            decBid: 'Delete',
            incBid: 'PageDown'
        }
    };

    if (keysContainer) {
        $(".keys", keysContainer).each(function () {
            if (this.type == "text") {
                this.value = get(this.dataset.key, defaults);
                this.keyCode = get(this.dataset.key, defaults);
                $(this).keydown(function (e) {
                    this.value = e.code;
                    this.keyCode = e.code;
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    generateLink();
                    return false;
                });
            }
            else if (this.type == "checkbox") {
                this.checked = get(this.dataset.key, defaults);

                $(this).change(function () {
                    generateLink();
                });
            }
        });
    }

    function generateLink() {
        let code = atob(window.paletools[codeId]);
        if (keysContainer) {
            $(".keys", keysContainer).each(function () {
                if (this.type == "text") {
                    set(this.dataset.key, defaults, this.keyCode);
                }
                else if (this.type == "checkbox") {
                    set(this.dataset.key, defaults, this.checked);
                }
            });
            code = code.replace('/*BUTTONS*/', JSON.stringify(defaults));
            console.log(code);
        }
        code = btoa(code);
        var href = "eval(atob('" + code + "'));";
        $(linkId)[0].href = "javascript:" + href;
    }

    generateLink();
}

function get(path, obj = self, separator = '.') {
    var properties = Array.isArray(path) ? path : path.split(separator)
    return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

function set(path, target, value) {
    var parts = path.split('.');
    let index = 0;
    for (; index < parts.length - 1; index++) {
        target = target[parts[index]];
    }

    target[parts[index]] = value;
}


function displayLang() {
    if (!location.hash || location.hash == '#es') {
        $('[lang="es"]').show();
        $('[lang="en"]').hide();
    } else if (location.hash == '#en') {
        $('[lang="en"]').show();
        $('[lang="es"]').hide();
    }
}

window.onhashchange = displayLang;


displayLang();