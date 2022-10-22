import Posada from "../models/posada.model.js";

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
        else res.send(data);
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

// const saveField = (req, res) => {
//     for(const i of req.files){
//         let oldName = i.path;
//         let newName = i.path + '_' + req.query.id + '_' + path.parse(i.originalname).ext;
//         fs.renameSync(oldName, newName);
//     }
//     res.send({
//         err: 0,
//         ok: true
//     });
// }

// const generateExcel = (req, res) => {
//     Attende.getAll('', (err, data) => {
//         if (err)
//             res.status(500).send({
//                 message:
//                 err.message || "Some error occurred while retrieving attendes."
//             });
//         else {
//             var workbook = new excel.Workbook();
//             var worksheet = workbook.addWorksheet('book1');
//             let j = 2;
//             worksheet.cell(1,1).string('ID')
//             worksheet.cell(1,2).string('NOMBRE')
//             worksheet.cell(1,3).string('APELLIDO')
//             worksheet.cell(1,4).string('TELEFONO')
//             worksheet.cell(1,5).string('EMAIL')
//             worksheet.cell(1,6).string('NIVEL')
//             for(const i of data){
//                 worksheet.cell(j,1).number(i.id)
//                 worksheet.cell(j,2).string(i.name)
//                 worksheet.cell(j,3).string(i.lastname)
//                 worksheet.cell(j,4).number(i.phone)
//                 worksheet.cell(j,5).string(i.email)
//                 worksheet.cell(j,6).string(getLevel(i.level))
//                 j+=1;
//             }

//             workbook.write('./public/file/data.xlsx');

//             res.download('./public/file/data.xlsx');
//         }
//     });
// };

export {
    create,
    findAll,
}