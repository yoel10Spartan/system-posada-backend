import { sendMail } from "../config/email.config.js";
import Posada from "../models/posada.model.js";
import path from "path";
import fs from "fs";
import excel from 'excel4node';

const create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            ok: false,
            message: "Content can not be empty!"
        });
    }
    
    const posada = new Posada({
        name: req.body.name,
        lastname1: req.body.lastname1,
        lastname2: req.body.lastname2,
        contributor: req.body.contributor,
        email: req.body.email,
        numberPhone: req.body.numberPhone,
        numberPhoneFijo: req.body.numberPhoneFijo,
        mark: req.body.mark,
        position: req.body.position,
        area: req.body.area,
        location: req.body.location,
        years: req.body.years,
    });
    
    Posada.create(posada, (err, data) => {
        if (err)
            res.status(500).send({
                ok: false,
                message:
                    err.message || "Some error occurred while creating the attende"
            });
        else {
            sendMail(data)
            res.send(data);
        }
    });
};

const findAll = (req, res) => {
    Posada.getAll('', (err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving attendes."
            });
        else res.send(data);
    });
};

const generateExcel = (req, res) => {
    Posada.getAll('', (err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving attendes."
            });
        else {
            var workbook = new excel.Workbook();
            var worksheet = workbook.addWorksheet('book1');
            let j = 2;
            worksheet.cell(1,1).string('ID')
            worksheet.cell(1,2).string('NOMBRE')
            worksheet.cell(1,3).string('APELLIDO PATERNO')
            worksheet.cell(1,4).string('APELLIDO MATERNO')
            worksheet.cell(1,5).string('No COLABORADOR')
            worksheet.cell(1,6).string('CORREO ELECTRONICO')
            worksheet.cell(1,7).string('CONFIRMA TU CORREO ELECTRONICO')
            worksheet.cell(1,8).string('TELEFONO MOVIL')
            worksheet.cell(1,9).string('TELEFONO FIJO')
            worksheet.cell(1,10).string('MARCA')
            worksheet.cell(1,11).string('PUESTO')
            worksheet.cell(1,12).string('SUCURSAL O AREA')
            worksheet.cell(1,13).string('UBICACION')
            worksheet.cell(1,14).string('CUANTOS ANIOS LLEVAS EN LA EMPRESA?')
            for(const i of data){
                worksheet.cell(j,1).number(i.id)
                worksheet.cell(j,2).string(i.name)
                worksheet.cell(j,3).string(i.lastname1)
                worksheet.cell(j,4).string(i.lastname2)
                worksheet.cell(j,5).string(i.contributor)
                worksheet.cell(j,6).string(i.email)
                worksheet.cell(j,7).string(i.email)
                worksheet.cell(j,8).string(i.numberPhone.toString())
                worksheet.cell(j,9).string(i.numberPhoneFijo.toString())
                worksheet.cell(j,10).string(i.mark)
                worksheet.cell(j,11).string(i.position)
                worksheet.cell(j,12).string(i.area)
                worksheet.cell(j,13).string(i.location)
                worksheet.cell(j,14).string(i.years.toString())
                j+=1;
            }

            workbook.write('./public/media/data.xlsx');

            res.download('./public/media/data.xlsx');
        }
    });
};

export {
    create,
    findAll,
    generateExcel
}