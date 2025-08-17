import joi from 'joi';
import BarangType from '../types/barang.type';

export const inputBarangValidation = (payload: BarangType): joi.ValidationResult<BarangType> => {
  const schema = joi.object({
    nama: joi.string().trim().required().messages({
      'string.base': 'Nama barang harus berupa teks',
      'string.empty': 'Nama barang tidak boleh kosong',
      'any.required': 'Nama barang harus diisi',
    }),
    jumlah: joi.number().min(1).required().messages({
      'number.base': 'Jumlah barang harus berupa angka',
      'number.min': 'Jumlah barang harus lebih besar dari 0',
      'any.required': 'Jumlah barang harus diisi',
    }),
    harga: joi.number().min(0).required().messages({
      'number.base': 'Harga barang harus berupa angka',
      'number.min': 'Harga barang harus lebih besar atau sama dengan 0',
      'any.required': 'Harga barang harus diisi',
    }),
  });

  return schema.validate(payload);
};
