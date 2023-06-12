let allAbout = [
    { id: 31, icon: 'about1', title: 'Представительство в суде', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
    { id: 32, icon: 'about2', title: 'Уголовные дела', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
    { id: 33, icon: 'about3', title: 'Гражданские дела', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
    { id: 34, icon: 'about4', title: 'Юридические консультации', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
]

const getAllAbout = (req, res) => {
    if (req.params.id) {
        return res.send(allAbout.find(about => about.id == req.params.id));
    }
    res.send(allAbout);
}

const createAbout = (req, res) => {
    const about = req.body;
    allAbout.push(about)
    res.send(about);
}

const deleteAbout = (req, res) => {
    if (req.params.id) {
        allAbout = allAbout.filter(about => about.id != req.params.id)
    }
    res.send(allAbout)
}

module.exports = {
    getAllAbout,
    createAbout,
    deleteAbout,
}