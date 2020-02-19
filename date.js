function getTimes() {
    const etmol = new Date();
    const shilshom = new Date();

    return {
        today: Date.now(),
        etmol: etmol.setDate(etmol.getDate() - 1),
        shilshom: shilshom.setDate(shilshom.getDate() - 2),
    };
}