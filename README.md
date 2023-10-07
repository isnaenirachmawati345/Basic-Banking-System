# Basic-Banking-System
Tugas Week 2 

1. Inisialisasi variabel saldo dengan nilai 5,000,000.

2. Buat kelas BankAccount dengan konstruktor yang menerima parameter initBalance:
   - Inisialisasi atribut balance dengan nilai initBalance.

3. Buat metode deposit di dalam kelas BankAccount:
   - Buat sebuah promise:
     - Tampilkan pesan untuk memasukkan nominal deposit.
     - Ambil nilai yang dimasukkan oleh pengguna dan konversi ke tipe Number.
     - Jika nilai yang dimasukkan adalah angka positif:
       - Tunggu selama 2 detik (gunakan setTimeout) untuk mensimulasikan proses deposit.
       - Tambahkan nilai deposit ke atribut balance.
       - Resolve promise dengan nilai deposit.
     - Jika nilai yang dimasukkan bukan angka, tampilkan pesan kesalahan dan ulangi proses.
     - Jika nilai yang dimasukkan kurang dari atau sama dengan 0, tampilkan pesan kesalahan dan ulangi proses.
     - Jika ada kesalahan lain, tampilkan pesan kesalahan dan reject promise.

4. Buat metode withdraw di dalam kelas BankAccount:
   - Buat sebuah promise:
     - Tampilkan pesan untuk memasukkan nominal penarikan.
     - Ambil nilai yang dimasukkan oleh pengguna dan konversi ke tipe Number.
     - Jika nilai yang dimasukkan adalah angka positif dan kurang dari atau sama dengan saldo saat ini:
       - Tunggu selama 2 detik (gunakan setTimeout) untuk mensimulasikan proses penarikan.
       - Kurangkan nilai penarikan dari atribut balance.
       - Resolve promise dengan nilai penarikan.
     - Jika nilai yang dimasukkan bukan angka, tampilkan pesan kesalahan dan ulangi proses.
     - Jika nilai yang dimasukkan kurang dari atau sama dengan 0 atau melebihi saldo, tampilkan pesan kesalahan dan ulangi proses.
     - Jika ada kesalahan lain, tampilkan pesan kesalahan dan reject promise.

5. Buat metode async performDeposit di dalam kelas BankAccount:
   - Async deposit() dalam sebuah loop:
     - Tampilkan pesan bahwa deposit telah berhasil dan saldo telah diperbarui.
     - Tampilkan saldo dan tampilkan deposit yang baru saja dilakukan.
     - Tampilkan pesan untuk menambahkan saldo lagi (Y/N).
     - Jika pengguna tidak ingin menambahkan saldo lagi (jawaban bukan Y), keluar dari loop.

6. Buat metode async performWithdraw di dalam kelas BankAccount:
   - Async withdraw() dalam sebuah loop:
     - Tampilkan pesan bahwa penarikan telah berhasil dan saldo telah diperbarui.
     - Tampilkan saldo dan tampilkan penarikan yang baru saja dilakukan.
     - Tampilkan pesan untuk melakukan penarikan lagi (Y/N).
     - Jika pengguna tidak ingin melakukan penarikan lagi (jawaban bukan Y), keluar dari loop.

7. Buat fungsi updateTampilanSaldo untuk memperbarui tampilan saldo di halaman web.

8. Buat instance baru dari kelas BankAccount dengan saldo awal dari variabel saldo.

9. Buat fungsi updateTampilanDeposit untuk memperbarui tampilan deposit di halaman web.

10. Buat fungsi updateTampilanWithdraw untuk memperbarui tampilan penarikan di halaman web.

11. Buat fungsi depositWithPromise untuk memulai proses deposit dengan menggunakan promise:
    - Jalankan performDeposit() dari instance account.
    - Eksekusi hasil promise dengan menampilkan deposit dan saldo baru, serta memperbarui tampilan saldo.

12. Buat fungsi withdrawWithPromise untuk memulai proses penarikan dengan menggunakan promise:
    - Jalankan performWithdraw() dari instance account.
    - Eksekusi hasil promise dengan menampilkan penarikan dan saldo baru, serta memperbarui tampilan saldo.
