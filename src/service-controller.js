let services = [
    {
        id: 21,
        icon: 'about1',
        title: 'Корпоративное право',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 22,
        icon: 'about4',
        title: 'Уголовно-правовая защита бизнеса',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 23,
        icon: 'about2',
        title: 'Законопроектная работа',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 24,
        icon: 'about3',
        title: 'Правовая защита информации',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 25,
        icon: 'about1',
        title: 'Банковская и финансовая практика',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 26,
        icon: 'about3',
        title: 'Правовой мониторинг',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 27,
        icon: 'about3',
        title: 'Взыскание долгов',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 28,
        icon: 'about4',
        title: 'Личный адвокат',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 29,
        icon: 'about2',
        title: 'Юрист по недвижимости',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 291,
        icon: 'about1',
        title: 'Составление договоров',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 292,
        icon: 'about4',
        title: 'Представительство в суде',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
    {
        id: 293,
        icon: 'about2',
        title: 'Страховой юрист',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
    },
]

const getServices = (req, res) => {
    if (req.params.id) {
        return res.send(services.find(service => service.id == req.params.id));
    }
    res.send(services);
}

const createService = (req, res) => {
    const service = req.body;
    services.push(service)
    res.send(service);
}

const deleteService = (req, res) => {
    if (req.params.id) {
        services = services.filter(service => service.id != req.params.id);
    }
    res.send(services)
}

module.exports = {
    getServices,
    createService,
    deleteService,
}