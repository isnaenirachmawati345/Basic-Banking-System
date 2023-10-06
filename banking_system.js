const saldo = 5000000;

class BankAccount {
    constructor(initBalance) {//enkapsulasi
        this.balance = initBalance;//private
    }

   deposit() {
        return new Promise((resolve, reject) => {
            const handleInput = () => {
                const value = window.prompt(`Silahkan Masukkan Nominal Depositmu Disini`);
                const valueDeposit = Number(value);
                if (!isNaN(valueDeposit) && valueDeposit > 0) {
                    setTimeout(() => {
                        this.balance += valueDeposit;
                        resolve(valueDeposit);
                    }, 2000);
                } else if (isNaN(valueDeposit)) {
                    const errorMessage = `Masukan harus angka`;
                    alert(errorMessage);
                    handleInput(); // Prompt ulang jika input tidak valid
                } else if (valueDeposit <= 0) {
                    const errorMessage = `Angka yang dimasukan tidak boleh kurang dari sama dengan nol`;
                    alert(errorMessage);
                    handleInput(); // Prompt ulang jika input tidak valid
                } else {
                    const errorMessage = `Silahkan Masukkan Angka Dengan Benar`;
                    alert(errorMessage);
                    reject(errorMessage);
                }
            };

            handleInput();
        });
    }

    withdraw() {
        return new Promise((resolve, reject) => {
            const handleInput = () => {
                const value = window.prompt(`Silahkan Masukkan Nominal Penarikanmu Disini`);
                const valueWithdraw = Number(value);
                if (!isNaN(valueWithdraw) && valueWithdraw > 0 && valueWithdraw <= this.balance) {
                    setTimeout(() => {
                        this.balance -= valueWithdraw;
                        resolve(valueWithdraw);
                    }, 2000);
                }else if (isNaN(valueWithdraw)) {
                    const errorMessage = `Masukan harus angka`;
                    alert(errorMessage);
                    handleInput(); // Prompt ulang jika input tidak valid
                } else if (valueWithdraw <= 0) {
                    const errorMessage = `Angka yang dimasukan tidak boleh kurang dari sama dengan nol`;
                    alert(errorMessage);
                    handleInput(); // Prompt ulang jika input tidak valid
                } else {
                    const errorMessage = `Jumlah penarikan tidak valid atau saldo tidak mencukupi`;
                    alert(errorMessage);
                    reject(errorMessage);
                }
            };

            handleInput();
        });
    }

    async performDeposit() {
        try {
            let isDone = false;

            while (!isDone) {
                const valueDeposit = await this.deposit();
                alert(`Anda Telah Memasukkan Nominal Deposit Sebesar: ${valueDeposit} USD`);
                alert(`Saldo telah update Sebesar: ${this.balance} USD`);
                updateTampilanSaldo(this.balance);
                updateTampilanDeposit(valueDeposit);
                const tambahDeposit = prompt(`Apakah ingin menambahkan saldo lagi? (Y/N)`).toUpperCase();
                if (tambahDeposit !== `Y`) {
                    isDone = true;
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    async performWithdraw() {
        try {
            let isDone = false;

            while (!isDone) {
                const valueWithdraw = await this.withdraw();
                alert(`Anda Telah Melakukan Penarikan Sebesar: ${valueWithdraw} USD`);
                alert(`Saldo telah update Sebesar: ${this.balance} USD`);
                updateTampilanSaldo(this.balance);
                updateTampilanWithdraw(valueWithdraw);
                const tambahWithdraw = prompt(`Apakah ingin melakukan penarikan lagi? (Y/N)`).toUpperCase();
                if (tambahWithdraw !== `Y`) {
                    isDone = true;
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
}

function updateTampilanSaldo(balance) {
    document.getElementById(`saldo`).textContent = balance;
}

const account = new BankAccount(saldo);

function updateTampilanDeposit(valueDeposit) {
    document.getElementById(`depositUpdate`).textContent = valueDeposit;
}

function updateTampilanWithdraw(valueWithdraw) {
    document.getElementById(`witdhrawUpdate`).textContent = valueWithdraw;
}

// Menggunakan promise untuk mengelola proses asinkronus
function depositWithPromise() {
    account.performDeposit()
        .then(valueDeposit => {
            console.log(`Deposit: ${valueDeposit} USD`);
            console.log(`New Balance: ${account.balance} USD`);
            updateTampilanSaldo(account.balance);
        })
        .catch(error => {
            console.error(error);
        });
}

function withdrawWithPromise() {
    account.performWithdraw()
        .then(valueWithdraw => {
            console.log(`Withdraw: ${valueWithdraw} USD`);
            console.log(`New Balance: ${account.balance} USD`);
            updateTampilanSaldo(account.balance);
        })
        .catch(error => {
            console.error(error);
        });
}


