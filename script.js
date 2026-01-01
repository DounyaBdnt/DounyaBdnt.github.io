const projects = {
    1: {
        title: "Projet 1",
        desc: "Description détaillée du projet 1",
        img: "https://via.placeholder.com/400"
    },
    2: {
        title: "Projet 2",
        desc: "Description détaillée du projet 2",
        img: "https://via.placeholder.com/400"
    },
    3: {
        title: "Projet 3",
        desc: "Description détaillée du projet 3",
        img: "https://via.placeholder.com/400"
    },
    4: {
        title: "Projet 4",
        desc: "Description détaillée du projet 4",
        img: "https://via.placeholder.com/400"
    },
    5: {
        title: "Projet 5",
        desc: "Description détaillée du projet 5",
        img: "https://via.placeholder.com/400"
    },
    6: {
        title: "Projet 6",
        desc: "Description détaillée du projet 6",
        img: "https://via.placeholder.com/400"
    }
};

function openModal(id) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-title").innerText = projects[id].title;
    document.getElementById("modal-desc").innerText = projects[id].desc;
    document.getElementById("modal-img").src = projects[id].img;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
