class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Kendaraan: " + this.nama);
    }
}

class KendaraanBensin extends Kendaraan {
    isiBensin(liter) {
        console.log(this.nama + " mengisi bensin " + liter + " liter.");
    }
}

class KendaraanListrik extends Kendaraan {
    isiDaya(kwh) {
        console.log(this.nama + " mengisi daya " + kwh + " kWh.");
    }
}

class MobilBensin extends KendaraanBensin {}

class MobilListrik extends KendaraanListrik {}

class MotorBensin extends KendaraanBensin {}

function isiSemuaBensin(daftar) {
    daftar.forEach((x) => x.isiBensin(20));
}

function isiSemuaDaya(daftar) {
    daftar.forEach((x) => x.isiDaya(40));
}

const Avanza_3262 = new MobilBensin("Avanza_3262");
const Ioniq_3262 = new MobilListrik("Ioniq_3262");
const Beat_3262 = new MotorBensin("Beat_3262");

Avanza_3262.info();
Ioniq_3262.info();
Beat_3262.info();

isiSemuaBensin([Avanza_3262, Beat_3262]);
isiSemuaDaya([Ioniq_3262]);