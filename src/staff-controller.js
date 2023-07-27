let allStaff = [
    {
        id: 41,
        img: "https://placehold.it/130",
        title: "Иван Иванов",
        job: "Партнёр",
        email: "ivan.ivanov@gmail.com"
    },
    {
        id: 42,
        img: "https://placehold.it/130",
        title: "Светлана Сергеева",
        job: "Партнёр",
        email: "svetlana_serg@gmail.com"
    },
    {
        id: 43,
        img: "https://placehold.it/130",
        title: "Пётр Смирнов",
        job: "Руководитель группы корпоративного права",
        email: "petr.smirnov@gmail.com"
    },
    {
        id: 44,
        img: "https://placehold.it/130",
        title: "Александр Иванов",
        job: "Ведущий эксперт",
        email: "al_ivanov@gmail.com"
    },
    {
        id: 45,
        img: "https://placehold.it/130",
        title: "Мария Смирнова",
        job: "Партнёр",
        email: "mariasmirnova@gmail.com"
    },
    {
        id: 46,
        img: "https://placehold.it/130",
        title: "Татьяна Ильина",
        job: "Старший партнёр",
        email: "tatiana_ilina@gmail.com"
    },
    {
        id: 47,
        img: "https://placehold.it/130",
        title: "Роман Фёдоров",
        job: "Управляющий партнёр",
        email: "roman.fedorov@gmail.com"
    },
    {
        id: 48,
        img: "https://placehold.it/130",
        title: "Александр Иванов",
        job: "Ведущий эксперт",
        email: "al_ivanov@gmail.com"
    },
    {
        id: 49,
        img: "https://placehold.it/130",
        title: "Мария Смирнова",
        job: "Партнёр",
        email: "mariasmirnova@gmail.com"
    },
    {
        id: 491,
        img: "https://placehold.it/130",
        title: "Татьяна Ильина",
        job: "Старший партнёр",
        email: "tatiana_ilina@gmail.com"
    },
    {
        id: 492,
        img: "https://placehold.it/130",
        title: "Роман Фёдоров",
        job: "Управляющий партнёр",
        email: "roman.fedorov@gmail.com"
    }
]

const getStaff = (req, res) => {
    if (req.params.id) {
        return res.send(allStaff.find(staff => staff.id == req.params.id));
    }
    res.send(allStaff);
}

const createStaff = (req, res) => {
    const staff = req.body;
    allStaff.push(staff)
    res.send(staff);
}

const deleteStaff = (req, res) => {
    if (req.params.id) {
        allStaff = allStaff.filter(staff => staff.id != req.params.id);
    }
    res.send(allStaff)
}

module.exports = {
    getStaff,
    createStaff,
    deleteStaff,
}