import { type Request, type Response, Router } from 'express';
import { inputBarangValidation } from '../validations/barang.validations';
const barangRouter = Router();

barangRouter.get('/barang', (req: Request, res: Response) => {
  res.send('Hello from Barang API');
});

barangRouter.post('/barang', (req: Request, res: Response) => {
  const { error, value } = inputBarangValidation(req.body);
  if (error !== null) {
    return res.status(400).json({
      error: error?.details?.[0]?.message ?? 'Unknown validation error',
      message: 'Input data gagal',
      data: value,
    });
  }

  res.status(201).json({
    message: 'Input data berhasil',
    data: value,
  });
});

export default barangRouter;
