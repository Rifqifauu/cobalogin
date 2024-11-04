# Aplikasi Login Menggunakan Ionic dan Angular

## Deskripsi
Proyek ini adalah aplikasi berbasis Ionic yang memungkinkan pengguna untuk login dan mengelola sesi mereka. Aplikasi ini menggunakan Angular untuk membangun antarmuka pengguna yang responsif dan intuitif.

## Struktur Proyek

- **AuthenticationService**: Mengelola logika autentikasi, termasuk penyimpanan token dan informasi pengguna.
- **Guards**: Mengamankan rute aplikasi dengan mengecek status autentikasi pengguna.
- **Login Page**: Halaman untuk memasukkan kredensial pengguna.
- **Home Page**: Halaman yang ditampilkan setelah pengguna berhasil login.

## Proses Login

### Langkah-langkah

1. **Input Kredensial**:
   - Pengguna memasukkan username dan password di halaman login.

2. **Mengirim Permintaan Login**:
   - Setelah mengklik tombol "Login", aplikasi akan memanggil metode `login()` di `LoginPage`. Metode ini akan memeriksa apakah username dan password diisi.

3. **Verifikasi Melalui API**:
   - Data kredensial dikirim ke server menggunakan metode `postMethod(data, 'login.php')` di `AuthenticationService`. Ini berfungsi untuk mengirim permintaan POST ke endpoint API yang menangani autentikasi.

4. **Menerima Respon**:
   - Respon dari server akan diterima, yang berisi status login (`status_login`) dan token autentikasi jika berhasil.
   - Jika login berhasil, token dan nama pengguna disimpan menggunakan `saveData(token, user)` untuk mengelola status autentikasi selanjutnya.

5. **Mengatur Status Autentikasi**:
   - Status autentikasi diperbarui dan halaman dialihkan ke halaman Home jika login berhasil. Jika gagal, notifikasi akan ditampilkan untuk memberi tahu pengguna.

## Mengamankan Rute dengan Guards

- **AuthGuard**: Memastikan bahwa hanya pengguna yang telah login yang dapat mengakses halaman tertentu (misalnya, halaman Home).
- **AutoLoginGuard**: Mengarahkan pengguna yang sudah terautentikasi ke halaman Home jika mereka mencoba mengakses halaman login.

## Logout

- Pengguna dapat keluar dari aplikasi dengan mengklik item "Logout" di halaman Home. Metode `logout()` di `AuthenticationService` akan membersihkan data pengguna dan mengarahkan kembali ke halaman login.

## Penerapan Notifikasi

- Menggunakan `AlertController` dari Ionic, aplikasi dapat memberikan notifikasi kepada pengguna jika terjadi kesalahan saat login atau jika tindakan tertentu diperlukan.

## Persyaratan dan Konfigurasi

- Pastikan API backend (`login.php`) berjalan dan dapat diakses dari aplikasi.
- Konfigurasi CORS pada server mungkin diperlukan untuk mengizinkan permintaan dari aplikasi frontend.

## Screenshot
<img width="239" alt="image" src="https://github.com/user-attachments/assets/8aa16988-0ece-400a-8d63-2f90692e92d6"> <img width="233" alt="image" src="https://github.com/user-attachments/assets/029607e7-781a-4605-af7c-a8e6cceff9ad">
 <img width="206" alt="image" src="https://github.com/user-attachments/assets/ab3877ff-0f87-4fa6-9111-41bb7b55fea6">

