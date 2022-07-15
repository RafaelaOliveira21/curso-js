class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + " já ligado.")
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + " já desligado.")
            return;
        }

        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.desligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.');
    }
}

const s1 = new Smartphone('Xiaomi', 'Galáxia', 'Redmi Note 10S');
console.log(s1);

const t1 = new Tablet('Tab7', true);
t1.ligar();
// console.log(t1.ligado);