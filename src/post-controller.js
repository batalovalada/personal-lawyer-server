let posts = [
    {
        id: 11,
        title: "Договор оказания услуг",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.",
        date: [
            "2023",
            "01",
            "27",
            "09",
            "37"
        ]
    },
    {
        id: 12,
        title: "Банкротство физических лиц",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.",
        date: [
            "2020",
            "05",
            "09",
            "13",
            "56"
        ]
    },
    {
        id: 13,
        title: "Оспаривание завещания",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.",
        date: [
            "2022",
            "10",
            "17",
            "10",
            "20"
        ]
    },
    {
        id: 14,
        title: "Юридические услуги",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.",
        date: [
            "2023",
            "05",
            "18",
            "16",
            "19"
        ]
    },
    {
        id: 15,
        title: "Возврат денег за услуги",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.",
        date: [
            "2021",
            "04",
            "22",
            "16",
            "40"
        ]
    },
    {
        id: 16,
        title: "Раздел долевой собственности",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.",
        date: [
            "2021",
            "11",
            "12",
            "19",
            "26"
        ]
    }
]

const getPosts = (req, res) => {
    if (req.params.id) {
        return res.send(posts.find(post => post.id == req.params.id));
    }
    res.send(posts);
}

const createPost = (req, res) => {
    const post = req.body;
    posts.push(post)
    res.send(post);
}

const deletePost = (req, res) => {
    if (req.params.id) {
        posts = posts.filter(post => post.id != req.params.id)
    }
    res.send(posts)
}

module.exports = {
    getPosts,
    createPost,
    deletePost,
}