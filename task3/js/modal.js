const body = $("body");
const wrapper = $(".wrapper");
const joinButton = $(".join_button");
const overlay = $(".overlay");
const modal = $(".modal");
const closeModalButton = $(".modal_close");
const modalButton = $("#modal_button");
const modalName = $("#modal_name");
const modalEmail = $("#modal_email");
const modalJob = $("#modal_job");
const modalSubscribe = $("#modal_subscribe");

const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
};

const scrollWidth = getScrollbarWidth();

const openModal = () => {
    overlay.addClass("visible");
    modal.addClass("visible");
};

const closeModal = () => {
    overlay.removeClass("visible");
    modal.removeClass("visible");
    setTimeout(() => {
        body.removeClass("modal_open");
        wrapper.css("padding-right", `0`);
    }, 1000);
};

modal.click((e) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
});

joinButton.click((e) => {
    const modalHeightPx = modal.css("height");
    const modalHeight = modalHeightPx.slice(0, modalHeightPx.length - 2);
    const windowHeight = $(window).height();

    if (modalHeight > windowHeight) {
        modal.css(
            "transform",
            `translate(-50%, calc(-50% + ${
                (modalHeight - windowHeight) / 2 + 20
            }px))`
        );
    }

    openModal();
    body.addClass("modal_open");
    wrapper.css("padding-right", `${scrollWidth}px`);
});
overlay.click(closeModal);
closeModalButton.click(closeModal);

// Validation form
let _email;

function validationEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

modalName.focus(() => {
    if (modalName.hasClass("error")) {
        modalName.removeClass("error");
        modalName.val("");
    }
});

modalEmail.focus(() => {
    modalEmail.removeClass("error");
    modalEmail.val(_email);
});

modalButton.click((e) => {
    e.preventDefault();

    if (modalName.val().trim() !== "" && validationEmail(modalEmail.val())) {
        const data = {
            name: modalName.val(),
            email: modalEmail.val(),
            job: modalJob.val() || {},
            subscribe: modalSubscribe.is(":checked"),
        };
        console.log("submit data: ", data);
        modalName.val("");
        modalEmail.val("");
        modalJob.val("");
        modalSubscribe.prop("checked", false);
        closeModal();
    } else {
        if (modalName.val().trim() === "") {
            modalName.addClass("error");
            modalName.val("Введите имя");
        }
        if (!validationEmail(modalEmail.val())) {
            modalEmail.addClass("error");
            _email = modalEmail.val();
            modalEmail.val("Введите корректный email");
        }
    }
});
