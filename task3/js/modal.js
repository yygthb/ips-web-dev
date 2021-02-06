const joinButton = $(".join_button");
const overlay = $(".overlay");
const modal = $(".modal");
const closeModalButton = $(".modal_close");
const modalButton = $("#modal_button");
const modalName = $("#modal_name");
const modalEmail = $("#modal_email");
const modalJob = $("#modal_job");
const modalSubscribe = $("#modal_subscribe");

const openModal = () => {
    overlay.addClass("visible");
    modal.addClass("visible");
};

const closeModal = () => {
    overlay.removeClass("visible");
    modal.removeClass("visible");
};

modal.click((e) => {
    e.stopPropagation();
});

joinButton.click(openModal);
overlay.click(closeModal);
closeModalButton.click(closeModal);

// Validation form
let _email;

function validationEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

modalName.focus(() => {
    modalName.removeClass("error");
    modalName.val("");
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
