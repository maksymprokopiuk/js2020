// Задача. Розробити клас Baner

// Поля 
// Масив об’єктів ( графічних зображень та посилань на сайти)

// методи 
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// render

const links = [
    {
        link: 'https://www.google.com',
        img: 'picture1.png'
    },
    {
        link: 'https://www.youtube.com',
        img: 'picture2.png'
    },
    {
        link: 'https://news.google.com',
        img: 'picture3.png'
    },
    {
        link: 'https://www.blogger.com',
        img: 'picture4.png'
    },
    {
        link: 'https://podcasts.google.com',
        img: 'picture5.png'
    },
]
class Picture {
    constructor(value) {
        this.link = links[value].link
        this.picture = links[value].img
    }
    render(containerId) {
        const container = document.getElementById(containerId)
        let a = document.createElement('a')
        a.setAttribute('href', this.link)
        a.setAttribute('target', '_blank')
        let img = document.createElement('img')
        img.setAttribute('src', this.picture)
        img.setAttribute('width', '250')
        img.setAttribute('height', '250')
        a.appendChild(img)
        container.appendChild(a)
    }
}
window.onload = function () {
    function random(min = 0, max = 4) {
        return Math.floor(min + Math.random() * (max - min + 1))
    }
    let picture = new Picture(random())
    picture.render('bunner')
}