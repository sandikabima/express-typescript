// Mengimpor express beserta tipe-tipe yang diperlukan dari package 'express'
import express, { Application, Request, Response } from 'express';
// Mengimpor dan menginisialisasi konfigurasi environment variable dari file .env
import 'dotenv/config';

// Membuat instance aplikasi express
const app: Application = express();
// Mengambil port dari environment variable PORT, jika tidak ada maka default ke 3000
const port: number = parseInt(process.env.PORT ?? '3000', 10);

// Mendefinisikan route GET pada path root ('/')
app.get('/', (req: Request, res: Response) => {
  // Mengirim response 'hello world' ke client
  res.send('hello world');
});

// Menjalankan server pada port yang sudah ditentukan
app.listen(port, () => {
  // Menampilkan pesan ke console ketika server berhasil berjalan
  console.log(`server running at port ${port}`);
});
