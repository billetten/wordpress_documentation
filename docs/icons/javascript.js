import data from "./selection.json" assert { type: "json" };

const search = (evt) => {
    const searchvalue = evt.target.value; 
    if(searchvalue && searchvalue !== '') {
        const glyph = document.querySelectorAll('div.glyph');
        [].forEach.call(glyph, function(elm) {
            if(elm.getAttribute('data-name').indexOf(searchvalue) > -1) {
                elm.classList.remove('none')
            } else {
                elm.classList.add('none')
            }
        });
    } else {
        const none = document.querySelectorAll('div.glyph.none');
        if(none.length > 0) {
            [].forEach.call(none, function(elm) {
                elm.classList.remove("none");
            });
        }
    }
}

(function() {
    const { icons } = data;
    // console.log(icons);
    const container = document.getElementById('container');
    console.log(icons);
    [].forEach.call(icons, function(icon) {
        const { name } = icon.properties;
        const iconName = name.split(', ')[0];
        const glyph = document.createElement('div');
        glyph.setAttribute('class', 'glyph');
        glyph.setAttribute('data-name', iconName);

        const pbs = document.createElement('div');
        pbs.setAttribute('class', 'pbs');
        glyph.appendChild(pbs);

        const ico = document.createElement('span');
        ico.setAttribute('class', `icon-${iconName}`);
        pbs.appendChild(ico);

        const mls = document.createElement('span');
        mls.setAttribute('class', 'mls');
        mls.setAttribute('data-type', `<x-icon type="${iconName}"/>`);
        mls.onclick = function(){ 
            var a = this.getAttribute('data-type');
            var textArea = document.createElement("textarea");
            textArea.value = a;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                var elm = this;
                elm.classList.toggle(msg);
                setTimeout(function() {
                    elm.classList.toggle(msg);
                }, 1000);
            } catch (err) {
                console.log('Oops, unable to copy');
            }
            document.body.removeChild(textArea);
        }
        pbs.appendChild(mls);
        container.appendChild(glyph);
    })

    // Searchbar
    const searchbar = document.getElementById('searchbar');
    if(searchbar) searchbar.addEventListener('keyup', search);
})();
