class Rectangle {
    // constructor(a, b) {
    //     this.a = a
    //     this.b = b
    // }
    // Знаходження площі
    getArea() {
        return this.valueA * this.valueB
    }
    // Знаходження периметру
    getPerimiter() {
        return (this.valueA + this.valueB) * 2
    }
    // ToString
    toString() {
        return (`a=${this.valueA} b=${this.valueB} Площа=${this.getArea()} Периметр=${this.getPerimiter()}`);
    }
    onClick() {
        this.valueA = parseFloat(this.inputA.value)
        this.valueB = parseFloat(this.inputB.value)
        this.render('container')
    }
    render(contID) {
        // input
        this.container = document.getElementById(contID)
        this.container.innerHTML = ''
        this.inputA = document.createElement('input')
        this.inputA.setAttribute('type', 'number')
        this.inputA.setAttribute('placeholder', 'A')
        this.container.appendChild(this.inputA)
        
        let br = document.createElement('br')
        this.container.appendChild(br)
        
        this.inputB = document.createElement('input')
        this.inputB.setAttribute('type', 'number')
        this.inputB.setAttribute('placeholder', 'B')
        this.container.appendChild(this.inputB)
        
        br = document.createElement('br')
        this.container.appendChild(br)

        this.btn = document.createElement('input')
        this.btn.setAttribute('type', 'button')
        this.btn.value = 'Розрахувати'
        this.btn.onclick = this.onClick.bind(this)
        this.container.appendChild(this.btn)
        
        if (this.valueA > 0 && this.valueB > 0) {
            br = document.createElement('br')
            this.container.appendChild(br)
            // span
            this.spanArea = document.createElement('span')
            this.spanArea.innerText = `Площа - ${this.getArea()}`
            this.container.appendChild(this.spanArea)
            
            br = document.createElement('br')
            this.container.appendChild(br)
            // span
            this.spanVolume = document.createElement('span')
            this.spanVolume.innerText = `Периметр - ${this.getPerimiter()}`
            this.container.appendChild(this.spanVolume)

            br = document.createElement('br')
            this.container.appendChild(br)
            // span
            this.spanString = document.createElement('span')
            this.spanString.innerText = `ToString - ${this.toString()}`
            this.container.appendChild(this.spanString)
        }
    }
}
class Paralelepiped extends Rectangle {
    onClick() {
        this.valueA = parseFloat(this.inputA.value) // взяти від матері
        this.valueB = parseFloat(this.inputB.value) // взяти від матері
        this.valueH = parseFloat(this.inputH.value)
        this.render('container2')
    }
    render(contID) {
        super.render(contID)

        this.inputH = document.createElement('input')
        this.inputH.setAttribute('type', 'number')
        this.inputH.setAttribute('placeholder', 'H')
        this.btn.before(this.inputH)
        let br = document.createElement('br')
        this.inputH.after(br)
    }
    // Знаходження площі поверхні
    getSurfaceArea() {
        return ((this.valueA * this.valueB) + (this.valueA * this.valueH) + (this.valueB * this.valueH)) * 2
    }
    // Знаходження об'єму
    getVolume() {
        return this.valueA * this.valueB * this.valueH
    }
    // ToString
    toString() {
        return `a=${this.valueA} b=${this.valueB} h=${this.valueH} площа=${this.getSurfaceArea()} об'єм=${this.getVolume()}`
    }
}
window.onload = function() {
    let rect = new Rectangle()
    rect.render('container')
    
    let para = new Paralelepiped()
    para.render('container2')
}