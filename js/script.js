
    function showModalWin() {

        var darkLayer = document.createElement('div');
        darkLayer.id = 'shadow';
        document.body.appendChild(darkLayer);

        var modalWin = document.getElementById('messenger-modal');
        modalWin.style.display = 'block';

        darkLayer.onclick = function () {
            darkLayer.parentNode.removeChild(darkLayer);
            modalWin.style.display = 'none';
            return false;
        };
    }
    function insertAfter(elem, refElem) {
        var parent = refElem.parentNode;
        var next = refElem.nextSibling;
        if (next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    }

    function showModalWinMembers() {

        var darkLayer = document.createElement('div');
        darkLayer.id = 'inside-shadow';
        var chat = document.getElementById('messenger-chat');

        insertAfter(darkLayer, chat );

        var modalWin = document.getElementById('modal-members');
        modalWin.style.display = 'block';

        darkLayer.onclick = function () {
            darkLayer.parentNode.removeChild(darkLayer);
            modalWin.style.display = 'none';
            return false;
        };
    }

    function showSideBar() {

        var darkLayer = document.createElement('div');
        darkLayer.id = 'inside-shadow';
        var chat = document.getElementById('messenger-chat');

        insertAfter(darkLayer, chat );

        var modalWin = document.getElementById('messenger-navbar');
        modalWin.style.transform = 'translateX(0)';

        darkLayer.onclick = function () {
            darkLayer.parentNode.removeChild(darkLayer);
            modalWin.style.transform = 'translate(-100%)';
            return false;
        };
    }